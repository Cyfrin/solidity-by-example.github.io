// metadata
export const version = "0.8.17"
export const title = "Uniswap V3 Flash Loan"
export const description = "Uniswap V3 Flash Loan"
export const codes = [
  {
    fileName: "UniswapV3Flash.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IFVuaXN3YXBWM0ZsYXNoIHsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBGQUNUT1JZID0gMHgxRjk4NDMxYzhhRDk4NTIzNjMxQUU0YTU5ZjI2NzM0NmVhMzFGOTg0OwoKICAgIHN0cnVjdCBGbGFzaENhbGxiYWNrRGF0YSB7CiAgICAgICAgdWludCBhbW91bnQwOwogICAgICAgIHVpbnQgYW1vdW50MTsKICAgICAgICBhZGRyZXNzIGNhbGxlcjsKICAgIH0KCiAgICBJRVJDMjAgcHJpdmF0ZSBpbW11dGFibGUgdG9rZW4wOwogICAgSUVSQzIwIHByaXZhdGUgaW1tdXRhYmxlIHRva2VuMTsKCiAgICBJVW5pc3dhcFYzUG9vbCBwcml2YXRlIGltbXV0YWJsZSBwb29sOwoKICAgIGNvbnN0cnVjdG9yKGFkZHJlc3MgX3Rva2VuMCwgYWRkcmVzcyBfdG9rZW4xLCB1aW50MjQgX2ZlZSkgewogICAgICAgIHRva2VuMCA9IElFUkMyMChfdG9rZW4wKTsKICAgICAgICB0b2tlbjEgPSBJRVJDMjAoX3Rva2VuMSk7CiAgICAgICAgcG9vbCA9IElVbmlzd2FwVjNQb29sKGdldFBvb2woX3Rva2VuMCwgX3Rva2VuMSwgX2ZlZSkpOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldFBvb2woCiAgICAgICAgYWRkcmVzcyBfdG9rZW4wLAogICAgICAgIGFkZHJlc3MgX3Rva2VuMSwKICAgICAgICB1aW50MjQgX2ZlZQogICAgKSBwdWJsaWMgcHVyZSByZXR1cm5zIChhZGRyZXNzKSB7CiAgICAgICAgUG9vbEFkZHJlc3MuUG9vbEtleSBtZW1vcnkgcG9vbEtleSA9IFBvb2xBZGRyZXNzLmdldFBvb2xLZXkoCiAgICAgICAgICAgIF90b2tlbjAsCiAgICAgICAgICAgIF90b2tlbjEsCiAgICAgICAgICAgIF9mZWUKICAgICAgICApOwogICAgICAgIHJldHVybiBQb29sQWRkcmVzcy5jb21wdXRlQWRkcmVzcyhGQUNUT1JZLCBwb29sS2V5KTsKICAgIH0KCiAgICBmdW5jdGlvbiBmbGFzaCh1aW50IGFtb3VudDAsIHVpbnQgYW1vdW50MSkgZXh0ZXJuYWwgewogICAgICAgIGJ5dGVzIG1lbW9yeSBkYXRhID0gYWJpLmVuY29kZSgKICAgICAgICAgICAgRmxhc2hDYWxsYmFja0RhdGEoe2Ftb3VudDA6IGFtb3VudDAsIGFtb3VudDE6IGFtb3VudDEsIGNhbGxlcjogbXNnLnNlbmRlcn0pCiAgICAgICAgKTsKICAgICAgICBJVW5pc3dhcFYzUG9vbChwb29sKS5mbGFzaChhZGRyZXNzKHRoaXMpLCBhbW91bnQwLCBhbW91bnQxLCBkYXRhKTsKICAgIH0KCiAgICBmdW5jdGlvbiB1bmlzd2FwVjNGbGFzaENhbGxiYWNrKAogICAgICAgIHVpbnQgZmVlMCwKICAgICAgICB1aW50IGZlZTEsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgZGF0YQogICAgKSBleHRlcm5hbCB7CiAgICAgICAgcmVxdWlyZShtc2cuc2VuZGVyID09IGFkZHJlc3MocG9vbCksICJub3QgYXV0aG9yaXplZCIpOwoKICAgICAgICBGbGFzaENhbGxiYWNrRGF0YSBtZW1vcnkgZGVjb2RlZCA9IGFiaS5kZWNvZGUoZGF0YSwgKEZsYXNoQ2FsbGJhY2tEYXRhKSk7CgogICAgICAgIC8vIFJlcGF5IGJvcnJvdwogICAgICAgIGlmIChmZWUwID4gMCkgewogICAgICAgICAgICB0b2tlbjAudHJhbnNmZXJGcm9tKGRlY29kZWQuY2FsbGVyLCBhZGRyZXNzKHRoaXMpLCBmZWUwKTsKICAgICAgICAgICAgdG9rZW4wLnRyYW5zZmVyKGFkZHJlc3MocG9vbCksIGRlY29kZWQuYW1vdW50MCArIGZlZTApOwogICAgICAgIH0KICAgICAgICBpZiAoZmVlMSA+IDApIHsKICAgICAgICAgICAgdG9rZW4xLnRyYW5zZmVyRnJvbShkZWNvZGVkLmNhbGxlciwgYWRkcmVzcyh0aGlzKSwgZmVlMSk7CiAgICAgICAgICAgIHRva2VuMS50cmFuc2ZlcihhZGRyZXNzKHBvb2wpLCBkZWNvZGVkLmFtb3VudDEgKyBmZWUxKTsKICAgICAgICB9CiAgICB9Cn0KCmxpYnJhcnkgUG9vbEFkZHJlc3MgewogICAgYnl0ZXMzMiBpbnRlcm5hbCBjb25zdGFudCBQT09MX0lOSVRfQ09ERV9IQVNIID0KICAgICAgICAweGUzNGYxOTliMTliMmI0ZjQ3ZjY4NDQyNjE5ZDU1NTUyN2QyNDRmNzhhMzI5N2VhODkzMjVmODQzZjg3YjhiNTQ7CgogICAgc3RydWN0IFBvb2xLZXkgewogICAgICAgIGFkZHJlc3MgdG9rZW4wOwogICAgICAgIGFkZHJlc3MgdG9rZW4xOwogICAgICAgIHVpbnQyNCBmZWU7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0UG9vbEtleSgKICAgICAgICBhZGRyZXNzIHRva2VuQSwKICAgICAgICBhZGRyZXNzIHRva2VuQiwKICAgICAgICB1aW50MjQgZmVlCiAgICApIGludGVybmFsIHB1cmUgcmV0dXJucyAoUG9vbEtleSBtZW1vcnkpIHsKICAgICAgICBpZiAodG9rZW5BID4gdG9rZW5CKSAodG9rZW5BLCB0b2tlbkIpID0gKHRva2VuQiwgdG9rZW5BKTsKICAgICAgICByZXR1cm4gUG9vbEtleSh7dG9rZW4wOiB0b2tlbkEsIHRva2VuMTogdG9rZW5CLCBmZWU6IGZlZX0pOwogICAgfQoKICAgIGZ1bmN0aW9uIGNvbXB1dGVBZGRyZXNzKAogICAgICAgIGFkZHJlc3MgZmFjdG9yeSwKICAgICAgICBQb29sS2V5IG1lbW9yeSBrZXkKICAgICkgaW50ZXJuYWwgcHVyZSByZXR1cm5zIChhZGRyZXNzIHBvb2wpIHsKICAgICAgICByZXF1aXJlKGtleS50b2tlbjAgPCBrZXkudG9rZW4xKTsKICAgICAgICBwb29sID0gYWRkcmVzcygKICAgICAgICAgICAgdWludDE2MCgKICAgICAgICAgICAgICAgIHVpbnQoCiAgICAgICAgICAgICAgICAgICAga2VjY2FrMjU2KAogICAgICAgICAgICAgICAgICAgICAgICBhYmkuZW5jb2RlUGFja2VkKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgaGV4ImZmIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhY3RvcnksCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZWNjYWsyNTYoYWJpLmVuY29kZShrZXkudG9rZW4wLCBrZXkudG9rZW4xLCBrZXkuZmVlKSksCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQT09MX0lOSVRfQ09ERV9IQVNICiAgICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICkKICAgICAgICApOwogICAgfQp9CgppbnRlcmZhY2UgSVVuaXN3YXBWM1Bvb2wgewogICAgZnVuY3Rpb24gZmxhc2goCiAgICAgICAgYWRkcmVzcyByZWNpcGllbnQsCiAgICAgICAgdWludCBhbW91bnQwLAogICAgICAgIHVpbnQgYW1vdW50MSwKICAgICAgICBieXRlcyBjYWxsZGF0YSBkYXRhCiAgICApIGV4dGVybmFsOwp9CgppbnRlcmZhY2UgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIHRvdGFsU3VwcGx5KCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBhY2NvdW50KSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQpOwoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgcmVjaXBpZW50LCB1aW50IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CgogICAgZnVuY3Rpb24gYWxsb3dhbmNlKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgc3BlbmRlcikgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3Mgc3BlbmRlciwgdWludCBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbSgKICAgICAgICBhZGRyZXNzIHNlbmRlciwKICAgICAgICBhZGRyZXNzIHJlY2lwaWVudCwKICAgICAgICB1aW50IGFtb3VudAogICAgKSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKCiAgICBldmVudCBUcmFuc2ZlcihhZGRyZXNzIGluZGV4ZWQgZnJvbSwgYWRkcmVzcyBpbmRleGVkIHRvLCB1aW50IHZhbHVlKTsKICAgIGV2ZW50IEFwcHJvdmFsKGFkZHJlc3MgaW5kZXhlZCBvd25lciwgYWRkcmVzcyBpbmRleGVkIHNwZW5kZXIsIHVpbnQgdmFsdWUpOwp9CgppbnRlcmZhY2UgSVdFVEggaXMgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIGRlcG9zaXQoKSBleHRlcm5hbCBwYXlhYmxlOwoKICAgIGZ1bmN0aW9uIHdpdGhkcmF3KHVpbnQgYW1vdW50KSBleHRlcm5hbDsKfQo=",
  },
  {
    fileName: "UniswapV3FlashTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmltcG9ydCAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0ICJmb3JnZS1zdGQvY29uc29sZS5zb2wiOwoKaW1wb3J0ICIuLi9zcmMvVW5pc3dhcFYzRmxhc2guc29sIjsKCmNvbnRyYWN0IFVuaXN3YXBWM0ZsYXNoVGVzdCBpcyBUZXN0IHsKICAgIGFkZHJlc3MgY29uc3RhbnQgV0VUSCA9IDB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMjsKICAgIGFkZHJlc3MgY29uc3RhbnQgVVNEQyA9IDB4QTBiODY5OTFjNjIxOGIzNmMxZDE5RDRhMmU5RWIwY0UzNjA2ZUI0ODsKICAgIHVpbnQyNCBjb25zdGFudCBQT09MX0ZFRSA9IDMwMDA7CgogICAgSVdFVEggcHJpdmF0ZSB3ZXRoID0gSVdFVEgoV0VUSCk7CiAgICBJRVJDMjAgcHJpdmF0ZSB1c2RjID0gSUVSQzIwKFVTREMpOwoKICAgIFVuaXN3YXBWM0ZsYXNoIHByaXZhdGUgdW5pID0gbmV3IFVuaXN3YXBWM0ZsYXNoKFVTREMsIFdFVEgsIFBPT0xfRkVFKTsKCiAgICBmdW5jdGlvbiBzZXRVcCgpIHB1YmxpYyB7fQoKICAgIGZ1bmN0aW9uIHRlc3RGbGFzaCgpIHB1YmxpYyB7CiAgICAgICAgLy8gQXBwcm92ZSBXRVRIIGZlZQogICAgICAgIHdldGguZGVwb3NpdHt2YWx1ZTogMWUxOH0oKTsKICAgICAgICB3ZXRoLmFwcHJvdmUoYWRkcmVzcyh1bmkpLCAxZTE4KTsKCiAgICAgICAgdWludCBiYWxCZWZvcmUgPSB3ZXRoLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKTsKICAgICAgICB1bmkuZmxhc2goMCwgMTAwICogMWUxOCk7CiAgICAgICAgdWludCBiYWxBZnRlciA9IHdldGguYmFsYW5jZU9mKGFkZHJlc3ModGhpcykpOwoKICAgICAgICB1aW50IGZlZSA9IGJhbEJlZm9yZSAtIGJhbEFmdGVyOwogICAgICAgIGNvbnNvbGUubG9nKCJXRVRIIGZlZSIsIGZlZSk7CiAgICB9Cn0K",
  },
]

