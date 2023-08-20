// metadata
export const version = "0.8.20"
export const title = "Uniswap V2 Flash Swap"
export const description = "Uniswap V2 flash swap"

export const keywords = ["defi", "uniswap", "v2", "flash", "swap", "amm"]

export const codes = [
  {
    fileName: "UniswapV2FlashSwap.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmludGVyZmFjZSBJVW5pc3dhcFYyQ2FsbGVlIHsKICAgIGZ1bmN0aW9uIHVuaXN3YXBWMkNhbGwoCiAgICAgICAgYWRkcmVzcyBzZW5kZXIsCiAgICAgICAgdWludCBhbW91bnQwLAogICAgICAgIHVpbnQgYW1vdW50MSwKICAgICAgICBieXRlcyBjYWxsZGF0YSBkYXRhCiAgICApIGV4dGVybmFsOwp9Cgpjb250cmFjdCBVbmlzd2FwVjJGbGFzaFN3YXAgaXMgSVVuaXN3YXBWMkNhbGxlZSB7CiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgVU5JU1dBUF9WMl9GQUNUT1JZID0KICAgICAgICAweDVDNjliRWU3MDFlZjgxNGEyQjZhM0VERDRCMTY1MkNCOWNjNWFBNmY7CgogICAgYWRkcmVzcyBwcml2YXRlIGNvbnN0YW50IERBSSA9IDB4NkIxNzU0NzRFODkwOTRDNDREYTk4Yjk1NEVlZGVBQzQ5NTI3MWQwRjsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBXRVRIID0gMHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyOwoKICAgIElVbmlzd2FwVjJGYWN0b3J5IHByaXZhdGUgY29uc3RhbnQgZmFjdG9yeSA9IElVbmlzd2FwVjJGYWN0b3J5KFVOSVNXQVBfVjJfRkFDVE9SWSk7CgogICAgSUVSQzIwIHByaXZhdGUgY29uc3RhbnQgd2V0aCA9IElFUkMyMChXRVRIKTsKCiAgICBJVW5pc3dhcFYyUGFpciBwcml2YXRlIGltbXV0YWJsZSBwYWlyOwoKICAgIC8vIEZvciB0aGlzIGV4YW1wbGUsIHN0b3JlIHRoZSBhbW91bnQgdG8gcmVwYXkKICAgIHVpbnQgcHVibGljIGFtb3VudFRvUmVwYXk7CgogICAgY29uc3RydWN0b3IoKSB7CiAgICAgICAgcGFpciA9IElVbmlzd2FwVjJQYWlyKGZhY3RvcnkuZ2V0UGFpcihEQUksIFdFVEgpKTsKICAgIH0KCiAgICBmdW5jdGlvbiBmbGFzaFN3YXAodWludCB3ZXRoQW1vdW50KSBleHRlcm5hbCB7CiAgICAgICAgLy8gTmVlZCB0byBwYXNzIHNvbWUgZGF0YSB0byB0cmlnZ2VyIHVuaXN3YXBWMkNhbGwKICAgICAgICBieXRlcyBtZW1vcnkgZGF0YSA9IGFiaS5lbmNvZGUoV0VUSCwgbXNnLnNlbmRlcik7CgogICAgICAgIC8vIGFtb3VudDBPdXQgaXMgREFJLCBhbW91bnQxT3V0IGlzIFdFVEgKICAgICAgICBwYWlyLnN3YXAoMCwgd2V0aEFtb3VudCwgYWRkcmVzcyh0aGlzKSwgZGF0YSk7CiAgICB9CgogICAgLy8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYnkgdGhlIERBSS9XRVRIIHBhaXIgY29udHJhY3QKICAgIGZ1bmN0aW9uIHVuaXN3YXBWMkNhbGwoCiAgICAgICAgYWRkcmVzcyBzZW5kZXIsCiAgICAgICAgdWludCBhbW91bnQwLAogICAgICAgIHVpbnQgYW1vdW50MSwKICAgICAgICBieXRlcyBjYWxsZGF0YSBkYXRhCiAgICApIGV4dGVybmFsIHsKICAgICAgICByZXF1aXJlKG1zZy5zZW5kZXIgPT0gYWRkcmVzcyhwYWlyKSwgIm5vdCBwYWlyIik7CiAgICAgICAgcmVxdWlyZShzZW5kZXIgPT0gYWRkcmVzcyh0aGlzKSwgIm5vdCBzZW5kZXIiKTsKCiAgICAgICAgKGFkZHJlc3MgdG9rZW5Cb3Jyb3csIGFkZHJlc3MgY2FsbGVyKSA9IGFiaS5kZWNvZGUoZGF0YSwgKGFkZHJlc3MsIGFkZHJlc3MpKTsKCiAgICAgICAgLy8gWW91ciBjdXN0b20gY29kZSB3b3VsZCBnbyBoZXJlLiBGb3IgZXhhbXBsZSwgY29kZSB0byBhcmJpdHJhZ2UuCiAgICAgICAgcmVxdWlyZSh0b2tlbkJvcnJvdyA9PSBXRVRILCAidG9rZW4gYm9ycm93ICE9IFdFVEgiKTsKCiAgICAgICAgLy8gYWJvdXQgMC4zJSBmZWUsICsxIHRvIHJvdW5kIHVwCiAgICAgICAgdWludCBmZWUgPSAoYW1vdW50MSAqIDMpIC8gOTk3ICsgMTsKICAgICAgICBhbW91bnRUb1JlcGF5ID0gYW1vdW50MSArIGZlZTsKCiAgICAgICAgLy8gVHJhbnNmZXIgZmxhc2ggc3dhcCBmZWUgZnJvbSBjYWxsZXIKICAgICAgICB3ZXRoLnRyYW5zZmVyRnJvbShjYWxsZXIsIGFkZHJlc3ModGhpcyksIGZlZSk7CgogICAgICAgIC8vIFJlcGF5CiAgICAgICAgd2V0aC50cmFuc2ZlcihhZGRyZXNzKHBhaXIpLCBhbW91bnRUb1JlcGF5KTsKICAgIH0KfQoKaW50ZXJmYWNlIElVbmlzd2FwVjJQYWlyIHsKICAgIGZ1bmN0aW9uIHN3YXAoCiAgICAgICAgdWludCBhbW91bnQwT3V0LAogICAgICAgIHVpbnQgYW1vdW50MU91dCwKICAgICAgICBhZGRyZXNzIHRvLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIGRhdGEKICAgICkgZXh0ZXJuYWw7Cn0KCmludGVyZmFjZSBJVW5pc3dhcFYyRmFjdG9yeSB7CiAgICBmdW5jdGlvbiBnZXRQYWlyKAogICAgICAgIGFkZHJlc3MgdG9rZW5BLAogICAgICAgIGFkZHJlc3MgdG9rZW5CCiAgICApIGV4dGVybmFsIHZpZXcgcmV0dXJucyAoYWRkcmVzcyBwYWlyKTsKfQoKaW50ZXJmYWNlIElFUkMyMCB7CiAgICBmdW5jdGlvbiB0b3RhbFN1cHBseSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIHJlY2lwaWVudCwgdWludCBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwoKICAgIGZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKCiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oCiAgICAgICAgYWRkcmVzcyBzZW5kZXIsCiAgICAgICAgYWRkcmVzcyByZWNpcGllbnQsCiAgICAgICAgdWludCBhbW91bnQKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CgogICAgZXZlbnQgVHJhbnNmZXIoYWRkcmVzcyBpbmRleGVkIGZyb20sIGFkZHJlc3MgaW5kZXhlZCB0bywgdWludCB2YWx1ZSk7CiAgICBldmVudCBBcHByb3ZhbChhZGRyZXNzIGluZGV4ZWQgb3duZXIsIGFkZHJlc3MgaW5kZXhlZCBzcGVuZGVyLCB1aW50IHZhbHVlKTsKfQoKaW50ZXJmYWNlIElXRVRIIGlzIElFUkMyMCB7CiAgICBmdW5jdGlvbiBkZXBvc2l0KCkgZXh0ZXJuYWwgcGF5YWJsZTsKCiAgICBmdW5jdGlvbiB3aXRoZHJhdyh1aW50IGFtb3VudCkgZXh0ZXJuYWw7Cn0K",
  },
  {
    fileName: "UniswapV2FlashSwapTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0ICJmb3JnZS1zdGQvY29uc29sZS5zb2wiOwoKaW1wb3J0ICIuLi9zcmMvVW5pc3dhcFYyRmxhc2hTd2FwLnNvbCI7CgphZGRyZXNzIGNvbnN0YW50IFdFVEggPSAweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzI7CmFkZHJlc3MgY29uc3RhbnQgREFJID0gMHg2QjE3NTQ3NEU4OTA5NEM0NERhOThiOTU0RWVkZUFDNDk1MjcxZDBGOwphZGRyZXNzIGNvbnN0YW50IFVTREMgPSAweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDg7Cgpjb250cmFjdCBVbmlzd2FwVjJGbGFzaFN3YXBUZXN0IGlzIFRlc3QgewogICAgSVdFVEggcHJpdmF0ZSB3ZXRoID0gSVdFVEgoV0VUSCk7CgogICAgVW5pc3dhcFYyRmxhc2hTd2FwIHByaXZhdGUgdW5pID0gbmV3IFVuaXN3YXBWMkZsYXNoU3dhcCgpOwoKICAgIGZ1bmN0aW9uIHNldFVwKCkgcHVibGljIHt9CgogICAgZnVuY3Rpb24gdGVzdEZsYXNoU3dhcCgpIHB1YmxpYyB7CiAgICAgICAgd2V0aC5kZXBvc2l0e3ZhbHVlOiAxZTE4fSgpOwogICAgICAgIC8vIEFwcHJvdmUgZmxhc2ggc3dhcCBmZWUKICAgICAgICB3ZXRoLmFwcHJvdmUoYWRkcmVzcyh1bmkpLCAxZTE4KTsKCiAgICAgICAgdWludCBhbW91bnRUb0JvcnJvdyA9IDEwICogMWUxODsKICAgICAgICB1bmkuZmxhc2hTd2FwKGFtb3VudFRvQm9ycm93KTsKCiAgICAgICAgYXNzZXJ0R3QodW5pLmFtb3VudFRvUmVwYXkoKSwgYW1vdW50VG9Cb3Jyb3cpOwogICAgfQp9Cg==",
  },
]

