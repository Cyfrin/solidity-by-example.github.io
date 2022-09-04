// metadata
export const version = "0.8.13"
export const title = "Upgradeable Proxy"
export const description = "Example of upgradeable proxy"
export const codes = [
  {
    fileName: "UpgradeableProxy.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IFByb3h5IHsKICAgIGFkZHJlc3MgcHVibGljIGltcGxlbWVudGF0aW9uOwoKICAgIGZ1bmN0aW9uIHNldEltcGxlbWVudGF0aW9uKGFkZHJlc3MgX2ltcCkgZXh0ZXJuYWwgewogICAgICAgIGltcGxlbWVudGF0aW9uID0gX2ltcDsKICAgIH0KCiAgICBmdW5jdGlvbiBfZGVsZWdhdGUoYWRkcmVzcyBfaW1wKSBpbnRlcm5hbCB2aXJ0dWFsIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIGNhbGxkYXRhY29weSh0LCBmLCBzKQogICAgICAgICAgICAvLyBjb3B5IHMgYnl0ZXMgZnJvbSBjYWxsZGF0YSBhdCBwb3NpdGlvbiBmIHRvIG1lbSBhdCBwb3NpdGlvbiB0CiAgICAgICAgICAgIGNhbGxkYXRhY29weSgwLCAwLCBjYWxsZGF0YXNpemUoKSkKCiAgICAgICAgICAgIC8vIGRlbGVnYXRlY2FsbChnLCBhLCBpbiwgaW5zaXplLCBvdXQsIG91dHNpemUpCiAgICAgICAgICAgIC8vIC0gY2FsbCBjb250cmFjdCBhdCBhZGRyZXNzIGEKICAgICAgICAgICAgLy8gLSB3aXRoIGlucHV0IG1lbVtpbuKApihpbitpbnNpemUpKQogICAgICAgICAgICAvLyAtIHByb3ZpZGluZyBnIGdhcwogICAgICAgICAgICAvLyAtIGFuZCBvdXRwdXQgYXJlYSBtZW1bb3V04oCmKG91dCtvdXRzaXplKSkKICAgICAgICAgICAgLy8gLSByZXR1cm5pbmcgMCBvbiBlcnJvciBhbmQgMSBvbiBzdWNjZXNzCiAgICAgICAgICAgIGxldCByZXN1bHQgOj0gZGVsZWdhdGVjYWxsKGdhcygpLCBfaW1wLCAwLCBjYWxsZGF0YXNpemUoKSwgMCwgMCkKCiAgICAgICAgICAgIC8vIHJldHVybmRhdGFjb3B5KHQsIGYsIHMpCiAgICAgICAgICAgIC8vIGNvcHkgcyBieXRlcyBmcm9tIHJldHVybmRhdGEgYXQgcG9zaXRpb24gZiB0byBtZW0gYXQgcG9zaXRpb24gdAogICAgICAgICAgICByZXR1cm5kYXRhY29weSgwLCAwLCByZXR1cm5kYXRhc2l6ZSgpKQoKICAgICAgICAgICAgc3dpdGNoIHJlc3VsdAogICAgICAgICAgICBjYXNlIDAgewogICAgICAgICAgICAgICAgLy8gcmV2ZXJ0KHAsIHMpCiAgICAgICAgICAgICAgICAvLyBlbmQgZXhlY3V0aW9uLCByZXZlcnQgc3RhdGUgY2hhbmdlcywgcmV0dXJuIGRhdGEgbWVtW3DigKYocCtzKSkKICAgICAgICAgICAgICAgIHJldmVydCgwLCByZXR1cm5kYXRhc2l6ZSgpKQogICAgICAgICAgICB9CiAgICAgICAgICAgIGRlZmF1bHQgewogICAgICAgICAgICAgICAgLy8gcmV0dXJuKHAsIHMpCiAgICAgICAgICAgICAgICAvLyBlbmQgZXhlY3V0aW9uLCByZXR1cm4gZGF0YSBtZW1bcOKApihwK3MpKQogICAgICAgICAgICAgICAgcmV0dXJuKDAsIHJldHVybmRhdGFzaXplKCkpCiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9CgogICAgZmFsbGJhY2soKSBleHRlcm5hbCBwYXlhYmxlIHsKICAgICAgICBfZGVsZWdhdGUoaW1wbGVtZW50YXRpb24pOwogICAgfQp9Cgpjb250cmFjdCBWMSB7CiAgICBhZGRyZXNzIHB1YmxpYyBpbXBsZW1lbnRhdGlvbjsKICAgIHVpbnQgcHVibGljIHg7CgogICAgZnVuY3Rpb24gaW5jKCkgZXh0ZXJuYWwgewogICAgICAgIHggKz0gMTsKICAgIH0KfQoKY29udHJhY3QgVjIgewogICAgYWRkcmVzcyBwdWJsaWMgaW1wbGVtZW50YXRpb247CiAgICB1aW50IHB1YmxpYyB4OwoKICAgIGZ1bmN0aW9uIGluYygpIGV4dGVybmFsIHsKICAgICAgICB4ICs9IDE7CiAgICB9CgogICAgZnVuY3Rpb24gZGVjKCkgZXh0ZXJuYWwgewogICAgICAgIHggLT0gMTsKICAgIH0KfQo=",
  },
]

