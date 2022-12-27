// metadata
export const version = "0.8.13"
export const title = "Uniswap V3 Flash Swap Arbitrage"
export const description = "Uniswap V3 Flash Swap Arbitrage"
export const codes = [
  {
    fileName: "UniswapV3FlashSwap.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IFVuaXN3YXBWM0ZsYXNoU3dhcCB7CiAgICBJU3dhcFJvdXRlciBjb25zdGFudCByb3V0ZXIgPQogICAgICAgIElTd2FwUm91dGVyKDB4RTU5MjQyN0EwQUVjZTkyRGUzRWRlZTFGMThFMDE1N0MwNTg2MTU2NCk7CgogICAgdWludDE2MCBpbnRlcm5hbCBjb25zdGFudCBNSU5fU1FSVF9SQVRJTyA9IDQyOTUxMjg3Mzk7CiAgICB1aW50MTYwIGludGVybmFsIGNvbnN0YW50IE1BWF9TUVJUX1JBVElPID0KICAgICAgICAxNDYxNDQ2NzAzNDg1MjEwMTAzMjg3MjczMDUyMjAzOTg4ODIyMzc4NzIzOTcwMzQyOwoKICAgIC8vIEV4YW1wbGUgV0VUSC9VU0RDCiAgICAvLyBTZWxsIFdFVEggaGlnaCAgICAgIC0+IEJ1eSBXRVRIIGxvdyAgICAgICAgLT4gV0VUSCBwcm9maXQKICAgIC8vIFdFVEggaW4gLT4gVVNEQyBvdXQgLT4gVVNEQyBpbiAtPiBXRVRIIG91dCAtPiBXRVRIIHByb2ZpdAogICAgZnVuY3Rpb24gZmxhc2hTd2FwKAogICAgICAgIGFkZHJlc3MgcG9vbDAsCiAgICAgICAgdWludDI0IGZlZTEsCiAgICAgICAgYWRkcmVzcyB0b2tlbkluLAogICAgICAgIGFkZHJlc3MgdG9rZW5PdXQsCiAgICAgICAgdWludCBhbW91bnRJbgogICAgKSBleHRlcm5hbCB7CiAgICAgICAgYm9vbCB6ZXJvRm9yT25lID0gdG9rZW5JbiA8IHRva2VuT3V0OwogICAgICAgIHVpbnQxNjAgc3FydFByaWNlTGltaXRYOTYgPSB6ZXJvRm9yT25lCiAgICAgICAgICAgID8gTUlOX1NRUlRfUkFUSU8gKyAxCiAgICAgICAgICAgIDogTUFYX1NRUlRfUkFUSU8gLSAxOwogICAgICAgIGJ5dGVzIG1lbW9yeSBkYXRhID0gYWJpLmVuY29kZSgKICAgICAgICAgICAgbXNnLnNlbmRlciwKICAgICAgICAgICAgcG9vbDAsCiAgICAgICAgICAgIGZlZTEsCiAgICAgICAgICAgIHRva2VuSW4sCiAgICAgICAgICAgIHRva2VuT3V0LAogICAgICAgICAgICBhbW91bnRJbiwKICAgICAgICAgICAgemVyb0Zvck9uZQogICAgICAgICk7CgogICAgICAgIElVbmlzd2FwVjNQb29sKHBvb2wwKS5zd2FwKAogICAgICAgICAgICBhZGRyZXNzKHRoaXMpLAogICAgICAgICAgICB6ZXJvRm9yT25lLAogICAgICAgICAgICBpbnQoYW1vdW50SW4pLAogICAgICAgICAgICBzcXJ0UHJpY2VMaW1pdFg5NiwKICAgICAgICAgICAgZGF0YQogICAgICAgICk7CiAgICB9CgogICAgZnVuY3Rpb24gdW5pc3dhcFYzU3dhcENhbGxiYWNrKAogICAgICAgIGludCBhbW91bnQwLAogICAgICAgIGludCBhbW91bnQxLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIGRhdGEKICAgICkgZXh0ZXJuYWwgewogICAgICAgICgKICAgICAgICAgICAgYWRkcmVzcyBjYWxsZXIsCiAgICAgICAgICAgIGFkZHJlc3MgcG9vbDAsCiAgICAgICAgICAgIHVpbnQyNCBmZWUxLAogICAgICAgICAgICBhZGRyZXNzIHRva2VuSW4sCiAgICAgICAgICAgIGFkZHJlc3MgdG9rZW5PdXQsCiAgICAgICAgICAgIHVpbnQgYW1vdW50SW4sCiAgICAgICAgICAgIGJvb2wgemVyb0Zvck9uZQogICAgICAgICkgPSBhYmkuZGVjb2RlKGRhdGEsIChhZGRyZXNzLCBhZGRyZXNzLCB1aW50MjQsIGFkZHJlc3MsIGFkZHJlc3MsIHVpbnQsIGJvb2wpKTsKCiAgICAgICAgcmVxdWlyZShtc2cuc2VuZGVyID09IGFkZHJlc3MocG9vbDApLCAibm90IGF1dGhvcml6ZWQiKTsKCiAgICAgICAgdWludCBhbW91bnRPdXQ7CiAgICAgICAgaWYgKHplcm9Gb3JPbmUpIHsKICAgICAgICAgICAgYW1vdW50T3V0ID0gdWludCgtYW1vdW50MSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgYW1vdW50T3V0ID0gdWludCgtYW1vdW50MCk7CiAgICAgICAgfQoKICAgICAgICB1aW50IGJ1eUJhY2tBbW91bnQgPSBfc3dhcCh0b2tlbk91dCwgdG9rZW5JbiwgZmVlMSwgYW1vdW50T3V0KTsKCiAgICAgICAgaWYgKGJ1eUJhY2tBbW91bnQgPj0gYW1vdW50SW4pIHsKICAgICAgICAgICAgdWludCBwcm9maXQgPSBidXlCYWNrQW1vdW50IC0gYW1vdW50SW47CiAgICAgICAgICAgIElFUkMyMCh0b2tlbkluKS50cmFuc2ZlcihhZGRyZXNzKHBvb2wwKSwgYW1vdW50SW4pOwogICAgICAgICAgICBJRVJDMjAodG9rZW5JbikudHJhbnNmZXIoY2FsbGVyLCBwcm9maXQpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHVpbnQgbG9zcyA9IGFtb3VudEluIC0gYnV5QmFja0Ftb3VudDsKICAgICAgICAgICAgSUVSQzIwKHRva2VuSW4pLnRyYW5zZmVyRnJvbShjYWxsZXIsIGFkZHJlc3ModGhpcyksIGxvc3MpOwogICAgICAgICAgICBJRVJDMjAodG9rZW5JbikudHJhbnNmZXIoYWRkcmVzcyhwb29sMCksIGFtb3VudEluKTsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gX3N3YXAoCiAgICAgICAgYWRkcmVzcyB0b2tlbkluLAogICAgICAgIGFkZHJlc3MgdG9rZW5PdXQsCiAgICAgICAgdWludDI0IGZlZSwKICAgICAgICB1aW50IGFtb3VudEluCiAgICApIHByaXZhdGUgcmV0dXJucyAodWludCBhbW91bnRPdXQpIHsKICAgICAgICBJRVJDMjAodG9rZW5JbikuYXBwcm92ZShhZGRyZXNzKHJvdXRlciksIGFtb3VudEluKTsKCiAgICAgICAgSVN3YXBSb3V0ZXIuRXhhY3RJbnB1dFNpbmdsZVBhcmFtcyBtZW1vcnkgcGFyYW1zID0gSVN3YXBSb3V0ZXIKICAgICAgICAgICAgLkV4YWN0SW5wdXRTaW5nbGVQYXJhbXMoewogICAgICAgICAgICAgICAgdG9rZW5JbjogdG9rZW5JbiwKICAgICAgICAgICAgICAgIHRva2VuT3V0OiB0b2tlbk91dCwKICAgICAgICAgICAgICAgIGZlZTogZmVlLAogICAgICAgICAgICAgICAgcmVjaXBpZW50OiBhZGRyZXNzKHRoaXMpLAogICAgICAgICAgICAgICAgZGVhZGxpbmU6IGJsb2NrLnRpbWVzdGFtcCwKICAgICAgICAgICAgICAgIGFtb3VudEluOiBhbW91bnRJbiwKICAgICAgICAgICAgICAgIGFtb3VudE91dE1pbmltdW06IDAsCiAgICAgICAgICAgICAgICBzcXJ0UHJpY2VMaW1pdFg5NjogMAogICAgICAgICAgICB9KTsKCiAgICAgICAgYW1vdW50T3V0ID0gcm91dGVyLmV4YWN0SW5wdXRTaW5nbGUocGFyYW1zKTsKICAgIH0KfQoKaW50ZXJmYWNlIElTd2FwUm91dGVyIHsKICAgIHN0cnVjdCBFeGFjdElucHV0U2luZ2xlUGFyYW1zIHsKICAgICAgICBhZGRyZXNzIHRva2VuSW47CiAgICAgICAgYWRkcmVzcyB0b2tlbk91dDsKICAgICAgICB1aW50MjQgZmVlOwogICAgICAgIGFkZHJlc3MgcmVjaXBpZW50OwogICAgICAgIHVpbnQgZGVhZGxpbmU7CiAgICAgICAgdWludCBhbW91bnRJbjsKICAgICAgICB1aW50IGFtb3VudE91dE1pbmltdW07CiAgICAgICAgdWludDE2MCBzcXJ0UHJpY2VMaW1pdFg5NjsKICAgIH0KCiAgICBmdW5jdGlvbiBleGFjdElucHV0U2luZ2xlKAogICAgICAgIEV4YWN0SW5wdXRTaW5nbGVQYXJhbXMgY2FsbGRhdGEgcGFyYW1zCiAgICApIGV4dGVybmFsIHBheWFibGUgcmV0dXJucyAodWludCBhbW91bnRPdXQpOwp9CgppbnRlcmZhY2UgSVVuaXN3YXBWM1Bvb2wgewogICAgZnVuY3Rpb24gc3dhcCgKICAgICAgICBhZGRyZXNzIHJlY2lwaWVudCwKICAgICAgICBib29sIHplcm9Gb3JPbmUsCiAgICAgICAgaW50IGFtb3VudFNwZWNpZmllZCwKICAgICAgICB1aW50MTYwIHNxcnRQcmljZUxpbWl0WDk2LAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIGRhdGEKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAoaW50IGFtb3VudDAsIGludCBhbW91bnQxKTsKfQoKaW50ZXJmYWNlIElFUkMyMCB7CiAgICBmdW5jdGlvbiB0b3RhbFN1cHBseSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIHJlY2lwaWVudCwgdWludCBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwoKICAgIGZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKCiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oCiAgICAgICAgYWRkcmVzcyBzZW5kZXIsCiAgICAgICAgYWRkcmVzcyByZWNpcGllbnQsCiAgICAgICAgdWludCBhbW91bnQKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CgogICAgZXZlbnQgVHJhbnNmZXIoYWRkcmVzcyBpbmRleGVkIGZyb20sIGFkZHJlc3MgaW5kZXhlZCB0bywgdWludCB2YWx1ZSk7CiAgICBldmVudCBBcHByb3ZhbChhZGRyZXNzIGluZGV4ZWQgb3duZXIsIGFkZHJlc3MgaW5kZXhlZCBzcGVuZGVyLCB1aW50IHZhbHVlKTsKfQoKaW50ZXJmYWNlIElXRVRIIGlzIElFUkMyMCB7CiAgICBmdW5jdGlvbiBkZXBvc2l0KCkgZXh0ZXJuYWwgcGF5YWJsZTsKCiAgICBmdW5jdGlvbiB3aXRoZHJhdyh1aW50IGFtb3VudCkgZXh0ZXJuYWw7Cn0K",
  },
  {
    fileName: "UniswapV3FlashSwapTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmltcG9ydCAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0ICJmb3JnZS1zdGQvY29uc29sZS5zb2wiOwoKaW1wb3J0ICIuLi9zcmMvVW5pc3dhcFYzRmxhc2hTd2FwLnNvbCI7Cgpjb250cmFjdCBVbmlzd2FwVjNGbGFzaFN3YXBUZXN0IGlzIFRlc3QgewogICAgYWRkcmVzcyBwcml2YXRlIGNvbnN0YW50IFdFVEggPSAweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzI7CiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgVVNEQyA9IDB4QTBiODY5OTFjNjIxOGIzNmMxZDE5RDRhMmU5RWIwY0UzNjA2ZUI0ODsKCiAgICBJV0VUSCBwcml2YXRlIHdldGggPSBJV0VUSChXRVRIKTsKCiAgICBVbmlzd2FwVjNGbGFzaFN3YXAgcHJpdmF0ZSB1bmkgPSBuZXcgVW5pc3dhcFYzRmxhc2hTd2FwKCk7CgogICAgZnVuY3Rpb24gc2V0VXAoKSBwdWJsaWMge30KCiAgICBmdW5jdGlvbiB0ZXN0Rmxhc2hTd2FwKCkgcHVibGljIHsKICAgICAgICAvLyBVU0RDIC8gV0VUSCBwb29sCiAgICAgICAgYWRkcmVzcyBwb29sMCA9IDB4OGFkNTk5YzNBMGZmMURlMDgyMDExRUZERGM1OGYxOTA4ZWI2ZTZEODsKICAgICAgICB1aW50MjQgZmVlMCA9IDMwMDA7CiAgICAgICAgYWRkcmVzcyBwb29sMSA9IDB4ODhlNkEwYzJkREQyNkZFRWI2NEYwMzlhMmM0MTI5NkZjQjNmNTY0MDsKICAgICAgICB1aW50MjQgZmVlMSA9IDUwMDsKCiAgICAgICAgLy8gQXBwcm92ZSBXRVRIIGZlZQogICAgICAgIHVpbnQgd2V0aE1heEZlZSA9IDFlMTg7CiAgICAgICAgd2V0aC5kZXBvc2l0e3ZhbHVlOiB3ZXRoTWF4RmVlfSgpOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKHVuaSksIHdldGhNYXhGZWUpOwoKICAgICAgICB1aW50IGJhbEJlZm9yZSA9IHdldGguYmFsYW5jZU9mKGFkZHJlc3ModGhpcykpOwogICAgICAgIHVuaS5mbGFzaFN3YXAocG9vbDAsIGZlZTEsIFdFVEgsIFVTREMsIDEwICogMWUxOCk7CiAgICAgICAgdWludCBiYWxBZnRlciA9IHdldGguYmFsYW5jZU9mKGFkZHJlc3ModGhpcykpOwoKICAgICAgICBpZiAoYmFsQWZ0ZXIgPj0gYmFsQmVmb3JlKSB7CiAgICAgICAgICAgIGNvbnNvbGUubG9nKCJXRVRIIHByb2ZpdCIsIGJhbEFmdGVyIC0gYmFsQmVmb3JlKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBjb25zb2xlLmxvZygiV0VUSCBsb3NzIiwgYmFsQmVmb3JlIC0gYmFsQWZ0ZXIpOwogICAgICAgIH0KICAgIH0KfQo=",
  },
]

