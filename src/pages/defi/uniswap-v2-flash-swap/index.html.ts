// metadata
export const version = "0.8.26"
export const title = "Uniswap V2 Flash Swap"
export const description = "Uniswap V2 flash swap"
export const cyfrinLink = "https://www.cyfrin.io/glossary/uniswap-v2-flash-swap-solidity-code-example"

export const keywords = [
    "defi",
    "uniswap",
    "v2",
    "flash",
    "swap",
    "amm",
]

export const codes = [
    {
        fileName: "UniswapV2FlashSwap.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmludGVyZmFjZSBJVW5pc3dhcFYyQ2FsbGVlIHsKICAgIGZ1bmN0aW9uIHVuaXN3YXBWMkNhbGwoCiAgICAgICAgYWRkcmVzcyBzZW5kZXIsCiAgICAgICAgdWludDI1NiBhbW91bnQwLAogICAgICAgIHVpbnQyNTYgYW1vdW50MSwKICAgICAgICBieXRlcyBjYWxsZGF0YSBkYXRhCiAgICApIGV4dGVybmFsOwp9Cgpjb250cmFjdCBVbmlzd2FwVjJGbGFzaFN3YXAgaXMgSVVuaXN3YXBWMkNhbGxlZSB7CiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgVU5JU1dBUF9WMl9GQUNUT1JZID0KICAgICAgICAweDVDNjliRWU3MDFlZjgxNGEyQjZhM0VERDRCMTY1MkNCOWNjNWFBNmY7CgogICAgYWRkcmVzcyBwcml2YXRlIGNvbnN0YW50IERBSSA9IDB4NkIxNzU0NzRFODkwOTRDNDREYTk4Yjk1NEVlZGVBQzQ5NTI3MWQwRjsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBXRVRIID0gMHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyOwoKICAgIElVbmlzd2FwVjJGYWN0b3J5IHByaXZhdGUgY29uc3RhbnQgZmFjdG9yeSA9CiAgICAgICAgSVVuaXN3YXBWMkZhY3RvcnkoVU5JU1dBUF9WMl9GQUNUT1JZKTsKCiAgICBJRVJDMjAgcHJpdmF0ZSBjb25zdGFudCB3ZXRoID0gSUVSQzIwKFdFVEgpOwoKICAgIElVbmlzd2FwVjJQYWlyIHByaXZhdGUgaW1tdXRhYmxlIHBhaXI7CgogICAgLy8gRm9yIHRoaXMgZXhhbXBsZSwgc3RvcmUgdGhlIGFtb3VudCB0byByZXBheQogICAgdWludDI1NiBwdWJsaWMgYW1vdW50VG9SZXBheTsKCiAgICBjb25zdHJ1Y3RvcigpIHsKICAgICAgICBwYWlyID0gSVVuaXN3YXBWMlBhaXIoZmFjdG9yeS5nZXRQYWlyKERBSSwgV0VUSCkpOwogICAgfQoKICAgIGZ1bmN0aW9uIGZsYXNoU3dhcCh1aW50MjU2IHdldGhBbW91bnQpIGV4dGVybmFsIHsKICAgICAgICAvLyBOZWVkIHRvIHBhc3Mgc29tZSBkYXRhIHRvIHRyaWdnZXIgdW5pc3dhcFYyQ2FsbAogICAgICAgIGJ5dGVzIG1lbW9yeSBkYXRhID0gYWJpLmVuY29kZShXRVRILCBtc2cuc2VuZGVyKTsKCiAgICAgICAgLy8gYW1vdW50ME91dCBpcyBEQUksIGFtb3VudDFPdXQgaXMgV0VUSAogICAgICAgIHBhaXIuc3dhcCgwLCB3ZXRoQW1vdW50LCBhZGRyZXNzKHRoaXMpLCBkYXRhKTsKICAgIH0KCiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBieSB0aGUgREFJL1dFVEggcGFpciBjb250cmFjdAogICAgZnVuY3Rpb24gdW5pc3dhcFYyQ2FsbCgKICAgICAgICBhZGRyZXNzIHNlbmRlciwKICAgICAgICB1aW50MjU2IGFtb3VudDAsCiAgICAgICAgdWludDI1NiBhbW91bnQxLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIGRhdGEKICAgICkgZXh0ZXJuYWwgewogICAgICAgIHJlcXVpcmUobXNnLnNlbmRlciA9PSBhZGRyZXNzKHBhaXIpLCAibm90IHBhaXIiKTsKICAgICAgICByZXF1aXJlKHNlbmRlciA9PSBhZGRyZXNzKHRoaXMpLCAibm90IHNlbmRlciIpOwoKICAgICAgICAoYWRkcmVzcyB0b2tlbkJvcnJvdywgYWRkcmVzcyBjYWxsZXIpID0KICAgICAgICAgICAgYWJpLmRlY29kZShkYXRhLCAoYWRkcmVzcywgYWRkcmVzcykpOwoKICAgICAgICAvLyBZb3VyIGN1c3RvbSBjb2RlIHdvdWxkIGdvIGhlcmUuIEZvciBleGFtcGxlLCBjb2RlIHRvIGFyYml0cmFnZS4KICAgICAgICByZXF1aXJlKHRva2VuQm9ycm93ID09IFdFVEgsICJ0b2tlbiBib3Jyb3cgIT0gV0VUSCIpOwoKICAgICAgICAvLyBhYm91dCAwLjMlIGZlZSwgKzEgdG8gcm91bmQgdXAKICAgICAgICB1aW50MjU2IGZlZSA9IChhbW91bnQxICogMykgLyA5OTcgKyAxOwogICAgICAgIGFtb3VudFRvUmVwYXkgPSBhbW91bnQxICsgZmVlOwoKICAgICAgICAvLyBUcmFuc2ZlciBmbGFzaCBzd2FwIGZlZSBmcm9tIGNhbGxlcgogICAgICAgIHdldGgudHJhbnNmZXJGcm9tKGNhbGxlciwgYWRkcmVzcyh0aGlzKSwgZmVlKTsKCiAgICAgICAgLy8gUmVwYXkKICAgICAgICB3ZXRoLnRyYW5zZmVyKGFkZHJlc3MocGFpciksIGFtb3VudFRvUmVwYXkpOwogICAgfQp9CgppbnRlcmZhY2UgSVVuaXN3YXBWMlBhaXIgewogICAgZnVuY3Rpb24gc3dhcCgKICAgICAgICB1aW50MjU2IGFtb3VudDBPdXQsCiAgICAgICAgdWludDI1NiBhbW91bnQxT3V0LAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgZGF0YQogICAgKSBleHRlcm5hbDsKfQoKaW50ZXJmYWNlIElVbmlzd2FwVjJGYWN0b3J5IHsKICAgIGZ1bmN0aW9uIGdldFBhaXIoYWRkcmVzcyB0b2tlbkEsIGFkZHJlc3MgdG9rZW5CKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKGFkZHJlc3MgcGFpcik7Cn0KCmludGVyZmFjZSBJRVJDMjAgewogICAgZnVuY3Rpb24gdG90YWxTdXBwbHkoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gYWxsb3dhbmNlKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgc3BlbmRlcikKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGFwcHJvdmUoYWRkcmVzcyBzcGVuZGVyLCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oYWRkcmVzcyBzZW5kZXIsIGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpOwp9CgppbnRlcmZhY2UgSVdFVEggaXMgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIGRlcG9zaXQoKSBleHRlcm5hbCBwYXlhYmxlOwogICAgZnVuY3Rpb24gd2l0aGRyYXcodWludDI1NiBhbW91bnQpIGV4dGVybmFsOwp9Cg==",
    },
    {
        fileName: "UniswapV2FlashSwapTest.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmltcG9ydCB7VGVzdH0gZnJvbSAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0ICIuLi8uLi8uLi9zcmMvZGVmaS91bmlzd2FwLXYyLWZsYXNoLXN3YXAvVW5pc3dhcFYyRmxhc2hTd2FwLnNvbCI7CgphZGRyZXNzIGNvbnN0YW50IFdFVEggPSAweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzI7CmFkZHJlc3MgY29uc3RhbnQgREFJID0gMHg2QjE3NTQ3NEU4OTA5NEM0NERhOThiOTU0RWVkZUFDNDk1MjcxZDBGOwphZGRyZXNzIGNvbnN0YW50IFVTREMgPSAweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDg7Cgpjb250cmFjdCBVbmlzd2FwVjJGbGFzaFN3YXBUZXN0IGlzIFRlc3QgewogICAgSVdFVEggcHJpdmF0ZSB3ZXRoID0gSVdFVEgoV0VUSCk7CgogICAgVW5pc3dhcFYyRmxhc2hTd2FwIHByaXZhdGUgdW5pID0gbmV3IFVuaXN3YXBWMkZsYXNoU3dhcCgpOwoKICAgIGZ1bmN0aW9uIHNldFVwKCkgcHVibGljIHt9CgogICAgZnVuY3Rpb24gdGVzdEZsYXNoU3dhcCgpIHB1YmxpYyB7CiAgICAgICAgd2V0aC5kZXBvc2l0e3ZhbHVlOiAxZTE4fSgpOwogICAgICAgIC8vIEFwcHJvdmUgZmxhc2ggc3dhcCBmZWUKICAgICAgICB3ZXRoLmFwcHJvdmUoYWRkcmVzcyh1bmkpLCAxZTE4KTsKCiAgICAgICAgdWludDI1NiBhbW91bnRUb0JvcnJvdyA9IDEwICogMWUxODsKICAgICAgICB1bmkuZmxhc2hTd2FwKGFtb3VudFRvQm9ycm93KTsKCiAgICAgICAgYXNzZXJ0R3QodW5pLmFtb3VudFRvUmVwYXkoKSwgYW1vdW50VG9Cb3Jyb3cpOwogICAgfQp9Cg==",
    },
]

