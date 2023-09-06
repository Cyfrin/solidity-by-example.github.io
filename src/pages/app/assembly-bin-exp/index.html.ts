// metadata
export const version = "0.8.20"
export const title = "Assembly Binary Exponentiation"
export const description = "Example of binary exponentiation in assembly"

export const keywords = [
    "assembly",
    "yul",
    "binary",
    "exponentiation",
    "math",
]

export const codes = [
    {
        fileName: "AssemblyBinExp.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IEFzc2VtYmx5QmluRXhwIHsKICAgIC8vIEJpbmFyeSBleHBvbmVudGlhdGlvbiB0byBjYWxjdWxhdGUgeCoqbgogICAgZnVuY3Rpb24gcnBvdyh1aW50MjU2IHgsIHVpbnQyNTYgbiwgdWludDI1NiBiKSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50MjU2IHopIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIHN3aXRjaCB4CiAgICAgICAgICAgIC8vIHggPSAwCiAgICAgICAgICAgIGNhc2UgMCB7CiAgICAgICAgICAgICAgICBzd2l0Y2ggbgogICAgICAgICAgICAgICAgY2FzZSAwIHsKICAgICAgICAgICAgICAgICAgICAvLyAwKiowCiAgICAgICAgICAgICAgICAgICAgeiA6PSBiCiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICBkZWZhdWx0IHsKICAgICAgICAgICAgICAgICAgICAvLyAwKipuLCBuID4gMAogICAgICAgICAgICAgICAgICAgIHogOj0gMAogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgICAgIC8vIHggPiAwCiAgICAgICAgICAgIGRlZmF1bHQgewogICAgICAgICAgICAgICAgc3dpdGNoIG1vZChuLCAyKQogICAgICAgICAgICAgICAgLy8gZXZlbgogICAgICAgICAgICAgICAgY2FzZSAwIHsgeiA6PSBiIH0KICAgICAgICAgICAgICAgIC8vIG9kZAogICAgICAgICAgICAgICAgZGVmYXVsdCB7IHogOj0geCB9CiAgICAgICAgICAgICAgICBsZXQgaGFsZiA6PSBkaXYoYiwgMikKICAgICAgICAgICAgICAgIGZvciB7IG4gOj0gZGl2KG4sIDIpIH0gbiB7IG4gOj0gZGl2KG4sIDIpIH0gewogICAgICAgICAgICAgICAgICAgIGxldCB4eCA6PSBtdWwoeCwgeCkKICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBvdmVyZmxvdz8gcmV2ZXJ0IGlmIHh4IC8geCAhPSB4CiAgICAgICAgICAgICAgICAgICAgaWYgaXN6ZXJvKGVxKGRpdih4eCwgeCksIHgpKSB7IHJldmVydCgwLCAwKSB9CiAgICAgICAgICAgICAgICAgICAgLy8gUm91bmQgLSAoeHggKyBoYWxmKSAvIGIKICAgICAgICAgICAgICAgICAgICBsZXQgeHhSb3VuZCA6PSBhZGQoeHgsIGhhbGYpCiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgb3ZlcmZsb3cgLSByZXZlcnQgaWYgeHhSb3VuZCA8IHh4CiAgICAgICAgICAgICAgICAgICAgaWYgbHQoeHhSb3VuZCwgeHgpIHsgcmV2ZXJ0KDAsIDApIH0KICAgICAgICAgICAgICAgICAgICB4IDo9IGRpdih4eFJvdW5kLCBiKQogICAgICAgICAgICAgICAgICAgIC8vIGlmIG4gJSAyID09IDEKICAgICAgICAgICAgICAgICAgICBpZiBtb2QobiwgMikgewogICAgICAgICAgICAgICAgICAgICAgICBsZXQgenggOj0gbXVsKHosIHgpCiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldmVydCBpZiB4ICE9IDAgYW5kIHp4IC8geCAhPSB6CiAgICAgICAgICAgICAgICAgICAgICAgIGlmIGFuZChpc3plcm8oaXN6ZXJvKHgpKSwgaXN6ZXJvKGVxKGRpdih6eCwgeCksIHopKSkgeyByZXZlcnQoMCwgMCkgfQogICAgICAgICAgICAgICAgICAgICAgICAvLyBSb3VuZCAtICh6eCArIGhhbGYpIC8gYgogICAgICAgICAgICAgICAgICAgICAgICBsZXQgenhSb3VuZCA6PSBhZGQoengsIGhhbGYpCiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIG92ZXJmbG93IC0gcmV2ZXJ0IGlmIHp4Um91bmQgPCB6eAogICAgICAgICAgICAgICAgICAgICAgICBpZiBsdCh6eFJvdW5kLCB6eCkgeyByZXZlcnQoMCwgMCkgfQogICAgICAgICAgICAgICAgICAgICAgICB6IDo9IGRpdih6eFJvdW5kLCBiKQogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0KCn0=",
    },
]

