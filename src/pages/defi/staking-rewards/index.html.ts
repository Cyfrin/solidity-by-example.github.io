// metadata
export const version = "0.8.3"
export const title = "Staking Rewards"
export const description = "Staking rewards contract based on Synthetix StakingRewards.sol"

const html = `<p>This is a minimal example of a contract that rewards users for staking their token.</p>
<p>Code is a stripped down version of Synthetix <a href="https://github.com/Synthetixio/synthetix/blob/develop/contracts/StakingRewards.sol" target="__blank">StakingRewards.sol</a></p>
<h3 id="staking-rewards">Staking Rewards</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">StakingRewards</span> </span>{
    IERC20 <span class="hljs-keyword">public</span> rewardsToken;
    IERC20 <span class="hljs-keyword">public</span> stakingToken;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> rewardRate = <span class="hljs-number">100</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> lastUpdateTime;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> rewardPerTokenStored;

    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> =&gt; <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> userRewardPerTokenPaid;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> =&gt; <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> rewards;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> _totalSupply;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> =&gt; <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">private</span> _balances;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _stakingToken, <span class="hljs-keyword">address</span> _rewardsToken</span>) </span>{
        stakingToken = IERC20(_stakingToken);
        rewardsToken = IERC20(_rewardsToken);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">rewardPerToken</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">if</span> (_totalSupply == <span class="hljs-number">0</span>) {
            <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
        }
        <span class="hljs-keyword">return</span>
            rewardPerTokenStored +
            (((<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> - lastUpdateTime) * rewardRate * <span class="hljs-number">1e18</span>) / _totalSupply);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">earned</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span>
            ((_balances[account] *
                (rewardPerToken() - userRewardPerTokenPaid[account])) / <span class="hljs-number">1e18</span>) +
            rewards[account];
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">updateReward</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) </span>{
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>;

        rewards[account] = earned(account);
        userRewardPerTokenPaid[account] = rewardPerTokenStored;
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">stake</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">updateReward</span>(<span class="hljs-params"><span class="hljs-built_in">msg</span>.sender</span>) </span>{
        _totalSupply += _amount;
        _balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] += _amount;
        stakingToken.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">updateReward</span>(<span class="hljs-params"><span class="hljs-built_in">msg</span>.sender</span>) </span>{
        _totalSupply -= _amount;
        _balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] -= _amount;
        stakingToken.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getReward</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">updateReward</span>(<span class="hljs-params"><span class="hljs-built_in">msg</span>.sender</span>) </span>{
        <span class="hljs-keyword">uint</span> reward = rewards[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        rewards[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] = <span class="hljs-number">0</span>;
        rewardsToken.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, reward);
    }
}

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
`

export default html