const html = `<h3 id="uniswap-v3-flash-swap-arbitrage-example">Uniswap V3 Flash Swap Arbitrage Example</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

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
        <span class="hljs-keyword">uint</span> amountIn
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">bool</span> zeroForOne <span class="hljs-operator">=</span> tokenIn <span class="hljs-operator">&lt;</span> tokenOut;
        <span class="hljs-keyword">uint160</span> sqrtPriceLimitX96 <span class="hljs-operator">=</span> zeroForOne
            ? MIN_SQRT_RATIO <span class="hljs-operator">+</span> <span class="hljs-number">1</span>
            : MAX_SQRT_RATIO <span class="hljs-operator">-</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
            pool0,
            fee1,
            tokenIn,
            tokenOut,
            amountIn,
            zeroForOne
        );

        IUniswapV3Pool(pool0).swap(
            <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>),
            zeroForOne,
            <span class="hljs-keyword">int</span>(amountIn),
            sqrtPriceLimitX96,
            data
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">uniswapV3SwapCallback</span>(<span class="hljs-params">
        <span class="hljs-keyword">int</span> amount0,
        <span class="hljs-keyword">int</span> amount1,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        (
            <span class="hljs-keyword">address</span> caller,
            <span class="hljs-keyword">address</span> pool0,
            <span class="hljs-keyword">uint24</span> fee1,
            <span class="hljs-keyword">address</span> tokenIn,
            <span class="hljs-keyword">address</span> tokenOut,
            <span class="hljs-keyword">uint</span> amountIn,
            <span class="hljs-keyword">bool</span> zeroForOne
        ) <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(data, (<span class="hljs-keyword">address</span>, <span class="hljs-keyword">address</span>, <span class="hljs-keyword">uint24</span>, <span class="hljs-keyword">address</span>, <span class="hljs-keyword">address</span>, <span class="hljs-keyword">uint</span>, <span class="hljs-keyword">bool</span>));

        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(pool0), <span class="hljs-string">"not authorized"</span>);

        <span class="hljs-keyword">uint</span> amountOut;
        <span class="hljs-keyword">if</span> (zeroForOne) {
            amountOut <span class="hljs-operator">=</span> <span class="hljs-keyword">uint</span>(<span class="hljs-operator">-</span>amount1);
        } <span class="hljs-keyword">else</span> {
            amountOut <span class="hljs-operator">=</span> <span class="hljs-keyword">uint</span>(<span class="hljs-operator">-</span>amount0);
        }

        <span class="hljs-keyword">uint</span> buyBackAmount <span class="hljs-operator">=</span> _swap(tokenOut, tokenIn, fee1, amountOut);

        <span class="hljs-keyword">if</span> (buyBackAmount <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> amountIn) {
            <span class="hljs-keyword">uint</span> profit <span class="hljs-operator">=</span> buyBackAmount <span class="hljs-operator">-</span> amountIn;
            IERC20(tokenIn).<span class="hljs-built_in">transfer</span>(<span class="hljs-keyword">address</span>(pool0), amountIn);
            IERC20(tokenIn).<span class="hljs-built_in">transfer</span>(caller, profit);
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-keyword">uint</span> loss <span class="hljs-operator">=</span> amountIn <span class="hljs-operator">-</span> buyBackAmount;
            IERC20(tokenIn).transferFrom(caller, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), loss);
            IERC20(tokenIn).<span class="hljs-built_in">transfer</span>(<span class="hljs-keyword">address</span>(pool0), amountIn);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_swap</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> tokenIn,
        <span class="hljs-keyword">address</span> tokenOut,
        <span class="hljs-keyword">uint24</span> fee,
        <span class="hljs-keyword">uint</span> amountIn
    </span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>) </span>{
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
        <span class="hljs-keyword">uint</span> deadline;
        <span class="hljs-keyword">uint</span> amountIn;
        <span class="hljs-keyword">uint</span> amountOutMinimum;
        <span class="hljs-keyword">uint160</span> sqrtPriceLimitX96;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">exactInputSingle</span>(<span class="hljs-params">
        ExactInputSingleParams <span class="hljs-keyword">calldata</span> params
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV3Pool</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> recipient,
        <span class="hljs-keyword">bool</span> zeroForOne,
        <span class="hljs-keyword">int</span> amountSpecified,
        <span class="hljs-keyword">uint160</span> sqrtPriceLimitX96,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">int</span> amount0, <span class="hljs-keyword">int</span> amount1</span>)</span>;
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

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IWETH</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}
</code></pre>
<h3 id="test-with-foundry">Test with Foundry</h3>
<ol>
<li>Copy and paste this into <code>test</code> folder in your foundry project</li>
</ol>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/console.sol"</span>;

<span class="hljs-keyword">import</span> <span class="hljs-string">"../src/UniswapV3FlashSwap.sol"</span>;

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
        <span class="hljs-keyword">uint</span> wethMaxFee <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        weth.deposit{<span class="hljs-built_in">value</span>: wethMaxFee}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), wethMaxFee);

        <span class="hljs-keyword">uint</span> balBefore <span class="hljs-operator">=</span> weth.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        uni.flashSwap(pool0, fee1, WETH, USDC, <span class="hljs-number">10</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>);
        <span class="hljs-keyword">uint</span> balAfter <span class="hljs-operator">=</span> weth.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));

        <span class="hljs-keyword">if</span> (balAfter <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> balBefore) {
            console.log(<span class="hljs-string">"WETH profit"</span>, balAfter <span class="hljs-operator">-</span> balBefore);
        } <span class="hljs-keyword">else</span> {
            console.log(<span class="hljs-string">"WETH loss"</span>, balBefore <span class="hljs-operator">-</span> balAfter);
        }
    }
}
</code></pre>
<ol start="2">
<li>Execute the following commands to run the test</li>
</ol>
<pre><code class="language-shell">FORK_URL=https://eth-mainnet.g.alchemy.com/v2/613t3mfjTevdrCwDl28CVvuk6wSIxRPi
forge test -vv --gas-report --fork-url $FORK_URL --match-path test/UniswapV3FlashSwapTest.test.sol
</code></pre>
<h3 id="links">Links</h3>
<p><a href="https://github.com/foundry-rs/foundry" target="__blank">Foundry</a></p>
<p><a href="https://github.com/t4sk/defi-notes" target="__blank">Uniswap V3 Foundry example</a></p>
`

export default html
