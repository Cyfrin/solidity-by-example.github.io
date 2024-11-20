// metadata
export const version = "0.8.26"
export const title = "For and While Loop"
export const description = "Example of for and while loop in Solidity"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/for-and-while-loop-solidity-code-example"

export const keywords = ["for", "loop", "loops", "while", "do"]

export const codes = [
  {
    fileName: "Loop.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IExvb3AgewogICAgZnVuY3Rpb24gbG9vcCgpIHB1YmxpYyB7CiAgICAgICAgLy8gZm9yIGxvb3AKICAgICAgICBmb3IgKHVpbnQyNTYgaSA9IDA7IGkgPCAxMDsgaSsrKSB7CiAgICAgICAgICAgIGlmIChpID09IDMpIHsKICAgICAgICAgICAgICAgIC8vIFNraXAgdG8gbmV4dCBpdGVyYXRpb24gd2l0aCBjb250aW51ZQogICAgICAgICAgICAgICAgY29udGludWU7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaWYgKGkgPT0gNSkgewogICAgICAgICAgICAgICAgLy8gRXhpdCBsb29wIHdpdGggYnJlYWsKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICAvLyB3aGlsZSBsb29wCiAgICAgICAgdWludDI1NiBqOwogICAgICAgIHdoaWxlIChqIDwgMTApIHsKICAgICAgICAgICAgaisrOwogICAgICAgIH0KICAgIH0KfQo=",
  },
]

const html = `<p>Solidity supports <code>for</code>, <code>while</code>, and <code>do while</code> loops.</p>
<p>Don&#39;t write loops that are unbounded as this can hit the gas limit, causing your transaction to fail.</p>
<p>For the reason above, <code>while</code> and <code>do while</code> loops are rarely used.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Loop</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">loop</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// for loop</span>
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> <span class="hljs-number">10</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-keyword">if</span> (i <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">3</span>) {
                <span class="hljs-comment">// Skip to next iteration with continue</span>
                <span class="hljs-keyword">continue</span>;
            }
            <span class="hljs-keyword">if</span> (i <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">5</span>) {
                <span class="hljs-comment">// Exit loop with break</span>
                <span class="hljs-keyword">break</span>;
            }
        }

        <span class="hljs-comment">// while loop</span>
        <span class="hljs-keyword">uint256</span> j;
        <span class="hljs-keyword">while</span> (j <span class="hljs-operator">&lt;</span> <span class="hljs-number">10</span>) {
            j<span class="hljs-operator">+</span><span class="hljs-operator">+</span>;
        }
    }
}
</code></pre>`

export default html
