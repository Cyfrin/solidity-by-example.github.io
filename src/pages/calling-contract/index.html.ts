// metadata
export const version = "0.8.13"
export const title = "Calling Other Contract"
export const description =
  "In Solidity, contract can call other contracts in several ways"
export const codes = [
  {
    fileName: "CallingContract.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IENhbGxlZSB7CiAgICB1aW50IHB1YmxpYyB4OwogICAgdWludCBwdWJsaWMgdmFsdWU7CgogICAgZnVuY3Rpb24gc2V0WCh1aW50IF94KSBwdWJsaWMgcmV0dXJucyAodWludCkgewogICAgICAgIHggPSBfeDsKICAgICAgICByZXR1cm4geDsKICAgIH0KCiAgICBmdW5jdGlvbiBzZXRYYW5kU2VuZEV0aGVyKHVpbnQgX3gpIHB1YmxpYyBwYXlhYmxlIHJldHVybnMgKHVpbnQsIHVpbnQpIHsKICAgICAgICB4ID0gX3g7CiAgICAgICAgdmFsdWUgPSBtc2cudmFsdWU7CgogICAgICAgIHJldHVybiAoeCwgdmFsdWUpOwogICAgfQp9Cgpjb250cmFjdCBDYWxsZXIgewogICAgZnVuY3Rpb24gc2V0WChDYWxsZWUgX2NhbGxlZSwgdWludCBfeCkgcHVibGljIHsKICAgICAgICB1aW50IHggPSBfY2FsbGVlLnNldFgoX3gpOwogICAgfQoKICAgIGZ1bmN0aW9uIHNldFhGcm9tQWRkcmVzcyhhZGRyZXNzIF9hZGRyLCB1aW50IF94KSBwdWJsaWMgewogICAgICAgIENhbGxlZSBjYWxsZWUgPSBDYWxsZWUoX2FkZHIpOwogICAgICAgIGNhbGxlZS5zZXRYKF94KTsKICAgIH0KCiAgICBmdW5jdGlvbiBzZXRYYW5kU2VuZEV0aGVyKENhbGxlZSBfY2FsbGVlLCB1aW50IF94KSBwdWJsaWMgcGF5YWJsZSB7CiAgICAgICAgKHVpbnQgeCwgdWludCB2YWx1ZSkgPSBfY2FsbGVlLnNldFhhbmRTZW5kRXRoZXJ7dmFsdWU6IG1zZy52YWx1ZX0oX3gpOwogICAgfQp9Cg==",
  },
]

const html = `<p>Contract can call other contracts in 2 ways.</p>
<p>The easiest way to is to just call it, like <code>A.foo(x, y, z)</code>.</p>
<p>Another way to call other contracts is to use the low-level <code>call</code>.</p>
<p>This method is not recommended.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Callee</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> x;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> value;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setX</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        x <span class="hljs-operator">=</span> _x;
        <span class="hljs-keyword">return</span> x;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setXandSendEther</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>, <span class="hljs-keyword">uint</span></span>) </span>{
        x <span class="hljs-operator">=</span> _x;
        value <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;

        <span class="hljs-keyword">return</span> (x, value);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Caller</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setX</span>(<span class="hljs-params">Callee _callee, <span class="hljs-keyword">uint</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint</span> x <span class="hljs-operator">=</span> _callee.setX(_x);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setXFromAddress</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr, <span class="hljs-keyword">uint</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        Callee callee <span class="hljs-operator">=</span> Callee(_addr);
        callee.setX(_x);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setXandSendEther</span>(<span class="hljs-params">Callee _callee, <span class="hljs-keyword">uint</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        (<span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> value) <span class="hljs-operator">=</span> _callee.setXandSendEther{<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}(_x);
    }
}
</code></pre>
`

export default html
