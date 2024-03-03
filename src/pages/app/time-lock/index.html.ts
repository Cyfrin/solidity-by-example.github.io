// metadata
export const version = "0.8.20"
export const title = "Time Lock"
export const description = "Time Lock"

export const keywords = ["app", "application", "time", "lock"]

export const codes = [
  {
    fileName: "TimeLock.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IFRpbWVMb2NrIHsKICAgIGVycm9yIE5vdE93bmVyRXJyb3IoKTsKICAgIGVycm9yIEFscmVhZHlRdWV1ZWRFcnJvcihieXRlczMyIHR4SWQpOwogICAgZXJyb3IgVGltZXN0YW1wTm90SW5SYW5nZUVycm9yKHVpbnQyNTYgYmxvY2tUaW1lc3RhbXAsIHVpbnQyNTYgdGltZXN0YW1wKTsKICAgIGVycm9yIE5vdFF1ZXVlZEVycm9yKGJ5dGVzMzIgdHhJZCk7CiAgICBlcnJvciBUaW1lc3RhbXBOb3RQYXNzZWRFcnJvcih1aW50MjU2IGJsb2NrVGltZXN0bWFwLCB1aW50MjU2IHRpbWVzdGFtcCk7CiAgICBlcnJvciBUaW1lc3RhbXBFeHBpcmVkRXJyb3IodWludDI1NiBibG9ja1RpbWVzdGFtcCwgdWludDI1NiBleHBpcmVzQXQpOwogICAgZXJyb3IgVHhGYWlsZWRFcnJvcigpOwoKICAgIGV2ZW50IFF1ZXVlKAogICAgICAgIGJ5dGVzMzIgaW5kZXhlZCB0eElkLAogICAgICAgIGFkZHJlc3MgaW5kZXhlZCB0YXJnZXQsCiAgICAgICAgdWludDI1NiB2YWx1ZSwKICAgICAgICBzdHJpbmcgZnVuYywKICAgICAgICBieXRlcyBkYXRhLAogICAgICAgIHVpbnQyNTYgdGltZXN0YW1wCiAgICApOwogICAgZXZlbnQgRXhlY3V0ZSgKICAgICAgICBieXRlczMyIGluZGV4ZWQgdHhJZCwKICAgICAgICBhZGRyZXNzIGluZGV4ZWQgdGFyZ2V0LAogICAgICAgIHVpbnQyNTYgdmFsdWUsCiAgICAgICAgc3RyaW5nIGZ1bmMsCiAgICAgICAgYnl0ZXMgZGF0YSwKICAgICAgICB1aW50MjU2IHRpbWVzdGFtcAogICAgKTsKICAgIGV2ZW50IENhbmNlbChieXRlczMyIGluZGV4ZWQgdHhJZCk7CgogICAgdWludDI1NiBwdWJsaWMgY29uc3RhbnQgTUlOX0RFTEFZID0gMTA7IC8vIHNlY29uZHMKICAgIHVpbnQyNTYgcHVibGljIGNvbnN0YW50IE1BWF9ERUxBWSA9IDEwMDA7IC8vIHNlY29uZHMKICAgIHVpbnQyNTYgcHVibGljIGNvbnN0YW50IEdSQUNFX1BFUklPRCA9IDEwMDA7IC8vIHNlY29uZHMKCiAgICBhZGRyZXNzIHB1YmxpYyBvd25lcjsKICAgIC8vIHR4IGlkID0+IHF1ZXVlZAogICAgbWFwcGluZyhieXRlczMyID0+IGJvb2wpIHB1YmxpYyBxdWV1ZWQ7CgogICAgY29uc3RydWN0b3IoKSB7CiAgICAgICAgb3duZXIgPSBtc2cuc2VuZGVyOwogICAgfQoKICAgIG1vZGlmaWVyIG9ubHlPd25lcigpIHsKICAgICAgICBpZiAobXNnLnNlbmRlciAhPSBvd25lcikgewogICAgICAgICAgICByZXZlcnQgTm90T3duZXJFcnJvcigpOwogICAgICAgIH0KICAgICAgICBfOwogICAgfQoKICAgIHJlY2VpdmUoKSBleHRlcm5hbCBwYXlhYmxlIHt9CgogICAgZnVuY3Rpb24gZ2V0VHhJZCgKICAgICAgICBhZGRyZXNzIF90YXJnZXQsCiAgICAgICAgdWludDI1NiBfdmFsdWUsCiAgICAgICAgc3RyaW5nIGNhbGxkYXRhIF9mdW5jLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIF9kYXRhLAogICAgICAgIHVpbnQyNTYgX3RpbWVzdGFtcAogICAgKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlczMyKSB7CiAgICAgICAgcmV0dXJuIGtlY2NhazI1NihhYmkuZW5jb2RlKF90YXJnZXQsIF92YWx1ZSwgX2Z1bmMsIF9kYXRhLCBfdGltZXN0YW1wKSk7CiAgICB9CgogICAgLyoqCiAgICAgKiBAcGFyYW0gX3RhcmdldCBBZGRyZXNzIG9mIGNvbnRyYWN0IG9yIGFjY291bnQgdG8gY2FsbAogICAgICogQHBhcmFtIF92YWx1ZSBBbW91bnQgb2YgRVRIIHRvIHNlbmQKICAgICAqIEBwYXJhbSBfZnVuYyBGdW5jdGlvbiBzaWduYXR1cmUsIGZvciBleGFtcGxlICJmb28oYWRkcmVzcyx1aW50MjU2KSIKICAgICAqIEBwYXJhbSBfZGF0YSBBQkkgZW5jb2RlZCBkYXRhIHNlbmQuCiAgICAgKiBAcGFyYW0gX3RpbWVzdGFtcCBUaW1lc3RhbXAgYWZ0ZXIgd2hpY2ggdGhlIHRyYW5zYWN0aW9uIGNhbiBiZSBleGVjdXRlZC4KICAgICAqLwogICAgZnVuY3Rpb24gcXVldWUoCiAgICAgICAgYWRkcmVzcyBfdGFyZ2V0LAogICAgICAgIHVpbnQyNTYgX3ZhbHVlLAogICAgICAgIHN0cmluZyBjYWxsZGF0YSBfZnVuYywKICAgICAgICBieXRlcyBjYWxsZGF0YSBfZGF0YSwKICAgICAgICB1aW50MjU2IF90aW1lc3RhbXAKICAgICkgZXh0ZXJuYWwgb25seU93bmVyIHJldHVybnMgKGJ5dGVzMzIgdHhJZCkgewogICAgICAgIHR4SWQgPSBnZXRUeElkKF90YXJnZXQsIF92YWx1ZSwgX2Z1bmMsIF9kYXRhLCBfdGltZXN0YW1wKTsKICAgICAgICBpZiAocXVldWVkW3R4SWRdKSB7CiAgICAgICAgICAgIHJldmVydCBBbHJlYWR5UXVldWVkRXJyb3IodHhJZCk7CiAgICAgICAgfQogICAgICAgIC8vIC0tLXwtLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0KICAgICAgICAvLyAgYmxvY2sgICAgYmxvY2sgKyBtaW4gICAgIGJsb2NrICsgbWF4CiAgICAgICAgaWYgKAogICAgICAgICAgICBfdGltZXN0YW1wIDwgYmxvY2sudGltZXN0YW1wICsgTUlOX0RFTEFZCiAgICAgICAgICAgICAgICB8fCBfdGltZXN0YW1wID4gYmxvY2sudGltZXN0YW1wICsgTUFYX0RFTEFZCiAgICAgICAgKSB7CiAgICAgICAgICAgIHJldmVydCBUaW1lc3RhbXBOb3RJblJhbmdlRXJyb3IoYmxvY2sudGltZXN0YW1wLCBfdGltZXN0YW1wKTsKICAgICAgICB9CgogICAgICAgIHF1ZXVlZFt0eElkXSA9IHRydWU7CgogICAgICAgIGVtaXQgUXVldWUodHhJZCwgX3RhcmdldCwgX3ZhbHVlLCBfZnVuYywgX2RhdGEsIF90aW1lc3RhbXApOwogICAgfQoKICAgIGZ1bmN0aW9uIGV4ZWN1dGUoCiAgICAgICAgYWRkcmVzcyBfdGFyZ2V0LAogICAgICAgIHVpbnQyNTYgX3ZhbHVlLAogICAgICAgIHN0cmluZyBjYWxsZGF0YSBfZnVuYywKICAgICAgICBieXRlcyBjYWxsZGF0YSBfZGF0YSwKICAgICAgICB1aW50MjU2IF90aW1lc3RhbXAKICAgICkgZXh0ZXJuYWwgcGF5YWJsZSBvbmx5T3duZXIgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgYnl0ZXMzMiB0eElkID0gZ2V0VHhJZChfdGFyZ2V0LCBfdmFsdWUsIF9mdW5jLCBfZGF0YSwgX3RpbWVzdGFtcCk7CiAgICAgICAgaWYgKCFxdWV1ZWRbdHhJZF0pIHsKICAgICAgICAgICAgcmV2ZXJ0IE5vdFF1ZXVlZEVycm9yKHR4SWQpOwogICAgICAgIH0KICAgICAgICAvLyAtLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLQogICAgICAgIC8vICB0aW1lc3RhbXAgICAgdGltZXN0YW1wICsgZ3JhY2UgcGVyaW9kCiAgICAgICAgaWYgKGJsb2NrLnRpbWVzdGFtcCA8IF90aW1lc3RhbXApIHsKICAgICAgICAgICAgcmV2ZXJ0IFRpbWVzdGFtcE5vdFBhc3NlZEVycm9yKGJsb2NrLnRpbWVzdGFtcCwgX3RpbWVzdGFtcCk7CiAgICAgICAgfQogICAgICAgIGlmIChibG9jay50aW1lc3RhbXAgPiBfdGltZXN0YW1wICsgR1JBQ0VfUEVSSU9EKSB7CiAgICAgICAgICAgIHJldmVydCBUaW1lc3RhbXBFeHBpcmVkRXJyb3IoCiAgICAgICAgICAgICAgICBibG9jay50aW1lc3RhbXAsIF90aW1lc3RhbXAgKyBHUkFDRV9QRVJJT0QKICAgICAgICAgICAgKTsKICAgICAgICB9CgogICAgICAgIHF1ZXVlZFt0eElkXSA9IGZhbHNlOwoKICAgICAgICAvLyBwcmVwYXJlIGRhdGEKICAgICAgICBieXRlcyBtZW1vcnkgZGF0YTsKICAgICAgICBpZiAoYnl0ZXMoX2Z1bmMpLmxlbmd0aCA+IDApIHsKICAgICAgICAgICAgLy8gZGF0YSA9IGZ1bmMgc2VsZWN0b3IgKyBfZGF0YQogICAgICAgICAgICBkYXRhID0gYWJpLmVuY29kZVBhY2tlZChieXRlczQoa2VjY2FrMjU2KGJ5dGVzKF9mdW5jKSkpLCBfZGF0YSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgLy8gY2FsbCBmYWxsYmFjayB3aXRoIGRhdGEKICAgICAgICAgICAgZGF0YSA9IF9kYXRhOwogICAgICAgIH0KCiAgICAgICAgLy8gY2FsbCB0YXJnZXQKICAgICAgICAoYm9vbCBvaywgYnl0ZXMgbWVtb3J5IHJlcykgPSBfdGFyZ2V0LmNhbGx7dmFsdWU6IF92YWx1ZX0oZGF0YSk7CiAgICAgICAgaWYgKCFvaykgewogICAgICAgICAgICByZXZlcnQgVHhGYWlsZWRFcnJvcigpOwogICAgICAgIH0KCiAgICAgICAgZW1pdCBFeGVjdXRlKHR4SWQsIF90YXJnZXQsIF92YWx1ZSwgX2Z1bmMsIF9kYXRhLCBfdGltZXN0YW1wKTsKCiAgICAgICAgcmV0dXJuIHJlczsKICAgIH0KCiAgICBmdW5jdGlvbiBjYW5jZWwoYnl0ZXMzMiBfdHhJZCkgZXh0ZXJuYWwgb25seU93bmVyIHsKICAgICAgICBpZiAoIXF1ZXVlZFtfdHhJZF0pIHsKICAgICAgICAgICAgcmV2ZXJ0IE5vdFF1ZXVlZEVycm9yKF90eElkKTsKICAgICAgICB9CgogICAgICAgIHF1ZXVlZFtfdHhJZF0gPSBmYWxzZTsKCiAgICAgICAgZW1pdCBDYW5jZWwoX3R4SWQpOwogICAgfQp9Cg==",
  },
]

