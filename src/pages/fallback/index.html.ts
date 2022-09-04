// metadata
export const version = "0.8.13"
export const title = "Fallback"
export const description = "Example of how to use fallback in Solidity"
export const codes = [
  {
    fileName: "Fallback.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IEZhbGxiYWNrIHsKICAgIGV2ZW50IExvZyh1aW50IGdhcyk7CgogICAgLy8gRmFsbGJhY2sgZnVuY3Rpb24gbXVzdCBiZSBkZWNsYXJlZCBhcyBleHRlcm5hbC4KICAgIGZhbGxiYWNrKCkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgLy8gc2VuZCAvIHRyYW5zZmVyIChmb3J3YXJkcyAyMzAwIGdhcyB0byB0aGlzIGZhbGxiYWNrIGZ1bmN0aW9uKQogICAgICAgIC8vIGNhbGwgKGZvcndhcmRzIGFsbCBvZiB0aGUgZ2FzKQogICAgICAgIGVtaXQgTG9nKGdhc2xlZnQoKSk7CiAgICB9CgogICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNoZWNrIHRoZSBiYWxhbmNlIG9mIHRoaXMgY29udHJhY3QKICAgIGZ1bmN0aW9uIGdldEJhbGFuY2UoKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50KSB7CiAgICAgICAgcmV0dXJuIGFkZHJlc3ModGhpcykuYmFsYW5jZTsKICAgIH0KfQoKY29udHJhY3QgU2VuZFRvRmFsbGJhY2sgewogICAgZnVuY3Rpb24gdHJhbnNmZXJUb0ZhbGxiYWNrKGFkZHJlc3MgcGF5YWJsZSBfdG8pIHB1YmxpYyBwYXlhYmxlIHsKICAgICAgICBfdG8udHJhbnNmZXIobXNnLnZhbHVlKTsKICAgIH0KCiAgICBmdW5jdGlvbiBjYWxsRmFsbGJhY2soYWRkcmVzcyBwYXlhYmxlIF90bykgcHVibGljIHBheWFibGUgewogICAgICAgIChib29sIHNlbnQsICkgPSBfdG8uY2FsbHt2YWx1ZTogbXNnLnZhbHVlfSgiIik7CiAgICAgICAgcmVxdWlyZShzZW50LCAiRmFpbGVkIHRvIHNlbmQgRXRoZXIiKTsKICAgIH0KfQo=",
  },
]

const html = `<p><code>fallback</code> is a function that does not take any arguments and does not return anything.</p>
<p>It is executed either when</p>
<ul>
<li>a function that does not exist is called or</li>
<li>Ether is sent directly to a contract but <code>receive()</code> does not exist or <code>msg.data</code> is not empty</li>
</ul>
<p><code>fallback</code> has a 2300 gas limit when called by <code>transfer</code> or <code>send</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Fallback</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> gas</span>)</span>;

    <span class="hljs-comment">// Fallback function must be declared as external.</span>
    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-comment">// send / transfer (forwards 2300 gas to this fallback function)</span>
        <span class="hljs-comment">// call (forwards all of the gas)</span>
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-built_in">gasleft</span>());
    }

    <span class="hljs-comment">// Helper function to check the balance of this contract</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBalance</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">SendToFallback</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferToFallback</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _to</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        _to.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">callFallback</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _to</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> _to.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}
</code></pre>
`

export default html
