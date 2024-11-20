// metadata
export const version = "0.8.26"
export const title = "Bitwise Operators"
export const description = "Learn about bitwise operators in Solidity"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/bitwise-operators-solidity-code-example"

export const keywords = ["bitwise", "most", "significant", "bit", "assembly"]

export const codes = [
  {
    fileName: "Bitwise.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IEJpdHdpc2VPcHMgewogICAgLy8geCAgICAgPSAxMTEwID0gOCArIDQgKyAyICsgMCA9IDE0CiAgICAvLyB5ICAgICA9IDEwMTEgPSA4ICsgMCArIDIgKyAxID0gMTEKICAgIC8vIHggJiB5ID0gMTAxMCA9IDggKyAwICsgMiArIDAgPSAxMAogICAgZnVuY3Rpb24gYW5kKHVpbnQyNTYgeCwgdWludDI1NiB5KSBleHRlcm5hbCBwdXJlIHJldHVybnMgKHVpbnQyNTYpIHsKICAgICAgICByZXR1cm4geCAmIHk7CiAgICB9CgogICAgLy8geCAgICAgPSAxMTAwID0gOCArIDQgKyAwICsgMCA9IDEyCiAgICAvLyB5ICAgICA9IDEwMDEgPSA4ICsgMCArIDAgKyAxID0gOQogICAgLy8geCB8IHkgPSAxMTAxID0gOCArIDQgKyAwICsgMSA9IDEzCiAgICBmdW5jdGlvbiBvcih1aW50MjU2IHgsIHVpbnQyNTYgeSkgZXh0ZXJuYWwgcHVyZSByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgcmV0dXJuIHggfCB5OwogICAgfQoKICAgIC8vIHggICAgID0gMTEwMCA9IDggKyA0ICsgMCArIDAgPSAxMgogICAgLy8geSAgICAgPSAwMTAxID0gMCArIDQgKyAwICsgMSA9IDUKICAgIC8vIHggXiB5ID0gMTAwMSA9IDggKyAwICsgMCArIDEgPSA5CiAgICBmdW5jdGlvbiB4b3IodWludDI1NiB4LCB1aW50MjU2IHkpIGV4dGVybmFsIHB1cmUgcmV0dXJucyAodWludDI1NikgewogICAgICAgIHJldHVybiB4IF4geTsKICAgIH0KCiAgICAvLyB4ICA9IDAwMDAxMTAwID0gICAwICsgIDAgKyAgMCArICAwICsgOCArIDQgKyAwICsgMCA9IDEyCiAgICAvLyB+eCA9IDExMTEwMDExID0gMTI4ICsgNjQgKyAzMiArIDE2ICsgMCArIDAgKyAyICsgMSA9IDI0MwogICAgZnVuY3Rpb24gbm90KHVpbnQ4IHgpIGV4dGVybmFsIHB1cmUgcmV0dXJucyAodWludDgpIHsKICAgICAgICByZXR1cm4gfng7CiAgICB9CgogICAgLy8gMSA8PCAwID0gMDAwMSAtLT4gMDAwMSA9IDEKICAgIC8vIDEgPDwgMSA9IDAwMDEgLS0+IDAwMTAgPSAyCiAgICAvLyAxIDw8IDIgPSAwMDAxIC0tPiAwMTAwID0gNAogICAgLy8gMSA8PCAzID0gMDAwMSAtLT4gMTAwMCA9IDgKICAgIC8vIDMgPDwgMiA9IDAwMTEgLS0+IDExMDAgPSAxMgogICAgZnVuY3Rpb24gc2hpZnRMZWZ0KHVpbnQyNTYgeCwgdWludDI1NiBiaXRzKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYpCiAgICB7CiAgICAgICAgcmV0dXJuIHggPDwgYml0czsKICAgIH0KCiAgICAvLyA4ICA+PiAwID0gMTAwMCAtLT4gMTAwMCA9IDgKICAgIC8vIDggID4+IDEgPSAxMDAwIC0tPiAwMTAwID0gNAogICAgLy8gOCAgPj4gMiA9IDEwMDAgLS0+IDAwMTAgPSAyCiAgICAvLyA4ICA+PiAzID0gMTAwMCAtLT4gMDAwMSA9IDEKICAgIC8vIDggID4+IDQgPSAxMDAwIC0tPiAwMDAwID0gMAogICAgLy8gMTIgPj4gMSA9IDExMDAgLS0+IDAxMTAgPSA2CiAgICBmdW5jdGlvbiBzaGlmdFJpZ2h0KHVpbnQyNTYgeCwgdWludDI1NiBiaXRzKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYpCiAgICB7CiAgICAgICAgcmV0dXJuIHggPj4gYml0czsKICAgIH0KCiAgICAvLyBHZXQgbGFzdCBuIGJpdHMgZnJvbSB4CiAgICBmdW5jdGlvbiBnZXRMYXN0TkJpdHModWludDI1NiB4LCB1aW50MjU2IG4pCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAodWludDI1NikKICAgIHsKICAgICAgICAvLyBFeGFtcGxlLCBsYXN0IDMgYml0cwogICAgICAgIC8vIHggICAgICAgID0gMTEwMSA9IDEzCiAgICAgICAgLy8gbWFzayAgICAgPSAwMTExID0gNwogICAgICAgIC8vIHggJiBtYXNrID0gMDEwMSA9IDUKICAgICAgICB1aW50MjU2IG1hc2sgPSAoMSA8PCBuKSAtIDE7CiAgICAgICAgcmV0dXJuIHggJiBtYXNrOwogICAgfQoKICAgIC8vIEdldCBsYXN0IG4gYml0cyBmcm9tIHggdXNpbmcgbW9kIG9wZXJhdG9yCiAgICBmdW5jdGlvbiBnZXRMYXN0TkJpdHNVc2luZ01vZCh1aW50MjU2IHgsIHVpbnQyNTYgbikKICAgICAgICBleHRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50MjU2KQogICAgewogICAgICAgIC8vIDEgPDwgbiA9IDIgKiogbgogICAgICAgIHJldHVybiB4ICUgKDEgPDwgbik7CiAgICB9CgogICAgLy8gR2V0IHBvc2l0aW9uIG9mIG1vc3Qgc2lnbmlmaWNhbnQgYml0CiAgICAvLyB4ID0gMTEwMCA9IDEyLCBtb3N0IHNpZ25pZmljYW50IGJpdCA9IDEwMDAsIHNvIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gMwogICAgZnVuY3Rpb24gbW9zdFNpZ25pZmljYW50Qml0KHVpbnQyNTYgeCkgZXh0ZXJuYWwgcHVyZSByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgdWludDI1NiBpID0gMDsKICAgICAgICB3aGlsZSAoKHggPj49IDEpID4gMCkgewogICAgICAgICAgICArK2k7CiAgICAgICAgfQogICAgICAgIHJldHVybiBpOwogICAgfQoKICAgIC8vIEdldCBmaXJzdCBuIGJpdHMgZnJvbSB4CiAgICAvLyBsZW4gPSBsZW5ndGggb2YgYml0cyBpbiB4ID0gcG9zaXRpb24gb2YgbW9zdCBzaWduaWZpY2FudCBiaXQgb2YgeCwgKyAxCiAgICBmdW5jdGlvbiBnZXRGaXJzdE5CaXRzKHVpbnQyNTYgeCwgdWludDI1NiBuLCB1aW50MjU2IGxlbikKICAgICAgICBleHRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50MjU2KQogICAgewogICAgICAgIC8vIEV4YW1wbGUKICAgICAgICAvLyB4ICAgICAgICA9IDExMTAgPSAxNCwgbiA9IDIsIGxlbiA9IDQKICAgICAgICAvLyBtYXNrICAgICA9IDExMDAgPSAxMgogICAgICAgIC8vIHggJiBtYXNrID0gMTEwMCA9IDEyCiAgICAgICAgdWludDI1NiBtYXNrID0gKCgxIDw8IG4pIC0gMSkgPDwgKGxlbiAtIG4pOwogICAgICAgIHJldHVybiB4ICYgbWFzazsKICAgIH0KfQo=",
  },
  {
    fileName: "MostSignificantBitAssembly.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IE1vc3RTaWduaWZpY2FudEJpdEFzc2VtYmx5IHsKICAgIGZ1bmN0aW9uIG1vc3RTaWduaWZpY2FudEJpdCh1aW50MjU2IHgpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAodWludDI1NiBtc2IpCiAgICB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBsZXQgZiA6PSBzaGwoNywgZ3QoeCwgMHhGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRikpCiAgICAgICAgICAgIHggOj0gc2hyKGYsIHgpCiAgICAgICAgICAgIC8vIG9yIGNhbiBiZSByZXBsYWNlZCB3aXRoIGFkZAogICAgICAgICAgICBtc2IgOj0gb3IobXNiLCBmKQogICAgICAgIH0KICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGxldCBmIDo9IHNobCg2LCBndCh4LCAweEZGRkZGRkZGRkZGRkZGRkYpKQogICAgICAgICAgICB4IDo9IHNocihmLCB4KQogICAgICAgICAgICBtc2IgOj0gb3IobXNiLCBmKQogICAgICAgIH0KICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGxldCBmIDo9IHNobCg1LCBndCh4LCAweEZGRkZGRkZGKSkKICAgICAgICAgICAgeCA6PSBzaHIoZiwgeCkKICAgICAgICAgICAgbXNiIDo9IG9yKG1zYiwgZikKICAgICAgICB9CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBsZXQgZiA6PSBzaGwoNCwgZ3QoeCwgMHhGRkZGKSkKICAgICAgICAgICAgeCA6PSBzaHIoZiwgeCkKICAgICAgICAgICAgbXNiIDo9IG9yKG1zYiwgZikKICAgICAgICB9CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBsZXQgZiA6PSBzaGwoMywgZ3QoeCwgMHhGRikpCiAgICAgICAgICAgIHggOj0gc2hyKGYsIHgpCiAgICAgICAgICAgIG1zYiA6PSBvcihtc2IsIGYpCiAgICAgICAgfQogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgbGV0IGYgOj0gc2hsKDIsIGd0KHgsIDB4RikpCiAgICAgICAgICAgIHggOj0gc2hyKGYsIHgpCiAgICAgICAgICAgIG1zYiA6PSBvcihtc2IsIGYpCiAgICAgICAgfQogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgbGV0IGYgOj0gc2hsKDEsIGd0KHgsIDB4MykpCiAgICAgICAgICAgIHggOj0gc2hyKGYsIHgpCiAgICAgICAgICAgIG1zYiA6PSBvcihtc2IsIGYpCiAgICAgICAgfQogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgbGV0IGYgOj0gZ3QoeCwgMHgxKQogICAgICAgICAgICBtc2IgOj0gb3IobXNiLCBmKQogICAgICAgIH0KICAgIH0KfQo=",
  },
  {
    fileName: "MostSignificantBitFunction.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IE1vc3RTaWduaWZpY2FudEJpdEZ1bmN0aW9uIHsKICAgIC8vIEZpbmQgbW9zdCBzaWduaWZpY2FudCBiaXQgdXNpbmcgYmluYXJ5IHNlYXJjaAogICAgZnVuY3Rpb24gbW9zdFNpZ25pZmljYW50Qml0KHVpbnQyNTYgeCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50MjU2IG1zYikKICAgIHsKICAgICAgICAvLyB4ID49IDIgKiogMTI4CiAgICAgICAgaWYgKHggPj0gMHgxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDApIHsKICAgICAgICAgICAgeCA+Pj0gMTI4OwogICAgICAgICAgICBtc2IgKz0gMTI4OwogICAgICAgIH0KICAgICAgICAvLyB4ID49IDIgKiogNjQKICAgICAgICBpZiAoeCA+PSAweDEwMDAwMDAwMDAwMDAwMDAwKSB7CiAgICAgICAgICAgIHggPj49IDY0OwogICAgICAgICAgICBtc2IgKz0gNjQ7CiAgICAgICAgfQogICAgICAgIC8vIHggPj0gMiAqKiAzMgogICAgICAgIGlmICh4ID49IDB4MTAwMDAwMDAwKSB7CiAgICAgICAgICAgIHggPj49IDMyOwogICAgICAgICAgICBtc2IgKz0gMzI7CiAgICAgICAgfQogICAgICAgIC8vIHggPj0gMiAqKiAxNgogICAgICAgIGlmICh4ID49IDB4MTAwMDApIHsKICAgICAgICAgICAgeCA+Pj0gMTY7CiAgICAgICAgICAgIG1zYiArPSAxNjsKICAgICAgICB9CiAgICAgICAgLy8geCA+PSAyICoqIDgKICAgICAgICBpZiAoeCA+PSAweDEwMCkgewogICAgICAgICAgICB4ID4+PSA4OwogICAgICAgICAgICBtc2IgKz0gODsKICAgICAgICB9CiAgICAgICAgLy8geCA+PSAyICoqIDQKICAgICAgICBpZiAoeCA+PSAweDEwKSB7CiAgICAgICAgICAgIHggPj49IDQ7CiAgICAgICAgICAgIG1zYiArPSA0OwogICAgICAgIH0KICAgICAgICAvLyB4ID49IDIgKiogMgogICAgICAgIGlmICh4ID49IDB4NCkgewogICAgICAgICAgICB4ID4+PSAyOwogICAgICAgICAgICBtc2IgKz0gMjsKICAgICAgICB9CiAgICAgICAgLy8geCA+PSAyICoqIDEKICAgICAgICBpZiAoeCA+PSAweDIpIG1zYiArPSAxOwogICAgfQp9Cg==",
  },
]

