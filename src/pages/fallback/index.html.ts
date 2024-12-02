// metadata
export const version = "0.8.26"
export const title = "Fallback"
export const description = "Example of how to use fallback in Solidity"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/fallback-solidity-code-example"

export const keywords = [
  "fallback",
  "function",
  "functions",
  "receive",
  "payable",
  "send",
  "ether",
  "eth",
  "transfer",
]

export const codes = [
  {
    fileName: "Fallback.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IEZhbGxiYWNrIHsKICAgIGV2ZW50IExvZyhzdHJpbmcgZnVuYywgdWludDI1NiBnYXMpOwoKICAgIC8vIEZhbGxiYWNrIGZ1bmN0aW9uIG11c3QgYmUgZGVjbGFyZWQgYXMgZXh0ZXJuYWwuCiAgICBmYWxsYmFjaygpIGV4dGVybmFsIHBheWFibGUgewogICAgICAgIC8vIHNlbmQgLyB0cmFuc2ZlciAoZm9yd2FyZHMgMjMwMCBnYXMgdG8gdGhpcyBmYWxsYmFjayBmdW5jdGlvbikKICAgICAgICAvLyBjYWxsIChmb3J3YXJkcyBhbGwgb2YgdGhlIGdhcykKICAgICAgICBlbWl0IExvZygiZmFsbGJhY2siLCBnYXNsZWZ0KCkpOwogICAgfQoKICAgIC8vIFJlY2VpdmUgaXMgYSB2YXJpYW50IG9mIGZhbGxiYWNrIHRoYXQgaXMgdHJpZ2dlcmVkIHdoZW4gbXNnLmRhdGEgaXMgZW1wdHkKICAgIHJlY2VpdmUoKSBleHRlcm5hbCBwYXlhYmxlIHsKICAgICAgICBlbWl0IExvZygicmVjZWl2ZSIsIGdhc2xlZnQoKSk7CiAgICB9CgogICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNoZWNrIHRoZSBiYWxhbmNlIG9mIHRoaXMgY29udHJhY3QKICAgIGZ1bmN0aW9uIGdldEJhbGFuY2UoKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgcmV0dXJuIGFkZHJlc3ModGhpcykuYmFsYW5jZTsKICAgIH0KfQoKY29udHJhY3QgU2VuZFRvRmFsbGJhY2sgewogICAgZnVuY3Rpb24gdHJhbnNmZXJUb0ZhbGxiYWNrKGFkZHJlc3MgcGF5YWJsZSBfdG8pIHB1YmxpYyBwYXlhYmxlIHsKICAgICAgICBfdG8udHJhbnNmZXIobXNnLnZhbHVlKTsKICAgIH0KCiAgICBmdW5jdGlvbiBjYWxsRmFsbGJhY2soYWRkcmVzcyBwYXlhYmxlIF90bykgcHVibGljIHBheWFibGUgewogICAgICAgIChib29sIHNlbnQsKSA9IF90by5jYWxse3ZhbHVlOiBtc2cudmFsdWV9KCIiKTsKICAgICAgICByZXF1aXJlKHNlbnQsICJGYWlsZWQgdG8gc2VuZCBFdGhlciIpOwogICAgfQp9Cg==",
  },
  {
    fileName: "FallbackInputOutput.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8vIFRlc3RGYWxsYmFja0lucHV0T3V0cHV0IC0+IEZhbGxiYWNrSW5wdXRPdXRwdXQgLT4gQ291bnRlcgpjb250cmFjdCBGYWxsYmFja0lucHV0T3V0cHV0IHsKICAgIGFkZHJlc3MgaW1tdXRhYmxlIHRhcmdldDsKCiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzIF90YXJnZXQpIHsKICAgICAgICB0YXJnZXQgPSBfdGFyZ2V0OwogICAgfQoKICAgIGZhbGxiYWNrKGJ5dGVzIGNhbGxkYXRhIGRhdGEpIGV4dGVybmFsIHBheWFibGUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgKGJvb2wgb2ssIGJ5dGVzIG1lbW9yeSByZXMpID0gdGFyZ2V0LmNhbGx7dmFsdWU6IG1zZy52YWx1ZX0oZGF0YSk7CiAgICAgICAgcmVxdWlyZShvaywgImNhbGwgZmFpbGVkIik7CiAgICAgICAgcmV0dXJuIHJlczsKICAgIH0KfQoKY29udHJhY3QgQ291bnRlciB7CiAgICB1aW50MjU2IHB1YmxpYyBjb3VudDsKCiAgICBmdW5jdGlvbiBnZXQoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpIHsKICAgICAgICByZXR1cm4gY291bnQ7CiAgICB9CgogICAgZnVuY3Rpb24gaW5jKCkgZXh0ZXJuYWwgcmV0dXJucyAodWludDI1NikgewogICAgICAgIGNvdW50ICs9IDE7CiAgICAgICAgcmV0dXJuIGNvdW50OwogICAgfQp9Cgpjb250cmFjdCBUZXN0RmFsbGJhY2tJbnB1dE91dHB1dCB7CiAgICBldmVudCBMb2coYnl0ZXMgcmVzKTsKCiAgICBmdW5jdGlvbiB0ZXN0KGFkZHJlc3MgX2ZhbGxiYWNrLCBieXRlcyBjYWxsZGF0YSBkYXRhKSBleHRlcm5hbCB7CiAgICAgICAgKGJvb2wgb2ssIGJ5dGVzIG1lbW9yeSByZXMpID0gX2ZhbGxiYWNrLmNhbGwoZGF0YSk7CiAgICAgICAgcmVxdWlyZShvaywgImNhbGwgZmFpbGVkIik7CiAgICAgICAgZW1pdCBMb2cocmVzKTsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRUZXN0RGF0YSgpIGV4dGVybmFsIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5LCBieXRlcyBtZW1vcnkpIHsKICAgICAgICByZXR1cm4KICAgICAgICAgICAgKGFiaS5lbmNvZGVDYWxsKENvdW50ZXIuZ2V0LCAoKSksIGFiaS5lbmNvZGVDYWxsKENvdW50ZXIuaW5jLCAoKSkpOwogICAgfQp9Cg==",
  },
]

