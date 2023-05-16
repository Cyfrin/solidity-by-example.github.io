// metadata
export const version = "0.8.17"
export const title = "Uniswap V2 Add Remove Liquidity"
export const description = "Uniswap V2 add remove liquidity"

export const keywords = [
    "defi",
    "uniswap",
    "v2",
    "add",
    "remove",
    "liquidity",
    "amm",
]

export const codes = [
    {
        fileName: "UniswapV2Liquidity.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IFVuaXN3YXBWMkFkZExpcXVpZGl0eSB7CiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgRkFDVE9SWSA9IDB4NUM2OWJFZTcwMWVmODE0YTJCNmEzRURENEIxNjUyQ0I5Y2M1YUE2ZjsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBST1VURVIgPSAweDdhMjUwZDU2MzBCNGNGNTM5NzM5ZEYyQzVkQWNiNGM2NTlGMjQ4OEQ7CiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgV0VUSCA9IDB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMjsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBVU0RUID0gMHhkQUMxN0Y5NThEMmVlNTIzYTIyMDYyMDY5OTQ1OTdDMTNEODMxZWM3OwoKICAgIGZ1bmN0aW9uIGFkZExpcXVpZGl0eSgKICAgICAgICBhZGRyZXNzIF90b2tlbkEsCiAgICAgICAgYWRkcmVzcyBfdG9rZW5CLAogICAgICAgIHVpbnQgX2Ftb3VudEEsCiAgICAgICAgdWludCBfYW1vdW50QgogICAgKSBleHRlcm5hbCB7CiAgICAgICAgSUVSQzIwKF90b2tlbkEpLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBfYW1vdW50QSk7CiAgICAgICAgLy8gSUVSQzIwMShfdG9rZW5CKS50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgX2Ftb3VudEIpOwogICAgICAgIC8vIE1hbnVhbHkgdHJhbnNmZXIgZnJvbSBVU0RUCiAgICAgICAgKGJvb2wgc3VjY2Vzc1RyYW5zZmVyRnJvbSwgKSA9IGFkZHJlc3MoX3Rva2VuQikuY2FsbCgKICAgICAgICAgICAgYWJpLmVuY29kZUNhbGwoSUVSQzIwLnRyYW5zZmVyRnJvbSwgKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIF9hbW91bnRCKSkKICAgICAgICApOwogICAgICAgIHJlcXVpcmUoc3VjY2Vzc1RyYW5zZmVyRnJvbSwgIlVTRFQgdHJhbnNmZXJGcm9tIGZhaWxlZCIpOwoKICAgICAgICBJRVJDMjAoX3Rva2VuQSkuYXBwcm92ZShST1VURVIsIF9hbW91bnRBKTsKCiAgICAgICAgLy8gTWFudWFsbHkgYXBwcm92ZSBVU0RUCiAgICAgICAgKGJvb2wgc3VjY2VzcywgKSA9IGFkZHJlc3MoX3Rva2VuQikuY2FsbCgKICAgICAgICAgICAgYWJpLmVuY29kZUNhbGwoSUVSQzIwLmFwcHJvdmUsIChhZGRyZXNzKFJPVVRFUiksIF9hbW91bnRCKSkKICAgICAgICApOwogICAgICAgIHJlcXVpcmUoc3VjY2VzcywgIlVTRFQgYXBwcm92ZSBmYWlsZWQiKTsKCiAgICAgICAgKHVpbnQgYW1vdW50QSwgdWludCBhbW91bnRCLCB1aW50IGxpcXVpZGl0eSkgPSBJVW5pc3dhcFYyUm91dGVyKFJPVVRFUikKICAgICAgICAgICAgLmFkZExpcXVpZGl0eSgKICAgICAgICAgICAgICAgIF90b2tlbkEsCiAgICAgICAgICAgICAgICBfdG9rZW5CLAogICAgICAgICAgICAgICAgX2Ftb3VudEEsCiAgICAgICAgICAgICAgICBfYW1vdW50QiwKICAgICAgICAgICAgICAgIDEsCiAgICAgICAgICAgICAgICAxLAogICAgICAgICAgICAgICAgYWRkcmVzcyh0aGlzKSwKICAgICAgICAgICAgICAgIGJsb2NrLnRpbWVzdGFtcAogICAgICAgICAgICApOwogICAgfQoKICAgIGZ1bmN0aW9uIHJlbW92ZUxpcXVpZGl0eShhZGRyZXNzIF90b2tlbkEsIGFkZHJlc3MgX3Rva2VuQikgZXh0ZXJuYWwgewogICAgICAgIGFkZHJlc3MgcGFpciA9IElVbmlzd2FwVjJGYWN0b3J5KEZBQ1RPUlkpLmdldFBhaXIoX3Rva2VuQSwgX3Rva2VuQik7CgogICAgICAgIHVpbnQgbGlxdWlkaXR5ID0gSUVSQzIwKHBhaXIpLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKTsKICAgICAgICBJRVJDMjAocGFpcikuYXBwcm92ZShST1VURVIsIGxpcXVpZGl0eSk7CgogICAgICAgICh1aW50IGFtb3VudEEsIHVpbnQgYW1vdW50QikgPSBJVW5pc3dhcFYyUm91dGVyKFJPVVRFUikucmVtb3ZlTGlxdWlkaXR5KAogICAgICAgICAgICBfdG9rZW5BLAogICAgICAgICAgICBfdG9rZW5CLAogICAgICAgICAgICBsaXF1aWRpdHksCiAgICAgICAgICAgIDEsCiAgICAgICAgICAgIDEsCiAgICAgICAgICAgIGFkZHJlc3ModGhpcyksCiAgICAgICAgICAgIGJsb2NrLnRpbWVzdGFtcAogICAgICAgICk7CiAgICB9Cn0KCmludGVyZmFjZSBJVW5pc3dhcFYyUm91dGVyIHsKICAgIGZ1bmN0aW9uIGFkZExpcXVpZGl0eSgKICAgICAgICBhZGRyZXNzIHRva2VuQSwKICAgICAgICBhZGRyZXNzIHRva2VuQiwKICAgICAgICB1aW50IGFtb3VudEFEZXNpcmVkLAogICAgICAgIHVpbnQgYW1vdW50QkRlc2lyZWQsCiAgICAgICAgdWludCBhbW91bnRBTWluLAogICAgICAgIHVpbnQgYW1vdW50Qk1pbiwKICAgICAgICBhZGRyZXNzIHRvLAogICAgICAgIHVpbnQgZGVhZGxpbmUKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAodWludCBhbW91bnRBLCB1aW50IGFtb3VudEIsIHVpbnQgbGlxdWlkaXR5KTsKCiAgICBmdW5jdGlvbiByZW1vdmVMaXF1aWRpdHkoCiAgICAgICAgYWRkcmVzcyB0b2tlbkEsCiAgICAgICAgYWRkcmVzcyB0b2tlbkIsCiAgICAgICAgdWludCBsaXF1aWRpdHksCiAgICAgICAgdWludCBhbW91bnRBTWluLAogICAgICAgIHVpbnQgYW1vdW50Qk1pbiwKICAgICAgICBhZGRyZXNzIHRvLAogICAgICAgIHVpbnQgZGVhZGxpbmUKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAodWludCBhbW91bnRBLCB1aW50IGFtb3VudEIpOwp9CgppbnRlcmZhY2UgSVVuaXN3YXBWMkZhY3RvcnkgewogICAgZnVuY3Rpb24gZ2V0UGFpcihhZGRyZXNzIHRva2VuMCwgYWRkcmVzcyB0b2tlbjEpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAoYWRkcmVzcyk7Cn0KCmludGVyZmFjZSBJRVJDMjAgewogICAgZnVuY3Rpb24gdG90YWxTdXBwbHkoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQpOwoKICAgIGZ1bmN0aW9uIGJhbGFuY2VPZihhZGRyZXNzIGFjY291bnQpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcyByZWNpcGllbnQsIHVpbnQgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKCiAgICBmdW5jdGlvbiBhbGxvd2FuY2UoYWRkcmVzcyBvd25lciwgYWRkcmVzcyBzcGVuZGVyKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQpOwoKICAgIGZ1bmN0aW9uIGFwcHJvdmUoYWRkcmVzcyBzcGVuZGVyLCB1aW50IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CgogICAgZnVuY3Rpb24gdHJhbnNmZXJGcm9tKAogICAgICAgIGFkZHJlc3Mgc2VuZGVyLAogICAgICAgIGFkZHJlc3MgcmVjaXBpZW50LAogICAgICAgIHVpbnQgYW1vdW50CiAgICApIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwp9Cg==",
    },
    {
        fileName: "UniswapV2LiquidityTest.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmltcG9ydCAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0ICJmb3JnZS1zdGQvY29uc29sZS5zb2wiOwoKaW1wb3J0ICIuLi9zcmMvVW5pc3dhcFYyTGlxdWlkaXR5LnNvbCI7CgpJRVJDMjAgY29uc3RhbnQgV0VUSCA9IElFUkMyMCgweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzIpOwpJRVJDMjAgY29uc3RhbnQgVVNEVCA9IElFUkMyMCgweGRBQzE3Rjk1OEQyZWU1MjNhMjIwNjIwNjk5NDU5N0MxM0Q4MzFlYzcpOwpJRVJDMjAgY29uc3RhbnQgUEFJUiA9IElFUkMyMCgweDBkNGExMWQ1RUVhYUMyOEVDM0Y2MWQxMDBkYUY0ZDQwNDcxZjE4NTIpOwoKY29udHJhY3QgVW5pc3dhcFYyQWRkTGlxdWlkaXR5VGVzdCBpcyBUZXN0IHsKICAgIFVuaXN3YXBWMkFkZExpcXVpZGl0eSBwcml2YXRlIHVuaSA9IG5ldyBVbmlzd2FwVjJBZGRMaXF1aWRpdHkoKTsKCiAgICAvLyAgQWRkIFdFVEgvVVNEVCBMaXF1aWRpdHkgdG8gVW5pc3dhcAogICAgZnVuY3Rpb24gdGVzdEFkZExpcXVpZGl0eSgpIHB1YmxpYyB7CiAgICAgICAgLy8gRGVhbCB0ZXN0IFVTRFQgYW5kIFdFVEggdG8gdGhpcyBjb250cmFjdAogICAgICAgIGRlYWwoYWRkcmVzcyhVU0RUKSwgYWRkcmVzcyh0aGlzKSwgMWU2ICogMWU2KTsKICAgICAgICBhc3NlcnRFcShVU0RULmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKSwgMWU2ICogMWU2LCAiVVNEVCBiYWxhbmNlIGluY29ycmVjdCIpOwogICAgICAgIGRlYWwoYWRkcmVzcyhXRVRIKSwgYWRkcmVzcyh0aGlzKSwgMWU2ICogMWUxOCk7CiAgICAgICAgYXNzZXJ0RXEoV0VUSC5iYWxhbmNlT2YoYWRkcmVzcyh0aGlzKSksIDFlNiAqIDFlMTgsICJXRVRIIGJhbGFuY2UgaW5jb3JyZWN0Iik7CgogICAgICAgIC8vIEFwcHJvdmUgdW5pIGZvciB0cmFuc2ZlcnJpbmcKICAgICAgICBXRVRILmFwcHJvdmUoYWRkcmVzcyh1bmkpLCAxZTY0KTsKCiAgICAgICAgLy8gVVNEVCBpbXBsZW1lbnRzIGEgbm9uLXN0YW5kYXJkIGFwcHJvdmUgZnVuY3Rpb24KICAgICAgICAvLyBuZWVkIHRvIGNhbGwgaXQgbWFudWFsbHkKICAgICAgICAoYm9vbCBzdWNjZXNzLCApID0gYWRkcmVzcyhVU0RUKS5jYWxsKAogICAgICAgICAgICBhYmkuZW5jb2RlQ2FsbChVU0RULmFwcHJvdmUsIChhZGRyZXNzKHVuaSksIDFlNjQpKQogICAgICAgICk7CiAgICAgICAgcmVxdWlyZShzdWNjZXNzLCAiVVNEVCBhcHByb3ZlIGZhaWxlZCIpOwoKICAgICAgICB1bmkuYWRkTGlxdWlkaXR5KGFkZHJlc3MoV0VUSCksIGFkZHJlc3MoVVNEVCksIDEgKiAxZTE4LCAzMDAwLjA1ICogMWU2KTsKCiAgICAgICAgYXNzZXJ0R3QoUEFJUi5iYWxhbmNlT2YoYWRkcmVzcyh1bmkpKSwgMCwgInBhaXIgYmFsYW5jZSAwIik7CiAgICB9CgogICAgLy8gUmVtb3ZlIFdFVEgvVVNEVCBMaXF1aWRpdHkgZnJvbSBVbmlzd2FwCiAgICBmdW5jdGlvbiB0ZXN0UmVtb3ZlTGlxdWlkaXR5KCkgcHVibGljIHsKICAgICAgICAvLyBEZWFsIExQIHRva2VucyB0byB1bmkKICAgICAgICBkZWFsKGFkZHJlc3MoUEFJUiksIGFkZHJlc3ModW5pKSwgMWUxMCk7CiAgICAgICAgYXNzZXJ0RXEoUEFJUi5iYWxhbmNlT2YoYWRkcmVzcyh1bmkpKSwgMWUxMCwgIkxQIHRva2VucyBiYWxhbmNlID0gMCIpOwogICAgICAgIGFzc2VydEVxKFVTRFQuYmFsYW5jZU9mKGFkZHJlc3ModW5pKSksIDAsICJVU0RUIGJhbGFuY2Ugbm9uLXplcm8iKTsKICAgICAgICBhc3NlcnRFcShXRVRILmJhbGFuY2VPZihhZGRyZXNzKHVuaSkpLCAwLCAiV0VUSCBiYWxhbmNlIG5vbi16ZXJvIik7CgogICAgICAgIHVuaS5yZW1vdmVMaXF1aWRpdHkoYWRkcmVzcyhXRVRIKSwgYWRkcmVzcyhVU0RUKSk7CgogICAgICAgIGFzc2VydEVxKFBBSVIuYmFsYW5jZU9mKGFkZHJlc3ModW5pKSksIDAsICJMUCB0b2tlbnMgYmFsYW5jZSAhPSAwIik7CiAgICAgICAgYXNzZXJ0R3QoVVNEVC5iYWxhbmNlT2YoYWRkcmVzcyh1bmkpKSwgMCwgIlVTRFQgYmFsYW5jZSA9IDAiKTsKICAgICAgICBhc3NlcnRHdChXRVRILmJhbGFuY2VPZihhZGRyZXNzKHVuaSkpLCAwLCAiV0VUSCBiYWxhbmNlID0gMCIpOwogICAgfQp9Cg==",
    },
]

