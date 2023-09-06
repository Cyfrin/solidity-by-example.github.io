// metadata
export const version = "0.8.20"
export const title = "Assembly Math"
export const description = "Example of math in assembly"

export const keywords = ["assembly", "yul", "math", "add", "mul"]

export const codes = [
    {
        fileName: "AssemblyMath.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IEFzc2VtYmx5TWF0aCB7CiAgICBmdW5jdGlvbiB5dWxfYWRkKHVpbnQgeCwgdWludCB5KSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50IHopIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIHogOj0gYWRkKHgsIHkpCiAgICAgICAgICAgIGlmIGx0KHosIHgpIHsgcmV2ZXJ0KDAsIDApIH0KICAgICAgICB9CiAgICB9CiAgICAKICAgIGZ1bmN0aW9uIHl1bF9tdWwodWludCB4LCB1aW50IHkpIHB1YmxpYyBwdXJlIHJldHVybnMgKHVpbnQgeikgewogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgc3dpdGNoIHgKICAgICAgICAgICAgY2FzZSAwIHsgeiA6PSAwIH0KICAgICAgICAgICAgZGVmYXVsdCB7CiAgICAgICAgICAgICAgICB6IDo9IG11bCh4LCB5KQogICAgICAgICAgICAgICAgaWYgaXN6ZXJvKGVxKGRpdih6LCB4KSwgeSkpIHsgcmV2ZXJ0KDAsIDApIH0KICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0KICAgIAogICAgLy8gUm91bmQgdG8gbmVhcmVzdCBtdWx0aXBsZSBvZiBiCiAgICBmdW5jdGlvbiB5dWxfZml4ZWRfcG9pbnRfcm91bmQodWludCB4LCB1aW50IGIpIHB1YmxpYyBwdXJlIHJldHVybnMgKHVpbnQgeikgewogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gYiA9IDEwMAogICAgICAgICAgICAvLyB4ID0gOTAKICAgICAgICAgICAgLy8geiA9IDkwIC8gMTAwICogMTAwID0gMCwgd2FudCB6ID0gMTAwCiAgICAgICAgICAgIC8vIHogOj0gbXVsKGRpdih4LCBiKSwgYikKICAgICAgICAgICAgCiAgICAgICAgICAgIGxldCBoYWxmIDo9IGRpdihiLCAyKQogICAgICAgICAgICB6IDo9IGFkZCh4LCBoYWxmKQogICAgICAgICAgICB6IDo9IG11bChkaXYoeiwgYiksIGIpCiAgICAgICAgICAgIC8vIHggPSA5MAogICAgICAgICAgICAvLyBoYWxmID0gNTAKICAgICAgICAgICAgLy8geiA9IDkwICsgNTAgPSAxNDAKICAgICAgICAgICAgLy8geiA9IDE0MCAvIDEwMCAqIDEwMCA9IDEwMAogICAgICAgIH0KICAgIH0KfQ==",
    },
]

const html = `<p>Example of math in <code>assembly</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">AssemblyMath</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">yul_add</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> z</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            z <span class="hljs-operator">:=</span> <span class="hljs-built_in">add</span>(x, y)
            <span class="hljs-keyword">if</span> <span class="hljs-built_in">lt</span>(z, x) { <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>) }
        }
    }
    
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">yul_mul</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> z</span>) </span>{
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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">yul_fixed_point_round</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> b</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> z</span>) </span>{
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
