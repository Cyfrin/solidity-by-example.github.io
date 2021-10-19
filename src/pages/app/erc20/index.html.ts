// metadata
export const version = "0.8.3"
export const title = "ERC20"
export const description = "Example of ERC20 token in Solidity"

const html = `<p>Any contract that follow the <a href="https://eips.ethereum.org/EIPS/eip-20" target="__blank">ERC20 standard</a> is a ERC20 token.</p>
<p>ERC20 tokens provide functionalities to</p>
<ul>
<li>transfer tokens</li>
<li>allow others to transfer tokens on behalf of the token holder</li>
</ul>
<p>Here is the interface for ERC20.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.3;</span>

<span class="hljs-comment">// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.0/contracts/token/ERC20/IERC20.sol</span>
<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">totalSupply</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title"><span class="hljs-built_in">transfer</span></span>(<span class="hljs-params"><span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">allowance</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">address</span> spender</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> sender,
        <span class="hljs-keyword">address</span> recipient,
        <span class="hljs-keyword">uint</span> amount
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint</span> value</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Approval</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> spender, <span class="hljs-keyword">uint</span> value</span>)</span>;
}
</code></pre>
<h2 id="create-your-own-erc20-token">Create your own ERC20 token</h2>
<p>Using <a href="https://github.com/OpenZeppelin/openzeppelin-contracts" target="__blank">Open Zeppelin</a> it&#39;s really easy to create your own ERC20 token.</p>
<p>Here is an example</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.3;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/ERC20.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MyToken</span> <span class="hljs-keyword">is</span> <span class="hljs-title">ERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> name, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> symbol</span>) <span class="hljs-title">ERC20</span>(<span class="hljs-params">name, symbol</span>) </span>{
        <span class="hljs-comment">// Mint 100 tokens to msg.sender</span>
        <span class="hljs-comment">// Similar to how</span>
        <span class="hljs-comment">// 1 dollar = 100 cents</span>
        <span class="hljs-comment">// 1 token = 1 * (10 ** decimals)</span>
        _mint(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-number">100</span> * <span class="hljs-number">10</span>**<span class="hljs-keyword">uint</span>(decimals()));
    }
}
</code></pre>
<h2 id="contract-to-swap-tokens">Contract to swap tokens</h2>
<p>Here is an example contract, <code>TokenSwap</code>, to trade one ERC20 token for another.</p>
<p>This contract will swap tokens by calling</p>
<pre><code class="language-solidity">transferFrom(<span class="hljs-keyword">address</span> sender, <span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount)
</code></pre>
<p>which will transfer <code>amount</code> of token from <code>sender</code> to <code>recipient</code>.</p>
<p>For <code>transferFrom</code> to succeed, <code>sender</code> must</p>
<ul>
<li>have more than <code>amount</code> tokens in their balance</li>
<li>allowed <code>TokenSwap</code> to withdraw <code>amount</code> tokens by calling <code>approve</code></li>
</ul>
<p>prior to <code>TokenSwap</code> calling <code>transferFrom</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.3;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/IERC20.sol"</span>;

<span class="hljs-comment">/*
How to swap tokens

1. Alice has 100 tokens from AliceCoin, which is a ERC20 token.
2. Bob has 100 tokens from BobCoin, which is also a ERC20 token.
3. Alice and Bob wants to trade 10 AliceCoin for 20 BobCoin.
4. Alice or Bob deploys TokenSwap
5. Alice appproves TokenSwap to withdraw 10 tokens from AliceCoin
6. Bob appproves TokenSwap to withdraw 20 tokens from BobCoin
7. Alice or Bob calls TokenSwap.swap()
8. Alice and Bob traded tokens successfully.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TokenSwap</span> </span>{
    IERC20 <span class="hljs-keyword">public</span> token1;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner1;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> amount1;
    IERC20 <span class="hljs-keyword">public</span> token2;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner2;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> amount2;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _token1,
        <span class="hljs-keyword">address</span> _owner1,
        <span class="hljs-keyword">uint</span> _amount1,
        <span class="hljs-keyword">address</span> _token2,
        <span class="hljs-keyword">address</span> _owner2,
        <span class="hljs-keyword">uint</span> _amount2
    </span>) </span>{
        token1 = IERC20(_token1);
        owner1 = _owner1;
        amount1 = _amount1;
        token2 = IERC20(_token2);
        owner2 = _owner2;
        amount2 = _amount2;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> == owner1 || <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> == owner2, <span class="hljs-string">"Not authorized"</span>);
        <span class="hljs-built_in">require</span>(
            token1.allowance(owner1, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)) &gt;= amount1,
            <span class="hljs-string">"Token 1 allowance too low"</span>
        );
        <span class="hljs-built_in">require</span>(
            token2.allowance(owner2, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)) &gt;= amount2,
            <span class="hljs-string">"Token 2 allowance too low"</span>
        );

        _safeTransferFrom(token1, owner1, owner2, amount1);
        _safeTransferFrom(token2, owner2, owner1, amount2);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_safeTransferFrom</span>(<span class="hljs-params">
        IERC20 token,
        <span class="hljs-keyword">address</span> sender,
        <span class="hljs-keyword">address</span> recipient,
        <span class="hljs-keyword">uint</span> amount
    </span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        <span class="hljs-keyword">bool</span> sent = token.transferFrom(sender, recipient, amount);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Token transfer failed"</span>);
    }
}
</code></pre>
`

export default html
