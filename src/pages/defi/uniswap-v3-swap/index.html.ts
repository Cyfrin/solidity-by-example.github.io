// metadata
export const version = "0.8.24"
export const title = "Uniswap V3 Swap Examples"
export const description = "Uniswap V3 swap examples"

export const keywords = [
    "defi",
    "uniswap",
    "v3",
    "swap",
    "amm",
]

export const codes = [
    {
        fileName: "UniswapV3SwapExamples.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmNvbnRyYWN0IFVuaXN3YXBWM1N3YXBFeGFtcGxlcyB7CiAgICBJU3dhcFJvdXRlciBjb25zdGFudCByb3V0ZXIgPQogICAgICAgIElTd2FwUm91dGVyKDB4RTU5MjQyN0EwQUVjZTkyRGUzRWRlZTFGMThFMDE1N0MwNTg2MTU2NCk7CgogICAgZnVuY3Rpb24gc3dhcEV4YWN0SW5wdXRTaW5nbGVIb3AoCiAgICAgICAgYWRkcmVzcyB0b2tlbkluLAogICAgICAgIGFkZHJlc3MgdG9rZW5PdXQsCiAgICAgICAgdWludDI0IHBvb2xGZWUsCiAgICAgICAgdWludDI1NiBhbW91bnRJbgogICAgKSBleHRlcm5hbCByZXR1cm5zICh1aW50MjU2IGFtb3VudE91dCkgewogICAgICAgIElFUkMyMCh0b2tlbkluKS50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgYW1vdW50SW4pOwogICAgICAgIElFUkMyMCh0b2tlbkluKS5hcHByb3ZlKGFkZHJlc3Mocm91dGVyKSwgYW1vdW50SW4pOwoKICAgICAgICBJU3dhcFJvdXRlci5FeGFjdElucHV0U2luZ2xlUGFyYW1zIG1lbW9yeSBwYXJhbXMgPSBJU3dhcFJvdXRlcgogICAgICAgICAgICAuRXhhY3RJbnB1dFNpbmdsZVBhcmFtcyh7CiAgICAgICAgICAgIHRva2VuSW46IHRva2VuSW4sCiAgICAgICAgICAgIHRva2VuT3V0OiB0b2tlbk91dCwKICAgICAgICAgICAgZmVlOiBwb29sRmVlLAogICAgICAgICAgICByZWNpcGllbnQ6IG1zZy5zZW5kZXIsCiAgICAgICAgICAgIGRlYWRsaW5lOiBibG9jay50aW1lc3RhbXAsCiAgICAgICAgICAgIGFtb3VudEluOiBhbW91bnRJbiwKICAgICAgICAgICAgYW1vdW50T3V0TWluaW11bTogMCwKICAgICAgICAgICAgc3FydFByaWNlTGltaXRYOTY6IDAKICAgICAgICB9KTsKCiAgICAgICAgYW1vdW50T3V0ID0gcm91dGVyLmV4YWN0SW5wdXRTaW5nbGUocGFyYW1zKTsKICAgIH0KCiAgICBmdW5jdGlvbiBzd2FwRXhhY3RJbnB1dE11bHRpSG9wKAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIHBhdGgsCiAgICAgICAgYWRkcmVzcyB0b2tlbkluLAogICAgICAgIHVpbnQyNTYgYW1vdW50SW4KICAgICkgZXh0ZXJuYWwgcmV0dXJucyAodWludDI1NiBhbW91bnRPdXQpIHsKICAgICAgICBJRVJDMjAodG9rZW5JbikudHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIGFtb3VudEluKTsKICAgICAgICBJRVJDMjAodG9rZW5JbikuYXBwcm92ZShhZGRyZXNzKHJvdXRlciksIGFtb3VudEluKTsKCiAgICAgICAgSVN3YXBSb3V0ZXIuRXhhY3RJbnB1dFBhcmFtcyBtZW1vcnkgcGFyYW1zID0gSVN3YXBSb3V0ZXIKICAgICAgICAgICAgLkV4YWN0SW5wdXRQYXJhbXMoewogICAgICAgICAgICBwYXRoOiBwYXRoLAogICAgICAgICAgICByZWNpcGllbnQ6IG1zZy5zZW5kZXIsCiAgICAgICAgICAgIGRlYWRsaW5lOiBibG9jay50aW1lc3RhbXAsCiAgICAgICAgICAgIGFtb3VudEluOiBhbW91bnRJbiwKICAgICAgICAgICAgYW1vdW50T3V0TWluaW11bTogMAogICAgICAgIH0pOwogICAgICAgIGFtb3VudE91dCA9IHJvdXRlci5leGFjdElucHV0KHBhcmFtcyk7CiAgICB9Cn0KCmludGVyZmFjZSBJU3dhcFJvdXRlciB7CiAgICBzdHJ1Y3QgRXhhY3RJbnB1dFNpbmdsZVBhcmFtcyB7CiAgICAgICAgYWRkcmVzcyB0b2tlbkluOwogICAgICAgIGFkZHJlc3MgdG9rZW5PdXQ7CiAgICAgICAgdWludDI0IGZlZTsKICAgICAgICBhZGRyZXNzIHJlY2lwaWVudDsKICAgICAgICB1aW50MjU2IGRlYWRsaW5lOwogICAgICAgIHVpbnQyNTYgYW1vdW50SW47CiAgICAgICAgdWludDI1NiBhbW91bnRPdXRNaW5pbXVtOwogICAgICAgIHVpbnQxNjAgc3FydFByaWNlTGltaXRYOTY7CiAgICB9CgogICAgLy8vIEBub3RpY2UgU3dhcHMgYW1vdW50SW4gb2Ygb25lIHRva2VuIGZvciBhcyBtdWNoIGFzIHBvc3NpYmxlIG9mIGFub3RoZXIgdG9rZW4KICAgIC8vLyBAcGFyYW0gcGFyYW1zIFRoZSBwYXJhbWV0ZXJzIG5lY2Vzc2FyeSBmb3IgdGhlIHN3YXAsIGVuY29kZWQgYXMgRXhhY3RJbnB1dFNpbmdsZVBhcmFtcyBpbiBjYWxsZGF0YQogICAgLy8vIEByZXR1cm4gYW1vdW50T3V0IFRoZSBhbW91bnQgb2YgdGhlIHJlY2VpdmVkIHRva2VuCiAgICBmdW5jdGlvbiBleGFjdElucHV0U2luZ2xlKEV4YWN0SW5wdXRTaW5nbGVQYXJhbXMgY2FsbGRhdGEgcGFyYW1zKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcGF5YWJsZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYgYW1vdW50T3V0KTsKCiAgICBzdHJ1Y3QgRXhhY3RJbnB1dFBhcmFtcyB7CiAgICAgICAgYnl0ZXMgcGF0aDsKICAgICAgICBhZGRyZXNzIHJlY2lwaWVudDsKICAgICAgICB1aW50MjU2IGRlYWRsaW5lOwogICAgICAgIHVpbnQyNTYgYW1vdW50SW47CiAgICAgICAgdWludDI1NiBhbW91bnRPdXRNaW5pbXVtOwogICAgfQoKICAgIC8vLyBAbm90aWNlIFN3YXBzIGFtb3VudEluIG9mIG9uZSB0b2tlbiBmb3IgYXMgbXVjaCBhcyBwb3NzaWJsZSBvZiBhbm90aGVyIGFsb25nIHRoZSBzcGVjaWZpZWQgcGF0aAogICAgLy8vIEBwYXJhbSBwYXJhbXMgVGhlIHBhcmFtZXRlcnMgbmVjZXNzYXJ5IGZvciB0aGUgbXVsdGktaG9wIHN3YXAsIGVuY29kZWQgYXMgRXhhY3RJbnB1dFBhcmFtcyBpbiBjYWxsZGF0YQogICAgLy8vIEByZXR1cm4gYW1vdW50T3V0IFRoZSBhbW91bnQgb2YgdGhlIHJlY2VpdmVkIHRva2VuCiAgICBmdW5jdGlvbiBleGFjdElucHV0KEV4YWN0SW5wdXRQYXJhbXMgY2FsbGRhdGEgcGFyYW1zKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcGF5YWJsZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYgYW1vdW50T3V0KTsKfQoKaW50ZXJmYWNlIElFUkMyMCB7CiAgICBmdW5jdGlvbiB0b3RhbFN1cHBseSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBhY2NvdW50KSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiBhbGxvd2FuY2UoYWRkcmVzcyBvd25lciwgYWRkcmVzcyBzcGVuZGVyKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbShhZGRyZXNzIHNlbmRlciwgYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAoYm9vbCk7Cn0KCmludGVyZmFjZSBJV0VUSCBpcyBJRVJDMjAgewogICAgZnVuY3Rpb24gZGVwb3NpdCgpIGV4dGVybmFsIHBheWFibGU7CiAgICBmdW5jdGlvbiB3aXRoZHJhdyh1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWw7Cn0K",
    },
    {
        fileName: "UniswapV3SwapExamplesTest.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmltcG9ydCB7VGVzdCwgY29uc29sZTJ9IGZyb20gImZvcmdlLXN0ZC9UZXN0LnNvbCI7CmltcG9ydCB7VW5pc3dhcFYzU3dhcEV4YW1wbGVzfSBmcm9tICIuLi8uLi8uLi9zcmMvZGVmaS91bmlzd2FwLXYzLXN3YXAvVW5pc3dhcFYzU3dhcEV4YW1wbGVzLnNvbCI7CgphZGRyZXNzIGNvbnN0YW50IFdFVEggPSAweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzI7CmFkZHJlc3MgY29uc3RhbnQgREFJID0gMHg2QjE3NTQ3NEU4OTA5NEM0NERhOThiOTU0RWVkZUFDNDk1MjcxZDBGOwphZGRyZXNzIGNvbnN0YW50IFVTREMgPSAweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDg7Cgpjb250cmFjdCBVbmlWM1N3YXBUZXN0IGlzIFRlc3QgewogICAgSVdFVEggcHJpdmF0ZSB3ZXRoID0gSVdFVEgoV0VUSCk7CiAgICBJRVJDMjAgcHJpdmF0ZSBkYWkgPSBJRVJDMjAoREFJKTsKICAgIElFUkMyMCBwcml2YXRlIHVzZGMgPSBJRVJDMjAoVVNEQyk7CgogICAgVW5pc3dhcFYzU3dhcEV4YW1wbGVzIHByaXZhdGUgdW5pID0gbmV3IFVuaXN3YXBWM1N3YXBFeGFtcGxlcygpOwoKICAgIGZ1bmN0aW9uIHNldFVwKCkgcHVibGljIHt9CgogICAgZnVuY3Rpb24gdGVzdFNpbmdsZUhvcCgpIHB1YmxpYyB7CiAgICAgICAgd2V0aC5kZXBvc2l0e3ZhbHVlOiAxZTE4fSgpOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKHVuaSksIDFlMTgpOwoKICAgICAgICB1aW50MjU2IGFtb3VudE91dCA9IHVuaS5zd2FwRXhhY3RJbnB1dFNpbmdsZUhvcChXRVRILCBEQUksIDMwMDAsIDFlMTgpOwoKICAgICAgICBjb25zb2xlMi5sb2coIkRBSSIsIGFtb3VudE91dCk7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdE11bHRpSG9wKCkgcHVibGljIHsKICAgICAgICB3ZXRoLmRlcG9zaXR7dmFsdWU6IDFlMTh9KCk7CiAgICAgICAgd2V0aC5hcHByb3ZlKGFkZHJlc3ModW5pKSwgMWUxOCk7CgogICAgICAgIGJ5dGVzIG1lbW9yeSBwYXRoID0KICAgICAgICAgICAgYWJpLmVuY29kZVBhY2tlZChXRVRILCB1aW50MjQoMzAwMCksIFVTREMsIHVpbnQyNCgxMDApLCBEQUkpOwoKICAgICAgICB1aW50MjU2IGFtb3VudE91dCA9IHVuaS5zd2FwRXhhY3RJbnB1dE11bHRpSG9wKHBhdGgsIFdFVEgsIDFlMTgpOwoKICAgICAgICBjb25zb2xlMi5sb2coIkRBSSIsIGFtb3VudE91dCk7CiAgICB9Cn0K",
    },
]

