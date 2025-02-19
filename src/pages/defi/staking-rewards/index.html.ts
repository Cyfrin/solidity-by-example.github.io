// metadata
export const version = "0.8.26"
export const title = "Staking Rewards"
export const description =
  "Staking rewards contract based on Synthetix StakingRewards.sol"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/staking-rewards-solidity-code-example"

export const keywords = ["defi", "staking", "reward", "rewards"]

export const codes = [
  {
    fileName: "StakingRewards.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IFN0YWtpbmdSZXdhcmRzIHsKICAgIElFUkMyMCBwdWJsaWMgaW1tdXRhYmxlIHN0YWtpbmdUb2tlbjsKICAgIElFUkMyMCBwdWJsaWMgaW1tdXRhYmxlIHJld2FyZHNUb2tlbjsKCiAgICBhZGRyZXNzIHB1YmxpYyBvd25lcjsKCiAgICAvLyBEdXJhdGlvbiBvZiByZXdhcmRzIHRvIGJlIHBhaWQgb3V0IChpbiBzZWNvbmRzKQogICAgdWludDI1NiBwdWJsaWMgZHVyYXRpb247CiAgICAvLyBUaW1lc3RhbXAgb2Ygd2hlbiB0aGUgcmV3YXJkcyBmaW5pc2gKICAgIHVpbnQyNTYgcHVibGljIGZpbmlzaEF0OwogICAgLy8gTWluaW11bSBvZiBsYXN0IHVwZGF0ZWQgdGltZSBhbmQgcmV3YXJkIGZpbmlzaCB0aW1lCiAgICB1aW50MjU2IHB1YmxpYyB1cGRhdGVkQXQ7CiAgICAvLyBSZXdhcmQgdG8gYmUgcGFpZCBvdXQgcGVyIHNlY29uZAogICAgdWludDI1NiBwdWJsaWMgcmV3YXJkUmF0ZTsKICAgIC8vIFN1bSBvZiAocmV3YXJkIHJhdGUgKiBkdCAqIDFlMTggLyB0b3RhbCBzdXBwbHkpCiAgICB1aW50MjU2IHB1YmxpYyByZXdhcmRQZXJUb2tlblN0b3JlZDsKICAgIC8vIFVzZXIgYWRkcmVzcyA9PiByZXdhcmRQZXJUb2tlblN0b3JlZAogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpIHB1YmxpYyB1c2VyUmV3YXJkUGVyVG9rZW5QYWlkOwogICAgLy8gVXNlciBhZGRyZXNzID0+IHJld2FyZHMgdG8gYmUgY2xhaW1lZAogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpIHB1YmxpYyByZXdhcmRzOwoKICAgIC8vIFRvdGFsIHN0YWtlZAogICAgdWludDI1NiBwdWJsaWMgdG90YWxTdXBwbHk7CiAgICAvLyBVc2VyIGFkZHJlc3MgPT4gc3Rha2VkIGFtb3VudAogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpIHB1YmxpYyBiYWxhbmNlT2Y7CgogICAgY29uc3RydWN0b3IoYWRkcmVzcyBfc3Rha2luZ1Rva2VuLCBhZGRyZXNzIF9yZXdhcmRUb2tlbikgewogICAgICAgIG93bmVyID0gbXNnLnNlbmRlcjsKICAgICAgICBzdGFraW5nVG9rZW4gPSBJRVJDMjAoX3N0YWtpbmdUb2tlbik7CiAgICAgICAgcmV3YXJkc1Rva2VuID0gSUVSQzIwKF9yZXdhcmRUb2tlbik7CiAgICB9CgogICAgbW9kaWZpZXIgb25seU93bmVyKCkgewogICAgICAgIHJlcXVpcmUobXNnLnNlbmRlciA9PSBvd25lciwgIm5vdCBhdXRob3JpemVkIik7CiAgICAgICAgXzsKICAgIH0KCiAgICBtb2RpZmllciB1cGRhdGVSZXdhcmQoYWRkcmVzcyBfYWNjb3VudCkgewogICAgICAgIHJld2FyZFBlclRva2VuU3RvcmVkID0gcmV3YXJkUGVyVG9rZW4oKTsKICAgICAgICB1cGRhdGVkQXQgPSBsYXN0VGltZVJld2FyZEFwcGxpY2FibGUoKTsKCiAgICAgICAgaWYgKF9hY2NvdW50ICE9IGFkZHJlc3MoMCkpIHsKICAgICAgICAgICAgcmV3YXJkc1tfYWNjb3VudF0gPSBlYXJuZWQoX2FjY291bnQpOwogICAgICAgICAgICB1c2VyUmV3YXJkUGVyVG9rZW5QYWlkW19hY2NvdW50XSA9IHJld2FyZFBlclRva2VuU3RvcmVkOwogICAgICAgIH0KCiAgICAgICAgXzsKICAgIH0KCiAgICBmdW5jdGlvbiBsYXN0VGltZVJld2FyZEFwcGxpY2FibGUoKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgcmV0dXJuIF9taW4oZmluaXNoQXQsIGJsb2NrLnRpbWVzdGFtcCk7CiAgICB9CgogICAgZnVuY3Rpb24gcmV3YXJkUGVyVG9rZW4oKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgaWYgKHRvdGFsU3VwcGx5ID09IDApIHsKICAgICAgICAgICAgcmV0dXJuIHJld2FyZFBlclRva2VuU3RvcmVkOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHJld2FyZFBlclRva2VuU3RvcmVkCiAgICAgICAgICAgICsgKHJld2FyZFJhdGUgKiAobGFzdFRpbWVSZXdhcmRBcHBsaWNhYmxlKCkgLSB1cGRhdGVkQXQpICogMWUxOCkKICAgICAgICAgICAgICAgIC8gdG90YWxTdXBwbHk7CiAgICB9CgogICAgZnVuY3Rpb24gc3Rha2UodWludDI1NiBfYW1vdW50KSBleHRlcm5hbCB1cGRhdGVSZXdhcmQobXNnLnNlbmRlcikgewogICAgICAgIHJlcXVpcmUoX2Ftb3VudCA+IDAsICJhbW91bnQgPSAwIik7CiAgICAgICAgc3Rha2luZ1Rva2VuLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBfYW1vdW50KTsKICAgICAgICBiYWxhbmNlT2ZbbXNnLnNlbmRlcl0gKz0gX2Ftb3VudDsKICAgICAgICB0b3RhbFN1cHBseSArPSBfYW1vdW50OwogICAgfQoKICAgIGZ1bmN0aW9uIHdpdGhkcmF3KHVpbnQyNTYgX2Ftb3VudCkgZXh0ZXJuYWwgdXBkYXRlUmV3YXJkKG1zZy5zZW5kZXIpIHsKICAgICAgICByZXF1aXJlKF9hbW91bnQgPiAwLCAiYW1vdW50ID0gMCIpOwogICAgICAgIGJhbGFuY2VPZlttc2cuc2VuZGVyXSAtPSBfYW1vdW50OwogICAgICAgIHRvdGFsU3VwcGx5IC09IF9hbW91bnQ7CiAgICAgICAgc3Rha2luZ1Rva2VuLnRyYW5zZmVyKG1zZy5zZW5kZXIsIF9hbW91bnQpOwogICAgfQoKICAgIGZ1bmN0aW9uIGVhcm5lZChhZGRyZXNzIF9hY2NvdW50KSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgKAogICAgICAgICAgICAgICAgYmFsYW5jZU9mW19hY2NvdW50XQogICAgICAgICAgICAgICAgICAgICogKHJld2FyZFBlclRva2VuKCkgLSB1c2VyUmV3YXJkUGVyVG9rZW5QYWlkW19hY2NvdW50XSkKICAgICAgICAgICAgKSAvIDFlMTgKICAgICAgICApICsgcmV3YXJkc1tfYWNjb3VudF07CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0UmV3YXJkKCkgZXh0ZXJuYWwgdXBkYXRlUmV3YXJkKG1zZy5zZW5kZXIpIHsKICAgICAgICB1aW50MjU2IHJld2FyZCA9IHJld2FyZHNbbXNnLnNlbmRlcl07CiAgICAgICAgaWYgKHJld2FyZCA+IDApIHsKICAgICAgICAgICAgcmV3YXJkc1ttc2cuc2VuZGVyXSA9IDA7CiAgICAgICAgICAgIHJld2FyZHNUb2tlbi50cmFuc2Zlcihtc2cuc2VuZGVyLCByZXdhcmQpOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBzZXRSZXdhcmRzRHVyYXRpb24odWludDI1NiBfZHVyYXRpb24pIGV4dGVybmFsIG9ubHlPd25lciB7CiAgICAgICAgcmVxdWlyZShmaW5pc2hBdCA8IGJsb2NrLnRpbWVzdGFtcCwgInJld2FyZCBkdXJhdGlvbiBub3QgZmluaXNoZWQiKTsKICAgICAgICBkdXJhdGlvbiA9IF9kdXJhdGlvbjsKICAgIH0KCiAgICBmdW5jdGlvbiBub3RpZnlSZXdhcmRBbW91bnQodWludDI1NiBfYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgb25seU93bmVyCiAgICAgICAgdXBkYXRlUmV3YXJkKGFkZHJlc3MoMCkpCiAgICB7CiAgICAgICAgaWYgKGJsb2NrLnRpbWVzdGFtcCA+PSBmaW5pc2hBdCkgewogICAgICAgICAgICByZXdhcmRSYXRlID0gX2Ftb3VudCAvIGR1cmF0aW9uOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHVpbnQyNTYgcmVtYWluaW5nUmV3YXJkcyA9IChmaW5pc2hBdCAtIGJsb2NrLnRpbWVzdGFtcCkgKiByZXdhcmRSYXRlOwogICAgICAgICAgICByZXdhcmRSYXRlID0gKF9hbW91bnQgKyByZW1haW5pbmdSZXdhcmRzKSAvIGR1cmF0aW9uOwogICAgICAgIH0KCiAgICAgICAgcmVxdWlyZShyZXdhcmRSYXRlID4gMCwgInJld2FyZCByYXRlID0gMCIpOwogICAgICAgIHJlcXVpcmUoCiAgICAgICAgICAgIHJld2FyZFJhdGUgKiBkdXJhdGlvbiA8PSByZXdhcmRzVG9rZW4uYmFsYW5jZU9mKGFkZHJlc3ModGhpcykpLAogICAgICAgICAgICAicmV3YXJkIGFtb3VudCA+IGJhbGFuY2UiCiAgICAgICAgKTsKCiAgICAgICAgZmluaXNoQXQgPSBibG9jay50aW1lc3RhbXAgKyBkdXJhdGlvbjsKICAgICAgICB1cGRhdGVkQXQgPSBibG9jay50aW1lc3RhbXA7CiAgICB9CgogICAgZnVuY3Rpb24gX21pbih1aW50MjU2IHgsIHVpbnQyNTYgeSkgcHJpdmF0ZSBwdXJlIHJldHVybnMgKHVpbnQyNTYpIHsKICAgICAgICByZXR1cm4geCA8PSB5ID8geCA6IHk7CiAgICB9Cn0KCmludGVyZmFjZSBJRVJDMjAgewogICAgZnVuY3Rpb24gdG90YWxTdXBwbHkoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gYWxsb3dhbmNlKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgc3BlbmRlcikKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGFwcHJvdmUoYWRkcmVzcyBzcGVuZGVyLCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oYWRkcmVzcyBzZW5kZXIsIGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpOwp9Cg==",
  },
]

