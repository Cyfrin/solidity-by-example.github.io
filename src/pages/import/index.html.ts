// metadata
export const version = "0.8.26"
export const title = "Import"
export const description = "Learn how to import other Solidity files"
export const cyfrinLink = "https://www.cyfrin.io/glossary/import-solidity-code-example"

export const keywords = ["import"]

export const codes = [
  {
    fileName: "Foo.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCnN0cnVjdCBQb2ludCB7CiAgICB1aW50MjU2IHg7CiAgICB1aW50MjU2IHk7Cn0KCmVycm9yIFVuYXV0aG9yaXplZChhZGRyZXNzIGNhbGxlcik7CgpmdW5jdGlvbiBhZGQodWludDI1NiB4LCB1aW50MjU2IHkpIHB1cmUgcmV0dXJucyAodWludDI1NikgewogICAgcmV0dXJuIHggKyB5Owp9Cgpjb250cmFjdCBGb28gewogICAgc3RyaW5nIHB1YmxpYyBuYW1lID0gIkZvbyI7Cn0K",
  },
  {
    fileName: "Import.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8vIGltcG9ydCBGb28uc29sIGZyb20gY3VycmVudCBkaXJlY3RvcnkKaW1wb3J0ICIuL0Zvby5zb2wiOwoKLy8gaW1wb3J0IHtzeW1ib2wxIGFzIGFsaWFzLCBzeW1ib2wyfSBmcm9tICJmaWxlbmFtZSI7CmltcG9ydCB7VW5hdXRob3JpemVkLCBhZGQgYXMgZnVuYywgUG9pbnR9IGZyb20gIi4vRm9vLnNvbCI7Cgpjb250cmFjdCBJbXBvcnQgewogICAgLy8gSW5pdGlhbGl6ZSBGb28uc29sCiAgICBGb28gcHVibGljIGZvbyA9IG5ldyBGb28oKTsKCiAgICAvLyBUZXN0IEZvby5zb2wgYnkgZ2V0dGluZyBpdHMgbmFtZS4KICAgIGZ1bmN0aW9uIGdldEZvb05hbWUoKSBwdWJsaWMgdmlldyByZXR1cm5zIChzdHJpbmcgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIGZvby5uYW1lKCk7CiAgICB9Cn0K",
  },
]

const html = `<p>You can import local and external files in Solidity.</p>
<h3>Local</h3>
<p>Here is our folder structure.</p>
<pre><code>├── Import.sol
└── Foo.sol
</code></pre><p>Foo.sol</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-keyword">struct</span> <span class="hljs-title">Point</span> {
    <span class="hljs-keyword">uint256</span> x;
    <span class="hljs-keyword">uint256</span> y;
}

<span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">Unauthorized</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> caller</span>)</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
    <span class="hljs-keyword">return</span> x <span class="hljs-operator">+</span> y;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Foo</span> </span>{
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> name <span class="hljs-operator">=</span> <span class="hljs-string">"Foo"</span>;
}
</code></pre><p>Import.sol</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">// import Foo.sol from current directory</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">"./Foo.sol"</span>;

<span class="hljs-comment">// import {symbol1 as alias, symbol2} from "filename";</span>
<span class="hljs-keyword">import</span> {<span class="hljs-title">Unauthorized</span>, <span class="hljs-title">add</span> <span class="hljs-title"><span class="hljs-keyword">as</span></span> <span class="hljs-title">func</span>, <span class="hljs-title">Point</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"./Foo.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Import</span> </span>{
    <span class="hljs-comment">// Initialize Foo.sol</span>
    Foo <span class="hljs-keyword">public</span> foo <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Foo();

    <span class="hljs-comment">// Test Foo.sol by getting its name.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getFooName</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> foo.<span class="hljs-built_in">name</span>();
    }
}
</code></pre><h3>External</h3>
<p>You can also import from <a href="https://github.com">GitHub</a> by simply copying the url</p>
<pre><code class="language-solidity"><span class="hljs-comment">// https://github.com/owner/repo/blob/branch/path/to/Contract.sol</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">"https://github.com/owner/repo/blob/branch/path/to/Contract.sol"</span>;

<span class="hljs-comment">// Example import ECDSA.sol from openzeppelin-contract repo, release-v4.5 branch</span>
<span class="hljs-comment">// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol"</span>;
</code></pre>`

export default html
