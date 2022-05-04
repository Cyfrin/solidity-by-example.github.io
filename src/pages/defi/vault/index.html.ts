// metadata
export const version = "0.8.10"
export const title = "Vault"
export const description = "Vault"

const html = `<p>Simple example of vault contract, commonly used in DeFi protocols.</p>
<p>Most vaults on the mainnet are more complex. Here we will focus on the math for calculating shares to mint on deposit and amount of token to withdraw.</p>
<h3 id="how-the-contract-works">How the contract works</h3>
<ol>
<li>Some amount of shares are minted when an user deposits.</li>
<li>The DeFi protocol would use the users&#39; deposits to generate yield (somehow).</li>
<li>User burn shares to withdraw his tokens + yield.</li>
</ol>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Vault</span> </span>{
    IERC20 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> token;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> totalSupply;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> balanceOf;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _token</span>) </span>{
        token <span class="hljs-operator">=</span> IERC20(_token);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint</span> _shares</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        totalSupply <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _shares;
        balanceOf[_to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _shares;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_burn</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _from, <span class="hljs-keyword">uint</span> _shares</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        totalSupply <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _shares;
        balanceOf[_from] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _shares;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        token.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amount);
        <span class="hljs-comment">/*
        a = amount
        B = balance of token before deposit
        T = total supply
        s = shares to mint

        (T + s) / T = (a + B) / B 

        s = aT / B
        */</span>
        <span class="hljs-keyword">uint</span> shares;
        <span class="hljs-keyword">if</span> (totalSupply <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>) {
            shares <span class="hljs-operator">=</span> _amount;
        } <span class="hljs-keyword">else</span> {
            shares <span class="hljs-operator">=</span> (_amount <span class="hljs-operator">*</span> totalSupply) <span class="hljs-operator">/</span> token.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        }

        _mint(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, shares);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _shares</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        _burn(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _shares);
        <span class="hljs-comment">/*
        a = amount
        B = balance of token before deposit
        T = total supply
        s = shares to mint

        (T - s) / T = (B - a) / B 

        a = sB / T
        */</span>
        <span class="hljs-keyword">uint</span> amount <span class="hljs-operator">=</span> (_shares <span class="hljs-operator">*</span> token.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>))) <span class="hljs-operator">/</span> totalSupply;
        token.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amount);
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">totalSupply</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">allowance</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">address</span> spender</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> sender,
        <span class="hljs-keyword">address</span> recipient,
        <span class="hljs-keyword">uint</span> amount
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint</span> amount</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Approval</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> spender, <span class="hljs-keyword">uint</span> amount</span>)</span>;
}
</code></pre>
`

export default html
