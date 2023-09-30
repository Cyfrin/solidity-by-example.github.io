// metadata
export const version = "0.8.20"
export const title = "Uniswap V2 Optimal One Sided Supply"
export const description = "Uniswap V2 Optimal One Sided Supply"

export const keywords = [
  "defi",
  "uniswap",
  "v2",
  "optimal",
  "one",
  "sided",
  "supply",
  "amm",
]

export const codes = [
  {
    fileName: "Optimal.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IFRlc3RVbmlzd2FwT3B0aW1hbE9uZVNpZGVkU3VwcGx5IHsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBGQUNUT1JZID0gMHg1QzY5YkVlNzAxZWY4MTRhMkI2YTNFREQ0QjE2NTJDQjljYzVhQTZmOwogICAgYWRkcmVzcyBwcml2YXRlIGNvbnN0YW50IFJPVVRFUiA9IDB4N2EyNTBkNTYzMEI0Y0Y1Mzk3MzlkRjJDNWRBY2I0YzY1OUYyNDg4RDsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBXRVRIID0gMHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyOwoKICAgIGZ1bmN0aW9uIHNxcnQodWludCB5KSBwcml2YXRlIHB1cmUgcmV0dXJucyAodWludCB6KSB7CiAgICAgICAgaWYgKHkgPiAzKSB7CiAgICAgICAgICAgIHogPSB5OwogICAgICAgICAgICB1aW50IHggPSB5IC8gMiArIDE7CiAgICAgICAgICAgIHdoaWxlICh4IDwgeikgewogICAgICAgICAgICAgICAgeiA9IHg7CiAgICAgICAgICAgICAgICB4ID0gKHkgLyB4ICsgeCkgLyAyOwogICAgICAgICAgICB9CiAgICAgICAgfSBlbHNlIGlmICh5ICE9IDApIHsKICAgICAgICAgICAgeiA9IDE7CiAgICAgICAgfQogICAgfQoKICAgIC8qCiAgICBzID0gb3B0aW1hbCBzd2FwIGFtb3VudAogICAgciA9IGFtb3VudCBvZiByZXNlcnZlIGZvciB0b2tlbiBhCiAgICBhID0gYW1vdW50IG9mIHRva2VuIGEgdGhlIHVzZXIgY3VycmVudGx5IGhhcyAobm90IGFkZGVkIHRvIHJlc2VydmUgeWV0KQogICAgZiA9IHN3YXAgZmVlIHBlcmNlbnQKICAgIHMgPSAoc3FydCgoKDIgLSBmKXIpXjIgKyA0KDEgLSBmKWFyKSAtICgyIC0gZilyKSAvICgyKDEgLSBmKSkKICAgICovCiAgICBmdW5jdGlvbiBnZXRTd2FwQW1vdW50KHVpbnQgciwgdWludCBhKSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50KSB7CiAgICAgICAgcmV0dXJuIChzcXJ0KHIgKiAociAqIDM5ODgwMDkgKyBhICogMzk4ODAwMCkpIC0gciAqIDE5OTcpIC8gMTk5NDsKICAgIH0KCiAgICAvKiBPcHRpbWFsIG9uZS1zaWRlZCBzdXBwbHkKICAgIDEuIFN3YXAgb3B0aW1hbCBhbW91bnQgZnJvbSB0b2tlbiBBIHRvIHRva2VuIEIKICAgIDIuIEFkZCBsaXF1aWRpdHkKICAgICovCiAgICBmdW5jdGlvbiB6YXAoYWRkcmVzcyBfdG9rZW5BLCBhZGRyZXNzIF90b2tlbkIsIHVpbnQgX2Ftb3VudEEpIGV4dGVybmFsIHsKICAgICAgICByZXF1aXJlKF90b2tlbkEgPT0gV0VUSCB8fCBfdG9rZW5CID09IFdFVEgsICIhd2V0aCIpOwoKICAgICAgICBJRVJDMjAoX3Rva2VuQSkudHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIF9hbW91bnRBKTsKCiAgICAgICAgYWRkcmVzcyBwYWlyID0gSVVuaXN3YXBWMkZhY3RvcnkoRkFDVE9SWSkuZ2V0UGFpcihfdG9rZW5BLCBfdG9rZW5CKTsKICAgICAgICAodWludCByZXNlcnZlMCwgdWludCByZXNlcnZlMSwgKSA9IElVbmlzd2FwVjJQYWlyKHBhaXIpLmdldFJlc2VydmVzKCk7CgogICAgICAgIHVpbnQgc3dhcEFtb3VudDsKICAgICAgICBpZiAoSVVuaXN3YXBWMlBhaXIocGFpcikudG9rZW4wKCkgPT0gX3Rva2VuQSkgewogICAgICAgICAgICAvLyBzd2FwIGZyb20gdG9rZW4wIHRvIHRva2VuMQogICAgICAgICAgICBzd2FwQW1vdW50ID0gZ2V0U3dhcEFtb3VudChyZXNlcnZlMCwgX2Ftb3VudEEpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIC8vIHN3YXAgZnJvbSB0b2tlbjEgdG8gdG9rZW4wCiAgICAgICAgICAgIHN3YXBBbW91bnQgPSBnZXRTd2FwQW1vdW50KHJlc2VydmUxLCBfYW1vdW50QSk7CiAgICAgICAgfQoKICAgICAgICBfc3dhcChfdG9rZW5BLCBfdG9rZW5CLCBzd2FwQW1vdW50KTsKICAgICAgICBfYWRkTGlxdWlkaXR5KF90b2tlbkEsIF90b2tlbkIpOwogICAgfQoKICAgIGZ1bmN0aW9uIF9zd2FwKGFkZHJlc3MgX2Zyb20sIGFkZHJlc3MgX3RvLCB1aW50IF9hbW91bnQpIGludGVybmFsIHsKICAgICAgICBJRVJDMjAoX2Zyb20pLmFwcHJvdmUoUk9VVEVSLCBfYW1vdW50KTsKCiAgICAgICAgYWRkcmVzc1tdIG1lbW9yeSBwYXRoID0gbmV3IGFkZHJlc3NbXSgyKTsKICAgICAgICBwYXRoID0gbmV3IGFkZHJlc3NbXSgyKTsKICAgICAgICBwYXRoWzBdID0gX2Zyb207CiAgICAgICAgcGF0aFsxXSA9IF90bzsKCiAgICAgICAgSVVuaXN3YXBWMlJvdXRlcihST1VURVIpLnN3YXBFeGFjdFRva2Vuc0ZvclRva2VucygKICAgICAgICAgICAgX2Ftb3VudCwKICAgICAgICAgICAgMSwKICAgICAgICAgICAgcGF0aCwKICAgICAgICAgICAgYWRkcmVzcyh0aGlzKSwKICAgICAgICAgICAgYmxvY2sudGltZXN0YW1wCiAgICAgICAgKTsKICAgIH0KCiAgICBmdW5jdGlvbiBfYWRkTGlxdWlkaXR5KGFkZHJlc3MgX3Rva2VuQSwgYWRkcmVzcyBfdG9rZW5CKSBpbnRlcm5hbCB7CiAgICAgICAgdWludCBiYWxBID0gSUVSQzIwKF90b2tlbkEpLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKTsKICAgICAgICB1aW50IGJhbEIgPSBJRVJDMjAoX3Rva2VuQikuYmFsYW5jZU9mKGFkZHJlc3ModGhpcykpOwogICAgICAgIElFUkMyMChfdG9rZW5BKS5hcHByb3ZlKFJPVVRFUiwgYmFsQSk7CiAgICAgICAgSUVSQzIwKF90b2tlbkIpLmFwcHJvdmUoUk9VVEVSLCBiYWxCKTsKCiAgICAgICAgSVVuaXN3YXBWMlJvdXRlcihST1VURVIpLmFkZExpcXVpZGl0eSgKICAgICAgICAgICAgX3Rva2VuQSwKICAgICAgICAgICAgX3Rva2VuQiwKICAgICAgICAgICAgYmFsQSwKICAgICAgICAgICAgYmFsQiwKICAgICAgICAgICAgMCwKICAgICAgICAgICAgMCwKICAgICAgICAgICAgYWRkcmVzcyh0aGlzKSwKICAgICAgICAgICAgYmxvY2sudGltZXN0YW1wCiAgICAgICAgKTsKICAgIH0KfQoKaW50ZXJmYWNlIElVbmlzd2FwVjJSb3V0ZXIgewogICAgZnVuY3Rpb24gYWRkTGlxdWlkaXR5KAogICAgICAgIGFkZHJlc3MgdG9rZW5BLAogICAgICAgIGFkZHJlc3MgdG9rZW5CLAogICAgICAgIHVpbnQgYW1vdW50QURlc2lyZWQsCiAgICAgICAgdWludCBhbW91bnRCRGVzaXJlZCwKICAgICAgICB1aW50IGFtb3VudEFNaW4sCiAgICAgICAgdWludCBhbW91bnRCTWluLAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgdWludCBkZWFkbGluZQogICAgKSBleHRlcm5hbCByZXR1cm5zICh1aW50IGFtb3VudEEsIHVpbnQgYW1vdW50QiwgdWludCBsaXF1aWRpdHkpOwoKICAgIGZ1bmN0aW9uIHN3YXBFeGFjdFRva2Vuc0ZvclRva2VucygKICAgICAgICB1aW50IGFtb3VudEluLAogICAgICAgIHVpbnQgYW1vdW50T3V0TWluLAogICAgICAgIGFkZHJlc3NbXSBjYWxsZGF0YSBwYXRoLAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgdWludCBkZWFkbGluZQogICAgKSBleHRlcm5hbCByZXR1cm5zICh1aW50W10gbWVtb3J5IGFtb3VudHMpOwp9CgppbnRlcmZhY2UgSVVuaXN3YXBWMkZhY3RvcnkgewogICAgZnVuY3Rpb24gZ2V0UGFpcihhZGRyZXNzIHRva2VuMCwgYWRkcmVzcyB0b2tlbjEpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAoYWRkcmVzcyk7Cn0KCmludGVyZmFjZSBJVW5pc3dhcFYyUGFpciB7CiAgICBmdW5jdGlvbiB0b2tlbjAoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKGFkZHJlc3MpOwoKICAgIGZ1bmN0aW9uIHRva2VuMSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAoYWRkcmVzcyk7CgogICAgZnVuY3Rpb24gZ2V0UmVzZXJ2ZXMoKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKHVpbnQxMTIgcmVzZXJ2ZTAsIHVpbnQxMTIgcmVzZXJ2ZTEsIHVpbnQzMiBibG9ja1RpbWVzdGFtcExhc3QpOwp9CgppbnRlcmZhY2UgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIHRvdGFsU3VwcGx5KCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBhY2NvdW50KSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQpOwoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgcmVjaXBpZW50LCB1aW50IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CgogICAgZnVuY3Rpb24gYWxsb3dhbmNlKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgc3BlbmRlcikgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3Mgc3BlbmRlciwgdWludCBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbSgKICAgICAgICBhZGRyZXNzIHNlbmRlciwKICAgICAgICBhZGRyZXNzIHJlY2lwaWVudCwKICAgICAgICB1aW50IGFtb3VudAogICAgKSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKfQo=",
  },
]