const html = `<p>This is a minimal example of a contract that rewards users for staking their token.</p>
<p>Code is a stripped down version of Synthetix <a href="https://github.com/Synthetixio/synthetix/blob/develop/contracts/StakingRewards.sol" target="_blank">StakingRewards.sol</a></p>
<h3>Staking Rewards</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">StakingRewards</span> </span>{
    IERC20 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> stakingToken;
    IERC20 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> rewardsToken;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;

    <span class="hljs-comment">// Duration of rewards to be paid out (in seconds)</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> duration;
    <span class="hljs-comment">// Timestamp of when the rewards finish</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> finishAt;
    <span class="hljs-comment">// Minimum of last updated time and reward finish time</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> updatedAt;
    <span class="hljs-comment">// Reward to be paid out per second</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> rewardRate;
    <span class="hljs-comment">// Sum of (reward rate * dt * 1e18 / total supply)</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> rewardPerTokenStored;
    <span class="hljs-comment">// User address =&gt; rewardPerTokenStored</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> userRewardPerTokenPaid;
    <span class="hljs-comment">// User address =&gt; rewards to be claimed</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> rewards;

    <span class="hljs-comment">// Total staked</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> totalSupply;
    <span class="hljs-comment">// User address =&gt; staked amount</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> balanceOf;

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

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">lastTimeRewardApplicable</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> _min(finishAt, <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">rewardPerToken</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">if</span> (totalSupply <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>) {
            <span class="hljs-keyword">return</span> rewardPerTokenStored;
        }

        <span class="hljs-keyword">return</span> rewardPerTokenStored
            <span class="hljs-operator">+</span> (rewardRate <span class="hljs-operator">*</span> (lastTimeRewardApplicable() <span class="hljs-operator">-</span> updatedAt) <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>)
                <span class="hljs-operator">/</span> totalSupply;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">stake</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">updateReward</span>(<span class="hljs-params"><span class="hljs-built_in">msg</span>.sender</span>) </span>{
        <span class="hljs-built_in">require</span>(_amount <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"amount = 0"</span>);
        stakingToken.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amount);
        balanceOf[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
        totalSupply <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">updateReward</span>(<span class="hljs-params"><span class="hljs-built_in">msg</span>.sender</span>) </span>{
        <span class="hljs-built_in">require</span>(_amount <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"amount = 0"</span>);
        balanceOf[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
        totalSupply <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
        stakingToken.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">earned</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _account</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> (
            (
                balanceOf[_account]
                    <span class="hljs-operator">*</span> (rewardPerToken() <span class="hljs-operator">-</span> userRewardPerTokenPaid[_account])
            ) <span class="hljs-operator">/</span> <span class="hljs-number">1e18</span>
        ) <span class="hljs-operator">+</span> rewards[_account];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getReward</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">updateReward</span>(<span class="hljs-params"><span class="hljs-built_in">msg</span>.sender</span>) </span>{
        <span class="hljs-keyword">uint256</span> reward <span class="hljs-operator">=</span> rewards[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        <span class="hljs-keyword">if</span> (reward <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            rewards[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
            rewardsToken.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, reward);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setRewardsDuration</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _duration</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">onlyOwner</span> </span>{
        <span class="hljs-built_in">require</span>(finishAt <span class="hljs-operator">&lt;</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>, <span class="hljs-string">"reward duration not finished"</span>);
        duration <span class="hljs-operator">=</span> _duration;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">notifyRewardAmount</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title">onlyOwner</span>
        <span class="hljs-title">updateReward</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>(<span class="hljs-params"><span class="hljs-number">0</span></span>)</span>)
    </span>{
        <span class="hljs-keyword">if</span> (<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> finishAt) {
            rewardRate <span class="hljs-operator">=</span> _amount <span class="hljs-operator">/</span> duration;
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-keyword">uint256</span> remainingRewards <span class="hljs-operator">=</span> (finishAt <span class="hljs-operator">-</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>) <span class="hljs-operator">*</span> rewardRate;
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

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_min</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> y ? x : y;
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">totalSupply</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">allowance</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">address</span> spender</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, <span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
}
</code></pre>`

export default html
