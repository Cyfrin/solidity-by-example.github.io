// metadata
export const version = "0.8.24"
export const title = "Assembly Error"
export const description = "Example of error in assembly"

export const keywords = ["assembly", "yul", "error", "revert"]

export const codes = [
  {
    fileName: "AssemblyError.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmNvbnRyYWN0IEFzc2VtYmx5RXJyb3IgewogICAgZnVuY3Rpb24geXVsX3JldmVydCh1aW50MjU2IHgpIHB1YmxpYyBwdXJlIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIHJldmVydChwLCBzKSAtIGVuZCBleGVjdXRpb24KICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgcmV2ZXJ0IHN0YXRlIGNoYW5nZXMKICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEgbWVtW3DigKYocCtzKSkKICAgICAgICAgICAgaWYgZ3QoeCwgMTApIHsgcmV2ZXJ0KDAsIDApIH0KICAgICAgICB9CiAgICB9Cn0K",
  },
]

const html = `<p>Example of error in <code>assembly</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">AssemblyError</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">yul_revert</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// revert(p, s) - end execution</span>
            <span class="hljs-comment">//                revert state changes</span>
            <span class="hljs-comment">//                return data mem[p…(p+s))</span>
            <span class="hljs-keyword">if</span> <span class="hljs-built_in">gt</span>(x, <span class="hljs-number">10</span>) { <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>) }
        }
    }
}
</code></pre>`

export default html
