// metadata
export const version = "0.8.20"
export const title = "Staking Rewards"
export const description =
    "Staking rewards contract based on Synthetix StakingRewards.sol"

export const keywords = ["defi", "staking", "reward", "rewards"]

export const codes = [
    {
        fileName: "StakingRewards.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuODsKCmNvbnRyYWN0IFN0YWtpbmdSZXdhcmRzIHsKICAgIElFUkMyMCBwdWJsaWMgaW1tdXRhYmxlIHN0YWtpbmdUb2tlbjsKICAgIElFUkMyMCBwdWJsaWMgaW1tdXRhYmxlIHJld2FyZHNUb2tlbjsKCiAgICBhZGRyZXNzIHB1YmxpYyBvd25lcjsKCiAgICAvLyBEdXJhdGlvbiBvZiByZXdhcmRzIHRvIGJlIHBhaWQgb3V0IChpbiBzZWNvbmRzKQogICAgdWludCBwdWJsaWMgZHVyYXRpb247CiAgICAvLyBUaW1lc3RhbXAgb2Ygd2hlbiB0aGUgcmV3YXJkcyBmaW5pc2gKICAgIHVpbnQgcHVibGljIGZpbmlzaEF0OwogICAgLy8gTWluaW11bSBvZiBsYXN0IHVwZGF0ZWQgdGltZSBhbmQgcmV3YXJkIGZpbmlzaCB0aW1lCiAgICB1aW50IHB1YmxpYyB1cGRhdGVkQXQ7CiAgICAvLyBSZXdhcmQgdG8gYmUgcGFpZCBvdXQgcGVyIHNlY29uZAogICAgdWludCBwdWJsaWMgcmV3YXJkUmF0ZTsKICAgIC8vIFN1bSBvZiAocmV3YXJkIHJhdGUgKiBkdCAqIDFlMTggLyB0b3RhbCBzdXBwbHkpCiAgICB1aW50IHB1YmxpYyByZXdhcmRQZXJUb2tlblN0b3JlZDsKICAgIC8vIFVzZXIgYWRkcmVzcyA9PiByZXdhcmRQZXJUb2tlblN0b3JlZAogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQpIHB1YmxpYyB1c2VyUmV3YXJkUGVyVG9rZW5QYWlkOwogICAgLy8gVXNlciBhZGRyZXNzID0+IHJld2FyZHMgdG8gYmUgY2xhaW1lZAogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQpIHB1YmxpYyByZXdhcmRzOwoKICAgIC8vIFRvdGFsIHN0YWtlZAogICAgdWludCBwdWJsaWMgdG90YWxTdXBwbHk7CiAgICAvLyBVc2VyIGFkZHJlc3MgPT4gc3Rha2VkIGFtb3VudAogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQpIHB1YmxpYyBiYWxhbmNlT2Y7CgogICAgY29uc3RydWN0b3IoYWRkcmVzcyBfc3Rha2luZ1Rva2VuLCBhZGRyZXNzIF9yZXdhcmRUb2tlbikgewogICAgICAgIG93bmVyID0gbXNnLnNlbmRlcjsKICAgICAgICBzdGFraW5nVG9rZW4gPSBJRVJDMjAoX3N0YWtpbmdUb2tlbik7CiAgICAgICAgcmV3YXJkc1Rva2VuID0gSUVSQzIwKF9yZXdhcmRUb2tlbik7CiAgICB9CgogICAgbW9kaWZpZXIgb25seU93bmVyKCkgewogICAgICAgIHJlcXVpcmUobXNnLnNlbmRlciA9PSBvd25lciwgIm5vdCBhdXRob3JpemVkIik7CiAgICAgICAgXzsKICAgIH0KCiAgICBtb2RpZmllciB1cGRhdGVSZXdhcmQoYWRkcmVzcyBfYWNjb3VudCkgewogICAgICAgIHJld2FyZFBlclRva2VuU3RvcmVkID0gcmV3YXJkUGVyVG9rZW4oKTsKICAgICAgICB1cGRhdGVkQXQgPSBsYXN0VGltZVJld2FyZEFwcGxpY2FibGUoKTsKCiAgICAgICAgaWYgKF9hY2NvdW50ICE9IGFkZHJlc3MoMCkpIHsKICAgICAgICAgICAgcmV3YXJkc1tfYWNjb3VudF0gPSBlYXJuZWQoX2FjY291bnQpOwogICAgICAgICAgICB1c2VyUmV3YXJkUGVyVG9rZW5QYWlkW19hY2NvdW50XSA9IHJld2FyZFBlclRva2VuU3RvcmVkOwogICAgICAgIH0KCiAgICAgICAgXzsKICAgIH0KCiAgICBmdW5jdGlvbiBsYXN0VGltZVJld2FyZEFwcGxpY2FibGUoKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50KSB7CiAgICAgICAgcmV0dXJuIF9taW4oZmluaXNoQXQsIGJsb2NrLnRpbWVzdGFtcCk7CiAgICB9CgogICAgZnVuY3Rpb24gcmV3YXJkUGVyVG9rZW4oKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50KSB7CiAgICAgICAgaWYgKHRvdGFsU3VwcGx5ID09IDApIHsKICAgICAgICAgICAgcmV0dXJuIHJld2FyZFBlclRva2VuU3RvcmVkOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuCiAgICAgICAgICAgIHJld2FyZFBlclRva2VuU3RvcmVkICsKICAgICAgICAgICAgKHJld2FyZFJhdGUgKiAobGFzdFRpbWVSZXdhcmRBcHBsaWNhYmxlKCkgLSB1cGRhdGVkQXQpICogMWUxOCkgLwogICAgICAgICAgICB0b3RhbFN1cHBseTsKICAgIH0KCiAgICBmdW5jdGlvbiBzdGFrZSh1aW50IF9hbW91bnQpIGV4dGVybmFsIHVwZGF0ZVJld2FyZChtc2cuc2VuZGVyKSB7CiAgICAgICAgcmVxdWlyZShfYW1vdW50ID4gMCwgImFtb3VudCA9IDAiKTsKICAgICAgICBzdGFraW5nVG9rZW4udHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIF9hbW91bnQpOwogICAgICAgIGJhbGFuY2VPZlttc2cuc2VuZGVyXSArPSBfYW1vdW50OwogICAgICAgIHRvdGFsU3VwcGx5ICs9IF9hbW91bnQ7CiAgICB9CgogICAgZnVuY3Rpb24gd2l0aGRyYXcodWludCBfYW1vdW50KSBleHRlcm5hbCB1cGRhdGVSZXdhcmQobXNnLnNlbmRlcikgewogICAgICAgIHJlcXVpcmUoX2Ftb3VudCA+IDAsICJhbW91bnQgPSAwIik7CiAgICAgICAgYmFsYW5jZU9mW21zZy5zZW5kZXJdIC09IF9hbW91bnQ7CiAgICAgICAgdG90YWxTdXBwbHkgLT0gX2Ftb3VudDsKICAgICAgICBzdGFraW5nVG9rZW4udHJhbnNmZXIobXNnLnNlbmRlciwgX2Ftb3VudCk7CiAgICB9CgogICAgZnVuY3Rpb24gZWFybmVkKGFkZHJlc3MgX2FjY291bnQpIHB1YmxpYyB2aWV3IHJldHVybnMgKHVpbnQpIHsKICAgICAgICByZXR1cm4KICAgICAgICAgICAgKChiYWxhbmNlT2ZbX2FjY291bnRdICoKICAgICAgICAgICAgICAgIChyZXdhcmRQZXJUb2tlbigpIC0gdXNlclJld2FyZFBlclRva2VuUGFpZFtfYWNjb3VudF0pKSAvIDFlMTgpICsKICAgICAgICAgICAgcmV3YXJkc1tfYWNjb3VudF07CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0UmV3YXJkKCkgZXh0ZXJuYWwgdXBkYXRlUmV3YXJkKG1zZy5zZW5kZXIpIHsKICAgICAgICB1aW50IHJld2FyZCA9IHJld2FyZHNbbXNnLnNlbmRlcl07CiAgICAgICAgaWYgKHJld2FyZCA+IDApIHsKICAgICAgICAgICAgcmV3YXJkc1ttc2cuc2VuZGVyXSA9IDA7CiAgICAgICAgICAgIHJld2FyZHNUb2tlbi50cmFuc2Zlcihtc2cuc2VuZGVyLCByZXdhcmQpOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBzZXRSZXdhcmRzRHVyYXRpb24odWludCBfZHVyYXRpb24pIGV4dGVybmFsIG9ubHlPd25lciB7CiAgICAgICAgcmVxdWlyZShmaW5pc2hBdCA8IGJsb2NrLnRpbWVzdGFtcCwgInJld2FyZCBkdXJhdGlvbiBub3QgZmluaXNoZWQiKTsKICAgICAgICBkdXJhdGlvbiA9IF9kdXJhdGlvbjsKICAgIH0KCiAgICBmdW5jdGlvbiBub3RpZnlSZXdhcmRBbW91bnQoCiAgICAgICAgdWludCBfYW1vdW50CiAgICApIGV4dGVybmFsIG9ubHlPd25lciB1cGRhdGVSZXdhcmQoYWRkcmVzcygwKSkgewogICAgICAgIGlmIChibG9jay50aW1lc3RhbXAgPj0gZmluaXNoQXQpIHsKICAgICAgICAgICAgcmV3YXJkUmF0ZSA9IF9hbW91bnQgLyBkdXJhdGlvbjsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICB1aW50IHJlbWFpbmluZ1Jld2FyZHMgPSAoZmluaXNoQXQgLSBibG9jay50aW1lc3RhbXApICogcmV3YXJkUmF0ZTsKICAgICAgICAgICAgcmV3YXJkUmF0ZSA9IChfYW1vdW50ICsgcmVtYWluaW5nUmV3YXJkcykgLyBkdXJhdGlvbjsKICAgICAgICB9CgogICAgICAgIHJlcXVpcmUocmV3YXJkUmF0ZSA+IDAsICJyZXdhcmQgcmF0ZSA9IDAiKTsKICAgICAgICByZXF1aXJlKAogICAgICAgICAgICByZXdhcmRSYXRlICogZHVyYXRpb24gPD0gcmV3YXJkc1Rva2VuLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKSwKICAgICAgICAgICAgInJld2FyZCBhbW91bnQgPiBiYWxhbmNlIgogICAgICAgICk7CgogICAgICAgIGZpbmlzaEF0ID0gYmxvY2sudGltZXN0YW1wICsgZHVyYXRpb247CiAgICAgICAgdXBkYXRlZEF0ID0gYmxvY2sudGltZXN0YW1wOwogICAgfQoKICAgIGZ1bmN0aW9uIF9taW4odWludCB4LCB1aW50IHkpIHByaXZhdGUgcHVyZSByZXR1cm5zICh1aW50KSB7CiAgICAgICAgcmV0dXJuIHggPD0geSA/IHggOiB5OwogICAgfQp9CgppbnRlcmZhY2UgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIHRvdGFsU3VwcGx5KCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBhY2NvdW50KSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQpOwoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgcmVjaXBpZW50LCB1aW50IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CgogICAgZnVuY3Rpb24gYWxsb3dhbmNlKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgc3BlbmRlcikgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3Mgc3BlbmRlciwgdWludCBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbSgKICAgICAgICBhZGRyZXNzIHNlbmRlciwKICAgICAgICBhZGRyZXNzIHJlY2lwaWVudCwKICAgICAgICB1aW50IGFtb3VudAogICAgKSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKCiAgICBldmVudCBUcmFuc2ZlcihhZGRyZXNzIGluZGV4ZWQgZnJvbSwgYWRkcmVzcyBpbmRleGVkIHRvLCB1aW50IHZhbHVlKTsKICAgIGV2ZW50IEFwcHJvdmFsKGFkZHJlc3MgaW5kZXhlZCBvd25lciwgYWRkcmVzcyBpbmRleGVkIHNwZW5kZXIsIHVpbnQgdmFsdWUpOwp9Cg==",
    },
]

const html = `<p>This is a minimal example of a contract that rewards users for staking their token.</p>
<p>Code is a stripped down version of Synthetix <a href="https://github.com/Synthetixio/synthetix/blob/develop/contracts/StakingRewards.sol" target="__blank">StakingRewards.sol</a></p>
<h3>Staking Rewards</h3>
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

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">notifyRewardAmount</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> _amount
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">onlyOwner</span> <span class="hljs-title">updateReward</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>(<span class="hljs-params"><span class="hljs-number">0</span></span>)</span>) </span>{
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
</code></pre>`

export default html
