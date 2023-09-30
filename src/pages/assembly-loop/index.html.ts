// metadata
export const version = "0.8.20"
export const title = "Assembly Loop"
export const description = "Example of loop in assembly"

export const keywords = ["assembly", "loop", "yul", "while", "for"]

export const codes = [
  {
    fileName: "AssemblyLoop.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IEFzc2VtYmx5TG9vcCB7CiAgICBmdW5jdGlvbiB5dWxfZm9yX2xvb3AoKSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50IHopIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGZvciB7IGxldCBpIDo9IDAgfSBsdChpLCAxMCkgeyBpIDo9IGFkZChpLCAxKSB9IHsKICAgICAgICAgICAgICAgIHogOj0gYWRkKHosIDEpCiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9CiAgICAKICAgIGZ1bmN0aW9uIHl1bF93aGlsZV9sb29wKCkgcHVibGljIHB1cmUgcmV0dXJucyAodWludCB6KSB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBsZXQgaSA6PSAwCiAgICAgICAgICAgIGZvciB7fSBsdChpLCA1KSB7fSB7CiAgICAgICAgICAgICAgICBpIDo9IGFkZChpLCAxKQogICAgICAgICAgICAgICAgeiA6PSBhZGQoeiwgMSkKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0KfQ==",
  },
]

const html = `<p>Example of loop in assembly</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">AssemblyLoop</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">yul_for_loop</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> z</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">for</span> { <span class="hljs-keyword">let</span> i <span class="hljs-operator">:=</span> <span class="hljs-number">0</span> } <span class="hljs-built_in">lt</span>(i, <span class="hljs-number">10</span>) { i <span class="hljs-operator">:=</span> <span class="hljs-built_in">add</span>(i, <span class="hljs-number">1</span>) } {
                z <span class="hljs-operator">:=</span> <span class="hljs-built_in">add</span>(z, <span class="hljs-number">1</span>)
            }
        }
    }
    
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">yul_while_loop</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> z</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">let</span> i <span class="hljs-operator">:=</span> <span class="hljs-number">0</span>
            <span class="hljs-keyword">for</span> {} <span class="hljs-built_in">lt</span>(i, <span class="hljs-number">5</span>) {} {
                i <span class="hljs-operator">:=</span> <span class="hljs-built_in">add</span>(i, <span class="hljs-number">1</span>)
                z <span class="hljs-operator">:=</span> <span class="hljs-built_in">add</span>(z, <span class="hljs-number">1</span>)
            }
        }
    }
}
</code></pre>`

export default html
