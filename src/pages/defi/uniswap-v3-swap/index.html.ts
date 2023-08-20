// metadata
export const version = "0.8.20"
export const title = "Uniswap V3 Swap Examples"
export const description = "Uniswap V3 swap examples"

export const keywords = ["defi", "uniswap", "v3", "swap", "amm"]

export const codes = [
  {
    fileName: "UniswapV3SwapExamples.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IFVuaXN3YXBWM1N3YXBFeGFtcGxlcyB7CiAgICBJU3dhcFJvdXRlciBjb25zdGFudCByb3V0ZXIgPQogICAgICAgIElTd2FwUm91dGVyKDB4RTU5MjQyN0EwQUVjZTkyRGUzRWRlZTFGMThFMDE1N0MwNTg2MTU2NCk7CgogICAgZnVuY3Rpb24gc3dhcEV4YWN0SW5wdXRTaW5nbGVIb3AoCiAgICAgICAgYWRkcmVzcyB0b2tlbkluLAogICAgICAgIGFkZHJlc3MgdG9rZW5PdXQsCiAgICAgICAgdWludDI0IHBvb2xGZWUsCiAgICAgICAgdWludCBhbW91bnRJbgogICAgKSBleHRlcm5hbCByZXR1cm5zICh1aW50IGFtb3VudE91dCkgewogICAgICAgIElFUkMyMCh0b2tlbkluKS50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgYW1vdW50SW4pOwogICAgICAgIElFUkMyMCh0b2tlbkluKS5hcHByb3ZlKGFkZHJlc3Mocm91dGVyKSwgYW1vdW50SW4pOwoKICAgICAgICBJU3dhcFJvdXRlci5FeGFjdElucHV0U2luZ2xlUGFyYW1zIG1lbW9yeSBwYXJhbXMgPSBJU3dhcFJvdXRlcgogICAgICAgICAgICAuRXhhY3RJbnB1dFNpbmdsZVBhcmFtcyh7CiAgICAgICAgICAgICAgICB0b2tlbkluOiB0b2tlbkluLAogICAgICAgICAgICAgICAgdG9rZW5PdXQ6IHRva2VuT3V0LAogICAgICAgICAgICAgICAgZmVlOiBwb29sRmVlLAogICAgICAgICAgICAgICAgcmVjaXBpZW50OiBtc2cuc2VuZGVyLAogICAgICAgICAgICAgICAgZGVhZGxpbmU6IGJsb2NrLnRpbWVzdGFtcCwKICAgICAgICAgICAgICAgIGFtb3VudEluOiBhbW91bnRJbiwKICAgICAgICAgICAgICAgIGFtb3VudE91dE1pbmltdW06IDAsCiAgICAgICAgICAgICAgICBzcXJ0UHJpY2VMaW1pdFg5NjogMAogICAgICAgICAgICB9KTsKCiAgICAgICAgYW1vdW50T3V0ID0gcm91dGVyLmV4YWN0SW5wdXRTaW5nbGUocGFyYW1zKTsKICAgIH0KCiAgICBmdW5jdGlvbiBzd2FwRXhhY3RJbnB1dE11bHRpSG9wKAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIHBhdGgsCiAgICAgICAgYWRkcmVzcyB0b2tlbkluLAogICAgICAgIHVpbnQgYW1vdW50SW4KICAgICkgZXh0ZXJuYWwgcmV0dXJucyAodWludCBhbW91bnRPdXQpIHsKICAgICAgICBJRVJDMjAodG9rZW5JbikudHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIGFtb3VudEluKTsKICAgICAgICBJRVJDMjAodG9rZW5JbikuYXBwcm92ZShhZGRyZXNzKHJvdXRlciksIGFtb3VudEluKTsKCiAgICAgICAgSVN3YXBSb3V0ZXIuRXhhY3RJbnB1dFBhcmFtcyBtZW1vcnkgcGFyYW1zID0gSVN3YXBSb3V0ZXIuRXhhY3RJbnB1dFBhcmFtcyh7CiAgICAgICAgICAgIHBhdGg6IHBhdGgsCiAgICAgICAgICAgIHJlY2lwaWVudDogbXNnLnNlbmRlciwKICAgICAgICAgICAgZGVhZGxpbmU6IGJsb2NrLnRpbWVzdGFtcCwKICAgICAgICAgICAgYW1vdW50SW46IGFtb3VudEluLAogICAgICAgICAgICBhbW91bnRPdXRNaW5pbXVtOiAwCiAgICAgICAgfSk7CiAgICAgICAgYW1vdW50T3V0ID0gcm91dGVyLmV4YWN0SW5wdXQocGFyYW1zKTsKICAgIH0KfQoKaW50ZXJmYWNlIElTd2FwUm91dGVyIHsKICAgIHN0cnVjdCBFeGFjdElucHV0U2luZ2xlUGFyYW1zIHsKICAgICAgICBhZGRyZXNzIHRva2VuSW47CiAgICAgICAgYWRkcmVzcyB0b2tlbk91dDsKICAgICAgICB1aW50MjQgZmVlOwogICAgICAgIGFkZHJlc3MgcmVjaXBpZW50OwogICAgICAgIHVpbnQgZGVhZGxpbmU7CiAgICAgICAgdWludCBhbW91bnRJbjsKICAgICAgICB1aW50IGFtb3VudE91dE1pbmltdW07CiAgICAgICAgdWludDE2MCBzcXJ0UHJpY2VMaW1pdFg5NjsKICAgIH0KCiAgICAvLy8gQG5vdGljZSBTd2FwcyBhbW91bnRJbiBvZiBvbmUgdG9rZW4gZm9yIGFzIG11Y2ggYXMgcG9zc2libGUgb2YgYW5vdGhlciB0b2tlbgogICAgLy8vIEBwYXJhbSBwYXJhbXMgVGhlIHBhcmFtZXRlcnMgbmVjZXNzYXJ5IGZvciB0aGUgc3dhcCwgZW5jb2RlZCBhcyBFeGFjdElucHV0U2luZ2xlUGFyYW1zIGluIGNhbGxkYXRhCiAgICAvLy8gQHJldHVybiBhbW91bnRPdXQgVGhlIGFtb3VudCBvZiB0aGUgcmVjZWl2ZWQgdG9rZW4KICAgIGZ1bmN0aW9uIGV4YWN0SW5wdXRTaW5nbGUoCiAgICAgICAgRXhhY3RJbnB1dFNpbmdsZVBhcmFtcyBjYWxsZGF0YSBwYXJhbXMKICAgICkgZXh0ZXJuYWwgcGF5YWJsZSByZXR1cm5zICh1aW50IGFtb3VudE91dCk7CgogICAgc3RydWN0IEV4YWN0SW5wdXRQYXJhbXMgewogICAgICAgIGJ5dGVzIHBhdGg7CiAgICAgICAgYWRkcmVzcyByZWNpcGllbnQ7CiAgICAgICAgdWludCBkZWFkbGluZTsKICAgICAgICB1aW50IGFtb3VudEluOwogICAgICAgIHVpbnQgYW1vdW50T3V0TWluaW11bTsKICAgIH0KCiAgICAvLy8gQG5vdGljZSBTd2FwcyBhbW91bnRJbiBvZiBvbmUgdG9rZW4gZm9yIGFzIG11Y2ggYXMgcG9zc2libGUgb2YgYW5vdGhlciBhbG9uZyB0aGUgc3BlY2lmaWVkIHBhdGgKICAgIC8vLyBAcGFyYW0gcGFyYW1zIFRoZSBwYXJhbWV0ZXJzIG5lY2Vzc2FyeSBmb3IgdGhlIG11bHRpLWhvcCBzd2FwLCBlbmNvZGVkIGFzIEV4YWN0SW5wdXRQYXJhbXMgaW4gY2FsbGRhdGEKICAgIC8vLyBAcmV0dXJuIGFtb3VudE91dCBUaGUgYW1vdW50IG9mIHRoZSByZWNlaXZlZCB0b2tlbgogICAgZnVuY3Rpb24gZXhhY3RJbnB1dCgKICAgICAgICBFeGFjdElucHV0UGFyYW1zIGNhbGxkYXRhIHBhcmFtcwogICAgKSBleHRlcm5hbCBwYXlhYmxlIHJldHVybnMgKHVpbnQgYW1vdW50T3V0KTsKfQoKaW50ZXJmYWNlIElFUkMyMCB7CiAgICBmdW5jdGlvbiB0b3RhbFN1cHBseSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIHJlY2lwaWVudCwgdWludCBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwoKICAgIGZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKCiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oCiAgICAgICAgYWRkcmVzcyBzZW5kZXIsCiAgICAgICAgYWRkcmVzcyByZWNpcGllbnQsCiAgICAgICAgdWludCBhbW91bnQKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CgogICAgZXZlbnQgVHJhbnNmZXIoYWRkcmVzcyBpbmRleGVkIGZyb20sIGFkZHJlc3MgaW5kZXhlZCB0bywgdWludCB2YWx1ZSk7CiAgICBldmVudCBBcHByb3ZhbChhZGRyZXNzIGluZGV4ZWQgb3duZXIsIGFkZHJlc3MgaW5kZXhlZCBzcGVuZGVyLCB1aW50IHZhbHVlKTsKfQoKaW50ZXJmYWNlIElXRVRIIGlzIElFUkMyMCB7CiAgICBmdW5jdGlvbiBkZXBvc2l0KCkgZXh0ZXJuYWwgcGF5YWJsZTsKCiAgICBmdW5jdGlvbiB3aXRoZHJhdyh1aW50IGFtb3VudCkgZXh0ZXJuYWw7Cn0K",
  },
  {
    fileName: "UniswapV3SwapExamplesTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0ICJmb3JnZS1zdGQvY29uc29sZS5zb2wiOwoKaW1wb3J0ICIuLi9zcmMvVW5pc3dhcFYzU3dhcEV4YW1wbGVzLnNvbCI7CgphZGRyZXNzIGNvbnN0YW50IFdFVEggPSAweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzI7CmFkZHJlc3MgY29uc3RhbnQgREFJID0gMHg2QjE3NTQ3NEU4OTA5NEM0NERhOThiOTU0RWVkZUFDNDk1MjcxZDBGOwphZGRyZXNzIGNvbnN0YW50IFVTREMgPSAweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDg7Cgpjb250cmFjdCBVbmlWM1Rlc3QgaXMgVGVzdCB7CiAgICBJV0VUSCBwcml2YXRlIHdldGggPSBJV0VUSChXRVRIKTsKICAgIElFUkMyMCBwcml2YXRlIGRhaSA9IElFUkMyMChEQUkpOwogICAgSUVSQzIwIHByaXZhdGUgdXNkYyA9IElFUkMyMChVU0RDKTsKCiAgICBVbmlzd2FwVjNTd2FwRXhhbXBsZXMgcHJpdmF0ZSB1bmkgPSBuZXcgVW5pc3dhcFYzU3dhcEV4YW1wbGVzKCk7CgogICAgZnVuY3Rpb24gc2V0VXAoKSBwdWJsaWMge30KCiAgICBmdW5jdGlvbiB0ZXN0U2luZ2xlSG9wKCkgcHVibGljIHsKICAgICAgICB3ZXRoLmRlcG9zaXR7dmFsdWU6IDFlMTh9KCk7CiAgICAgICAgd2V0aC5hcHByb3ZlKGFkZHJlc3ModW5pKSwgMWUxOCk7CgogICAgICAgIHVpbnQgYW1vdW50T3V0ID0gdW5pLnN3YXBFeGFjdElucHV0U2luZ2xlSG9wKFdFVEgsIERBSSwgMzAwMCwgMWUxOCk7CgogICAgICAgIGNvbnNvbGUubG9nKCJEQUkiLCBhbW91bnRPdXQpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RNdWx0aUhvcCgpIHB1YmxpYyB7CiAgICAgICAgd2V0aC5kZXBvc2l0e3ZhbHVlOiAxZTE4fSgpOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKHVuaSksIDFlMTgpOwoKICAgICAgICBieXRlcyBtZW1vcnkgcGF0aCA9IGFiaS5lbmNvZGVQYWNrZWQoCiAgICAgICAgICAgIFdFVEgsCiAgICAgICAgICAgIHVpbnQyNCgzMDAwKSwKICAgICAgICAgICAgVVNEQywKICAgICAgICAgICAgdWludDI0KDEwMCksCiAgICAgICAgICAgIERBSQogICAgICAgICk7CgogICAgICAgIHVpbnQgYW1vdW50T3V0ID0gdW5pLnN3YXBFeGFjdElucHV0TXVsdGlIb3AocGF0aCwgV0VUSCwgMWUxOCk7CgogICAgICAgIGNvbnNvbGUubG9nKCJEQUkiLCBhbW91bnRPdXQpOwogICAgfQp9Cg==",
  },
]