const html = `<h3>Uniswap V2 Flash Swap Example</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Callee</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">uniswapV2Call</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> sender,
        <span class="hljs-keyword">uint</span> amount0,
        <span class="hljs-keyword">uint</span> amount1,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV2FlashSwap</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IUniswapV2Callee</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> UNISWAP_V2_FACTORY <span class="hljs-operator">=</span>
        <span class="hljs-number">0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f</span>;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;

    IUniswapV2Factory <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> factory <span class="hljs-operator">=</span> IUniswapV2Factory(UNISWAP_V2_FACTORY);

    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> weth <span class="hljs-operator">=</span> IERC20(WETH);

    IUniswapV2Pair <span class="hljs-keyword">private</span> <span class="hljs-keyword">immutable</span> pair;

    <span class="hljs-comment">// For this example, store the amount to repay</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> amountToRepay;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        pair <span class="hljs-operator">=</span> IUniswapV2Pair(factory.getPair(DAI, WETH));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">flashSwap</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> wethAmount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-comment">// Need to pass some data to trigger uniswapV2Call</span>
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(WETH, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);

        <span class="hljs-comment">// amount0Out is DAI, amount1Out is WETH</span>
        pair.swap(<span class="hljs-number">0</span>, wethAmount, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), data);
    }

    <span class="hljs-comment">// This function is called by the DAI/WETH pair contract</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">uniswapV2Call</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> sender,
        <span class="hljs-keyword">uint</span> amount0,
        <span class="hljs-keyword">uint</span> amount1,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(pair), <span class="hljs-string">"not pair"</span>);
        <span class="hljs-built_in">require</span>(sender <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), <span class="hljs-string">"not sender"</span>);

        (<span class="hljs-keyword">address</span> tokenBorrow, <span class="hljs-keyword">address</span> caller) <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(data, (<span class="hljs-keyword">address</span>, <span class="hljs-keyword">address</span>));

        <span class="hljs-comment">// Your custom code would go here. For example, code to arbitrage.</span>
        <span class="hljs-built_in">require</span>(tokenBorrow <span class="hljs-operator">=</span><span class="hljs-operator">=</span> WETH, <span class="hljs-string">"token borrow != WETH"</span>);

        <span class="hljs-comment">// about 0.3% fee, +1 to round up</span>
        <span class="hljs-keyword">uint</span> fee <span class="hljs-operator">=</span> (amount1 <span class="hljs-operator">*</span> <span class="hljs-number">3</span>) <span class="hljs-operator">/</span> <span class="hljs-number">997</span> <span class="hljs-operator">+</span> <span class="hljs-number">1</span>;
        amountToRepay <span class="hljs-operator">=</span> amount1 <span class="hljs-operator">+</span> fee;

        <span class="hljs-comment">// Transfer flash swap fee from caller</span>
        weth.transferFrom(caller, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), fee);

        <span class="hljs-comment">// Repay</span>
        weth.<span class="hljs-built_in">transfer</span>(<span class="hljs-keyword">address</span>(pair), amountToRepay);
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Pair</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> amount0Out,
        <span class="hljs-keyword">uint</span> amount1Out,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Factory</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getPair</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> tokenA,
        <span class="hljs-keyword">address</span> tokenB
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> pair</span>)</span>;
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

<span class="hljs-keyword">import</span> <span class="hljs-string">"../src/UniswapV2FlashSwap.sol"</span>;

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

        <span class="hljs-keyword">uint</span> amountToBorrow <span class="hljs-operator">=</span> <span class="hljs-number">10</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
        uni.flashSwap(amountToBorrow);

        assertGt(uni.amountToRepay(), amountToBorrow);
    }
}
</code></pre><ol start="2">
<li>Execute the following commands to run the test</li>
</ol>
<pre><code class="language-shell">FORK_URL=https://eth-mainnet.g.alchemy.com/v2/613t3mfjTevdrCwDl28CVvuk6wSIxRPi
forge test -vv --gas-report --fork-url $FORK_URL --match-path test/UniswapV2FlashSwap.test.sol
</code></pre><h3>Links</h3>
<p><a href="https://github.com/foundry-rs/foundry" target="__blank">Foundry</a></p>
<p><a href="https://github.com/t4sk/defi-notes" target="__blank">Uniswap V3 Foundry example</a></p>
`

export default html
