// metadata
export const version = "0.8.13"
export const title = "Discrete Staking Rewards"
export const description = "Discrete staking rewards"
export const codes = [
  {
    fileName: "DiscreteStakingRewards.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IERpc2NyZXRlU3Rha2luZ1Jld2FyZHMgewogICAgSUVSQzIwIHB1YmxpYyBpbW11dGFibGUgc3Rha2luZ1Rva2VuOwogICAgSUVSQzIwIHB1YmxpYyBpbW11dGFibGUgcmV3YXJkVG9rZW47CgogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQpIHB1YmxpYyBiYWxhbmNlT2Y7CiAgICB1aW50IHB1YmxpYyB0b3RhbFN1cHBseTsKCiAgICB1aW50IHByaXZhdGUgY29uc3RhbnQgTVVMVElQTElFUiA9IDFlMTg7CiAgICB1aW50IHByaXZhdGUgcmV3YXJkSW5kZXg7CiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gdWludCkgcHJpdmF0ZSByZXdhcmRJbmRleE9mOwogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQpIHByaXZhdGUgZWFybmVkOwoKICAgIGNvbnN0cnVjdG9yKGFkZHJlc3MgX3N0YWtpbmdUb2tlbiwgYWRkcmVzcyBfcmV3YXJkVG9rZW4pIHsKICAgICAgICBzdGFraW5nVG9rZW4gPSBJRVJDMjAoX3N0YWtpbmdUb2tlbik7CiAgICAgICAgcmV3YXJkVG9rZW4gPSBJRVJDMjAoX3Jld2FyZFRva2VuKTsKICAgIH0KCiAgICBmdW5jdGlvbiB1cGRhdGVSZXdhcmRJbmRleCh1aW50IHJld2FyZCkgZXh0ZXJuYWwgewogICAgICAgIHJld2FyZFRva2VuLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCByZXdhcmQpOwogICAgICAgIHJld2FyZEluZGV4ICs9IChyZXdhcmQgKiBNVUxUSVBMSUVSKSAvIHRvdGFsU3VwcGx5OwogICAgfQoKICAgIGZ1bmN0aW9uIF9jYWxjdWxhdGVSZXdhcmRzKGFkZHJlc3MgYWNjb3VudCkgcHJpdmF0ZSB2aWV3IHJldHVybnMgKHVpbnQpIHsKICAgICAgICB1aW50IHNoYXJlcyA9IGJhbGFuY2VPZlthY2NvdW50XTsKICAgICAgICByZXR1cm4gKHNoYXJlcyAqIChyZXdhcmRJbmRleCAtIHJld2FyZEluZGV4T2ZbYWNjb3VudF0pKSAvIE1VTFRJUExJRVI7CiAgICB9CgogICAgZnVuY3Rpb24gY2FsY3VsYXRlUmV3YXJkc0Vhcm5lZChhZGRyZXNzIGFjY291bnQpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCkgewogICAgICAgIHJldHVybiBlYXJuZWRbYWNjb3VudF0gKyBfY2FsY3VsYXRlUmV3YXJkcyhhY2NvdW50KTsKICAgIH0KCiAgICBmdW5jdGlvbiBfdXBkYXRlUmV3YXJkcyhhZGRyZXNzIGFjY291bnQpIHByaXZhdGUgewogICAgICAgIGVhcm5lZFthY2NvdW50XSArPSBfY2FsY3VsYXRlUmV3YXJkcyhhY2NvdW50KTsKICAgICAgICByZXdhcmRJbmRleE9mW2FjY291bnRdID0gcmV3YXJkSW5kZXg7CiAgICB9CgogICAgZnVuY3Rpb24gc3Rha2UodWludCBhbW91bnQpIGV4dGVybmFsIHsKICAgICAgICBfdXBkYXRlUmV3YXJkcyhtc2cuc2VuZGVyKTsKCiAgICAgICAgYmFsYW5jZU9mW21zZy5zZW5kZXJdICs9IGFtb3VudDsKICAgICAgICB0b3RhbFN1cHBseSArPSBhbW91bnQ7CgogICAgICAgIHN0YWtpbmdUb2tlbi50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgYW1vdW50KTsKICAgIH0KCiAgICBmdW5jdGlvbiB1bnN0YWtlKHVpbnQgYW1vdW50KSBleHRlcm5hbCB7CiAgICAgICAgX3VwZGF0ZVJld2FyZHMobXNnLnNlbmRlcik7CgogICAgICAgIGJhbGFuY2VPZlttc2cuc2VuZGVyXSAtPSBhbW91bnQ7CiAgICAgICAgdG90YWxTdXBwbHkgLT0gYW1vdW50OwoKICAgICAgICBzdGFraW5nVG9rZW4udHJhbnNmZXIobXNnLnNlbmRlciwgYW1vdW50KTsKICAgIH0KCiAgICBmdW5jdGlvbiBjbGFpbSgpIGV4dGVybmFsIHJldHVybnMgKHVpbnQpIHsKICAgICAgICBfdXBkYXRlUmV3YXJkcyhtc2cuc2VuZGVyKTsKCiAgICAgICAgdWludCByZXdhcmQgPSBlYXJuZWRbbXNnLnNlbmRlcl07CiAgICAgICAgaWYgKHJld2FyZCA+IDApIHsKICAgICAgICAgICAgZWFybmVkW21zZy5zZW5kZXJdID0gMDsKICAgICAgICAgICAgcmV3YXJkVG9rZW4udHJhbnNmZXIobXNnLnNlbmRlciwgcmV3YXJkKTsKICAgICAgICB9CgogICAgICAgIHJldHVybiByZXdhcmQ7CiAgICB9Cn0KCmludGVyZmFjZSBJRVJDMjAgewogICAgZnVuY3Rpb24gdG90YWxTdXBwbHkoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQpOwoKICAgIGZ1bmN0aW9uIGJhbGFuY2VPZihhZGRyZXNzIGFjY291bnQpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcyByZWNpcGllbnQsIHVpbnQgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKCiAgICBmdW5jdGlvbiBhbGxvd2FuY2UoYWRkcmVzcyBvd25lciwgYWRkcmVzcyBzcGVuZGVyKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQpOwoKICAgIGZ1bmN0aW9uIGFwcHJvdmUoYWRkcmVzcyBzcGVuZGVyLCB1aW50IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CgogICAgZnVuY3Rpb24gdHJhbnNmZXJGcm9tKAogICAgICAgIGFkZHJlc3Mgc2VuZGVyLAogICAgICAgIGFkZHJlc3MgcmVjaXBpZW50LAogICAgICAgIHVpbnQgYW1vdW50CiAgICApIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwoKICAgIGV2ZW50IFRyYW5zZmVyKGFkZHJlc3MgaW5kZXhlZCBmcm9tLCBhZGRyZXNzIGluZGV4ZWQgdG8sIHVpbnQgdmFsdWUpOwogICAgZXZlbnQgQXBwcm92YWwoYWRkcmVzcyBpbmRleGVkIG93bmVyLCBhZGRyZXNzIGluZGV4ZWQgc3BlbmRlciwgdWludCB2YWx1ZSk7Cn0K",
  },
]