const html = `<p>Example of upgradeable proxy contract. Never use this in production.</p>
<p>This example shows how to use <code>delegatecall</code> and return data when <code>fallback</code> is called.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Proxy</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> implementation;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setImplementation</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _imp</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        implementation <span class="hljs-operator">=</span> _imp;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_delegate</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _imp</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// calldatacopy(t, f, s)</span>
            <span class="hljs-comment">// copy s bytes from calldata at position f to mem at position t</span>
            <span class="hljs-built_in">calldatacopy</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-built_in">calldatasize</span>())

            <span class="hljs-comment">// delegatecall(g, a, in, insize, out, outsize)</span>
            <span class="hljs-comment">// - call contract at address a</span>
            <span class="hljs-comment">// - with input mem[in…(in+insize))</span>
            <span class="hljs-comment">// - providing g gas</span>
            <span class="hljs-comment">// - and output area mem[out…(out+outsize))</span>
            <span class="hljs-comment">// - returning 0 on error and 1 on success</span>
            <span class="hljs-keyword">let</span> result <span class="hljs-operator">:=</span> <span class="hljs-built_in">delegatecall</span>(<span class="hljs-built_in">gas</span>(), _imp, <span class="hljs-number">0</span>, <span class="hljs-built_in">calldatasize</span>(), <span class="hljs-number">0</span>, <span class="hljs-number">0</span>)

            <span class="hljs-comment">// returndatacopy(t, f, s)</span>
            <span class="hljs-comment">// copy s bytes from returndata at position f to mem at position t</span>
            <span class="hljs-built_in">returndatacopy</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-built_in">returndatasize</span>())

            <span class="hljs-keyword">switch</span> result
            <span class="hljs-keyword">case</span> <span class="hljs-number">0</span> {
                <span class="hljs-comment">// revert(p, s)</span>
                <span class="hljs-comment">// end execution, revert state changes, return data mem[p…(p+s))</span>
                <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">returndatasize</span>())
            }
            <span class="hljs-keyword">default</span> {
                <span class="hljs-comment">// return(p, s)</span>
                <span class="hljs-comment">// end execution, return data mem[p…(p+s))</span>
                <span class="hljs-keyword">return</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">returndatasize</span>())
            }
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        _delegate(implementation);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">V1</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> implementation;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> x;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">inc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        x <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">V2</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> implementation;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> x;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">inc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        x <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">dec</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        x <span class="hljs-operator">-</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
}
</code></pre>
`

export default html
