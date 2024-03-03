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
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IFRlc3RVbmlzd2FwT3B0aW1hbE9uZVNpZGVkU3VwcGx5IHsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBGQUNUT1JZID0KICAgICAgICAweDVDNjliRWU3MDFlZjgxNGEyQjZhM0VERDRCMTY1MkNCOWNjNWFBNmY7CiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgUk9VVEVSID0gMHg3YTI1MGQ1NjMwQjRjRjUzOTczOWRGMkM1ZEFjYjRjNjU5RjI0ODhEOwogICAgYWRkcmVzcyBwcml2YXRlIGNvbnN0YW50IFdFVEggPSAweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzI7CgogICAgZnVuY3Rpb24gc3FydCh1aW50MjU2IHkpIHByaXZhdGUgcHVyZSByZXR1cm5zICh1aW50MjU2IHopIHsKICAgICAgICBpZiAoeSA+IDMpIHsKICAgICAgICAgICAgeiA9IHk7CiAgICAgICAgICAgIHVpbnQyNTYgeCA9IHkgLyAyICsgMTsKICAgICAgICAgICAgd2hpbGUgKHggPCB6KSB7CiAgICAgICAgICAgICAgICB6ID0geDsKICAgICAgICAgICAgICAgIHggPSAoeSAvIHggKyB4KSAvIDI7CiAgICAgICAgICAgIH0KICAgICAgICB9IGVsc2UgaWYgKHkgIT0gMCkgewogICAgICAgICAgICB6ID0gMTsKICAgICAgICB9CiAgICB9CgogICAgLyoKICAgIHMgPSBvcHRpbWFsIHN3YXAgYW1vdW50CiAgICByID0gYW1vdW50IG9mIHJlc2VydmUgZm9yIHRva2VuIGEKICAgIGEgPSBhbW91bnQgb2YgdG9rZW4gYSB0aGUgdXNlciBjdXJyZW50bHkgaGFzIChub3QgYWRkZWQgdG8gcmVzZXJ2ZSB5ZXQpCiAgICBmID0gc3dhcCBmZWUgcGVyY2VudAogICAgcyA9IChzcXJ0KCgoMiAtIGYpcileMiArIDQoMSAtIGYpYXIpIC0gKDIgLSBmKXIpIC8gKDIoMSAtIGYpKQogICAgKi8KICAgIGZ1bmN0aW9uIGdldFN3YXBBbW91bnQodWludDI1NiByLCB1aW50MjU2IGEpCiAgICAgICAgcHVibGljCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYpCiAgICB7CiAgICAgICAgcmV0dXJuIChzcXJ0KHIgKiAociAqIDM5ODgwMDkgKyBhICogMzk4ODAwMCkpIC0gciAqIDE5OTcpIC8gMTk5NDsKICAgIH0KCiAgICAvKiBPcHRpbWFsIG9uZS1zaWRlZCBzdXBwbHkKICAgIDEuIFN3YXAgb3B0aW1hbCBhbW91bnQgZnJvbSB0b2tlbiBBIHRvIHRva2VuIEIKICAgIDIuIEFkZCBsaXF1aWRpdHkKICAgICovCiAgICBmdW5jdGlvbiB6YXAoYWRkcmVzcyBfdG9rZW5BLCBhZGRyZXNzIF90b2tlbkIsIHVpbnQyNTYgX2Ftb3VudEEpIGV4dGVybmFsIHsKICAgICAgICByZXF1aXJlKF90b2tlbkEgPT0gV0VUSCB8fCBfdG9rZW5CID09IFdFVEgsICIhd2V0aCIpOwoKICAgICAgICBJRVJDMjAoX3Rva2VuQSkudHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIF9hbW91bnRBKTsKCiAgICAgICAgYWRkcmVzcyBwYWlyID0gSVVuaXN3YXBWMkZhY3RvcnkoRkFDVE9SWSkuZ2V0UGFpcihfdG9rZW5BLCBfdG9rZW5CKTsKICAgICAgICAodWludDI1NiByZXNlcnZlMCwgdWludDI1NiByZXNlcnZlMSwpID0KICAgICAgICAgICAgSVVuaXN3YXBWMlBhaXIocGFpcikuZ2V0UmVzZXJ2ZXMoKTsKCiAgICAgICAgdWludDI1NiBzd2FwQW1vdW50OwogICAgICAgIGlmIChJVW5pc3dhcFYyUGFpcihwYWlyKS50b2tlbjAoKSA9PSBfdG9rZW5BKSB7CiAgICAgICAgICAgIC8vIHN3YXAgZnJvbSB0b2tlbjAgdG8gdG9rZW4xCiAgICAgICAgICAgIHN3YXBBbW91bnQgPSBnZXRTd2FwQW1vdW50KHJlc2VydmUwLCBfYW1vdW50QSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgLy8gc3dhcCBmcm9tIHRva2VuMSB0byB0b2tlbjAKICAgICAgICAgICAgc3dhcEFtb3VudCA9IGdldFN3YXBBbW91bnQocmVzZXJ2ZTEsIF9hbW91bnRBKTsKICAgICAgICB9CgogICAgICAgIF9zd2FwKF90b2tlbkEsIF90b2tlbkIsIHN3YXBBbW91bnQpOwogICAgICAgIF9hZGRMaXF1aWRpdHkoX3Rva2VuQSwgX3Rva2VuQik7CiAgICB9CgogICAgZnVuY3Rpb24gX3N3YXAoYWRkcmVzcyBfZnJvbSwgYWRkcmVzcyBfdG8sIHVpbnQyNTYgX2Ftb3VudCkgaW50ZXJuYWwgewogICAgICAgIElFUkMyMChfZnJvbSkuYXBwcm92ZShST1VURVIsIF9hbW91bnQpOwoKICAgICAgICBhZGRyZXNzW10gbWVtb3J5IHBhdGggPSBuZXcgYWRkcmVzc1tdKDIpOwogICAgICAgIHBhdGggPSBuZXcgYWRkcmVzc1tdKDIpOwogICAgICAgIHBhdGhbMF0gPSBfZnJvbTsKICAgICAgICBwYXRoWzFdID0gX3RvOwoKICAgICAgICBJVW5pc3dhcFYyUm91dGVyKFJPVVRFUikuc3dhcEV4YWN0VG9rZW5zRm9yVG9rZW5zKAogICAgICAgICAgICBfYW1vdW50LCAxLCBwYXRoLCBhZGRyZXNzKHRoaXMpLCBibG9jay50aW1lc3RhbXAKICAgICAgICApOwogICAgfQoKICAgIGZ1bmN0aW9uIF9hZGRMaXF1aWRpdHkoYWRkcmVzcyBfdG9rZW5BLCBhZGRyZXNzIF90b2tlbkIpIGludGVybmFsIHsKICAgICAgICB1aW50MjU2IGJhbEEgPSBJRVJDMjAoX3Rva2VuQSkuYmFsYW5jZU9mKGFkZHJlc3ModGhpcykpOwogICAgICAgIHVpbnQyNTYgYmFsQiA9IElFUkMyMChfdG9rZW5CKS5iYWxhbmNlT2YoYWRkcmVzcyh0aGlzKSk7CiAgICAgICAgSUVSQzIwKF90b2tlbkEpLmFwcHJvdmUoUk9VVEVSLCBiYWxBKTsKICAgICAgICBJRVJDMjAoX3Rva2VuQikuYXBwcm92ZShST1VURVIsIGJhbEIpOwoKICAgICAgICBJVW5pc3dhcFYyUm91dGVyKFJPVVRFUikuYWRkTGlxdWlkaXR5KAogICAgICAgICAgICBfdG9rZW5BLCBfdG9rZW5CLCBiYWxBLCBiYWxCLCAwLCAwLCBhZGRyZXNzKHRoaXMpLCBibG9jay50aW1lc3RhbXAKICAgICAgICApOwogICAgfQp9CgppbnRlcmZhY2UgSVVuaXN3YXBWMlJvdXRlciB7CiAgICBmdW5jdGlvbiBhZGRMaXF1aWRpdHkoCiAgICAgICAgYWRkcmVzcyB0b2tlbkEsCiAgICAgICAgYWRkcmVzcyB0b2tlbkIsCiAgICAgICAgdWludDI1NiBhbW91bnRBRGVzaXJlZCwKICAgICAgICB1aW50MjU2IGFtb3VudEJEZXNpcmVkLAogICAgICAgIHVpbnQyNTYgYW1vdW50QU1pbiwKICAgICAgICB1aW50MjU2IGFtb3VudEJNaW4sCiAgICAgICAgYWRkcmVzcyB0bywKICAgICAgICB1aW50MjU2IGRlYWRsaW5lCiAgICApIGV4dGVybmFsIHJldHVybnMgKHVpbnQyNTYgYW1vdW50QSwgdWludDI1NiBhbW91bnRCLCB1aW50MjU2IGxpcXVpZGl0eSk7CgogICAgZnVuY3Rpb24gc3dhcEV4YWN0VG9rZW5zRm9yVG9rZW5zKAogICAgICAgIHVpbnQyNTYgYW1vdW50SW4sCiAgICAgICAgdWludDI1NiBhbW91bnRPdXRNaW4sCiAgICAgICAgYWRkcmVzc1tdIGNhbGxkYXRhIHBhdGgsCiAgICAgICAgYWRkcmVzcyB0bywKICAgICAgICB1aW50MjU2IGRlYWRsaW5lCiAgICApIGV4dGVybmFsIHJldHVybnMgKHVpbnQyNTZbXSBtZW1vcnkgYW1vdW50cyk7Cn0KCmludGVyZmFjZSBJVW5pc3dhcFYyRmFjdG9yeSB7CiAgICBmdW5jdGlvbiBnZXRQYWlyKGFkZHJlc3MgdG9rZW4wLCBhZGRyZXNzIHRva2VuMSkKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zIChhZGRyZXNzKTsKfQoKaW50ZXJmYWNlIElVbmlzd2FwVjJQYWlyIHsKICAgIGZ1bmN0aW9uIHRva2VuMCgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAoYWRkcmVzcyk7CgogICAgZnVuY3Rpb24gdG9rZW4xKCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zIChhZGRyZXNzKTsKCiAgICBmdW5jdGlvbiBnZXRSZXNlcnZlcygpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAodWludDExMiByZXNlcnZlMCwgdWludDExMiByZXNlcnZlMSwgdWludDMyIGJsb2NrVGltZXN0YW1wTGFzdCk7Cn0KCmludGVyZmFjZSBJRVJDMjAgewogICAgZnVuY3Rpb24gdG90YWxTdXBwbHkoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwoKICAgIGZ1bmN0aW9uIGJhbGFuY2VPZihhZGRyZXNzIGFjY291bnQpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1Nik7CgogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAoYm9vbCk7CgogICAgZnVuY3Rpb24gYWxsb3dhbmNlKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgc3BlbmRlcikKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2KTsKCiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3Mgc3BlbmRlciwgdWludDI1NiBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbShhZGRyZXNzIHNlbmRlciwgYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAoYm9vbCk7Cn0K",
  },
]