const html = `<h3>Uniswap V3 Swap Examples</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3SwapExamples</span> </span>{
    ISwapRouter <span class="hljs-keyword">constant</span> router <span class="hljs-operator">=</span>
        ISwapRouter(<span class="hljs-number">0xE592427A0AEce92De3Edee1F18E0157C05861564</span>);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapExactInputSingleHop</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> tokenIn,
        <span class="hljs-keyword">address</span> tokenOut,
        <span class="hljs-keyword">uint24</span> poolFee,
        <span class="hljs-keyword">uint256</span> amountIn
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>) </span>{
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
        <span class="hljs-keyword">uint256</span> amountIn
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>) </span>{
        IERC20(tokenIn).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountIn);
        IERC20(tokenIn).approve(<span class="hljs-keyword">address</span>(router), amountIn);

        ISwapRouter.ExactInputParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> ISwapRouter
            .ExactInputParams({
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
        <span class="hljs-keyword">uint256</span> deadline;
        <span class="hljs-keyword">uint256</span> amountIn;
        <span class="hljs-keyword">uint256</span> amountOutMinimum;
        <span class="hljs-keyword">uint160</span> sqrtPriceLimitX96;
    }

    <span class="hljs-comment">/// @notice Swaps amountIn of one token for as much as possible of another token</span>
    <span class="hljs-comment">/// @param params The parameters necessary for the swap, encoded as ExactInputSingleParams in calldata</span>
    <span class="hljs-comment">/// @return amountOut The amount of the received token</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">exactInputSingle</span>(<span class="hljs-params">ExactInputSingleParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>)</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">ExactInputParams</span> {
        <span class="hljs-keyword">bytes</span> path;
        <span class="hljs-keyword">address</span> recipient;
        <span class="hljs-keyword">uint256</span> deadline;
        <span class="hljs-keyword">uint256</span> amountIn;
        <span class="hljs-keyword">uint256</span> amountOutMinimum;
    }

    <span class="hljs-comment">/// @notice Swaps amountIn of one token for as much as possible of another along the specified path</span>
    <span class="hljs-comment">/// @param params The parameters necessary for the multi-hop swap, encoded as ExactInputParams in calldata</span>
    <span class="hljs-comment">/// @return amountOut The amount of the received token</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">exactInput</span>(<span class="hljs-params">ExactInputParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>)</span>;
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
<span class="hljs-keyword">import</span> {<span class="hljs-title">UniswapV3SwapExamples</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"../../../src/defi/uniswap-v3-swap/UniswapV3SwapExamples.sol"</span>;

<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> USDC <span class="hljs-operator">=</span> <span class="hljs-number">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniV3SwapTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    IWETH <span class="hljs-keyword">private</span> weth <span class="hljs-operator">=</span> IWETH(WETH);
    IERC20 <span class="hljs-keyword">private</span> dai <span class="hljs-operator">=</span> IERC20(DAI);
    IERC20 <span class="hljs-keyword">private</span> usdc <span class="hljs-operator">=</span> IERC20(USDC);

    UniswapV3SwapExamples <span class="hljs-keyword">private</span> uni <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> UniswapV3SwapExamples();

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testSingleHop</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        weth.deposit{<span class="hljs-built_in">value</span>: <span class="hljs-number">1e18</span>}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), <span class="hljs-number">1e18</span>);

        <span class="hljs-keyword">uint256</span> amountOut <span class="hljs-operator">=</span> uni.swapExactInputSingleHop(WETH, DAI, <span class="hljs-number">3000</span>, <span class="hljs-number">1e18</span>);

        console2.log(<span class="hljs-string">"DAI"</span>, amountOut);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testMultiHop</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        weth.deposit{<span class="hljs-built_in">value</span>: <span class="hljs-number">1e18</span>}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), <span class="hljs-number">1e18</span>);

        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> path <span class="hljs-operator">=</span>
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(WETH, <span class="hljs-keyword">uint24</span>(<span class="hljs-number">3000</span>), USDC, <span class="hljs-keyword">uint24</span>(<span class="hljs-number">100</span>), DAI);

        <span class="hljs-keyword">uint256</span> amountOut <span class="hljs-operator">=</span> uni.swapExactInputMultiHop(path, WETH, <span class="hljs-number">1e18</span>);

        console2.log(<span class="hljs-string">"DAI"</span>, amountOut);
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
