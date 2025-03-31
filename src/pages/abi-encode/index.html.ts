// metadata
export const version = "0.8.26"
export const title = "ABI Encode"
export const description = "ABI encode"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/abi-encode-solidity-code-example"

export const keywords = [
  "abi",
  "encode",
  "bytes",
  "encodeWithSelector",
  "encodeWithSignature",
  "encodeCall",
]

export const codes = [
  {
    fileName: "AbiEncode.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmludGVyZmFjZSBJRVJDMjAgewogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcywgdWludDI1NikgZXh0ZXJuYWw7Cn0KCmNvbnRyYWN0IFRva2VuIHsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MsIHVpbnQyNTYpIGV4dGVybmFsIHt9Cn0KCmNvbnRyYWN0IEFiaUVuY29kZSB7CiAgICBmdW5jdGlvbiB0ZXN0KGFkZHJlc3MgX2NvbnRyYWN0LCBieXRlcyBjYWxsZGF0YSBkYXRhKSBleHRlcm5hbCB7CiAgICAgICAgKGJvb2wgb2ssKSA9IF9jb250cmFjdC5jYWxsKGRhdGEpOwogICAgICAgIHJlcXVpcmUob2ssICJjYWxsIGZhaWxlZCIpOwogICAgfQoKICAgIGZ1bmN0aW9uIGVuY29kZVdpdGhTaWduYXR1cmUoYWRkcmVzcyB0bywgdWludDI1NiBhbW91bnQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KQogICAgewogICAgICAgIC8vIFR5cG8gaXMgbm90IGNoZWNrZWQgLSAidHJhbnNmZXIoYWRkcmVzcywgdWludCkiCiAgICAgICAgcmV0dXJuIGFiaS5lbmNvZGVXaXRoU2lnbmF0dXJlKCJ0cmFuc2ZlcihhZGRyZXNzLHVpbnQyNTYpIiwgdG8sIGFtb3VudCk7CiAgICB9CgogICAgZnVuY3Rpb24gZW5jb2RlV2l0aFNlbGVjdG9yKGFkZHJlc3MgdG8sIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkKICAgIHsKICAgICAgICAvLyBUeXBlIGlzIG5vdCBjaGVja2VkIC0gKElFUkMyMC50cmFuc2Zlci5zZWxlY3RvciwgdHJ1ZSwgYW1vdW50KQogICAgICAgIHJldHVybiBhYmkuZW5jb2RlV2l0aFNlbGVjdG9yKElFUkMyMC50cmFuc2Zlci5zZWxlY3RvciwgdG8sIGFtb3VudCk7CiAgICB9CgogICAgZnVuY3Rpb24gZW5jb2RlQ2FsbChhZGRyZXNzIHRvLCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChieXRlcyBtZW1vcnkpCiAgICB7CiAgICAgICAgLy8gVHlwbyBhbmQgdHlwZSBlcnJvcnMgd2lsbCBub3QgY29tcGlsZQogICAgICAgIHJldHVybiBhYmkuZW5jb2RlQ2FsbChJRVJDMjAudHJhbnNmZXIsICh0bywgYW1vdW50KSk7CiAgICB9Cn0K",
  },
]

const html = `<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, <span class="hljs-keyword">uint256</span></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Token</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, <span class="hljs-keyword">uint256</span></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{}
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">AbiEncode</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _contract, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        (<span class="hljs-keyword">bool</span> ok,) <span class="hljs-operator">=</span> _contract.<span class="hljs-built_in">call</span>(data);
        <span class="hljs-built_in">require</span>(ok, <span class="hljs-string">"call failed"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encodeWithSignature</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>)
    </span>{
        <span class="hljs-comment">// Correct function signature encoding; typos here are not caught at compile time</span>
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"transfer(address,uint256)"</span>, to, amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encodeWithSelector</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>)
    </span>{
        <span class="hljs-comment">// Selector is used; types are not checked at compile-time</span>
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSelector</span>(IERC20.<span class="hljs-built_in">transfer</span>.<span class="hljs-built_in">selector</span>, to, amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encodeCall</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>)
    </span>{
        <span class="hljs-comment">// Typo and type errors will not compile</span>
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(IERC20.<span class="hljs-built_in">transfer</span>, (to, amount));
    }
}
</code></pre>`

export default html
