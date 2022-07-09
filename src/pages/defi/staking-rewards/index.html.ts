// metadata
export const version = "0.8.13"
export const title = "Staking Rewards"
export const description = "Staking rewards contract based on Synthetix StakingRewards.sol"

const html = `<p>This is a minimal example of a contract that rewards users for staking their token.</p>
<p>Code is a stripped down version of Synthetix <a href="https://github.com/Synthetixio/synthetix/blob/develop/contracts/StakingRewards.sol" target="__blank">StakingRewards.sol</a></p>
<h3 id="staking-rewards">Staking Rewards</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">StakingRewards</span> </span>{
    IERC20 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> stakingToken;
    IERC20 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> rewardsToken;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;

    <span class="hljs-comment">// Duration of rewards to be paid out (in seconds)</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> duration;
    <span class="hljs-comment">// Timestamp of when the rewards finish</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> finishAt;
    <span class="hljs-comment">// Minimum of last updated time and reward finish time</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> updatedAt;
    <span class="hljs-comment">// Reward to be paid out per second</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> rewardRate;
    <span class="hljs-comment">// Sum of (reward rate * dt * 1e18 / total supply)</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> rewardPerTokenStored;
    <span class="hljs-comment">// User address =&gt; rewardPerTokenStored</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> userRewardPerTokenPaid;
    <span class="hljs-comment">// User address =&gt; rewards to be claimed</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> rewards;

    <span class="hljs-comment">// Total staked</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> totalSupply;
    <span class="hljs-comment">// User address =&gt; staked amount</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> balanceOf;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _stakingToken, <span class="hljs-keyword">address</span> _rewardToken</span>) </span>{
        owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        stakingToken <span class="hljs-operator">=</span> IERC20(_stakingToken);
        rewardsToken <span class="hljs-operator">=</span> IERC20(_rewardToken);
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">onlyOwner</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner, <span class="hljs-string">"not authorized"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">updateReward</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _account</span>) </span>{
        rewardPerTokenStored <span class="hljs-operator">=</span> rewardPerToken();
        updatedAt <span class="hljs-operator">=</span> lastTimeRewardApplicable();

        <span class="hljs-keyword">if</span> (_account <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>)) {
            rewards[_account] <span class="hljs-operator">=</span> earned(_account);
            userRewardPerTokenPaid[_account] <span class="hljs-operator">=</span> rewardPerTokenStored;
        }

        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">lastTimeRewardApplicable</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> _min(finishAt, <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">rewardPerToken</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">if</span> (totalSupply <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>) {
            <span class="hljs-keyword">return</span> rewardPerTokenStored;
        }

        <span class="hljs-keyword">return</span>
            rewardPerTokenStored <span class="hljs-operator">+</span>
            (rewardRate <span class="hljs-operator">*</span> (lastTimeRewardApplicable() <span class="hljs-operator">-</span> updatedAt) <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>) <span class="hljs-operator">/</span>
            totalSupply;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">stake</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">updateReward</span>(<span class="hljs-params"><span class="hljs-built_in">msg</span>.sender</span>) </span>{
        <span class="hljs-built_in">require</span>(_amount <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"amount = 0"</span>);
        stakingToken.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amount);
        balanceOf[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
        totalSupply <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">updateReward</span>(<span class="hljs-params"><span class="hljs-built_in">msg</span>.sender</span>) </span>{
        <span class="hljs-built_in">require</span>(_amount <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"amount = 0"</span>);
        balanceOf[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
        totalSupply <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
        stakingToken.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">earned</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _account</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span>
            ((balanceOf[_account] <span class="hljs-operator">*</span>
                (rewardPerToken() <span class="hljs-operator">-</span> userRewardPerTokenPaid[_account])) <span class="hljs-operator">/</span> <span class="hljs-number">1e18</span>) <span class="hljs-operator">+</span>
            rewards[_account];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getReward</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">updateReward</span>(<span class="hljs-params"><span class="hljs-built_in">msg</span>.sender</span>) </span>{
        <span class="hljs-keyword">uint</span> reward <span class="hljs-operator">=</span> rewards[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        <span class="hljs-keyword">if</span> (reward <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            rewards[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
            rewardsToken.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, reward);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setRewardsDuration</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _duration</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">onlyOwner</span> </span>{
        <span class="hljs-built_in">require</span>(finishAt <span class="hljs-operator">&lt;</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>, <span class="hljs-string">"reward duration not finished"</span>);
        duration <span class="hljs-operator">=</span> _duration;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">notifyRewardAmount</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title">onlyOwner</span>
        <span class="hljs-title">updateReward</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>(<span class="hljs-params"><span class="hljs-number">0</span></span>)</span>)
    </span>{
        <span class="hljs-keyword">if</span> (<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> finishAt) {
            rewardRate <span class="hljs-operator">=</span> _amount <span class="hljs-operator">/</span> duration;
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-keyword">uint</span> remainingRewards <span class="hljs-operator">=</span> (finishAt <span class="hljs-operator">-</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>) <span class="hljs-operator">*</span> rewardRate;
            rewardRate <span class="hljs-operator">=</span> (_amount <span class="hljs-operator">+</span> remainingRewards) <span class="hljs-operator">/</span> duration;
        }

        <span class="hljs-built_in">require</span>(rewardRate <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"reward rate = 0"</span>);
        <span class="hljs-built_in">require</span>(
            rewardRate <span class="hljs-operator">*</span> duration <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> rewardsToken.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)),
            <span class="hljs-string">"reward amount &gt; balance"</span>
        );

        finishAt <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> duration;
        updatedAt <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_min</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> y ? x : y;
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

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint</span> value</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Approval</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> spender, <span class="hljs-keyword">uint</span> value</span>)</span>;
}
</code></pre>
`

export default html