const html = `<h3>Uniswap V3 Swap Examples</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3SwapExamples</span> </span>{
    ISwapRouter <span class="hljs-keyword">constant</span> router <span class="hljs-operator">=</span>
        ISwapRouter(<span class="hljs-number">0xE592427A0AEce92De3Edee1F18E0157C05861564</span>);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapExactInputSingleHop</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> tokenIn,
        <span class="hljs-keyword">address</span> tokenOut,
        <span class="hljs-keyword">uint24</span> poolFee,
        <span class="hljs-keyword">uint</span> amountIn
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>) </span>{
        IERC20(tokenIn).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountIn);
        IERC20(tokenIn).approve(<span class="hljs-keyword">address</span>(router), amountIn);

        ISwapRouter.ExactInputSingleParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> ISwapRouter
            .ExactInputSingleParams({
                tokenIn: tokenIn,
                tokenOut: tokenOut,
                fee: poolFee,
                recipient: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
                deadline: <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>,
                amountIn: amountIn,
                amountOutMinimum: <span class="hljs-number">0</span>,
                sqrtPriceLimitX96: <span class="hljs-number">0</span>
            });

        amountOut <span class="hljs-operator">=</span> router.exactInputSingle(params);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapExactInputMultiHop</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> path,
        <span class="hljs-keyword">address</span> tokenIn,
        <span class="hljs-keyword">uint</span> amountIn
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>) </span>{
        IERC20(tokenIn).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountIn);
        IERC20(tokenIn).approve(<span class="hljs-keyword">address</span>(router), amountIn);

        ISwapRouter.ExactInputParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> ISwapRouter.ExactInputParams({
            path: path,
            recipient: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
            deadline: <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>,
            amountIn: amountIn,
            amountOutMinimum: <span class="hljs-number">0</span>
        });
        amountOut <span class="hljs-operator">=</span> router.exactInput(params);
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

    <span class="hljs-comment">/// @notice Swaps amountIn of one token for as much as possible of another token</span>
    <span class="hljs-comment">/// @param params The parameters necessary for the swap, encoded as ExactInputSingleParams in calldata</span>
    <span class="hljs-comment">/// @return amountOut The amount of the received token</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">exactInputSingle</span>(<span class="hljs-params">
        ExactInputSingleParams <span class="hljs-keyword">calldata</span> params
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>)</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">ExactInputParams</span> {
        <span class="hljs-keyword">bytes</span> path;
        <span class="hljs-keyword">address</span> recipient;
        <span class="hljs-keyword">uint</span> deadline;
        <span class="hljs-keyword">uint</span> amountIn;
        <span class="hljs-keyword">uint</span> amountOutMinimum;
    }

    <span class="hljs-comment">/// @notice Swaps amountIn of one token for as much as possible of another along the specified path</span>
    <span class="hljs-comment">/// @param params The parameters necessary for the multi-hop swap, encoded as ExactInputParams in calldata</span>
    <span class="hljs-comment">/// @return amountOut The amount of the received token</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">exactInput</span>(<span class="hljs-params">
        ExactInputParams <span class="hljs-keyword">calldata</span> params
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>)</span>;
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
</code></pre><h3>Test with Foundry</h3>
<ol>
<li>Copy and paste this into <code>test</code> folder in your foundry project</li>
</ol>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/console.sol"</span>;

<span class="hljs-keyword">import</span> <span class="hljs-string">"../src/UniswapV3SwapExamples.sol"</span>;

<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> USDC <span class="hljs-operator">=</span> <span class="hljs-number">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniV3Test</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    IWETH <span class="hljs-keyword">private</span> weth <span class="hljs-operator">=</span> IWETH(WETH);
    IERC20 <span class="hljs-keyword">private</span> dai <span class="hljs-operator">=</span> IERC20(DAI);
    IERC20 <span class="hljs-keyword">private</span> usdc <span class="hljs-operator">=</span> IERC20(USDC);

    UniswapV3SwapExamples <span class="hljs-keyword">private</span> uni <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> UniswapV3SwapExamples();

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testSingleHop</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        weth.deposit{<span class="hljs-built_in">value</span>: <span class="hljs-number">1e18</span>}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), <span class="hljs-number">1e18</span>);

        <span class="hljs-keyword">uint</span> amountOut <span class="hljs-operator">=</span> uni.swapExactInputSingleHop(WETH, DAI, <span class="hljs-number">3000</span>, <span class="hljs-number">1e18</span>);

        console.log(<span class="hljs-string">"DAI"</span>, amountOut);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testMultiHop</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        weth.deposit{<span class="hljs-built_in">value</span>: <span class="hljs-number">1e18</span>}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), <span class="hljs-number">1e18</span>);

        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> path <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(
            WETH,
            <span class="hljs-keyword">uint24</span>(<span class="hljs-number">3000</span>),
            USDC,
            <span class="hljs-keyword">uint24</span>(<span class="hljs-number">100</span>),
            DAI
        );

        <span class="hljs-keyword">uint</span> amountOut <span class="hljs-operator">=</span> uni.swapExactInputMultiHop(path, WETH, <span class="hljs-number">1e18</span>);

        console.log(<span class="hljs-string">"DAI"</span>, amountOut);
    }
}
</code></pre><ol start="2">
<li>Execute the following commands to run the test</li>
</ol>
<pre><code class="language-shell">FORK_URL=https://eth-mainnet.g.alchemy.com/v2/613t3mfjTevdrCwDl28CVvuk6wSIxRPi
forge test -vv --gas-report --fork-url $FORK_URL --match-path test/UniswapV3SwapExamples.test.sol
</code></pre><h3>Links</h3>
<p><a href="https://docs.uniswap.org/protocol/guides/swaps/single-swaps" target="__blank">Uniswap V3</a></p>
<p><a href="https://github.com/foundry-rs/foundry" target="__blank">Foundry</a></p>
<p><a href="https://github.com/t4sk/defi-notes" target="__blank">Uniswap V3 Foundry example</a></p>
`

export default html
