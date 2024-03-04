// metadata
export const version = "0.8.24"
export const title = "Uniswap V3 Flash Loan"
export const description = "Uniswap V3 Flash Loan"

export const keywords = ["defi", "uniswap", "v3", "flash", "loan", "amm"]

export const codes = [
  {
    fileName: "UniswapV3Flash.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmNvbnRyYWN0IFVuaXN3YXBWM0ZsYXNoIHsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBGQUNUT1JZID0KICAgICAgICAweDFGOTg0MzFjOGFEOTg1MjM2MzFBRTRhNTlmMjY3MzQ2ZWEzMUY5ODQ7CgogICAgc3RydWN0IEZsYXNoQ2FsbGJhY2tEYXRhIHsKICAgICAgICB1aW50MjU2IGFtb3VudDA7CiAgICAgICAgdWludDI1NiBhbW91bnQxOwogICAgICAgIGFkZHJlc3MgY2FsbGVyOwogICAgfQoKICAgIElFUkMyMCBwcml2YXRlIGltbXV0YWJsZSB0b2tlbjA7CiAgICBJRVJDMjAgcHJpdmF0ZSBpbW11dGFibGUgdG9rZW4xOwoKICAgIElVbmlzd2FwVjNQb29sIHByaXZhdGUgaW1tdXRhYmxlIHBvb2w7CgogICAgY29uc3RydWN0b3IoYWRkcmVzcyBfdG9rZW4wLCBhZGRyZXNzIF90b2tlbjEsIHVpbnQyNCBfZmVlKSB7CiAgICAgICAgdG9rZW4wID0gSUVSQzIwKF90b2tlbjApOwogICAgICAgIHRva2VuMSA9IElFUkMyMChfdG9rZW4xKTsKICAgICAgICBwb29sID0gSVVuaXN3YXBWM1Bvb2woZ2V0UG9vbChfdG9rZW4wLCBfdG9rZW4xLCBfZmVlKSk7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0UG9vbChhZGRyZXNzIF90b2tlbjAsIGFkZHJlc3MgX3Rva2VuMSwgdWludDI0IF9mZWUpCiAgICAgICAgcHVibGljCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGFkZHJlc3MpCiAgICB7CiAgICAgICAgUG9vbEFkZHJlc3MuUG9vbEtleSBtZW1vcnkgcG9vbEtleSA9CiAgICAgICAgICAgIFBvb2xBZGRyZXNzLmdldFBvb2xLZXkoX3Rva2VuMCwgX3Rva2VuMSwgX2ZlZSk7CiAgICAgICAgcmV0dXJuIFBvb2xBZGRyZXNzLmNvbXB1dGVBZGRyZXNzKEZBQ1RPUlksIHBvb2xLZXkpOwogICAgfQoKICAgIGZ1bmN0aW9uIGZsYXNoKHVpbnQyNTYgYW1vdW50MCwgdWludDI1NiBhbW91bnQxKSBleHRlcm5hbCB7CiAgICAgICAgYnl0ZXMgbWVtb3J5IGRhdGEgPSBhYmkuZW5jb2RlKAogICAgICAgICAgICBGbGFzaENhbGxiYWNrRGF0YSh7CiAgICAgICAgICAgICAgICBhbW91bnQwOiBhbW91bnQwLAogICAgICAgICAgICAgICAgYW1vdW50MTogYW1vdW50MSwKICAgICAgICAgICAgICAgIGNhbGxlcjogbXNnLnNlbmRlcgogICAgICAgICAgICB9KQogICAgICAgICk7CiAgICAgICAgSVVuaXN3YXBWM1Bvb2wocG9vbCkuZmxhc2goYWRkcmVzcyh0aGlzKSwgYW1vdW50MCwgYW1vdW50MSwgZGF0YSk7CiAgICB9CgogICAgZnVuY3Rpb24gdW5pc3dhcFYzRmxhc2hDYWxsYmFjaygKICAgICAgICB1aW50MjU2IGZlZTAsCiAgICAgICAgdWludDI1NiBmZWUxLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIGRhdGEKICAgICkgZXh0ZXJuYWwgewogICAgICAgIHJlcXVpcmUobXNnLnNlbmRlciA9PSBhZGRyZXNzKHBvb2wpLCAibm90IGF1dGhvcml6ZWQiKTsKCiAgICAgICAgRmxhc2hDYWxsYmFja0RhdGEgbWVtb3J5IGRlY29kZWQgPSBhYmkuZGVjb2RlKGRhdGEsIChGbGFzaENhbGxiYWNrRGF0YSkpOwoKICAgICAgICAvLyBSZXBheSBib3Jyb3cKICAgICAgICBpZiAoZmVlMCA+IDApIHsKICAgICAgICAgICAgdG9rZW4wLnRyYW5zZmVyRnJvbShkZWNvZGVkLmNhbGxlciwgYWRkcmVzcyh0aGlzKSwgZmVlMCk7CiAgICAgICAgICAgIHRva2VuMC50cmFuc2ZlcihhZGRyZXNzKHBvb2wpLCBkZWNvZGVkLmFtb3VudDAgKyBmZWUwKTsKICAgICAgICB9CiAgICAgICAgaWYgKGZlZTEgPiAwKSB7CiAgICAgICAgICAgIHRva2VuMS50cmFuc2ZlckZyb20oZGVjb2RlZC5jYWxsZXIsIGFkZHJlc3ModGhpcyksIGZlZTEpOwogICAgICAgICAgICB0b2tlbjEudHJhbnNmZXIoYWRkcmVzcyhwb29sKSwgZGVjb2RlZC5hbW91bnQxICsgZmVlMSk7CiAgICAgICAgfQogICAgfQp9CgpsaWJyYXJ5IFBvb2xBZGRyZXNzIHsKICAgIGJ5dGVzMzIgaW50ZXJuYWwgY29uc3RhbnQgUE9PTF9JTklUX0NPREVfSEFTSCA9CiAgICAgICAgMHhlMzRmMTk5YjE5YjJiNGY0N2Y2ODQ0MjYxOWQ1NTU1MjdkMjQ0Zjc4YTMyOTdlYTg5MzI1Zjg0M2Y4N2I4YjU0OwoKICAgIHN0cnVjdCBQb29sS2V5IHsKICAgICAgICBhZGRyZXNzIHRva2VuMDsKICAgICAgICBhZGRyZXNzIHRva2VuMTsKICAgICAgICB1aW50MjQgZmVlOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldFBvb2xLZXkoYWRkcmVzcyB0b2tlbkEsIGFkZHJlc3MgdG9rZW5CLCB1aW50MjQgZmVlKQogICAgICAgIGludGVybmFsCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKFBvb2xLZXkgbWVtb3J5KQogICAgewogICAgICAgIGlmICh0b2tlbkEgPiB0b2tlbkIpICh0b2tlbkEsIHRva2VuQikgPSAodG9rZW5CLCB0b2tlbkEpOwogICAgICAgIHJldHVybiBQb29sS2V5KHt0b2tlbjA6IHRva2VuQSwgdG9rZW4xOiB0b2tlbkIsIGZlZTogZmVlfSk7CiAgICB9CgogICAgZnVuY3Rpb24gY29tcHV0ZUFkZHJlc3MoYWRkcmVzcyBmYWN0b3J5LCBQb29sS2V5IG1lbW9yeSBrZXkpCiAgICAgICAgaW50ZXJuYWwKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYWRkcmVzcyBwb29sKQogICAgewogICAgICAgIHJlcXVpcmUoa2V5LnRva2VuMCA8IGtleS50b2tlbjEpOwogICAgICAgIHBvb2wgPSBhZGRyZXNzKAogICAgICAgICAgICB1aW50MTYwKAogICAgICAgICAgICAgICAgdWludDI1NigKICAgICAgICAgICAgICAgICAgICBrZWNjYWsyNTYoCiAgICAgICAgICAgICAgICAgICAgICAgIGFiaS5lbmNvZGVQYWNrZWQoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXgiZmYiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjdG9yeSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtlY2NhazI1NigKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYmkuZW5jb2RlKGtleS50b2tlbjAsIGtleS50b2tlbjEsIGtleS5mZWUpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgUE9PTF9JTklUX0NPREVfSEFTSAogICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgKQogICAgICAgICAgICApCiAgICAgICAgKTsKICAgIH0KfQoKaW50ZXJmYWNlIElVbmlzd2FwVjNQb29sIHsKICAgIGZ1bmN0aW9uIGZsYXNoKAogICAgICAgIGFkZHJlc3MgcmVjaXBpZW50LAogICAgICAgIHVpbnQyNTYgYW1vdW50MCwKICAgICAgICB1aW50MjU2IGFtb3VudDEsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgZGF0YQogICAgKSBleHRlcm5hbDsKfQoKaW50ZXJmYWNlIElFUkMyMCB7CiAgICBmdW5jdGlvbiB0b3RhbFN1cHBseSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBhY2NvdW50KSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiBhbGxvd2FuY2UoYWRkcmVzcyBvd25lciwgYWRkcmVzcyBzcGVuZGVyKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbShhZGRyZXNzIHNlbmRlciwgYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAoYm9vbCk7Cn0KCmludGVyZmFjZSBJV0VUSCBpcyBJRVJDMjAgewogICAgZnVuY3Rpb24gZGVwb3NpdCgpIGV4dGVybmFsIHBheWFibGU7CiAgICBmdW5jdGlvbiB3aXRoZHJhdyh1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWw7Cn0K",
  },
  {
    fileName: "UniswapV3FlashTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmltcG9ydCAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0ICJmb3JnZS1zdGQvY29uc29sZS5zb2wiOwoKaW1wb3J0ICIuLi9zcmMvVW5pc3dhcFYzRmxhc2guc29sIjsKCmNvbnRyYWN0IFVuaXN3YXBWM0ZsYXNoVGVzdCBpcyBUZXN0IHsKICAgIGFkZHJlc3MgY29uc3RhbnQgV0VUSCA9IDB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMjsKICAgIGFkZHJlc3MgY29uc3RhbnQgVVNEQyA9IDB4QTBiODY5OTFjNjIxOGIzNmMxZDE5RDRhMmU5RWIwY0UzNjA2ZUI0ODsKICAgIHVpbnQyNCBjb25zdGFudCBQT09MX0ZFRSA9IDMwMDA7CgogICAgSVdFVEggcHJpdmF0ZSB3ZXRoID0gSVdFVEgoV0VUSCk7CiAgICBJRVJDMjAgcHJpdmF0ZSB1c2RjID0gSUVSQzIwKFVTREMpOwoKICAgIFVuaXN3YXBWM0ZsYXNoIHByaXZhdGUgdW5pID0gbmV3IFVuaXN3YXBWM0ZsYXNoKFVTREMsIFdFVEgsIFBPT0xfRkVFKTsKCiAgICBmdW5jdGlvbiBzZXRVcCgpIHB1YmxpYyB7fQoKICAgIGZ1bmN0aW9uIHRlc3RGbGFzaCgpIHB1YmxpYyB7CiAgICAgICAgLy8gQXBwcm92ZSBXRVRIIGZlZQogICAgICAgIHdldGguZGVwb3NpdHt2YWx1ZTogMWUxOH0oKTsKICAgICAgICB3ZXRoLmFwcHJvdmUoYWRkcmVzcyh1bmkpLCAxZTE4KTsKCiAgICAgICAgdWludDI1NiBiYWxCZWZvcmUgPSB3ZXRoLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKTsKICAgICAgICB1bmkuZmxhc2goMCwgMTAwICogMWUxOCk7CiAgICAgICAgdWludDI1NiBiYWxBZnRlciA9IHdldGguYmFsYW5jZU9mKGFkZHJlc3ModGhpcykpOwoKICAgICAgICB1aW50MjU2IGZlZSA9IGJhbEJlZm9yZSAtIGJhbEFmdGVyOwogICAgICAgIGNvbnNvbGUubG9nKCJXRVRIIGZlZSIsIGZlZSk7CiAgICB9Cn0K",
  },
]

