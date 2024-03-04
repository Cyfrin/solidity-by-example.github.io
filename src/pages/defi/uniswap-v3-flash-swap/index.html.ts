// metadata
export const version = "0.8.24"
export const title = "Uniswap V3 Flash Swap Arbitrage"
export const description = "Uniswap V3 Flash Swap Arbitrage"

export const keywords = ["defi", "uniswap", "v3", "swap", "arbitrage", "amm"]

export const codes = [
  {
    fileName: "UniswapV3FlashSwap.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmNvbnRyYWN0IFVuaXN3YXBWM0ZsYXNoU3dhcCB7CiAgICBJU3dhcFJvdXRlciBjb25zdGFudCByb3V0ZXIgPQogICAgICAgIElTd2FwUm91dGVyKDB4RTU5MjQyN0EwQUVjZTkyRGUzRWRlZTFGMThFMDE1N0MwNTg2MTU2NCk7CgogICAgdWludDE2MCBpbnRlcm5hbCBjb25zdGFudCBNSU5fU1FSVF9SQVRJTyA9IDQyOTUxMjg3Mzk7CiAgICB1aW50MTYwIGludGVybmFsIGNvbnN0YW50IE1BWF9TUVJUX1JBVElPID0KICAgICAgICAxNDYxNDQ2NzAzNDg1MjEwMTAzMjg3MjczMDUyMjAzOTg4ODIyMzc4NzIzOTcwMzQyOwoKICAgIC8vIEV4YW1wbGUgV0VUSC9VU0RDCiAgICAvLyBTZWxsIFdFVEggaGlnaCAgICAgIC0+IEJ1eSBXRVRIIGxvdyAgICAgICAgLT4gV0VUSCBwcm9maXQKICAgIC8vIFdFVEggaW4gLT4gVVNEQyBvdXQgLT4gVVNEQyBpbiAtPiBXRVRIIG91dCAtPiBXRVRIIHByb2ZpdAogICAgZnVuY3Rpb24gZmxhc2hTd2FwKAogICAgICAgIGFkZHJlc3MgcG9vbDAsCiAgICAgICAgdWludDI0IGZlZTEsCiAgICAgICAgYWRkcmVzcyB0b2tlbkluLAogICAgICAgIGFkZHJlc3MgdG9rZW5PdXQsCiAgICAgICAgdWludDI1NiBhbW91bnRJbgogICAgKSBleHRlcm5hbCB7CiAgICAgICAgYm9vbCB6ZXJvRm9yT25lID0gdG9rZW5JbiA8IHRva2VuT3V0OwogICAgICAgIHVpbnQxNjAgc3FydFByaWNlTGltaXRYOTYgPQogICAgICAgICAgICB6ZXJvRm9yT25lID8gTUlOX1NRUlRfUkFUSU8gKyAxIDogTUFYX1NRUlRfUkFUSU8gLSAxOwogICAgICAgIGJ5dGVzIG1lbW9yeSBkYXRhID0gYWJpLmVuY29kZSgKICAgICAgICAgICAgbXNnLnNlbmRlciwgcG9vbDAsIGZlZTEsIHRva2VuSW4sIHRva2VuT3V0LCBhbW91bnRJbiwgemVyb0Zvck9uZQogICAgICAgICk7CgogICAgICAgIElVbmlzd2FwVjNQb29sKHBvb2wwKS5zd2FwKAogICAgICAgICAgICBhZGRyZXNzKHRoaXMpLCB6ZXJvRm9yT25lLCBpbnQyNTYoYW1vdW50SW4pLCBzcXJ0UHJpY2VMaW1pdFg5NiwgZGF0YQogICAgICAgICk7CiAgICB9CgogICAgZnVuY3Rpb24gdW5pc3dhcFYzU3dhcENhbGxiYWNrKAogICAgICAgIGludDI1NiBhbW91bnQwLAogICAgICAgIGludDI1NiBhbW91bnQxLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIGRhdGEKICAgICkgZXh0ZXJuYWwgewogICAgICAgICgKICAgICAgICAgICAgYWRkcmVzcyBjYWxsZXIsCiAgICAgICAgICAgIGFkZHJlc3MgcG9vbDAsCiAgICAgICAgICAgIHVpbnQyNCBmZWUxLAogICAgICAgICAgICBhZGRyZXNzIHRva2VuSW4sCiAgICAgICAgICAgIGFkZHJlc3MgdG9rZW5PdXQsCiAgICAgICAgICAgIHVpbnQyNTYgYW1vdW50SW4sCiAgICAgICAgICAgIGJvb2wgemVyb0Zvck9uZQogICAgICAgICkgPSBhYmkuZGVjb2RlKAogICAgICAgICAgICBkYXRhLCAoYWRkcmVzcywgYWRkcmVzcywgdWludDI0LCBhZGRyZXNzLCBhZGRyZXNzLCB1aW50MjU2LCBib29sKQogICAgICAgICk7CgogICAgICAgIHJlcXVpcmUobXNnLnNlbmRlciA9PSBhZGRyZXNzKHBvb2wwKSwgIm5vdCBhdXRob3JpemVkIik7CgogICAgICAgIHVpbnQyNTYgYW1vdW50T3V0OwogICAgICAgIGlmICh6ZXJvRm9yT25lKSB7CiAgICAgICAgICAgIGFtb3VudE91dCA9IHVpbnQyNTYoLWFtb3VudDEpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGFtb3VudE91dCA9IHVpbnQyNTYoLWFtb3VudDApOwogICAgICAgIH0KCiAgICAgICAgdWludDI1NiBidXlCYWNrQW1vdW50ID0gX3N3YXAodG9rZW5PdXQsIHRva2VuSW4sIGZlZTEsIGFtb3VudE91dCk7CgogICAgICAgIGlmIChidXlCYWNrQW1vdW50ID49IGFtb3VudEluKSB7CiAgICAgICAgICAgIHVpbnQyNTYgcHJvZml0ID0gYnV5QmFja0Ftb3VudCAtIGFtb3VudEluOwogICAgICAgICAgICBJRVJDMjAodG9rZW5JbikudHJhbnNmZXIoYWRkcmVzcyhwb29sMCksIGFtb3VudEluKTsKICAgICAgICAgICAgSUVSQzIwKHRva2VuSW4pLnRyYW5zZmVyKGNhbGxlciwgcHJvZml0KTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICB1aW50MjU2IGxvc3MgPSBhbW91bnRJbiAtIGJ1eUJhY2tBbW91bnQ7CiAgICAgICAgICAgIElFUkMyMCh0b2tlbkluKS50cmFuc2ZlckZyb20oY2FsbGVyLCBhZGRyZXNzKHRoaXMpLCBsb3NzKTsKICAgICAgICAgICAgSUVSQzIwKHRva2VuSW4pLnRyYW5zZmVyKGFkZHJlc3MocG9vbDApLCBhbW91bnRJbik7CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIF9zd2FwKAogICAgICAgIGFkZHJlc3MgdG9rZW5JbiwKICAgICAgICBhZGRyZXNzIHRva2VuT3V0LAogICAgICAgIHVpbnQyNCBmZWUsCiAgICAgICAgdWludDI1NiBhbW91bnRJbgogICAgKSBwcml2YXRlIHJldHVybnMgKHVpbnQyNTYgYW1vdW50T3V0KSB7CiAgICAgICAgSUVSQzIwKHRva2VuSW4pLmFwcHJvdmUoYWRkcmVzcyhyb3V0ZXIpLCBhbW91bnRJbik7CgogICAgICAgIElTd2FwUm91dGVyLkV4YWN0SW5wdXRTaW5nbGVQYXJhbXMgbWVtb3J5IHBhcmFtcyA9IElTd2FwUm91dGVyCiAgICAgICAgICAgIC5FeGFjdElucHV0U2luZ2xlUGFyYW1zKHsKICAgICAgICAgICAgdG9rZW5JbjogdG9rZW5JbiwKICAgICAgICAgICAgdG9rZW5PdXQ6IHRva2VuT3V0LAogICAgICAgICAgICBmZWU6IGZlZSwKICAgICAgICAgICAgcmVjaXBpZW50OiBhZGRyZXNzKHRoaXMpLAogICAgICAgICAgICBkZWFkbGluZTogYmxvY2sudGltZXN0YW1wLAogICAgICAgICAgICBhbW91bnRJbjogYW1vdW50SW4sCiAgICAgICAgICAgIGFtb3VudE91dE1pbmltdW06IDAsCiAgICAgICAgICAgIHNxcnRQcmljZUxpbWl0WDk2OiAwCiAgICAgICAgfSk7CgogICAgICAgIGFtb3VudE91dCA9IHJvdXRlci5leGFjdElucHV0U2luZ2xlKHBhcmFtcyk7CiAgICB9Cn0KCmludGVyZmFjZSBJU3dhcFJvdXRlciB7CiAgICBzdHJ1Y3QgRXhhY3RJbnB1dFNpbmdsZVBhcmFtcyB7CiAgICAgICAgYWRkcmVzcyB0b2tlbkluOwogICAgICAgIGFkZHJlc3MgdG9rZW5PdXQ7CiAgICAgICAgdWludDI0IGZlZTsKICAgICAgICBhZGRyZXNzIHJlY2lwaWVudDsKICAgICAgICB1aW50MjU2IGRlYWRsaW5lOwogICAgICAgIHVpbnQyNTYgYW1vdW50SW47CiAgICAgICAgdWludDI1NiBhbW91bnRPdXRNaW5pbXVtOwogICAgICAgIHVpbnQxNjAgc3FydFByaWNlTGltaXRYOTY7CiAgICB9CgogICAgZnVuY3Rpb24gZXhhY3RJbnB1dFNpbmdsZShFeGFjdElucHV0U2luZ2xlUGFyYW1zIGNhbGxkYXRhIHBhcmFtcykKICAgICAgICBleHRlcm5hbAogICAgICAgIHBheWFibGUKICAgICAgICByZXR1cm5zICh1aW50MjU2IGFtb3VudE91dCk7Cn0KCmludGVyZmFjZSBJVW5pc3dhcFYzUG9vbCB7CiAgICBmdW5jdGlvbiBzd2FwKAogICAgICAgIGFkZHJlc3MgcmVjaXBpZW50LAogICAgICAgIGJvb2wgemVyb0Zvck9uZSwKICAgICAgICBpbnQyNTYgYW1vdW50U3BlY2lmaWVkLAogICAgICAgIHVpbnQxNjAgc3FydFByaWNlTGltaXRYOTYsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgZGF0YQogICAgKSBleHRlcm5hbCByZXR1cm5zIChpbnQyNTYgYW1vdW50MCwgaW50MjU2IGFtb3VudDEpOwp9CgppbnRlcmZhY2UgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIHRvdGFsU3VwcGx5KCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGJhbGFuY2VPZihhZGRyZXNzIGFjY291bnQpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIHJlY2lwaWVudCwgdWludDI1NiBhbW91bnQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zIChib29sKTsKICAgIGZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3Mgc3BlbmRlciwgdWludDI1NiBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gdHJhbnNmZXJGcm9tKGFkZHJlc3Mgc2VuZGVyLCBhZGRyZXNzIHJlY2lwaWVudCwgdWludDI1NiBhbW91bnQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zIChib29sKTsKfQoKaW50ZXJmYWNlIElXRVRIIGlzIElFUkMyMCB7CiAgICBmdW5jdGlvbiBkZXBvc2l0KCkgZXh0ZXJuYWwgcGF5YWJsZTsKICAgIGZ1bmN0aW9uIHdpdGhkcmF3KHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbDsKfQo=",
  },
  {
    fileName: "UniswapV3FlashSwapTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmltcG9ydCB7VGVzdCwgY29uc29sZTJ9IGZyb20gImZvcmdlLXN0ZC9UZXN0LnNvbCI7CmltcG9ydCAiLi4vLi4vLi4vc3JjL2RlZmkvdW5pc3dhcC12My1mbGFzaC1zd2FwL1VuaXN3YXBWM0ZsYXNoU3dhcC5zb2wiOwoKY29udHJhY3QgVW5pc3dhcFYzRmxhc2hTd2FwVGVzdCBpcyBUZXN0IHsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBXRVRIID0gMHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyOwogICAgYWRkcmVzcyBwcml2YXRlIGNvbnN0YW50IFVTREMgPSAweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDg7CgogICAgSVdFVEggcHJpdmF0ZSB3ZXRoID0gSVdFVEgoV0VUSCk7CgogICAgVW5pc3dhcFYzRmxhc2hTd2FwIHByaXZhdGUgdW5pID0gbmV3IFVuaXN3YXBWM0ZsYXNoU3dhcCgpOwoKICAgIGZ1bmN0aW9uIHNldFVwKCkgcHVibGljIHt9CgogICAgZnVuY3Rpb24gdGVzdEZsYXNoU3dhcCgpIHB1YmxpYyB7CiAgICAgICAgLy8gVVNEQyAvIFdFVEggcG9vbAogICAgICAgIGFkZHJlc3MgcG9vbDAgPSAweDhhZDU5OWMzQTBmZjFEZTA4MjAxMUVGRERjNThmMTkwOGViNmU2RDg7CiAgICAgICAgdWludDI0IGZlZTAgPSAzMDAwOwogICAgICAgIGFkZHJlc3MgcG9vbDEgPSAweDg4ZTZBMGMyZEREMjZGRUViNjRGMDM5YTJjNDEyOTZGY0IzZjU2NDA7CiAgICAgICAgdWludDI0IGZlZTEgPSA1MDA7CgogICAgICAgIC8vIEFwcHJvdmUgV0VUSCBmZWUKICAgICAgICB1aW50MjU2IHdldGhNYXhGZWUgPSAxZTE4OwogICAgICAgIHdldGguZGVwb3NpdHt2YWx1ZTogd2V0aE1heEZlZX0oKTsKICAgICAgICB3ZXRoLmFwcHJvdmUoYWRkcmVzcyh1bmkpLCB3ZXRoTWF4RmVlKTsKCiAgICAgICAgdWludDI1NiBiYWxCZWZvcmUgPSB3ZXRoLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKTsKICAgICAgICB1bmkuZmxhc2hTd2FwKHBvb2wwLCBmZWUxLCBXRVRILCBVU0RDLCAxMCAqIDFlMTgpOwogICAgICAgIHVpbnQyNTYgYmFsQWZ0ZXIgPSB3ZXRoLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKTsKCiAgICAgICAgaWYgKGJhbEFmdGVyID49IGJhbEJlZm9yZSkgewogICAgICAgICAgICBjb25zb2xlMi5sb2coIldFVEggcHJvZml0IiwgYmFsQWZ0ZXIgLSBiYWxCZWZvcmUpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGNvbnNvbGUyLmxvZygiV0VUSCBsb3NzIiwgYmFsQmVmb3JlIC0gYmFsQWZ0ZXIpOwogICAgICAgIH0KICAgIH0KfQo=",
  },
]

