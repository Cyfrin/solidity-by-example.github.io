// metadata
export const version = "0.8.13"
export const title = "Bitwise Operators"
export const description = "Learn about bitwise operators in Solidity"

const html = `<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">BitwiseOps</span> </span>{
    <span class="hljs-comment">// x     = 1110 = 8 + 4 + 2 + 0 = 14</span>
    <span class="hljs-comment">// y     = 1011 = 8 + 0 + 2 + 1 = 11</span>
    <span class="hljs-comment">// x &amp; y = 1010 = 8 + 0 + 2 + 0 = 10</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">and</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&amp;</span> y;
    }

    <span class="hljs-comment">// x     = 1100 = 8 + 4 + 0 + 0 = 12</span>
    <span class="hljs-comment">// y     = 1001 = 8 + 0 + 0 + 1 = 9</span>
    <span class="hljs-comment">// x | y = 1101 = 8 + 4 + 0 + 1 = 13</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">or</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">|</span> y;
    }

    <span class="hljs-comment">// x     = 1100 = 8 + 4 + 0 + 0 = 12</span>
    <span class="hljs-comment">// y     = 0101 = 0 + 4 + 0 + 1 = 5</span>
    <span class="hljs-comment">// x | y = 1001 = 8 + 0 + 0 + 1 = 9</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">xor</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">shiftLeft</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> bits</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&lt;</span><span class="hljs-operator">&lt;</span> bits;
    }

    <span class="hljs-comment">// 8  &gt;&gt; 0 = 1000 --&gt; 1000 = 8</span>
    <span class="hljs-comment">// 8  &gt;&gt; 1 = 1000 --&gt; 0100 = 4</span>
    <span class="hljs-comment">// 8  &gt;&gt; 2 = 1000 --&gt; 0010 = 2</span>
    <span class="hljs-comment">// 8  &gt;&gt; 3 = 1000 --&gt; 0001 = 1</span>
    <span class="hljs-comment">// 8  &gt;&gt; 4 = 1000 --&gt; 0000 = 0</span>
    <span class="hljs-comment">// 12 &gt;&gt; 1 = 1100 --&gt; 0110 = 6</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">shiftRight</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> bits</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span> bits;
    }

    <span class="hljs-comment">// Get last n bits from x</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getLastNBits</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> n</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">// Example, last 3 bits</span>
        <span class="hljs-comment">// x        = 1101 = 13</span>
        <span class="hljs-comment">// mask     = 0111 = 7</span>
        <span class="hljs-comment">// x &amp; mask = 0101 = 5</span>
        <span class="hljs-keyword">uint</span> mask <span class="hljs-operator">=</span> (<span class="hljs-number">1</span> <span class="hljs-operator">&lt;</span><span class="hljs-operator">&lt;</span> n) <span class="hljs-operator">-</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&amp;</span> mask;
    }

    <span class="hljs-comment">// Get last n bits from x using mod operator</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getLastNBitsUsingMod</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> n</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">// 1 &lt;&lt; n = 2 ** n</span>
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">%</span> (<span class="hljs-number">1</span> <span class="hljs-operator">&lt;</span><span class="hljs-operator">&lt;</span> n);
    }

    <span class="hljs-comment">// Get position of most significant bit</span>
    <span class="hljs-comment">// x = 1100 = 10, most significant bit = 1000, so this function will return 3</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mostSignificantBit</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
        <span class="hljs-keyword">while</span> ((x <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>) <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i;
        }
        <span class="hljs-keyword">return</span> i;
    }

    <span class="hljs-comment">// Get first n bits from x</span>
    <span class="hljs-comment">// len = length of bits in x = position of most significant bit of x, + 1</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getFirstNBits</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> x,
        <span class="hljs-keyword">uint</span> n,
        <span class="hljs-keyword">uint</span> len
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">// Example</span>
        <span class="hljs-comment">// x        = 1110 = 14, n = 2, len = 4</span>
        <span class="hljs-comment">// mask     = 1100 = 12</span>
        <span class="hljs-comment">// x &amp; mask = 1100 = 12</span>
        <span class="hljs-keyword">uint</span> mask <span class="hljs-operator">=</span> ((<span class="hljs-number">1</span> <span class="hljs-operator">&lt;</span><span class="hljs-operator">&lt;</span> n) <span class="hljs-operator">-</span> <span class="hljs-number">1</span>) <span class="hljs-operator">&lt;</span><span class="hljs-operator">&lt;</span> (len <span class="hljs-operator">-</span> n);
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&amp;</span> mask;
    }
}
</code></pre>
`

export default html