const html = `<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">BitwiseOps</span> </span>{
    <span class="hljs-comment">// x     = 1110 = 8 + 4 + 2 + 0 = 14</span>
    <span class="hljs-comment">// y     = 1011 = 8 + 0 + 2 + 1 = 11</span>
    <span class="hljs-comment">// x &amp; y = 1010 = 8 + 0 + 2 + 0 = 10</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">and</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&amp;</span> y;
    }

    <span class="hljs-comment">// x     = 1100 = 8 + 4 + 0 + 0 = 12</span>
    <span class="hljs-comment">// y     = 1001 = 8 + 0 + 0 + 1 = 9</span>
    <span class="hljs-comment">// x | y = 1101 = 8 + 4 + 0 + 1 = 13</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">or</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">|</span> y;
    }

    <span class="hljs-comment">// x     = 1100 = 8 + 4 + 0 + 0 = 12</span>
    <span class="hljs-comment">// y     = 0101 = 0 + 4 + 0 + 1 = 5</span>
    <span class="hljs-comment">// x ^ y = 1001 = 8 + 0 + 0 + 1 = 9</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">xor</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">^</span> y;
    }

    <span class="hljs-comment">// x  = 00001100 =   0 +  0 +  0 +  0 + 8 + 4 + 0 + 0 = 12</span>
    <span class="hljs-comment">// ~x = 11110011 = 128 + 64 + 32 + 16 + 0 + 0 + 2 + 1 = 243</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">not</span>(<span class="hljs-params"><span class="hljs-keyword">uint8</span> x</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint8</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-operator">~</span>x;
    }

    <span class="hljs-comment">// 1 &lt;&lt; 0 = 0001 --&gt; 0001 = 1</span>
    <span class="hljs-comment">// 1 &lt;&lt; 1 = 0001 --&gt; 0010 = 2</span>
    <span class="hljs-comment">// 1 &lt;&lt; 2 = 0001 --&gt; 0100 = 4</span>
    <span class="hljs-comment">// 1 &lt;&lt; 3 = 0001 --&gt; 1000 = 8</span>
    <span class="hljs-comment">// 3 &lt;&lt; 2 = 0011 --&gt; 1100 = 12</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">shiftLeft</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> bits</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&lt;</span><span class="hljs-operator">&lt;</span> bits;
    }

    <span class="hljs-comment">// 8  &gt;&gt; 0 = 1000 --&gt; 1000 = 8</span>
    <span class="hljs-comment">// 8  &gt;&gt; 1 = 1000 --&gt; 0100 = 4</span>
    <span class="hljs-comment">// 8  &gt;&gt; 2 = 1000 --&gt; 0010 = 2</span>
    <span class="hljs-comment">// 8  &gt;&gt; 3 = 1000 --&gt; 0001 = 1</span>
    <span class="hljs-comment">// 8  &gt;&gt; 4 = 1000 --&gt; 0000 = 0</span>
    <span class="hljs-comment">// 12 &gt;&gt; 1 = 1100 --&gt; 0110 = 6</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">shiftRight</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> bits</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span> bits;
    }

    <span class="hljs-comment">// Get last n bits from x</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getLastNBits</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> n</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)
    </span>{
        <span class="hljs-comment">// Example, last 3 bits</span>
        <span class="hljs-comment">// x        = 1101 = 13</span>
        <span class="hljs-comment">// mask     = 0111 = 7</span>
        <span class="hljs-comment">// x &amp; mask = 0101 = 5</span>
        <span class="hljs-keyword">uint256</span> mask <span class="hljs-operator">=</span> (<span class="hljs-number">1</span> <span class="hljs-operator">&lt;</span><span class="hljs-operator">&lt;</span> n) <span class="hljs-operator">-</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&amp;</span> mask;
    }

    <span class="hljs-comment">// Get last n bits from x using mod operator</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getLastNBitsUsingMod</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> n</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)
    </span>{
        <span class="hljs-comment">// 1 &lt;&lt; n = 2 ** n</span>
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">%</span> (<span class="hljs-number">1</span> <span class="hljs-operator">&lt;</span><span class="hljs-operator">&lt;</span> n);
    }

    <span class="hljs-comment">// Get position of most significant bit</span>
    <span class="hljs-comment">// x = 1100 = 12, most significant bit = 1000, so this function will return 3</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mostSignificantBit</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
        <span class="hljs-keyword">while</span> ((x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>) <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i;
        }
        <span class="hljs-keyword">return</span> i;
    }

    <span class="hljs-comment">// Get first n bits from x</span>
    <span class="hljs-comment">// len = length of bits in x = position of most significant bit of x, + 1</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getFirstNBits</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> n, <span class="hljs-keyword">uint256</span> len</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)
    </span>{
        <span class="hljs-comment">// Example</span>
        <span class="hljs-comment">// x        = 1110 = 14, n = 2, len = 4</span>
        <span class="hljs-comment">// mask     = 1100 = 12</span>
        <span class="hljs-comment">// x &amp; mask = 1100 = 12</span>
        <span class="hljs-keyword">uint256</span> mask <span class="hljs-operator">=</span> ((<span class="hljs-number">1</span> <span class="hljs-operator">&lt;</span><span class="hljs-operator">&lt;</span> n) <span class="hljs-operator">-</span> <span class="hljs-number">1</span>) <span class="hljs-operator">&lt;</span><span class="hljs-operator">&lt;</span> (len <span class="hljs-operator">-</span> n);
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&amp;</span> mask;
    }
}
</code></pre><h3>Most significant bit</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MostSignificantBitFunction</span> </span>{
    <span class="hljs-comment">// Find most significant bit using binary search</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mostSignificantBit</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> msb</span>)
    </span>{
        <span class="hljs-comment">// x &gt;= 2 ** 128</span>
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">0x100000000000000000000000000000000</span>) {
            x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">128</span>;
            msb <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">128</span>;
        }
        <span class="hljs-comment">// x &gt;= 2 ** 64</span>
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">0x10000000000000000</span>) {
            x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">64</span>;
            msb <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">64</span>;
        }
        <span class="hljs-comment">// x &gt;= 2 ** 32</span>
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">0x100000000</span>) {
            x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">32</span>;
            msb <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">32</span>;
        }
        <span class="hljs-comment">// x &gt;= 2 ** 16</span>
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">0x10000</span>) {
            x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">16</span>;
            msb <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">16</span>;
        }
        <span class="hljs-comment">// x &gt;= 2 ** 8</span>
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">0x100</span>) {
            x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">8</span>;
            msb <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">8</span>;
        }
        <span class="hljs-comment">// x &gt;= 2 ** 4</span>
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">0x10</span>) {
            x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">4</span>;
            msb <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">4</span>;
        }
        <span class="hljs-comment">// x &gt;= 2 ** 2</span>
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">0x4</span>) {
            x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">2</span>;
            msb <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">2</span>;
        }
        <span class="hljs-comment">// x &gt;= 2 ** 1</span>
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">0x2</span>) msb <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
}
</code></pre><h3>Most significant bit in assembly</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MostSignificantBitAssembly</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mostSignificantBit</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> msb</span>)
    </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">let</span> f <span class="hljs-operator">:=</span> <span class="hljs-built_in">shl</span>(<span class="hljs-number">7</span>, <span class="hljs-built_in">gt</span>(x, <span class="hljs-number">0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF</span>))
            x <span class="hljs-operator">:=</span> <span class="hljs-built_in">shr</span>(f, x)
            <span class="hljs-comment">// or can be replaced with add</span>
            msb <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(msb, f)
        }
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">let</span> f <span class="hljs-operator">:=</span> <span class="hljs-built_in">shl</span>(<span class="hljs-number">6</span>, <span class="hljs-built_in">gt</span>(x, <span class="hljs-number">0xFFFFFFFFFFFFFFFF</span>))
            x <span class="hljs-operator">:=</span> <span class="hljs-built_in">shr</span>(f, x)
            msb <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(msb, f)
        }
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">let</span> f <span class="hljs-operator">:=</span> <span class="hljs-built_in">shl</span>(<span class="hljs-number">5</span>, <span class="hljs-built_in">gt</span>(x, <span class="hljs-number">0xFFFFFFFF</span>))
            x <span class="hljs-operator">:=</span> <span class="hljs-built_in">shr</span>(f, x)
            msb <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(msb, f)
        }
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">let</span> f <span class="hljs-operator">:=</span> <span class="hljs-built_in">shl</span>(<span class="hljs-number">4</span>, <span class="hljs-built_in">gt</span>(x, <span class="hljs-number">0xFFFF</span>))
            x <span class="hljs-operator">:=</span> <span class="hljs-built_in">shr</span>(f, x)
            msb <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(msb, f)
        }
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">let</span> f <span class="hljs-operator">:=</span> <span class="hljs-built_in">shl</span>(<span class="hljs-number">3</span>, <span class="hljs-built_in">gt</span>(x, <span class="hljs-number">0xFF</span>))
            x <span class="hljs-operator">:=</span> <span class="hljs-built_in">shr</span>(f, x)
            msb <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(msb, f)
        }
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">let</span> f <span class="hljs-operator">:=</span> <span class="hljs-built_in">shl</span>(<span class="hljs-number">2</span>, <span class="hljs-built_in">gt</span>(x, <span class="hljs-number">0xF</span>))
            x <span class="hljs-operator">:=</span> <span class="hljs-built_in">shr</span>(f, x)
            msb <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(msb, f)
        }
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">let</span> f <span class="hljs-operator">:=</span> <span class="hljs-built_in">shl</span>(<span class="hljs-number">1</span>, <span class="hljs-built_in">gt</span>(x, <span class="hljs-number">0x3</span>))
            x <span class="hljs-operator">:=</span> <span class="hljs-built_in">shr</span>(f, x)
            msb <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(msb, f)
        }
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">let</span> f <span class="hljs-operator">:=</span> <span class="hljs-built_in">gt</span>(x, <span class="hljs-number">0x1</span>)
            msb <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(msb, f)
        }
    }
}
</code></pre>`

export default html