const html = `<h3>Uniswap V3 Flash Swap Arbitrage Example</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3FlashSwap</span> </span>{
    ISwapRouter <span class="hljs-keyword">constant</span> router <span class="hljs-operator">=</span>
        ISwapRouter(<span class="hljs-number">0xE592427A0AEce92De3Edee1F18E0157C05861564</span>);

    <span class="hljs-keyword">uint160</span> <span class="hljs-keyword">internal</span> <span class="hljs-keyword">constant</span> MIN_SQRT_RATIO <span class="hljs-operator">=</span> <span class="hljs-number">4295128739</span>;
    <span class="hljs-keyword">uint160</span> <span class="hljs-keyword">internal</span> <span class="hljs-keyword">constant</span> MAX_SQRT_RATIO <span class="hljs-operator">=</span>
        <span class="hljs-number">1461446703485210103287273052203988822378723970342</span>;

    <span class="hljs-comment">// Example WETH/USDC</span>
    <span class="hljs-comment">// Sell WETH high      -&gt; Buy WETH low        -&gt; WETH profit</span>
    <span class="hljs-comment">// WETH in -&gt; USDC out -&gt; USDC in -&gt; WETH out -&gt; WETH profit</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">flashSwap</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> pool0,
        <span class="hljs-keyword">uint24</span> fee1,
        <span class="hljs-keyword">address</span> tokenIn,
        <span class="hljs-keyword">address</span> tokenOut,
        <span class="hljs-keyword">uint256</span> amountIn
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">bool</span> zeroForOne <span class="hljs-operator">=</span> tokenIn <span class="hljs-operator">&lt;</span> tokenOut;
        <span class="hljs-keyword">uint160</span> sqrtPriceLimitX96 <span class="hljs-operator">=</span>
            zeroForOne ? MIN_SQRT_RATIO <span class="hljs-operator">+</span> <span class="hljs-number">1</span> : MAX_SQRT_RATIO <span class="hljs-operator">-</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, pool0, fee1, tokenIn, tokenOut, amountIn, zeroForOne
        );

        IUniswapV3Pool(pool0).swap(
            <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), zeroForOne, <span class="hljs-keyword">int256</span>(amountIn), sqrtPriceLimitX96, data
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">uniswapV3SwapCallback</span>(<span class="hljs-params">
        <span class="hljs-keyword">int256</span> amount0,
        <span class="hljs-keyword">int256</span> amount1,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        (
            <span class="hljs-keyword">address</span> caller,
            <span class="hljs-keyword">address</span> pool0,
            <span class="hljs-keyword">uint24</span> fee1,
            <span class="hljs-keyword">address</span> tokenIn,
            <span class="hljs-keyword">address</span> tokenOut,
            <span class="hljs-keyword">uint256</span> amountIn,
            <span class="hljs-keyword">bool</span> zeroForOne
        ) <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(
            data, (<span class="hljs-keyword">address</span>, <span class="hljs-keyword">address</span>, <span class="hljs-keyword">uint24</span>, <span class="hljs-keyword">address</span>, <span class="hljs-keyword">address</span>, <span class="hljs-keyword">uint256</span>, <span class="hljs-keyword">bool</span>)
        );

        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(pool0), <span class="hljs-string">"not authorized"</span>);

        <span class="hljs-keyword">uint256</span> amountOut;
        <span class="hljs-keyword">if</span> (zeroForOne) {
            amountOut <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-operator">-</span>amount1);
        } <span class="hljs-keyword">else</span> {
            amountOut <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-operator">-</span>amount0);
        }

        <span class="hljs-keyword">uint256</span> buyBackAmount <span class="hljs-operator">=</span> _swap(tokenOut, tokenIn, fee1, amountOut);

        <span class="hljs-keyword">if</span> (buyBackAmount <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> amountIn) {
            <span class="hljs-keyword">uint256</span> profit <span class="hljs-operator">=</span> buyBackAmount <span class="hljs-operator">-</span> amountIn;
            IERC20(tokenIn).<span class="hljs-built_in">transfer</span>(<span class="hljs-keyword">address</span>(pool0), amountIn);
            IERC20(tokenIn).<span class="hljs-built_in">transfer</span>(caller, profit);
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-keyword">uint256</span> loss <span class="hljs-operator">=</span> amountIn <span class="hljs-operator">-</span> buyBackAmount;
            IERC20(tokenIn).transferFrom(caller, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), loss);
            IERC20(tokenIn).<span class="hljs-built_in">transfer</span>(<span class="hljs-keyword">address</span>(pool0), amountIn);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_swap</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> tokenIn,
        <span class="hljs-keyword">address</span> tokenOut,
        <span class="hljs-keyword">uint24</span> fee,
        <span class="hljs-keyword">uint256</span> amountIn
    </span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>) </span>{
        IERC20(tokenIn).approve(<span class="hljs-keyword">address</span>(router), amountIn);

        ISwapRouter.ExactInputSingleParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> ISwapRouter
            .ExactInputSingleParams({
            tokenIn: tokenIn,
            tokenOut: tokenOut,
            fee: fee,
            recipient: <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>),
            deadline: <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>,
            amountIn: amountIn,
            amountOutMinimum: <span class="hljs-number">0</span>,
            sqrtPriceLimitX96: <span class="hljs-number">0</span>
        });

        amountOut <span class="hljs-operator">=</span> router.exactInputSingle(params);
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">ISwapRouter</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">ExactInputSingleParams</span> {
        <span class="hljs-keyword">address</span> tokenIn;
        <span class="hljs-keyword">address</span> tokenOut;
        <span class="hljs-keyword">uint24</span> fee;
        <span class="hljs-keyword">address</span> recipient;
        <span class="hljs-keyword">uint256</span> deadline;
        <span class="hljs-keyword">uint256</span> amountIn;
        <span class="hljs-keyword">uint256</span> amountOutMinimum;
        <span class="hljs-keyword">uint160</span> sqrtPriceLimitX96;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">exactInputSingle</span>(<span class="hljs-params">ExactInputSingleParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV3Pool</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> recipient,
        <span class="hljs-keyword">bool</span> zeroForOne,
        <span class="hljs-keyword">int256</span> amountSpecified,
        <span class="hljs-keyword">uint160</span> sqrtPriceLimitX96,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">int256</span> amount0, <span class="hljs-keyword">int256</span> amount1</span>)</span>;
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

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IWETH</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span></span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}
</code></pre><h3>Test with Foundry</h3>
<ol>
<li>Copy and paste this into <code>test</code> folder in your foundry project</li>
</ol>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Test</span>, <span class="hljs-title">console2</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"../../../src/defi/uniswap-v3-flash-swap/UniswapV3FlashSwap.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3FlashSwapTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> USDC <span class="hljs-operator">=</span> <span class="hljs-number">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>;

    IWETH <span class="hljs-keyword">private</span> weth <span class="hljs-operator">=</span> IWETH(WETH);

    UniswapV3FlashSwap <span class="hljs-keyword">private</span> uni <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> UniswapV3FlashSwap();

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testFlashSwap</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// USDC / WETH pool</span>
        <span class="hljs-keyword">address</span> pool0 <span class="hljs-operator">=</span> <span class="hljs-number">0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8</span>;
        <span class="hljs-keyword">uint24</span> fee0 <span class="hljs-operator">=</span> <span class="hljs-number">3000</span>;
        <span class="hljs-keyword">address</span> pool1 <span class="hljs-operator">=</span> <span class="hljs-number">0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640</span>;
        <span class="hljs-keyword">uint24</span> fee1 <span class="hljs-operator">=</span> <span class="hljs-number">500</span>;

        <span class="hljs-comment">// Approve WETH fee</span>
        <span class="hljs-keyword">uint256</span> wethMaxFee <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        weth.deposit{<span class="hljs-built_in">value</span>: wethMaxFee}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), wethMaxFee);

        <span class="hljs-keyword">uint256</span> balBefore <span class="hljs-operator">=</span> weth.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        uni.flashSwap(pool0, fee1, WETH, USDC, <span class="hljs-number">10</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>);
        <span class="hljs-keyword">uint256</span> balAfter <span class="hljs-operator">=</span> weth.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));

        <span class="hljs-keyword">if</span> (balAfter <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> balBefore) {
            console2.log(<span class="hljs-string">"WETH profit"</span>, balAfter <span class="hljs-operator">-</span> balBefore);
        } <span class="hljs-keyword">else</span> {
            console2.log(<span class="hljs-string">"WETH loss"</span>, balBefore <span class="hljs-operator">-</span> balAfter);
        }
    }
}
</code></pre><ol start="2">
<li>Execute the following commands to run the test</li>
</ol>
<pre><code class="language-shell">FORK_URL=https://eth-mainnet.g.alchemy.com/v2/613t3mfjTevdrCwDl28CVvuk6wSIxRPi
forge test -vv --gas-report --fork-url $FORK_URL --match-path test/UniswapV3FlashSwapTest.test.sol
</code></pre><h3>Links</h3>
<p><a href="https://github.com/foundry-rs/foundry" target="__blank">Foundry</a></p>
<p><a href="https://github.com/t4sk/defi-notes" target="__blank">Uniswap V3 Foundry example</a></p>
`

export default html