const html = `<h3>Optimal One Sided Supply</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestUniswapOptimalOneSidedSupply</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> FACTORY <span class="hljs-operator">=</span>
        <span class="hljs-number">0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> ROUTER <span class="hljs-operator">=</span> <span class="hljs-number">0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sqrt</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> z</span>) </span>{
        <span class="hljs-keyword">if</span> (y <span class="hljs-operator">&gt;</span> <span class="hljs-number">3</span>) {
            z <span class="hljs-operator">=</span> y;
            <span class="hljs-keyword">uint256</span> x <span class="hljs-operator">=</span> y <span class="hljs-operator">/</span> <span class="hljs-number">2</span> <span class="hljs-operator">+</span> <span class="hljs-number">1</span>;
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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getSwapAmount</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> r, <span class="hljs-keyword">uint256</span> a</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> (sqrt(r <span class="hljs-operator">*</span> (r <span class="hljs-operator">*</span> <span class="hljs-number">3988009</span> <span class="hljs-operator">+</span> a <span class="hljs-operator">*</span> <span class="hljs-number">3988000</span>)) <span class="hljs-operator">-</span> r <span class="hljs-operator">*</span> <span class="hljs-number">1997</span>) <span class="hljs-operator">/</span> <span class="hljs-number">1994</span>;
    }

    <span class="hljs-comment">/* Optimal one-sided supply
    1. Swap optimal amount from token A to token B
    2. Add liquidity
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">zap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _tokenA, <span class="hljs-keyword">address</span> _tokenB, <span class="hljs-keyword">uint256</span> _amountA</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(_tokenA <span class="hljs-operator">=</span><span class="hljs-operator">=</span> WETH <span class="hljs-operator">|</span><span class="hljs-operator">|</span> _tokenB <span class="hljs-operator">=</span><span class="hljs-operator">=</span> WETH, <span class="hljs-string">"!weth"</span>);

        IERC20(_tokenA).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amountA);

        <span class="hljs-keyword">address</span> pair <span class="hljs-operator">=</span> IUniswapV2Factory(FACTORY).getPair(_tokenA, _tokenB);
        (<span class="hljs-keyword">uint256</span> reserve0, <span class="hljs-keyword">uint256</span> reserve1,) <span class="hljs-operator">=</span>
            IUniswapV2Pair(pair).getReserves();

        <span class="hljs-keyword">uint256</span> swapAmount;
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

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_swap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _from, <span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint256</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        IERC20(_from).approve(ROUTER, _amount);

        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span> path <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">address</span>[](<span class="hljs-number">2</span>);
        path <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">address</span>[](<span class="hljs-number">2</span>);
        path[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> _from;
        path[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> _to;

        IUniswapV2Router(ROUTER).swapExactTokensForTokens(
            _amount, <span class="hljs-number">1</span>, path, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_addLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _tokenA, <span class="hljs-keyword">address</span> _tokenB</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        <span class="hljs-keyword">uint256</span> balA <span class="hljs-operator">=</span> IERC20(_tokenA).balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        <span class="hljs-keyword">uint256</span> balB <span class="hljs-operator">=</span> IERC20(_tokenB).balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        IERC20(_tokenA).approve(ROUTER, balA);
        IERC20(_tokenB).approve(ROUTER, balB);

        IUniswapV2Router(ROUTER).addLiquidity(
            _tokenA, _tokenB, balA, balB, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Router</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> tokenA,
        <span class="hljs-keyword">address</span> tokenB,
        <span class="hljs-keyword">uint256</span> amountADesired,
        <span class="hljs-keyword">uint256</span> amountBDesired,
        <span class="hljs-keyword">uint256</span> amountAMin,
        <span class="hljs-keyword">uint256</span> amountBMin,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint256</span> deadline
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountA, <span class="hljs-keyword">uint256</span> amountB, <span class="hljs-keyword">uint256</span> liquidity</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapExactTokensForTokens</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint256</span> amountIn,
        <span class="hljs-keyword">uint256</span> amountOutMin,
        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">calldata</span> path,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint256</span> deadline
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> amounts</span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Factory</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getPair</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> token0, <span class="hljs-keyword">address</span> token1</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)</span>;
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