const html = `<h3 id="uniswap-v3-flash-loan-example">Uniswap V3 Flash Loan Example</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3Flash</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> FACTORY <span class="hljs-operator">=</span> <span class="hljs-number">0x1F98431c8aD98523631AE4a59f267346ea31F984</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">FlashCallbackData</span> {
        <span class="hljs-keyword">uint</span> amount0;
        <span class="hljs-keyword">uint</span> amount1;
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

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getPool</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _token0,
        <span class="hljs-keyword">address</span> _token1,
        <span class="hljs-keyword">uint24</span> _fee
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        PoolAddress.PoolKey <span class="hljs-keyword">memory</span> poolKey <span class="hljs-operator">=</span> PoolAddress.getPoolKey(
            _token0,
            _token1,
            _fee
        );
        <span class="hljs-keyword">return</span> PoolAddress.computeAddress(FACTORY, poolKey);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">flash</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> amount0, <span class="hljs-keyword">uint</span> amount1</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(
            FlashCallbackData({amount0: amount0, amount1: amount1, caller: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>})
        );
        IUniswapV3Pool(pool).flash(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount0, amount1, data);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">uniswapV3FlashCallback</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> fee0,
        <span class="hljs-keyword">uint</span> fee1,
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

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getPoolKey</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> tokenA,
        <span class="hljs-keyword">address</span> tokenB,
        <span class="hljs-keyword">uint24</span> fee
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">PoolKey <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">if</span> (tokenA <span class="hljs-operator">&gt;</span> tokenB) (tokenA, tokenB) <span class="hljs-operator">=</span> (tokenB, tokenA);
        <span class="hljs-keyword">return</span> PoolKey({token0: tokenA, token1: tokenB, fee: fee});
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">computeAddress</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> factory,
        PoolKey <span class="hljs-keyword">memory</span> key
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> pool</span>) </span>{
        <span class="hljs-built_in">require</span>(key.token0 <span class="hljs-operator">&lt;</span> key.token1);
        pool <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(
            <span class="hljs-keyword">uint160</span>(
                <span class="hljs-keyword">uint</span>(
                    <span class="hljs-built_in">keccak256</span>(
                        <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(
                            <span class="hljs-string">hex"ff"</span>,
                            factory,
                            <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(key.token0, key.token1, key.fee)),
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
        <span class="hljs-keyword">uint</span> amount0,
        <span class="hljs-keyword">uint</span> amount1,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
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
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

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

        <span class="hljs-keyword">uint</span> balBefore <span class="hljs-operator">=</span> weth.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        uni.flash(<span class="hljs-number">0</span>, <span class="hljs-number">100</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>);
        <span class="hljs-keyword">uint</span> balAfter <span class="hljs-operator">=</span> weth.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));

        <span class="hljs-keyword">uint</span> fee <span class="hljs-operator">=</span> balBefore <span class="hljs-operator">-</span> balAfter;
        console.log(<span class="hljs-string">"WETH fee"</span>, fee);
    }
}
</code></pre>
<ol start="2">
<li>Execute the following commands to run the test</li>
</ol>
<pre><code class="language-shell">FORK_URL=https://eth-mainnet.g.alchemy.com/v2/613t3mfjTevdrCwDl28CVvuk6wSIxRPi
forge test -vv --gas-report --fork-url $FORK_URL --match-path test/UniswapV3FlashTest.test.sol
</code></pre>
<h3 id="links">Links</h3>
<p><a href="https://github.com/foundry-rs/foundry" target="__blank">Foundry</a></p>
<p><a href="https://github.com/t4sk/defi-notes" target="__blank">Uniswap V3 Foundry example</a></p>
`

export default html
