// metadata
export const version = "0.8.13"
export const title = "ABI Encode"
export const description = "ABI encode"
export const codes = [
  {
    fileName: "AbiEncode.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmludGVyZmFjZSBJRVJDMjAgewogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcywgdWludCkgZXh0ZXJuYWw7Cn0KCmNvbnRyYWN0IFRva2VuIHsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MsIHVpbnQpIGV4dGVybmFsIHt9Cn0KCmNvbnRyYWN0IEFiaUVuY29kZSB7CiAgICBmdW5jdGlvbiB0ZXN0KGFkZHJlc3MgX2NvbnRyYWN0LCBieXRlcyBjYWxsZGF0YSBkYXRhKSBleHRlcm5hbCB7CiAgICAgICAgKGJvb2wgb2ssICkgPSBfY29udHJhY3QuY2FsbChkYXRhKTsKICAgICAgICByZXF1aXJlKG9rLCAiY2FsbCBmYWlsZWQiKTsKICAgIH0KCiAgICBmdW5jdGlvbiBlbmNvZGVXaXRoU2lnbmF0dXJlKAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgdWludCBhbW91bnQKICAgICkgZXh0ZXJuYWwgcHVyZSByZXR1cm5zIChieXRlcyBtZW1vcnkpIHsKICAgICAgICAvLyBUeXBvIGlzIG5vdCBjaGVja2VkIC0gInRyYW5zZmVyKGFkZHJlc3MsIHVpbnQpIgogICAgICAgIHJldHVybiBhYmkuZW5jb2RlV2l0aFNpZ25hdHVyZSgidHJhbnNmZXIoYWRkcmVzcyx1aW50MjU2KSIsIHRvLCBhbW91bnQpOwogICAgfQoKICAgIGZ1bmN0aW9uIGVuY29kZVdpdGhTZWxlY3RvcigKICAgICAgICBhZGRyZXNzIHRvLAogICAgICAgIHVpbnQgYW1vdW50CiAgICApIGV4dGVybmFsIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgLy8gVHlwZSBpcyBub3QgY2hlY2tlZCAtIChJRVJDMjAudHJhbnNmZXIuc2VsZWN0b3IsIHRydWUsIGFtb3VudCkKICAgICAgICByZXR1cm4gYWJpLmVuY29kZVdpdGhTZWxlY3RvcihJRVJDMjAudHJhbnNmZXIuc2VsZWN0b3IsIHRvLCBhbW91bnQpOwogICAgfQoKICAgIGZ1bmN0aW9uIGVuY29kZUNhbGwoYWRkcmVzcyB0bywgdWludCBhbW91bnQpIGV4dGVybmFsIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgLy8gVHlwbyBhbmQgdHlwZSBlcnJvcnMgd2lsbCBub3QgY29tcGlsZQogICAgICAgIHJldHVybiBhYmkuZW5jb2RlQ2FsbChJRVJDMjAudHJhbnNmZXIsICh0bywgYW1vdW50KSk7CiAgICB9Cn0K",
  },
]

const html = `<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, <span class="hljs-keyword">uint</span></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Token</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, <span class="hljs-keyword">uint</span></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{}
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">AbiEncode</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _contract, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        (<span class="hljs-keyword">bool</span> ok, ) <span class="hljs-operator">=</span> _contract.<span class="hljs-built_in">call</span>(data);
        <span class="hljs-built_in">require</span>(ok, <span class="hljs-string">"call failed"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encodeWithSignature</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> amount
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-comment">// Typo is not checked - "transfer(address, uint)"</span>
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"transfer(address,uint256)"</span>, to, amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encodeWithSelector</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> amount
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-comment">// Type is not checked - (IERC20.transfer.selector, true, amount)</span>
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSelector</span>(IERC20.<span class="hljs-built_in">transfer</span>.<span class="hljs-built_in">selector</span>, to, amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encodeCall</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-comment">// Typo and type errors will not compile</span>
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(IERC20.<span class="hljs-built_in">transfer</span>, (to, amount));
    }
}
</code></pre>
`

export default html