const html = `<p>Example of binary exponentiation in <code>assembly</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">AssemblyBinExp</span> </span>{
    <span class="hljs-comment">// Binary exponentiation to calculate x**n</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">rpow</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> n, <span class="hljs-keyword">uint256</span> b</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> z</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">switch</span> x
            <span class="hljs-comment">// x = 0</span>
            <span class="hljs-keyword">case</span> <span class="hljs-number">0</span> {
                <span class="hljs-keyword">switch</span> n
                <span class="hljs-keyword">case</span> <span class="hljs-number">0</span> {
                    <span class="hljs-comment">// 0**0</span>
                    z <span class="hljs-operator">:=</span> b
                }
                <span class="hljs-keyword">default</span> {
                    <span class="hljs-comment">// 0**n, n &gt; 0</span>
                    z <span class="hljs-operator">:=</span> <span class="hljs-number">0</span>
                }
            }
            <span class="hljs-comment">// x &gt; 0</span>
            <span class="hljs-keyword">default</span> {
                <span class="hljs-keyword">switch</span> <span class="hljs-built_in">mod</span>(n, <span class="hljs-number">2</span>)
                <span class="hljs-comment">// even</span>
                <span class="hljs-keyword">case</span> <span class="hljs-number">0</span> { z <span class="hljs-operator">:=</span> b }
                <span class="hljs-comment">// odd</span>
                <span class="hljs-keyword">default</span> { z <span class="hljs-operator">:=</span> x }
                <span class="hljs-keyword">let</span> half <span class="hljs-operator">:=</span> <span class="hljs-built_in">div</span>(b, <span class="hljs-number">2</span>)
                <span class="hljs-keyword">for</span> { n <span class="hljs-operator">:=</span> <span class="hljs-built_in">div</span>(n, <span class="hljs-number">2</span>) } n { n <span class="hljs-operator">:=</span> <span class="hljs-built_in">div</span>(n, <span class="hljs-number">2</span>) } {
                    <span class="hljs-keyword">let</span> xx <span class="hljs-operator">:=</span> <span class="hljs-built_in">mul</span>(x, x)
                    <span class="hljs-comment">// Check overflow? revert if xx / x != x</span>
                    <span class="hljs-keyword">if</span> <span class="hljs-built_in">iszero</span>(<span class="hljs-built_in">eq</span>(<span class="hljs-built_in">div</span>(xx, x), x)) { <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>) }
                    <span class="hljs-comment">// Round - (xx + half) / b</span>
                    <span class="hljs-keyword">let</span> xxRound <span class="hljs-operator">:=</span> <span class="hljs-built_in">add</span>(xx, half)
                    <span class="hljs-comment">// Check overflow - revert if xxRound &lt; xx</span>
                    <span class="hljs-keyword">if</span> <span class="hljs-built_in">lt</span>(xxRound, xx) { <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>) }
                    x <span class="hljs-operator">:=</span> <span class="hljs-built_in">div</span>(xxRound, b)
                    <span class="hljs-comment">// if n % 2 == 1</span>
                    <span class="hljs-keyword">if</span> <span class="hljs-built_in">mod</span>(n, <span class="hljs-number">2</span>) {
                        <span class="hljs-keyword">let</span> zx <span class="hljs-operator">:=</span> <span class="hljs-built_in">mul</span>(z, x)
                        <span class="hljs-comment">// revert if x != 0 and zx / x != z</span>
                        <span class="hljs-keyword">if</span> <span class="hljs-built_in">and</span>(<span class="hljs-built_in">iszero</span>(<span class="hljs-built_in">iszero</span>(x)), <span class="hljs-built_in">iszero</span>(<span class="hljs-built_in">eq</span>(<span class="hljs-built_in">div</span>(zx, x), z))) { <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>) }
                        <span class="hljs-comment">// Round - (zx + half) / b</span>
                        <span class="hljs-keyword">let</span> zxRound <span class="hljs-operator">:=</span> <span class="hljs-built_in">add</span>(zx, half)
                        <span class="hljs-comment">// Check overflow - revert if zxRound &lt; zx</span>
                        <span class="hljs-keyword">if</span> <span class="hljs-built_in">lt</span>(zxRound, zx) { <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>) }
                        z <span class="hljs-operator">:=</span> <span class="hljs-built_in">div</span>(zxRound, b)
                    }
                }
            }
        }
    }

}
</code></pre>`

export default html
