// metadata
export const version = "0.8.26"
export const title = "Assembly Variable"
export const description = "Example of how to declare variables inside assembly"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/assembly-variable-solidity-code-example"

export const keywords = ["assembly", "variable", "yul"]

export const codes = [
  {
    fileName: "AssemblyVariable.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IEFzc2VtYmx5VmFyaWFibGUgewogICAgZnVuY3Rpb24geXVsX2xldCgpIHB1YmxpYyBwdXJlIHJldHVybnMgKHVpbnQyNTYgeikgewogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gTGFuZ3VhZ2UgdXNlZCBmb3IgYXNzZW1ibHkgaXMgY2FsbGVkIFl1bAogICAgICAgICAgICAvLyBMb2NhbCB2YXJpYWJsZXMKICAgICAgICAgICAgbGV0IHggOj0gMTIzCiAgICAgICAgICAgIHogOj0gNDU2CiAgICAgICAgfQogICAgfQp9Cg==",
  },
]

const html = `<p>Example of how to declare variables inside <code>assembly</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">AssemblyVariable</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">yul_let</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> z</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// Language used for assembly is called Yul</span>
            <span class="hljs-comment">// Local variables</span>
            <span class="hljs-keyword">let</span> x <span class="hljs-operator">:=</span> <span class="hljs-number">123</span>
            z <span class="hljs-operator">:=</span> <span class="hljs-number">456</span>
        }
    }
}
</code></pre>`

export default html
