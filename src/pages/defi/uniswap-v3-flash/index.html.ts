// metadata
export const version = "0.8.26"
export const title = "Uniswap V3 Flash Loan"
export const description = "Uniswap V3 Flash Loan"

export const keywords = ["defi", "uniswap", "v3", "flash", "loan", "amm"]

export const codes = [
  {
    fileName: "UniswapV3Flash.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IFVuaXN3YXBWM0ZsYXNoIHsKICAgIHN0cnVjdCBGbGFzaENhbGxiYWNrRGF0YSB7CiAgICAgICAgdWludDI1NiBhbW91bnQwOwogICAgICAgIHVpbnQyNTYgYW1vdW50MTsKICAgICAgICBhZGRyZXNzIGNhbGxlcjsKICAgIH0KCiAgICBJVW5pc3dhcFYzUG9vbCBwcml2YXRlIGltbXV0YWJsZSBwb29sOwogICAgSUVSQzIwIHByaXZhdGUgaW1tdXRhYmxlIHRva2VuMDsKICAgIElFUkMyMCBwcml2YXRlIGltbXV0YWJsZSB0b2tlbjE7CgogICAgY29uc3RydWN0b3IoYWRkcmVzcyBfcG9vbCkgewogICAgICAgIHBvb2wgPSBJVW5pc3dhcFYzUG9vbChfcG9vbCk7CiAgICAgICAgdG9rZW4wID0gSUVSQzIwKHBvb2wudG9rZW4wKCkpOwogICAgICAgIHRva2VuMSA9IElFUkMyMChwb29sLnRva2VuMSgpKTsKICAgIH0KCiAgICBmdW5jdGlvbiBmbGFzaCh1aW50MjU2IGFtb3VudDAsIHVpbnQyNTYgYW1vdW50MSkgZXh0ZXJuYWwgewogICAgICAgIGJ5dGVzIG1lbW9yeSBkYXRhID0gYWJpLmVuY29kZSgKICAgICAgICAgICAgRmxhc2hDYWxsYmFja0RhdGEoewogICAgICAgICAgICAgICAgYW1vdW50MDogYW1vdW50MCwKICAgICAgICAgICAgICAgIGFtb3VudDE6IGFtb3VudDEsCiAgICAgICAgICAgICAgICBjYWxsZXI6IG1zZy5zZW5kZXIKICAgICAgICAgICAgfSkKICAgICAgICApOwogICAgICAgIElVbmlzd2FwVjNQb29sKHBvb2wpLmZsYXNoKGFkZHJlc3ModGhpcyksIGFtb3VudDAsIGFtb3VudDEsIGRhdGEpOwogICAgfQoKICAgIGZ1bmN0aW9uIHVuaXN3YXBWM0ZsYXNoQ2FsbGJhY2soCiAgICAgICAgLy8gUG9vbCBmZWUgeCBhbW91bnQgcmVxdWVzdGVkCiAgICAgICAgdWludDI1NiBmZWUwLAogICAgICAgIHVpbnQyNTYgZmVlMSwKICAgICAgICBieXRlcyBjYWxsZGF0YSBkYXRhCiAgICApIGV4dGVybmFsIHsKICAgICAgICByZXF1aXJlKG1zZy5zZW5kZXIgPT0gYWRkcmVzcyhwb29sKSwgIm5vdCBhdXRob3JpemVkIik7CgogICAgICAgIEZsYXNoQ2FsbGJhY2tEYXRhIG1lbW9yeSBkZWNvZGVkID0gYWJpLmRlY29kZShkYXRhLCAoRmxhc2hDYWxsYmFja0RhdGEpKTsKCiAgICAgICAgLy8gV3JpdGUgY3VzdG9tIGNvZGUgaGVyZQogICAgICAgIGlmIChmZWUwID4gMCkgewogICAgICAgICAgICB0b2tlbjAudHJhbnNmZXJGcm9tKGRlY29kZWQuY2FsbGVyLCBhZGRyZXNzKHRoaXMpLCBmZWUwKTsKICAgICAgICB9CiAgICAgICAgaWYgKGZlZTEgPiAwKSB7CiAgICAgICAgICAgIHRva2VuMS50cmFuc2ZlckZyb20oZGVjb2RlZC5jYWxsZXIsIGFkZHJlc3ModGhpcyksIGZlZTEpOwogICAgICAgIH0KCiAgICAgICAgLy8gUmVwYXkgYm9ycm93CiAgICAgICAgaWYgKGZlZTAgPiAwKSB7CiAgICAgICAgICAgIHRva2VuMC50cmFuc2ZlcihhZGRyZXNzKHBvb2wpLCBkZWNvZGVkLmFtb3VudDAgKyBmZWUwKTsKICAgICAgICB9CiAgICAgICAgaWYgKGZlZTEgPiAwKSB7CiAgICAgICAgICAgIHRva2VuMS50cmFuc2ZlcihhZGRyZXNzKHBvb2wpLCBkZWNvZGVkLmFtb3VudDEgKyBmZWUxKTsKICAgICAgICB9CiAgICB9Cn0KCmludGVyZmFjZSBJVW5pc3dhcFYzUG9vbCB7CiAgICBmdW5jdGlvbiB0b2tlbjAoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKGFkZHJlc3MpOwogICAgZnVuY3Rpb24gdG9rZW4xKCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zIChhZGRyZXNzKTsKICAgIGZ1bmN0aW9uIGZsYXNoKAogICAgICAgIGFkZHJlc3MgcmVjaXBpZW50LAogICAgICAgIHVpbnQyNTYgYW1vdW50MCwKICAgICAgICB1aW50MjU2IGFtb3VudDEsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgZGF0YQogICAgKSBleHRlcm5hbDsKfQoKaW50ZXJmYWNlIElFUkMyMCB7CiAgICBmdW5jdGlvbiB0b3RhbFN1cHBseSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBhY2NvdW50KSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oYWRkcmVzcyBzZW5kZXIsIGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gYWxsb3dhbmNlKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgc3BlbmRlcikKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGFwcHJvdmUoYWRkcmVzcyBzcGVuZGVyLCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7Cn0K",
  },
  {
    fileName: "UniswapV3FlashTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmltcG9ydCB7VGVzdCwgY29uc29sZTJ9IGZyb20gImZvcmdlLXN0ZC9UZXN0LnNvbCI7CmltcG9ydCAiLi4vLi4vLi4vc3JjL2RlZmkvdW5pc3dhcC12My1mbGFzaC9Vbmlzd2FwVjNGbGFzaC5zb2wiOwoKY29udHJhY3QgVW5pc3dhcFYzRmxhc2hUZXN0IGlzIFRlc3QgewogICAgYWRkcmVzcyBjb25zdGFudCBEQUkgPSAweDZCMTc1NDc0RTg5MDk0QzQ0RGE5OGI5NTRFZWRlQUM0OTUyNzFkMEY7CiAgICBhZGRyZXNzIGNvbnN0YW50IFdFVEggPSAweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzI7CiAgICAvLyBEQUkgLyBXRVRIIDAuMyUgZmVlCiAgICBhZGRyZXNzIGNvbnN0YW50IFBPT0wgPSAweEMyZTlGMjVCZTYyNTdjMjEwZDdBZGYwRDRDZDZFM0U4ODFiYTI1Zjg7CiAgICB1aW50MjQgY29uc3RhbnQgUE9PTF9GRUUgPSAzMDAwOwoKICAgIElFUkMyMCBwcml2YXRlIGNvbnN0YW50IHdldGggPSBJRVJDMjAoV0VUSCk7CiAgICBJRVJDMjAgcHJpdmF0ZSBjb25zdGFudCBkYWkgPSBJRVJDMjAoREFJKTsKICAgIFVuaXN3YXBWM0ZsYXNoIHByaXZhdGUgdW5pOwogICAgYWRkcmVzcyBjb25zdGFudCB1c2VyID0gYWRkcmVzcygxMSk7CgogICAgZnVuY3Rpb24gc2V0VXAoKSBwdWJsaWMgewogICAgICAgIHVuaSA9IG5ldyBVbmlzd2FwVjNGbGFzaChQT09MKTsKCiAgICAgICAgZGVhbChEQUksIHVzZXIsIDFlNiAqIDFlMTgpOwogICAgICAgIHZtLnByYW5rKHVzZXIpOwogICAgICAgIGRhaS5hcHByb3ZlKGFkZHJlc3ModW5pKSwgdHlwZSh1aW50MjU2KS5tYXgpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfZmxhc2goKSBwdWJsaWMgewogICAgICAgIHVpbnQyNTYgZGFpX2JlZm9yZSA9IGRhaS5iYWxhbmNlT2YodXNlcik7CiAgICAgICAgdm0ucHJhbmsodXNlcik7CiAgICAgICAgdW5pLmZsYXNoKDFlNiAqIDFlMTgsIDApOwogICAgICAgIHVpbnQyNTYgZGFpX2FmdGVyID0gZGFpLmJhbGFuY2VPZih1c2VyKTsKCiAgICAgICAgdWludDI1NiBmZWUgPSBkYWlfYmVmb3JlIC0gZGFpX2FmdGVyOwogICAgICAgIGNvbnNvbGUyLmxvZygiREFJIGZlZSIsIGZlZSk7CiAgICB9Cn0K",
  },
]