const html = `<h3>Optimal One Sided Supply</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestUniswapOptimalOneSidedSupply</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> FACTORY <span class="hljs-operator">=</span> <span class="hljs-number">0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> ROUTER <span class="hljs-operator">=</span> <span class="hljs-number">0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sqrt</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> z</span>) </span>{
        <span class="hljs-keyword">if</span> (y <span class="hljs-operator">&gt;</span> <span class="hljs-number">3</span>) {
            z <span class="hljs-operator">=</span> y;
            <span class="hljs-keyword">uint</span> x <span class="hljs-operator">=</span> y <span class="hljs-operator">/</span> <span class="hljs-number">2</span> <span class="hljs-operator">+</span> <span class="hljs-number">1</span>;
            <span class="hljs-keyword">while</span> (x <span class="hljs-operator">&lt;</span> z) {
                z <span class="hljs-operator">=</span> x;
                x <span class="hljs-operator">=</span> (y <span class="hljs-operator">/</span> x <span class="hljs-operator">+</span> x) <span class="hljs-operator">/</span> <span class="hljs-number">2</span>;
            }
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (y <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>) {
            z <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        }
    }

    <span class="hljs-comment">/*
    s = optimal swap amount
    r = amount of reserve for token a
    a = amount of token a the user currently has (not added to reserve yet)
    f = swap fee percent
    s = (sqrt(((2 - f)r)^2 + 4(1 - f)ar) - (2 - f)r) / (2(1 - f))
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getSwapAmount</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> r, <span class="hljs-keyword">uint</span> a</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> (sqrt(r <span class="hljs-operator">*</span> (r <span class="hljs-operator">*</span> <span class="hljs-number">3988009</span> <span class="hljs-operator">+</span> a <span class="hljs-operator">*</span> <span class="hljs-number">3988000</span>)) <span class="hljs-operator">-</span> r <span class="hljs-operator">*</span> <span class="hljs-number">1997</span>) <span class="hljs-operator">/</span> <span class="hljs-number">1994</span>;
    }

    <span class="hljs-comment">/* Optimal one-sided supply
    1. Swap optimal amount from token A to token B
    2. Add liquidity
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">zap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _tokenA, <span class="hljs-keyword">address</span> _tokenB, <span class="hljs-keyword">uint</span> _amountA</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(_tokenA <span class="hljs-operator">=</span><span class="hljs-operator">=</span> WETH <span class="hljs-operator">|</span><span class="hljs-operator">|</span> _tokenB <span class="hljs-operator">=</span><span class="hljs-operator">=</span> WETH, <span class="hljs-string">"!weth"</span>);

        IERC20(_tokenA).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amountA);

        <span class="hljs-keyword">address</span> pair <span class="hljs-operator">=</span> IUniswapV2Factory(FACTORY).getPair(_tokenA, _tokenB);
        (<span class="hljs-keyword">uint</span> reserve0, <span class="hljs-keyword">uint</span> reserve1, ) <span class="hljs-operator">=</span> IUniswapV2Pair(pair).getReserves();

        <span class="hljs-keyword">uint</span> swapAmount;
        <span class="hljs-keyword">if</span> (IUniswapV2Pair(pair).token0() <span class="hljs-operator">=</span><span class="hljs-operator">=</span> _tokenA) {
            <span class="hljs-comment">// swap from token0 to token1</span>
            swapAmount <span class="hljs-operator">=</span> getSwapAmount(reserve0, _amountA);
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-comment">// swap from token1 to token0</span>
            swapAmount <span class="hljs-operator">=</span> getSwapAmount(reserve1, _amountA);
        }

        _swap(_tokenA, _tokenB, swapAmount);
        _addLiquidity(_tokenA, _tokenB);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_swap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _from, <span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        IERC20(_from).approve(ROUTER, _amount);

        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span> path <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">address</span>[](<span class="hljs-number">2</span>);
        path <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">address</span>[](<span class="hljs-number">2</span>);
        path[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> _from;
        path[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> _to;

        IUniswapV2Router(ROUTER).swapExactTokensForTokens(
            _amount,
            <span class="hljs-number">1</span>,
            path,
            <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>),
            <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_addLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _tokenA, <span class="hljs-keyword">address</span> _tokenB</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        <span class="hljs-keyword">uint</span> balA <span class="hljs-operator">=</span> IERC20(_tokenA).balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        <span class="hljs-keyword">uint</span> balB <span class="hljs-operator">=</span> IERC20(_tokenB).balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        IERC20(_tokenA).approve(ROUTER, balA);
        IERC20(_tokenB).approve(ROUTER, balB);

        IUniswapV2Router(ROUTER).addLiquidity(
            _tokenA,
            _tokenB,
            balA,
            balB,
            <span class="hljs-number">0</span>,
            <span class="hljs-number">0</span>,
            <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>),
            <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Router</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> tokenA,
        <span class="hljs-keyword">address</span> tokenB,
        <span class="hljs-keyword">uint</span> amountADesired,
        <span class="hljs-keyword">uint</span> amountBDesired,
        <span class="hljs-keyword">uint</span> amountAMin,
        <span class="hljs-keyword">uint</span> amountBMin,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> deadline
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountA, <span class="hljs-keyword">uint</span> amountB, <span class="hljs-keyword">uint</span> liquidity</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapExactTokensForTokens</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> amountIn,
        <span class="hljs-keyword">uint</span> amountOutMin,
        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">calldata</span> path,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> deadline
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> amounts</span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Factory</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getPair</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> token0, <span class="hljs-keyword">address</span> token1</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Pair</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">token0</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">token1</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getReserves</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint112</span> reserve0, <span class="hljs-keyword">uint112</span> reserve1, <span class="hljs-keyword">uint32</span> blockTimestampLast</span>)</span>;
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
}
</code></pre>`

export default html
