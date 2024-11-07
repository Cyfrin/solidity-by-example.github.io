// metadata
export const version = "0.8.26"
export const title = "Assembly Conditional Statements"
export const description = "Example of conditional statements in assembly"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/assembly-conditional-statements-code-example"

export const keywords = ["assembly", "yul", "if", "switch"]

export const codes = [
  {
    fileName: "AssemblyIf.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IEFzc2VtYmx5SWYgewogICAgZnVuY3Rpb24geXVsX2lmKHVpbnQyNTYgeCkgcHVibGljIHB1cmUgcmV0dXJucyAodWludDI1NiB6KSB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBpZiBjb25kaXRpb24gPSAxIHsgY29kZSB9CiAgICAgICAgICAgIC8vIG5vIGVsc2UKICAgICAgICAgICAgLy8gaWYgMCB7IHogOj0gOTkgfQogICAgICAgICAgICAvLyBpZiAxIHsgeiA6PSA5OSB9CiAgICAgICAgICAgIGlmIGx0KHgsIDEwKSB7IHogOj0gOTkgfQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiB5dWxfc3dpdGNoKHVpbnQyNTYgeCkgcHVibGljIHB1cmUgcmV0dXJucyAodWludDI1NiB6KSB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBzd2l0Y2ggeAogICAgICAgICAgICBjYXNlIDEgeyB6IDo9IDEwIH0KICAgICAgICAgICAgY2FzZSAyIHsgeiA6PSAyMCB9CiAgICAgICAgICAgIGRlZmF1bHQgeyB6IDo9IDAgfQogICAgICAgIH0KICAgIH0KfQo=",
  },
]

const html = `<p>Example of conditional statements in <code>assembly</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">AssemblyIf</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">yul_if</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> z</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// if condition = 1 { code }</span>
            <span class="hljs-comment">// no else</span>
            <span class="hljs-comment">// if 0 { z := 99 }</span>
            <span class="hljs-comment">// if 1 { z := 99 }</span>
            <span class="hljs-keyword">if</span> <span class="hljs-built_in">lt</span>(x, <span class="hljs-number">10</span>) { z <span class="hljs-operator">:=</span> <span class="hljs-number">99</span> }
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">yul_switch</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> z</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">switch</span> x
            <span class="hljs-keyword">case</span> <span class="hljs-number">1</span> { z <span class="hljs-operator">:=</span> <span class="hljs-number">10</span> }
            <span class="hljs-keyword">case</span> <span class="hljs-number">2</span> { z <span class="hljs-operator">:=</span> <span class="hljs-number">20</span> }
            <span class="hljs-keyword">default</span> { z <span class="hljs-operator">:=</span> <span class="hljs-number">0</span> }
        }
    }
}
</code></pre>`

export default html