const html = `<p><code>fallback</code> is a special function that is executed either when</p>
<ul>
<li>a function that does not exist is called or</li>
<li>Ether is sent directly to a contract but <code>receive()</code> does not exist or <code>msg.data</code> is not empty</li>
</ul>
<p><code>fallback</code> has a 2300 gas limit when called by <code>transfer</code> or <code>send</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Fallback</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> func, <span class="hljs-keyword">uint256</span> gas</span>)</span>;

    <span class="hljs-comment">// Fallback function must be declared as external.</span>
    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-comment">// send / transfer (forwards 2300 gas to this fallback function)</span>
        <span class="hljs-comment">// call (forwards all of the gas)</span>
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"fallback"</span>, <span class="hljs-built_in">gasleft</span>());
    }

    <span class="hljs-comment">// Receive is a variant of fallback that is triggered when msg.data is empty</span>
    <span class="hljs-function"><span class="hljs-keyword">receive</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"receive"</span>, <span class="hljs-built_in">gasleft</span>());
    }

    <span class="hljs-comment">// Helper function to check the balance of this contract</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBalance</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">SendToFallback</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferToFallback</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _to</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        _to.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">callFallback</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _to</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        (<span class="hljs-keyword">bool</span> sent,) <span class="hljs-operator">=</span> _to.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}
</code></pre><p><code>fallback</code> can optionally take <code>bytes</code> for input and output</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">// TestFallbackInputOutput -&gt; FallbackInputOutput -&gt; Counter</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">FallbackInputOutput</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">immutable</span> target;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _target</span>) </span>{
        target <span class="hljs-operator">=</span> _target;
    }

    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        (<span class="hljs-keyword">bool</span> ok, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> res) <span class="hljs-operator">=</span> target.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}(data);
        <span class="hljs-built_in">require</span>(ok, <span class="hljs-string">"call failed"</span>);
        <span class="hljs-keyword">return</span> res;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Counter</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> count;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> count;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">inc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        count <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">return</span> count;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestFallbackInputOutput</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> res</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _fallback, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        (<span class="hljs-keyword">bool</span> ok, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> res) <span class="hljs-operator">=</span> _fallback.<span class="hljs-built_in">call</span>(data);
        <span class="hljs-built_in">require</span>(ok, <span class="hljs-string">"call failed"</span>);
        <span class="hljs-keyword">emit</span> Log(res);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTestData</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span>, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span>
            (<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(Counter.get, ()), <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(Counter.inc, ()));
    }
}
</code></pre>`

export default html