const html = `<h3>Uniswap V3 Flash Loan Example</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3Flash</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">FlashCallbackData</span> {
        <span class="hljs-keyword">uint256</span> amount0;
        <span class="hljs-keyword">uint256</span> amount1;
        <span class="hljs-keyword">address</span> caller;
    }

    IUniswapV3Pool <span class="hljs-keyword">private</span> <span class="hljs-keyword">immutable</span> pool;
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">immutable</span> token0;
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">immutable</span> token1;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _pool</span>) </span>{
        pool <span class="hljs-operator">=</span> IUniswapV3Pool(_pool);
        token0 <span class="hljs-operator">=</span> IERC20(pool.token0());
        token1 <span class="hljs-operator">=</span> IERC20(pool.token1());
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">flash</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amount0, <span class="hljs-keyword">uint256</span> amount1</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(
            FlashCallbackData({
                amount0: amount0,
                amount1: amount1,
                caller: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>
            })
        );
        IUniswapV3Pool(pool).flash(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount0, amount1, data);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">uniswapV3FlashCallback</span>(<span class="hljs-params">
        <span class="hljs-comment">// Pool fee x amount requested</span>
        <span class="hljs-keyword">uint256</span> fee0,
        <span class="hljs-keyword">uint256</span> fee1,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(pool), <span class="hljs-string">"not authorized"</span>);

        FlashCallbackData <span class="hljs-keyword">memory</span> decoded <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(data, (FlashCallbackData));

        <span class="hljs-comment">// Write custom code here</span>
        <span class="hljs-keyword">if</span> (fee0 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            token0.transferFrom(decoded.caller, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), fee0);
        }
        <span class="hljs-keyword">if</span> (fee1 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            token1.transferFrom(decoded.caller, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), fee1);
        }

        <span class="hljs-comment">// Repay borrow</span>
        <span class="hljs-keyword">if</span> (fee0 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            token0.<span class="hljs-built_in">transfer</span>(<span class="hljs-keyword">address</span>(pool), decoded.amount0 <span class="hljs-operator">+</span> fee0);
        }
        <span class="hljs-keyword">if</span> (fee1 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            token1.<span class="hljs-built_in">transfer</span>(<span class="hljs-keyword">address</span>(pool), decoded.amount1 <span class="hljs-operator">+</span> fee1);
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV3Pool</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">token0</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">token1</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">flash</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> recipient,
        <span class="hljs-keyword">uint256</span> amount0,
        <span class="hljs-keyword">uint256</span> amount1,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">totalSupply</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, <span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">allowance</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">address</span> spender</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
}
</code></pre><h3>Test with Foundry</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Test</span>, <span class="hljs-title">console2</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"../../../src/defi/uniswap-v3-flash/UniswapV3Flash.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3FlashTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
    <span class="hljs-comment">// DAI / WETH 0.3% fee</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> POOL <span class="hljs-operator">=</span> <span class="hljs-number">0xC2e9F25Be6257c210d7Adf0D4Cd6E3E881ba25f8</span>;
    <span class="hljs-keyword">uint24</span> <span class="hljs-keyword">constant</span> POOL_FEE <span class="hljs-operator">=</span> <span class="hljs-number">3000</span>;

    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> weth <span class="hljs-operator">=</span> IERC20(WETH);
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> dai <span class="hljs-operator">=</span> IERC20(DAI);
    UniswapV3Flash <span class="hljs-keyword">private</span> uni;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> user <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">11</span>);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        uni <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> UniswapV3Flash(POOL);

        deal(DAI, user, <span class="hljs-number">1e6</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>);
        vm.prank(user);
        dai.approve(<span class="hljs-keyword">address</span>(uni), <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint256</span>).<span class="hljs-built_in">max</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_flash</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint256</span> dai_before <span class="hljs-operator">=</span> dai.balanceOf(user);
        vm.prank(user);
        uni.flash(<span class="hljs-number">1e6</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>, <span class="hljs-number">0</span>);
        <span class="hljs-keyword">uint256</span> dai_after <span class="hljs-operator">=</span> dai.balanceOf(user);

        <span class="hljs-keyword">uint256</span> fee <span class="hljs-operator">=</span> dai_before <span class="hljs-operator">-</span> dai_after;
        console2.log(<span class="hljs-string">"DAI fee"</span>, fee);
    }
}
</code></pre>`

export default html
