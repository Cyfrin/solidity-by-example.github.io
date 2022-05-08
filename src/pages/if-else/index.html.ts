// metadata
export const version = "0.8.13"
export const title = "If / Else"
export const description = "If / Else conditional statement in Solidity"

const html = `<p>Solidity supports conditional statements <code>if</code>, <code>else if</code> and <code>else</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">IfElse</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&lt;</span> <span class="hljs-number">10</span>) {
            <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&lt;</span> <span class="hljs-number">20</span>) {
            <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>;
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ternary</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">// if (_x &lt; 10) {</span>
        <span class="hljs-comment">//     return 1;</span>
        <span class="hljs-comment">// }</span>
        <span class="hljs-comment">// return 2;</span>

        <span class="hljs-comment">// shorthand way to write if / else statement</span>
        <span class="hljs-comment">// the "?" operator is called the ternary operator</span>
        <span class="hljs-keyword">return</span> _x <span class="hljs-operator">&lt;</span> <span class="hljs-number">10</span> ? <span class="hljs-number">1</span> : <span class="hljs-number">2</span>;
    }
}
</code></pre>
`

export default html