const html = `<h3>Uniswap V2 Flash Swap Example</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Callee</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">uniswapV2Call</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> sender,
        <span class="hljs-keyword">uint256</span> amount0,
        <span class="hljs-keyword">uint256</span> amount1,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV2FlashSwap</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IUniswapV2Callee</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> UNISWAP_V2_FACTORY <span class="hljs-operator">=</span>
        <span class="hljs-number">0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f</span>;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;

    IUniswapV2Factory <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> factory <span class="hljs-operator">=</span>
        IUniswapV2Factory(UNISWAP_V2_FACTORY);

    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> weth <span class="hljs-operator">=</span> IERC20(WETH);

    IUniswapV2Pair <span class="hljs-keyword">private</span> <span class="hljs-keyword">immutable</span> pair;

    <span class="hljs-comment">// For this example, store the amount to repay</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> amountToRepay;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        pair <span class="hljs-operator">=</span> IUniswapV2Pair(factory.getPair(DAI, WETH));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">flashSwap</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> wethAmount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-comment">// Need to pass some data to trigger uniswapV2Call</span>
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(WETH, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);

        <span class="hljs-comment">// amount0Out is DAI, amount1Out is WETH</span>
        pair.swap(<span class="hljs-number">0</span>, wethAmount, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), data);
    }

    <span class="hljs-comment">// This function is called by the DAI/WETH pair contract</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">uniswapV2Call</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> sender,
        <span class="hljs-keyword">uint256</span> amount0,
        <span class="hljs-keyword">uint256</span> amount1,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(pair), <span class="hljs-string">"not pair"</span>);
        <span class="hljs-built_in">require</span>(sender <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), <span class="hljs-string">"not sender"</span>);

        (<span class="hljs-keyword">address</span> tokenBorrow, <span class="hljs-keyword">address</span> caller) <span class="hljs-operator">=</span>
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(data, (<span class="hljs-keyword">address</span>, <span class="hljs-keyword">address</span>));

        <span class="hljs-comment">// Your custom code would go here. For example, code to arbitrage.</span>
        <span class="hljs-built_in">require</span>(tokenBorrow <span class="hljs-operator">=</span><span class="hljs-operator">=</span> WETH, <span class="hljs-string">"token borrow != WETH"</span>);

        <span class="hljs-comment">// about 0.3% fee, +1 to round up</span>
        <span class="hljs-keyword">uint256</span> fee <span class="hljs-operator">=</span> (amount1 <span class="hljs-operator">*</span> <span class="hljs-number">3</span>) <span class="hljs-operator">/</span> <span class="hljs-number">997</span> <span class="hljs-operator">+</span> <span class="hljs-number">1</span>;
        amountToRepay <span class="hljs-operator">=</span> amount1 <span class="hljs-operator">+</span> fee;

        <span class="hljs-comment">// Transfer flash swap fee from caller</span>
        weth.transferFrom(caller, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), fee);

        <span class="hljs-comment">// Repay</span>
        weth.<span class="hljs-built_in">transfer</span>(<span class="hljs-keyword">address</span>(pair), amountToRepay);
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Pair</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint256</span> amount0Out,
        <span class="hljs-keyword">uint256</span> amount1Out,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Factory</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getPair</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> tokenA, <span class="hljs-keyword">address</span> tokenB</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> pair</span>)</span>;
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
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Test</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"../../../src/defi/uniswap-v2-flash-swap/UniswapV2FlashSwap.sol"</span>;

<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> USDC <span class="hljs-operator">=</span> <span class="hljs-number">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV2FlashSwapTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    IWETH <span class="hljs-keyword">private</span> weth <span class="hljs-operator">=</span> IWETH(WETH);

    UniswapV2FlashSwap <span class="hljs-keyword">private</span> uni <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> UniswapV2FlashSwap();

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testFlashSwap</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        weth.deposit{<span class="hljs-built_in">value</span>: <span class="hljs-number">1e18</span>}();
        <span class="hljs-comment">// Approve flash swap fee</span>
        weth.approve(<span class="hljs-keyword">address</span>(uni), <span class="hljs-number">1e18</span>);

        <span class="hljs-keyword">uint256</span> amountToBorrow <span class="hljs-operator">=</span> <span class="hljs-number">10</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
        uni.flashSwap(amountToBorrow);

        assertGt(uni.amountToRepay(), amountToBorrow);
    }
}
</code></pre><h3>Links</h3>
<p><a href="https://github.com/foundry-rs/foundry" target="__blank">Foundry</a></p>
<p><a href="https://github.com/t4sk/defi-notes" target="__blank">Uniswap V3 Foundry example</a></p>
`

export default html