const html = `<p><code>TimeLock</code> is a contract that publishes a transaction to be executed in the future.
After a mimimum waiting period, the transaction can be executed.</p>
<p><code>TimeLock</code>s are commonly used in DAOs.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TimeLock</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">NotOwnerError</span>(<span class="hljs-params"></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">AlreadyQueuedError</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> txId</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">TimestampNotInRangeError</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> blockTimestamp, <span class="hljs-keyword">uint256</span> timestamp</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">NotQueuedError</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> txId</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">TimestampNotPassedError</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> blockTimestmap, <span class="hljs-keyword">uint256</span> timestamp</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">TimestampExpiredError</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> blockTimestamp, <span class="hljs-keyword">uint256</span> expiresAt</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">TxFailedError</span>(<span class="hljs-params"></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Queue</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">indexed</span> txId,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> target,
        <span class="hljs-keyword">uint256</span> value,
        <span class="hljs-keyword">string</span> func,
        <span class="hljs-keyword">bytes</span> data,
        <span class="hljs-keyword">uint256</span> timestamp
    </span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Execute</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">indexed</span> txId,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> target,
        <span class="hljs-keyword">uint256</span> value,
        <span class="hljs-keyword">string</span> func,
        <span class="hljs-keyword">bytes</span> data,
        <span class="hljs-keyword">uint256</span> timestamp
    </span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Cancel</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">indexed</span> txId</span>)</span>;

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MIN_DELAY <span class="hljs-operator">=</span> <span class="hljs-number">10</span>; <span class="hljs-comment">// seconds</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MAX_DELAY <span class="hljs-operator">=</span> <span class="hljs-number">1000</span>; <span class="hljs-comment">// seconds</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> GRACE_PERIOD <span class="hljs-operator">=</span> <span class="hljs-number">1000</span>; <span class="hljs-comment">// seconds</span>

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
        <span class="hljs-keyword">uint256</span> _value,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">calldata</span> _func,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> _data,
        <span class="hljs-keyword">uint256</span> _timestamp
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
        <span class="hljs-keyword">uint256</span> _value,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">calldata</span> _func,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> _data,
        <span class="hljs-keyword">uint256</span> _timestamp
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">onlyOwner</span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> txId</span>) </span>{
        txId <span class="hljs-operator">=</span> getTxId(_target, _value, _func, _data, _timestamp);
        <span class="hljs-keyword">if</span> (queued[txId]) {
            <span class="hljs-keyword">revert</span> AlreadyQueuedError(txId);
        }
        <span class="hljs-comment">// ---|------------|---------------|-------</span>
        <span class="hljs-comment">//  block    block + min     block + max</span>
        <span class="hljs-keyword">if</span> (
            _timestamp <span class="hljs-operator">&lt;</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> MIN_DELAY
                <span class="hljs-operator">|</span><span class="hljs-operator">|</span> _timestamp <span class="hljs-operator">&gt;</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> MAX_DELAY
        ) {
            <span class="hljs-keyword">revert</span> TimestampNotInRangeError(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>, _timestamp);
        }

        queued[txId] <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;

        <span class="hljs-keyword">emit</span> Queue(txId, _target, _value, _func, _data, _timestamp);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">execute</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _target,
        <span class="hljs-keyword">uint256</span> _value,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">calldata</span> _func,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> _data,
        <span class="hljs-keyword">uint256</span> _timestamp
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
            <span class="hljs-keyword">revert</span> TimestampExpiredError(
                <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>, _timestamp <span class="hljs-operator">+</span> GRACE_PERIOD
            );
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
</code></pre>`

export default html
