// metadata
export const version = "0.8.13"
export const title = "Multi Delegatecall"
export const description =
  "An example of contract to call multiple functions in a single transaction"
export const codes = [
  {
    fileName: "MultiDelegatecall.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IE11bHRpRGVsZWdhdGVjYWxsIHsKICAgIGVycm9yIERlbGVnYXRlY2FsbEZhaWxlZCgpOwoKICAgIGZ1bmN0aW9uIG11bHRpRGVsZWdhdGVjYWxsKGJ5dGVzW10gbWVtb3J5IGRhdGEpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICBwYXlhYmxlCiAgICAgICAgcmV0dXJucyAoYnl0ZXNbXSBtZW1vcnkgcmVzdWx0cykKICAgIHsKICAgICAgICByZXN1bHRzID0gbmV3IGJ5dGVzW10oZGF0YS5sZW5ndGgpOwoKICAgICAgICBmb3IgKHVpbnQgaTsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgKGJvb2wgb2ssIGJ5dGVzIG1lbW9yeSByZXMpID0gYWRkcmVzcyh0aGlzKS5kZWxlZ2F0ZWNhbGwoZGF0YVtpXSk7CiAgICAgICAgICAgIGlmICghb2spIHsKICAgICAgICAgICAgICAgIHJldmVydCBEZWxlZ2F0ZWNhbGxGYWlsZWQoKTsKICAgICAgICAgICAgfQogICAgICAgICAgICByZXN1bHRzW2ldID0gcmVzOwogICAgICAgIH0KICAgIH0KfQoKLy8gV2h5IHVzZSBtdWx0aSBkZWxlZ2F0ZWNhbGw/IFdoeSBub3QgbXVsdGkgY2FsbD8KLy8gYWxpY2UgLT4gbXVsdGkgY2FsbCAtLS0gY2FsbCAtLS0+IHRlc3QgKG1zZy5zZW5kZXIgPSBtdWx0aSBjYWxsKQovLyBhbGljZSAtPiB0ZXN0IC0tLSBkZWxlZ2F0ZWNhbGwgLS0tPiB0ZXN0IChtc2cuc2VuZGVyID0gYWxpY2UpCmNvbnRyYWN0IFRlc3RNdWx0aURlbGVnYXRlY2FsbCBpcyBNdWx0aURlbGVnYXRlY2FsbCB7CiAgICBldmVudCBMb2coYWRkcmVzcyBjYWxsZXIsIHN0cmluZyBmdW5jLCB1aW50IGkpOwoKICAgIGZ1bmN0aW9uIGZ1bmMxKHVpbnQgeCwgdWludCB5KSBleHRlcm5hbCB7CiAgICAgICAgLy8gbXNnLnNlbmRlciA9IGFsaWNlCiAgICAgICAgZW1pdCBMb2cobXNnLnNlbmRlciwgImZ1bmMxIiwgeCArIHkpOwogICAgfQoKICAgIGZ1bmN0aW9uIGZ1bmMyKCkgZXh0ZXJuYWwgcmV0dXJucyAodWludCkgewogICAgICAgIC8vIG1zZy5zZW5kZXIgPSBhbGljZQogICAgICAgIGVtaXQgTG9nKG1zZy5zZW5kZXIsICJmdW5jMiIsIDIpOwogICAgICAgIHJldHVybiAxMTE7CiAgICB9CgogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQpIHB1YmxpYyBiYWxhbmNlT2Y7CgogICAgLy8gV0FSTklORzogdW5zYWZlIGNvZGUgd2hlbiB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggbXVsdGktZGVsZWdhdGVjYWxsCiAgICAvLyB1c2VyIGNhbiBtaW50IG11bHRpcGxlIHRpbWVzIGZvciB0aGUgcHJpY2Ugb2YgbXNnLnZhbHVlCiAgICBmdW5jdGlvbiBtaW50KCkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgYmFsYW5jZU9mW21zZy5zZW5kZXJdICs9IG1zZy52YWx1ZTsKICAgIH0KfQoKY29udHJhY3QgSGVscGVyIHsKICAgIGZ1bmN0aW9uIGdldEZ1bmMxRGF0YSh1aW50IHgsIHVpbnQgeSkgZXh0ZXJuYWwgcHVyZSByZXR1cm5zIChieXRlcyBtZW1vcnkpIHsKICAgICAgICByZXR1cm4gYWJpLmVuY29kZVdpdGhTZWxlY3RvcihUZXN0TXVsdGlEZWxlZ2F0ZWNhbGwuZnVuYzEuc2VsZWN0b3IsIHgsIHkpOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldEZ1bmMyRGF0YSgpIGV4dGVybmFsIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIGFiaS5lbmNvZGVXaXRoU2VsZWN0b3IoVGVzdE11bHRpRGVsZWdhdGVjYWxsLmZ1bmMyLnNlbGVjdG9yKTsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRNaW50RGF0YSgpIGV4dGVybmFsIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIGFiaS5lbmNvZGVXaXRoU2VsZWN0b3IoVGVzdE11bHRpRGVsZWdhdGVjYWxsLm1pbnQuc2VsZWN0b3IpOwogICAgfQp9Cg==",
  },
]

const html = `<p>An example of calling multiple functions with a single transaction, using <code>delegatecall</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MultiDelegatecall</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">DelegatecallFailed</span>(<span class="hljs-params"></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">multiDelegatecall</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span>[] <span class="hljs-keyword">memory</span> data</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span>[] <span class="hljs-keyword">memory</span> results</span>)
    </span>{
        results <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">bytes</span>[](data.<span class="hljs-built_in">length</span>);

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> data.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            (<span class="hljs-keyword">bool</span> ok, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> res) <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">delegatecall</span>(data[i]);
            <span class="hljs-keyword">if</span> (<span class="hljs-operator">!</span>ok) {
                <span class="hljs-keyword">revert</span> DelegatecallFailed();
            }
            results[i] <span class="hljs-operator">=</span> res;
        }
    }
}

<span class="hljs-comment">// Why use multi delegatecall? Why not multi call?</span>
<span class="hljs-comment">// alice -&gt; multi call --- call ---&gt; test (msg.sender = multi call)</span>
<span class="hljs-comment">// alice -&gt; test --- delegatecall ---&gt; test (msg.sender = alice)</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestMultiDelegatecall</span> <span class="hljs-keyword">is</span> <span class="hljs-title">MultiDelegatecall</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> caller, <span class="hljs-keyword">string</span> func, <span class="hljs-keyword">uint</span> i</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">func1</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-comment">// msg.sender = alice</span>
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-string">"func1"</span>, x <span class="hljs-operator">+</span> y);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">func2</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">// msg.sender = alice</span>
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-string">"func2"</span>, <span class="hljs-number">2</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-number">111</span>;
    }

    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> balanceOf;

    <span class="hljs-comment">// WARNING: unsafe code when used in combination with multi-delegatecall</span>
    <span class="hljs-comment">// user can mint multiple times for the price of msg.value</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mint</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        balanceOf[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Helper</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getFunc1Data</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSelector</span>(TestMultiDelegatecall.func1.<span class="hljs-built_in">selector</span>, x, y);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getFunc2Data</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSelector</span>(TestMultiDelegatecall.func2.<span class="hljs-built_in">selector</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getMintData</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSelector</span>(TestMultiDelegatecall.mint.<span class="hljs-built_in">selector</span>);
    }
}
</code></pre>
`

export default html
