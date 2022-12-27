// metadata
export const version = "0.8.17"
export const title = "Multi Delegatecall"
export const description =
  "An example of contract to call multiple functions in a single transaction"
export const codes = [
  {
    fileName: "MultiDelegatecall.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IE11bHRpRGVsZWdhdGVjYWxsIHsKICAgIGVycm9yIERlbGVnYXRlY2FsbEZhaWxlZCgpOwoKICAgIGZ1bmN0aW9uIG11bHRpRGVsZWdhdGVjYWxsKAogICAgICAgIGJ5dGVzW10gbWVtb3J5IGRhdGEKICAgICkgZXh0ZXJuYWwgcGF5YWJsZSByZXR1cm5zIChieXRlc1tdIG1lbW9yeSByZXN1bHRzKSB7CiAgICAgICAgcmVzdWx0cyA9IG5ldyBieXRlc1tdKGRhdGEubGVuZ3RoKTsKCiAgICAgICAgZm9yICh1aW50IGk7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgIChib29sIG9rLCBieXRlcyBtZW1vcnkgcmVzKSA9IGFkZHJlc3ModGhpcykuZGVsZWdhdGVjYWxsKGRhdGFbaV0pOwogICAgICAgICAgICBpZiAoIW9rKSB7CiAgICAgICAgICAgICAgICByZXZlcnQgRGVsZWdhdGVjYWxsRmFpbGVkKCk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmVzdWx0c1tpXSA9IHJlczsKICAgICAgICB9CiAgICB9Cn0KCi8vIFdoeSB1c2UgbXVsdGkgZGVsZWdhdGVjYWxsPyBXaHkgbm90IG11bHRpIGNhbGw/Ci8vIGFsaWNlIC0+IG11bHRpIGNhbGwgLS0tIGNhbGwgLS0tPiB0ZXN0IChtc2cuc2VuZGVyID0gbXVsdGkgY2FsbCkKLy8gYWxpY2UgLT4gdGVzdCAtLS0gZGVsZWdhdGVjYWxsIC0tLT4gdGVzdCAobXNnLnNlbmRlciA9IGFsaWNlKQpjb250cmFjdCBUZXN0TXVsdGlEZWxlZ2F0ZWNhbGwgaXMgTXVsdGlEZWxlZ2F0ZWNhbGwgewogICAgZXZlbnQgTG9nKGFkZHJlc3MgY2FsbGVyLCBzdHJpbmcgZnVuYywgdWludCBpKTsKCiAgICBmdW5jdGlvbiBmdW5jMSh1aW50IHgsIHVpbnQgeSkgZXh0ZXJuYWwgewogICAgICAgIC8vIG1zZy5zZW5kZXIgPSBhbGljZQogICAgICAgIGVtaXQgTG9nKG1zZy5zZW5kZXIsICJmdW5jMSIsIHggKyB5KTsKICAgIH0KCiAgICBmdW5jdGlvbiBmdW5jMigpIGV4dGVybmFsIHJldHVybnMgKHVpbnQpIHsKICAgICAgICAvLyBtc2cuc2VuZGVyID0gYWxpY2UKICAgICAgICBlbWl0IExvZyhtc2cuc2VuZGVyLCAiZnVuYzIiLCAyKTsKICAgICAgICByZXR1cm4gMTExOwogICAgfQoKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50KSBwdWJsaWMgYmFsYW5jZU9mOwoKICAgIC8vIFdBUk5JTkc6IHVuc2FmZSBjb2RlIHdoZW4gdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIG11bHRpLWRlbGVnYXRlY2FsbAogICAgLy8gdXNlciBjYW4gbWludCBtdWx0aXBsZSB0aW1lcyBmb3IgdGhlIHByaWNlIG9mIG1zZy52YWx1ZQogICAgZnVuY3Rpb24gbWludCgpIGV4dGVybmFsIHBheWFibGUgewogICAgICAgIGJhbGFuY2VPZlttc2cuc2VuZGVyXSArPSBtc2cudmFsdWU7CiAgICB9Cn0KCmNvbnRyYWN0IEhlbHBlciB7CiAgICBmdW5jdGlvbiBnZXRGdW5jMURhdGEodWludCB4LCB1aW50IHkpIGV4dGVybmFsIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIGFiaS5lbmNvZGVXaXRoU2VsZWN0b3IoVGVzdE11bHRpRGVsZWdhdGVjYWxsLmZ1bmMxLnNlbGVjdG9yLCB4LCB5KTsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRGdW5jMkRhdGEoKSBleHRlcm5hbCBwdXJlIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkgewogICAgICAgIHJldHVybiBhYmkuZW5jb2RlV2l0aFNlbGVjdG9yKFRlc3RNdWx0aURlbGVnYXRlY2FsbC5mdW5jMi5zZWxlY3Rvcik7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0TWludERhdGEoKSBleHRlcm5hbCBwdXJlIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkgewogICAgICAgIHJldHVybiBhYmkuZW5jb2RlV2l0aFNlbGVjdG9yKFRlc3RNdWx0aURlbGVnYXRlY2FsbC5taW50LnNlbGVjdG9yKTsKICAgIH0KfQo=",
  },
]

const html = `<p>An example of calling multiple functions with a single transaction, using <code>delegatecall</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MultiDelegatecall</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">DelegatecallFailed</span>(<span class="hljs-params"></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">multiDelegatecall</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes</span>[] <span class="hljs-keyword">memory</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span>[] <span class="hljs-keyword">memory</span> results</span>) </span>{
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