const html = `<p>Similar to staking rewards contract. Difference is that reward amount may vary at each second.</p>
<h3 id="discrete-staking-rewards">Discrete Staking Rewards</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">DiscreteStakingRewards</span> </span>{
    IERC20 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> stakingToken;
    IERC20 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> rewardToken;

    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> balanceOf;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> totalSupply;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> MULTIPLIER <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> rewardIndex;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">private</span> rewardIndexOf;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">private</span> earned;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _stakingToken, <span class="hljs-keyword">address</span> _rewardToken</span>) </span>{
        stakingToken <span class="hljs-operator">=</span> IERC20(_stakingToken);
        rewardToken <span class="hljs-operator">=</span> IERC20(_rewardToken);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">updateRewardIndex</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> reward</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        rewardToken.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), reward);
        rewardIndex <span class="hljs-operator">+</span><span class="hljs-operator">=</span> (reward <span class="hljs-operator">*</span> MULTIPLIER) <span class="hljs-operator">/</span> totalSupply;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_calculateRewards</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">uint</span> shares <span class="hljs-operator">=</span> balanceOf[account];
        <span class="hljs-keyword">return</span> (shares <span class="hljs-operator">*</span> (rewardIndex <span class="hljs-operator">-</span> rewardIndexOf[account])) <span class="hljs-operator">/</span> MULTIPLIER;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">calculateRewardsEarned</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> earned[account] <span class="hljs-operator">+</span> _calculateRewards(account);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_updateRewards</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        earned[account] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _calculateRewards(account);
        rewardIndexOf[account] <span class="hljs-operator">=</span> rewardIndex;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">stake</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        _updateRewards(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);

        balanceOf[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        totalSupply <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;

        stakingToken.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">unstake</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        _updateRewards(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);

        balanceOf[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;
        totalSupply <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;

        stakingToken.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">claim</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        _updateRewards(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);

        <span class="hljs-keyword">uint</span> reward <span class="hljs-operator">=</span> earned[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        <span class="hljs-keyword">if</span> (reward <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            earned[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
            rewardToken.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, reward);
        }

        <span class="hljs-keyword">return</span> reward;
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
