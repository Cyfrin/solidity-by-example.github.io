// metadata
export const version = "0.5.16"
export const title = "Ether and Wei"
export const description = "An example of Ether and Wei in Solidity"

const html = `<p>Transactions are paid with <code>ether</code>.</p>
<p>Similar to how one dollar is equal to 100 cent, one <code>ether</code> is equal to 10<sup>18</sup> <code>wei</code>.</p>
<pre><code class="language-solidity"><span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.5.16;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EtherUnits</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> oneWei = <span class="hljs-number">1</span> <span class="hljs-literal">wei</span>;
    <span class="hljs-comment">// 1 wei is equal to 1</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> isOneWei = <span class="hljs-number">1</span> <span class="hljs-literal">wei</span> == <span class="hljs-number">1</span>;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> oneEther = <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>;
    <span class="hljs-comment">// 1 ether is equal to 10^18</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> isOneEther = <span class="hljs-number">1</span> <span class="hljs-literal">ether</span> == <span class="hljs-number">1e18</span>;
}
</code></pre>
`

export default html
