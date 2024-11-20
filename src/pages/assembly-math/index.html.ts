// metadata
export const version = "0.8.26"
export const title = "Assembly Math"
export const description = "Example of math in assembly"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/assembly-math-solidity-code-example"

export const keywords = ["assembly", "yul", "math", "add", "mul"]

export const codes = [
  {
    fileName: "AssemblyMath.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IEFzc2VtYmx5TWF0aCB7CiAgICBmdW5jdGlvbiB5dWxfYWRkKHVpbnQyNTYgeCwgdWludDI1NiB5KSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50MjU2IHopIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIHogOj0gYWRkKHgsIHkpCiAgICAgICAgICAgIGlmIGx0KHosIHgpIHsgcmV2ZXJ0KDAsIDApIH0KICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24geXVsX211bCh1aW50MjU2IHgsIHVpbnQyNTYgeSkgcHVibGljIHB1cmUgcmV0dXJucyAodWludDI1NiB6KSB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBzd2l0Y2ggeAogICAgICAgICAgICBjYXNlIDAgeyB6IDo9IDAgfQogICAgICAgICAgICBkZWZhdWx0IHsKICAgICAgICAgICAgICAgIHogOj0gbXVsKHgsIHkpCiAgICAgICAgICAgICAgICBpZiBpc3plcm8oZXEoZGl2KHosIHgpLCB5KSkgeyByZXZlcnQoMCwgMCkgfQogICAgICAgICAgICB9CiAgICAgICAgfQogICAgfQoKICAgIC8vIFJvdW5kIHRvIG5lYXJlc3QgbXVsdGlwbGUgb2YgYgogICAgZnVuY3Rpb24geXVsX2ZpeGVkX3BvaW50X3JvdW5kKHVpbnQyNTYgeCwgdWludDI1NiBiKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50MjU2IHopCiAgICB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBiID0gMTAwCiAgICAgICAgICAgIC8vIHggPSA5MAogICAgICAgICAgICAvLyB6ID0gOTAgLyAxMDAgKiAxMDAgPSAwLCB3YW50IHogPSAxMDAKICAgICAgICAgICAgLy8geiA6PSBtdWwoZGl2KHgsIGIpLCBiKQoKICAgICAgICAgICAgbGV0IGhhbGYgOj0gZGl2KGIsIDIpCiAgICAgICAgICAgIHogOj0gYWRkKHgsIGhhbGYpCiAgICAgICAgICAgIHogOj0gbXVsKGRpdih6LCBiKSwgYikKICAgICAgICAgICAgLy8geCA9IDkwCiAgICAgICAgICAgIC8vIGhhbGYgPSA1MAogICAgICAgICAgICAvLyB6ID0gOTAgKyA1MCA9IDE0MAogICAgICAgICAgICAvLyB6ID0gMTQwIC8gMTAwICogMTAwID0gMTAwCiAgICAgICAgfQogICAgfQp9Cg==",
  },
]

const html = `<p>Example of math in <code>assembly</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">AssemblyMath</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">yul_add</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> z</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            z <span class="hljs-operator">:=</span> <span class="hljs-built_in">add</span>(x, y)
            <span class="hljs-keyword">if</span> <span class="hljs-built_in">lt</span>(z, x) { <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>) }
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">yul_mul</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> z</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">switch</span> x
            <span class="hljs-keyword">case</span> <span class="hljs-number">0</span> { z <span class="hljs-operator">:=</span> <span class="hljs-number">0</span> }
            <span class="hljs-keyword">default</span> {
                z <span class="hljs-operator">:=</span> <span class="hljs-built_in">mul</span>(x, y)
                <span class="hljs-keyword">if</span> <span class="hljs-built_in">iszero</span>(<span class="hljs-built_in">eq</span>(<span class="hljs-built_in">div</span>(z, x), y)) { <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>) }
            }
        }
    }

    <span class="hljs-comment">// Round to nearest multiple of b</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">yul_fixed_point_round</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> b</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> z</span>)
    </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// b = 100</span>
            <span class="hljs-comment">// x = 90</span>
            <span class="hljs-comment">// z = 90 / 100 * 100 = 0, want z = 100</span>
            <span class="hljs-comment">// z := mul(div(x, b), b)</span>

            <span class="hljs-keyword">let</span> half <span class="hljs-operator">:=</span> <span class="hljs-built_in">div</span>(b, <span class="hljs-number">2</span>)
            z <span class="hljs-operator">:=</span> <span class="hljs-built_in">add</span>(x, half)
            z <span class="hljs-operator">:=</span> <span class="hljs-built_in">mul</span>(<span class="hljs-built_in">div</span>(z, b), b)
            <span class="hljs-comment">// x = 90</span>
            <span class="hljs-comment">// half = 50</span>
            <span class="hljs-comment">// z = 90 + 50 = 140</span>
            <span class="hljs-comment">// z = 140 / 100 * 100 = 100</span>
        }
    }
}
</code></pre>`

export default html
