// metadata
export const version = "0.5.16"
export const title = "Block Timestamp Manipulation"
export const description = "An example of a Solidity contract vulnerable to block timestamp manipulation"

const html = `<h3 id="vulnerability">Vulnerability</h3>
<p><code>block.timestamp</code> can be manipulated by miners with the following constraints</p>
<ul>
<li>it cannot be stamped with an earlier time than its parent</li>
<li>it cannot be too far in the future</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.5.16;</span>

<span class="hljs-comment">/*
Roulette is a game where you can win all of the Ether in the contract
if you can submit a transaction at a specific timing.
A player needs to send 10 Ether and wins if the block.timestamp % 15 == 0.
*/</span>

<span class="hljs-comment">/*
1. Deploy Roulette with 10 Ether
2. Eve runs a powerful miner that can manipulate the block timestamp.
3. Eve sets the block.timestamp to a number in the future that is divisible by
   15 and finds the target block hash.
4. Eve&#x27;s block is successfully included into the chain, Eve wins the
   Roulette game.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Roulette</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> pastBlockTime;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">spin</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> == <span class="hljs-number">10</span> <span class="hljs-literal">ether</span>); <span class="hljs-comment">// must send 10 ether to play</span>
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">now</span> != pastBlockTime); <span class="hljs-comment">// only 1 transaction per block</span>

        pastBlockTime = <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>;

        <span class="hljs-keyword">if</span>(<span class="hljs-built_in">now</span> % <span class="hljs-number">15</span> == <span class="hljs-number">0</span>) {
            (<span class="hljs-keyword">bool</span> sent, ) = <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>.<span class="hljs-built_in">value</span>(address(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>)(<span class="hljs-string">""</span>);
            <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
        }
    }
}</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<ul>
<li>Don&#39;t use <code>block.timestamp</code> for a source of entropy and random number</li>
</ul>
`

export default html
