// metadata
export const version = "0.8.10"
export const title = "Time Lock"
export const description = "Time Lock"

const html = `<p><code>TimeLock</code> is a contract that publishes a transaction to be executed in the future.
After a mimimum waiting period, the transaction can be executed.</p>
<p><code>TimeLock</code>s are commonly used in DAOs.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TimeLock</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">NotOwnerError</span>(<span class="hljs-params"></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">AlreadyQueuedError</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> txId</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">TimestampNotInRangeError</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> blockTimestamp, <span class="hljs-keyword">uint</span> timestamp</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">NotQueuedError</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> txId</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">TimestampNotPassedError</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> blockTimestmap, <span class="hljs-keyword">uint</span> timestamp</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">TimestampExpiredError</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> blockTimestamp, <span class="hljs-keyword">uint</span> expiresAt</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">TxFailedError</span>(<span class="hljs-params"></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Queue</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">indexed</span> txId,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> target,
        <span class="hljs-keyword">uint</span> value,
        <span class="hljs-keyword">string</span> func,
        <span class="hljs-keyword">bytes</span> data,
        <span class="hljs-keyword">uint</span> timestamp
    </span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Execute</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">indexed</span> txId,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> target,
        <span class="hljs-keyword">uint</span> value,
        <span class="hljs-keyword">string</span> func,
        <span class="hljs-keyword">bytes</span> data,
        <span class="hljs-keyword">uint</span> timestamp
    </span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Cancel</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">indexed</span> txId</span>)</span>;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MIN_DELAY <span class="hljs-operator">=</span> <span class="hljs-number">10</span>; <span class="hljs-comment">// seconds</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MAX_DELAY <span class="hljs-operator">=</span> <span class="hljs-number">1000</span>; <span class="hljs-comment">// seconds</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> GRACE_PERIOD <span class="hljs-operator">=</span> <span class="hljs-number">1000</span>; <span class="hljs-comment">// seconds</span>

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;
    <span class="hljs-comment">// tx id =&gt; queued</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">bytes32</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>) <span class="hljs-keyword">public</span> queued;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">onlyOwner</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">if</span> (<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">!</span><span class="hljs-operator">=</span> owner) {
            <span class="hljs-keyword">revert</span> NotOwnerError();
        }
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">receive</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTxId</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _target,
        <span class="hljs-keyword">uint</span> _value,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">calldata</span> _func,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> _data,
        <span class="hljs-keyword">uint</span> _timestamp
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(_target, _value, _func, _data, _timestamp));
    }

    <span class="hljs-comment">/**
     * @param _target Address of contract or account to call
     * @param _value Amount of ETH to send
     * @param _func Function signature, for example "foo(address,uint256)"
     * @param _data ABI encoded data send.
     * @param _timestamp Timestamp after which the transaction can be executed.
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">queue</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _target,
        <span class="hljs-keyword">uint</span> _value,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">calldata</span> _func,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> _data,
        <span class="hljs-keyword">uint</span> _timestamp
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">onlyOwner</span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> txId</span>) </span>{
        txId <span class="hljs-operator">=</span> getTxId(_target, _value, _func, _data, _timestamp);
        <span class="hljs-keyword">if</span> (queued[txId]) {
            <span class="hljs-keyword">revert</span> AlreadyQueuedError(txId);
        }
        <span class="hljs-comment">// ---|------------|---------------|-------</span>
        <span class="hljs-comment">//  block    block + min     block + max</span>
        <span class="hljs-keyword">if</span> (
            _timestamp <span class="hljs-operator">&lt;</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> MIN_DELAY <span class="hljs-operator">|</span><span class="hljs-operator">|</span>
            _timestamp <span class="hljs-operator">&gt;</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> MAX_DELAY
        ) {
            <span class="hljs-keyword">revert</span> TimestampNotInRangeError(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>, _timestamp);
        }

        queued[txId] <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;

        <span class="hljs-keyword">emit</span> Queue(txId, _target, _value, _func, _data, _timestamp);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">execute</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _target,
        <span class="hljs-keyword">uint</span> _value,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">calldata</span> _func,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> _data,
        <span class="hljs-keyword">uint</span> _timestamp
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title">onlyOwner</span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">bytes32</span> txId <span class="hljs-operator">=</span> getTxId(_target, _value, _func, _data, _timestamp);
        <span class="hljs-keyword">if</span> (<span class="hljs-operator">!</span>queued[txId]) {
            <span class="hljs-keyword">revert</span> NotQueuedError(txId);
        }
        <span class="hljs-comment">// ----|-------------------|-------</span>
        <span class="hljs-comment">//  timestamp    timestamp + grace period</span>
        <span class="hljs-keyword">if</span> (<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&lt;</span> _timestamp) {
            <span class="hljs-keyword">revert</span> TimestampNotPassedError(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>, _timestamp);
        }
        <span class="hljs-keyword">if</span> (<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&gt;</span> _timestamp <span class="hljs-operator">+</span> GRACE_PERIOD) {
            <span class="hljs-keyword">revert</span> TimestampExpiredError(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>, _timestamp <span class="hljs-operator">+</span> GRACE_PERIOD);
        }

        queued[txId] <span class="hljs-operator">=</span> <span class="hljs-literal">false</span>;

        <span class="hljs-comment">// prepare data</span>
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data;
        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">bytes</span>(_func).<span class="hljs-built_in">length</span> <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-comment">// data = func selector + _data</span>
            data <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(<span class="hljs-keyword">bytes4</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-keyword">bytes</span>(_func))), _data);
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-comment">// call fallback with data</span>
            data <span class="hljs-operator">=</span> _data;
        }

        <span class="hljs-comment">// call target</span>
        (<span class="hljs-keyword">bool</span> ok, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> res) <span class="hljs-operator">=</span> _target.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: _value}(data);
        <span class="hljs-keyword">if</span> (<span class="hljs-operator">!</span>ok) {
            <span class="hljs-keyword">revert</span> TxFailedError();
        }

        <span class="hljs-keyword">emit</span> Execute(txId, _target, _value, _func, _data, _timestamp);

        <span class="hljs-keyword">return</span> res;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">cancel</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> _txId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">onlyOwner</span> </span>{
        <span class="hljs-keyword">if</span> (<span class="hljs-operator">!</span>queued[_txId]) {
            <span class="hljs-keyword">revert</span> NotQueuedError(_txId);
        }

        queued[_txId] <span class="hljs-operator">=</span> <span class="hljs-literal">false</span>;

        <span class="hljs-keyword">emit</span> Cancel(_txId);
    }
}
</code></pre>
`

export default html