const html = `<h3>Uniswap V3 Flash Loan Example</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3Flash</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> FACTORY <span class="hljs-operator">=</span>
        <span class="hljs-number">0x1F98431c8aD98523631AE4a59f267346ea31F984</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">FlashCallbackData</span> {
        <span class="hljs-keyword">uint256</span> amount0;
        <span class="hljs-keyword">uint256</span> amount1;
        <span class="hljs-keyword">address</span> caller;
    }

    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">immutable</span> token0;
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">immutable</span> token1;

    IUniswapV3Pool <span class="hljs-keyword">private</span> <span class="hljs-keyword">immutable</span> pool;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _token0, <span class="hljs-keyword">address</span> _token1, <span class="hljs-keyword">uint24</span> _fee</span>) </span>{
        token0 <span class="hljs-operator">=</span> IERC20(_token0);
        token1 <span class="hljs-operator">=</span> IERC20(_token1);
        pool <span class="hljs-operator">=</span> IUniswapV3Pool(getPool(_token0, _token1, _fee));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getPool</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _token0, <span class="hljs-keyword">address</span> _token1, <span class="hljs-keyword">uint24</span> _fee</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)
    </span>{
        PoolAddress.PoolKey <span class="hljs-keyword">memory</span> poolKey <span class="hljs-operator">=</span>
            PoolAddress.getPoolKey(_token0, _token1, _fee);
        <span class="hljs-keyword">return</span> PoolAddress.computeAddress(FACTORY, poolKey);
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
        <span class="hljs-keyword">uint256</span> fee0,
        <span class="hljs-keyword">uint256</span> fee1,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(pool), <span class="hljs-string">"not authorized"</span>);

        FlashCallbackData <span class="hljs-keyword">memory</span> decoded <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(data, (FlashCallbackData));

        <span class="hljs-comment">// Repay borrow</span>
        <span class="hljs-keyword">if</span> (fee0 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            token0.transferFrom(decoded.caller, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), fee0);
            token0.<span class="hljs-built_in">transfer</span>(<span class="hljs-keyword">address</span>(pool), decoded.amount0 <span class="hljs-operator">+</span> fee0);
        }
        <span class="hljs-keyword">if</span> (fee1 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            token1.transferFrom(decoded.caller, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), fee1);
            token1.<span class="hljs-built_in">transfer</span>(<span class="hljs-keyword">address</span>(pool), decoded.amount1 <span class="hljs-operator">+</span> fee1);
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">PoolAddress</span> </span>{
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">internal</span> <span class="hljs-keyword">constant</span> POOL_INIT_CODE_HASH <span class="hljs-operator">=</span>
        <span class="hljs-number">0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">PoolKey</span> {
        <span class="hljs-keyword">address</span> token0;
        <span class="hljs-keyword">address</span> token1;
        <span class="hljs-keyword">uint24</span> fee;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getPoolKey</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> tokenA, <span class="hljs-keyword">address</span> tokenB, <span class="hljs-keyword">uint24</span> fee</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">PoolKey <span class="hljs-keyword">memory</span></span>)
    </span>{
        <span class="hljs-keyword">if</span> (tokenA <span class="hljs-operator">&gt;</span> tokenB) (tokenA, tokenB) <span class="hljs-operator">=</span> (tokenB, tokenA);
        <span class="hljs-keyword">return</span> PoolKey({token0: tokenA, token1: tokenB, fee: fee});
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">computeAddress</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> factory, PoolKey <span class="hljs-keyword">memory</span> key</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> pool</span>)
    </span>{
        <span class="hljs-built_in">require</span>(key.token0 <span class="hljs-operator">&lt;</span> key.token1);
        pool <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(
            <span class="hljs-keyword">uint160</span>(
                <span class="hljs-keyword">uint256</span>(
                    <span class="hljs-built_in">keccak256</span>(
                        <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(
                            <span class="hljs-string">hex"ff"</span>,
                            factory,
                            <span class="hljs-built_in">keccak256</span>(
                                <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(key.token0, key.token1, key.fee)
                            ),
                            POOL_INIT_CODE_HASH
                        )
                    )
                )
            )
        );
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV3Pool</span> </span>{
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

<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/console.sol"</span>;

<span class="hljs-keyword">import</span> <span class="hljs-string">"../src/UniswapV3Flash.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3FlashTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> USDC <span class="hljs-operator">=</span> <span class="hljs-number">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>;
    <span class="hljs-keyword">uint24</span> <span class="hljs-keyword">constant</span> POOL_FEE <span class="hljs-operator">=</span> <span class="hljs-number">3000</span>;

    IWETH <span class="hljs-keyword">private</span> weth <span class="hljs-operator">=</span> IWETH(WETH);
    IERC20 <span class="hljs-keyword">private</span> usdc <span class="hljs-operator">=</span> IERC20(USDC);

    UniswapV3Flash <span class="hljs-keyword">private</span> uni <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> UniswapV3Flash(USDC, WETH, POOL_FEE);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testFlash</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Approve WETH fee</span>
        weth.deposit{<span class="hljs-built_in">value</span>: <span class="hljs-number">1e18</span>}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), <span class="hljs-number">1e18</span>);

        <span class="hljs-keyword">uint256</span> balBefore <span class="hljs-operator">=</span> weth.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        uni.flash(<span class="hljs-number">0</span>, <span class="hljs-number">100</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>);
        <span class="hljs-keyword">uint256</span> balAfter <span class="hljs-operator">=</span> weth.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));

        <span class="hljs-keyword">uint256</span> fee <span class="hljs-operator">=</span> balBefore <span class="hljs-operator">-</span> balAfter;
        console.log(<span class="hljs-string">"WETH fee"</span>, fee);
    }
}
</code></pre><ol start="2">
<li>Execute the following commands to run the test</li>
</ol>
<pre><code class="language-shell">FORK_URL=https://eth-mainnet.g.alchemy.com/v2/613t3mfjTevdrCwDl28CVvuk6wSIxRPi
forge test -vv --gas-report --fork-url $FORK_URL --match-path test/UniswapV3FlashTest.test.sol
</code></pre><h3>Links</h3>
<p><a href="https://github.com/foundry-rs/foundry" target="__blank">Foundry</a></p>
<p><a href="https://github.com/t4sk/defi-notes" target="__blank">Uniswap V3 Foundry example</a></p>
`

export default html