const html = `<h3 id="add--remove-liquidity">Add / Remove Liquidity</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV2AddLiquidity</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> FACTORY <span class="hljs-operator">=</span> <span class="hljs-number">0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> ROUTER <span class="hljs-operator">=</span> <span class="hljs-number">0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> USDT <span class="hljs-operator">=</span> <span class="hljs-number">0xdAC17F958D2ee523a2206206994597C13D831ec7</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _tokenA,
        <span class="hljs-keyword">address</span> _tokenB,
        <span class="hljs-keyword">uint</span> _amountA,
        <span class="hljs-keyword">uint</span> _amountB
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        IERC20(_tokenA).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amountA);
        <span class="hljs-comment">// IERC201(_tokenB).transferFrom(msg.sender, address(this), _amountB);</span>
        <span class="hljs-comment">// Manualy transfer from USDT</span>
        (<span class="hljs-keyword">bool</span> successTransferFrom, ) <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(_tokenB).<span class="hljs-built_in">call</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(IERC20.transferFrom, (<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amountB))
        );
        <span class="hljs-built_in">require</span>(successTransferFrom, <span class="hljs-string">"USDT transferFrom failed"</span>);

        IERC20(_tokenA).approve(ROUTER, _amountA);

        <span class="hljs-comment">// Manually approve USDT</span>
        (<span class="hljs-keyword">bool</span> success, ) <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(_tokenB).<span class="hljs-built_in">call</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(IERC20.approve, (<span class="hljs-keyword">address</span>(ROUTER), _amountB))
        );
        <span class="hljs-built_in">require</span>(success, <span class="hljs-string">"USDT approve failed"</span>);

        (<span class="hljs-keyword">uint</span> amountA, <span class="hljs-keyword">uint</span> amountB, <span class="hljs-keyword">uint</span> liquidity) <span class="hljs-operator">=</span> IUniswapV2Router(ROUTER)
            .addLiquidity(
                _tokenA,
                _tokenB,
                _amountA,
                _amountB,
                <span class="hljs-number">1</span>,
                <span class="hljs-number">1</span>,
                <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>),
                <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
            );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _tokenA, <span class="hljs-keyword">address</span> _tokenB</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">address</span> pair <span class="hljs-operator">=</span> IUniswapV2Factory(FACTORY).getPair(_tokenA, _tokenB);

        <span class="hljs-keyword">uint</span> liquidity <span class="hljs-operator">=</span> IERC20(pair).balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        IERC20(pair).approve(ROUTER, liquidity);

        (<span class="hljs-keyword">uint</span> amountA, <span class="hljs-keyword">uint</span> amountB) <span class="hljs-operator">=</span> IUniswapV2Router(ROUTER).removeLiquidity(
            _tokenA,
            _tokenB,
            liquidity,
            <span class="hljs-number">1</span>,
            <span class="hljs-number">1</span>,
            <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>),
            <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Router</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> tokenA,
        <span class="hljs-keyword">address</span> tokenB,
        <span class="hljs-keyword">uint</span> amountADesired,
        <span class="hljs-keyword">uint</span> amountBDesired,
        <span class="hljs-keyword">uint</span> amountAMin,
        <span class="hljs-keyword">uint</span> amountBMin,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> deadline
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountA, <span class="hljs-keyword">uint</span> amountB, <span class="hljs-keyword">uint</span> liquidity</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> tokenA,
        <span class="hljs-keyword">address</span> tokenB,
        <span class="hljs-keyword">uint</span> liquidity,
        <span class="hljs-keyword">uint</span> amountAMin,
        <span class="hljs-keyword">uint</span> amountBMin,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> deadline
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountA, <span class="hljs-keyword">uint</span> amountB</span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Factory</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getPair</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> token0, <span class="hljs-keyword">address</span> token1</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)</span>;
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
}
</code></pre>
<h3 id="test-with-foundry">Test with Foundry</h3>
<p><code>forge test --fork-url &lt;ethereum-mainnet-rpc&gt;</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/console.sol"</span>;

<span class="hljs-keyword">import</span> <span class="hljs-string">"../src/UniswapV2Liquidity.sol"</span>;

IERC20 <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> IERC20(<span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>);
IERC20 <span class="hljs-keyword">constant</span> USDT <span class="hljs-operator">=</span> IERC20(<span class="hljs-number">0xdAC17F958D2ee523a2206206994597C13D831ec7</span>);
IERC20 <span class="hljs-keyword">constant</span> PAIR <span class="hljs-operator">=</span> IERC20(<span class="hljs-number">0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852</span>);

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV2AddLiquidityTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    UniswapV2AddLiquidity <span class="hljs-keyword">private</span> uni <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> UniswapV2AddLiquidity();

    <span class="hljs-comment">//  Add WETH/USDT Liquidity to Uniswap</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testAddLiquidity</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Deal test USDT and WETH to this contract</span>
        deal(<span class="hljs-keyword">address</span>(USDT), <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), <span class="hljs-number">1e6</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e6</span>);
        assertEq(USDT.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)), <span class="hljs-number">1e6</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e6</span>, <span class="hljs-string">"USDT balance incorrect"</span>);
        deal(<span class="hljs-keyword">address</span>(WETH), <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), <span class="hljs-number">1e6</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>);
        assertEq(WETH.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)), <span class="hljs-number">1e6</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>, <span class="hljs-string">"WETH balance incorrect"</span>);

        <span class="hljs-comment">// Approve uni for transferring</span>
        WETH.approve(<span class="hljs-keyword">address</span>(uni), <span class="hljs-number">1e64</span>);

        <span class="hljs-comment">// USDT implements a non-standard approve function</span>
        <span class="hljs-comment">// need to call it manually</span>
        (<span class="hljs-keyword">bool</span> success, ) <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(USDT).<span class="hljs-built_in">call</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(USDT.approve, (<span class="hljs-keyword">address</span>(uni), <span class="hljs-number">1e64</span>))
        );
        <span class="hljs-built_in">require</span>(success, <span class="hljs-string">"USDT approve failed"</span>);

        uni.addLiquidity(<span class="hljs-keyword">address</span>(WETH), <span class="hljs-keyword">address</span>(USDT), <span class="hljs-number">1</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>, <span class="hljs-number">3000.05</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e6</span>);

        assertGt(PAIR.balanceOf(<span class="hljs-keyword">address</span>(uni)), <span class="hljs-number">0</span>, <span class="hljs-string">"pair balance 0"</span>);
    }

    <span class="hljs-comment">// Remove WETH/USDT Liquidity from Uniswap</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testRemoveLiquidity</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Deal LP tokens to uni</span>
        deal(<span class="hljs-keyword">address</span>(PAIR), <span class="hljs-keyword">address</span>(uni), <span class="hljs-number">1e10</span>);
        assertEq(PAIR.balanceOf(<span class="hljs-keyword">address</span>(uni)), <span class="hljs-number">1e10</span>, <span class="hljs-string">"LP tokens balance = 0"</span>);
        assertEq(USDT.balanceOf(<span class="hljs-keyword">address</span>(uni)), <span class="hljs-number">0</span>, <span class="hljs-string">"USDT balance non-zero"</span>);
        assertEq(WETH.balanceOf(<span class="hljs-keyword">address</span>(uni)), <span class="hljs-number">0</span>, <span class="hljs-string">"WETH balance non-zero"</span>);

        uni.removeLiquidity(<span class="hljs-keyword">address</span>(WETH), <span class="hljs-keyword">address</span>(USDT));

        assertEq(PAIR.balanceOf(<span class="hljs-keyword">address</span>(uni)), <span class="hljs-number">0</span>, <span class="hljs-string">"LP tokens balance != 0"</span>);
        assertGt(USDT.balanceOf(<span class="hljs-keyword">address</span>(uni)), <span class="hljs-number">0</span>, <span class="hljs-string">"USDT balance = 0"</span>);
        assertGt(WETH.balanceOf(<span class="hljs-keyword">address</span>(uni)), <span class="hljs-number">0</span>, <span class="hljs-string">"WETH balance = 0"</span>);
    }
}
</code></pre>
`

export default html
