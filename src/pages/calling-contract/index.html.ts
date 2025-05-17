// metadata
export const version = "0.8.26"
export const title = "Calling Other Contract"
export const description = "In Solidity, contract can call other contracts in several ways"
export const cyfrinLink = "https://www.cyfrin.io/glossary/calling-other-contract-solidity-code-example"

export const keywords = [
    "calling",
    "other",
    "contract",
    "contracts",
    "call",
    "function",
    "functions",
]

export const codes = [
    {
        fileName: "CallingContract.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IENhbGxlZSB7CiAgICB1aW50MjU2IHB1YmxpYyB4OwogICAgdWludDI1NiBwdWJsaWMgdmFsdWU7CgogICAgZnVuY3Rpb24gc2V0WCh1aW50MjU2IF94KSBwdWJsaWMgcmV0dXJucyAodWludDI1NikgewogICAgICAgIHggPSBfeDsKICAgICAgICByZXR1cm4geDsKICAgIH0KCiAgICBmdW5jdGlvbiBzZXRYYW5kU2VuZEV0aGVyKHVpbnQyNTYgX3gpCiAgICAgICAgcHVibGljCiAgICAgICAgcGF5YWJsZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYsIHVpbnQyNTYpCiAgICB7CiAgICAgICAgeCA9IF94OwogICAgICAgIHZhbHVlID0gbXNnLnZhbHVlOwoKICAgICAgICByZXR1cm4gKHgsIHZhbHVlKTsKICAgIH0KfQoKY29udHJhY3QgQ2FsbGVyIHsKICAgIGZ1bmN0aW9uIHNldFgoQ2FsbGVlIF9jYWxsZWUsIHVpbnQyNTYgX3gpIHB1YmxpYyB7CiAgICAgICAgdWludDI1NiB4ID0gX2NhbGxlZS5zZXRYKF94KTsKICAgIH0KCiAgICBmdW5jdGlvbiBzZXRYRnJvbUFkZHJlc3MoYWRkcmVzcyBfYWRkciwgdWludDI1NiBfeCkgcHVibGljIHsKICAgICAgICBDYWxsZWUgY2FsbGVlID0gQ2FsbGVlKF9hZGRyKTsKICAgICAgICBjYWxsZWUuc2V0WChfeCk7CiAgICB9CgogICAgZnVuY3Rpb24gc2V0WGFuZFNlbmRFdGhlcihDYWxsZWUgX2NhbGxlZSwgdWludDI1NiBfeCkgcHVibGljIHBheWFibGUgewogICAgICAgICh1aW50MjU2IHgsIHVpbnQyNTYgdmFsdWUpID0KICAgICAgICAgICAgX2NhbGxlZS5zZXRYYW5kU2VuZEV0aGVye3ZhbHVlOiBtc2cudmFsdWV9KF94KTsKICAgIH0KfQo=",
    },
]

const html = `<p>Contract can call other contracts in 2 ways.</p>
<p>The easiest way is to just call it, like <code>A.foo(x, y, z)</code>.</p>
<p>Another way to call other contracts is to use the low-level <code>call</code>.</p>
<p>This method is not recommended.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Callee</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> x;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> value;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setX</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        x <span class="hljs-operator">=</span> _x;
        <span class="hljs-keyword">return</span> x;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setXandSendEther</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _x</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>, <span class="hljs-keyword">uint256</span></span>)
    </span>{
        x <span class="hljs-operator">=</span> _x;
        value <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;

        <span class="hljs-keyword">return</span> (x, value);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Caller</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setX</span>(<span class="hljs-params">Callee _callee, <span class="hljs-keyword">uint256</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint256</span> x <span class="hljs-operator">=</span> _callee.setX(_x);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setXFromAddress</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr, <span class="hljs-keyword">uint256</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        Callee callee <span class="hljs-operator">=</span> Callee(_addr);
        callee.setX(_x);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setXandSendEther</span>(<span class="hljs-params">Callee _callee, <span class="hljs-keyword">uint256</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        (<span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> value) <span class="hljs-operator">=</span>
            _callee.setXandSendEther{<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}(_x);
    }
}
</code></pre>`

export default html
