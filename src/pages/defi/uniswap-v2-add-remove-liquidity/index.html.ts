// metadata
export const version = "0.8.17"
export const title = "Uniswap V2 Add Remove Liquidity"
export const description = "Uniswap V2 add remove liquidity"
export const codes = [
    {
        fileName: "Liquidity.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IFRlc3RVbmlzd2FwTGlxdWlkaXR5IHsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBGQUNUT1JZID0gMHg1QzY5YkVlNzAxZWY4MTRhMkI2YTNFREQ0QjE2NTJDQjljYzVhQTZmOwogICAgYWRkcmVzcyBwcml2YXRlIGNvbnN0YW50IFJPVVRFUiA9IDB4N2EyNTBkNTYzMEI0Y0Y1Mzk3MzlkRjJDNWRBY2I0YzY1OUYyNDg4RDsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBXRVRIID0gMHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyOwoKICAgIGZ1bmN0aW9uIGFkZExpcXVpZGl0eSgKICAgICAgICBhZGRyZXNzIF90b2tlbkEsCiAgICAgICAgYWRkcmVzcyBfdG9rZW5CLAogICAgICAgIHVpbnQgX2Ftb3VudEEsCiAgICAgICAgdWludCBfYW1vdW50QgogICAgKSBleHRlcm5hbCB7CiAgICAgICAgSUVSQzIwKF90b2tlbkEpLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBfYW1vdW50QSk7CiAgICAgICAgSUVSQzIwKF90b2tlbkIpLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBfYW1vdW50Qik7CgogICAgICAgIElFUkMyMChfdG9rZW5BKS5hcHByb3ZlKFJPVVRFUiwgX2Ftb3VudEEpOwogICAgICAgIElFUkMyMChfdG9rZW5CKS5hcHByb3ZlKFJPVVRFUiwgX2Ftb3VudEIpOwoKICAgICAgICAodWludCBhbW91bnRBLCB1aW50IGFtb3VudEIsIHVpbnQgbGlxdWlkaXR5KSA9IElVbmlzd2FwVjJSb3V0ZXIoUk9VVEVSKQogICAgICAgICAgICAuYWRkTGlxdWlkaXR5KAogICAgICAgICAgICAgICAgX3Rva2VuQSwKICAgICAgICAgICAgICAgIF90b2tlbkIsCiAgICAgICAgICAgICAgICBfYW1vdW50QSwKICAgICAgICAgICAgICAgIF9hbW91bnRCLAogICAgICAgICAgICAgICAgMSwKICAgICAgICAgICAgICAgIDEsCiAgICAgICAgICAgICAgICBhZGRyZXNzKHRoaXMpLAogICAgICAgICAgICAgICAgYmxvY2sudGltZXN0YW1wCiAgICAgICAgICAgICk7CiAgICB9CgogICAgZnVuY3Rpb24gcmVtb3ZlTGlxdWlkaXR5KGFkZHJlc3MgX3Rva2VuQSwgYWRkcmVzcyBfdG9rZW5CKSBleHRlcm5hbCB7CiAgICAgICAgYWRkcmVzcyBwYWlyID0gSVVuaXN3YXBWMkZhY3RvcnkoRkFDVE9SWSkuZ2V0UGFpcihfdG9rZW5BLCBfdG9rZW5CKTsKCiAgICAgICAgdWludCBsaXF1aWRpdHkgPSBJRVJDMjAocGFpcikuYmFsYW5jZU9mKGFkZHJlc3ModGhpcykpOwogICAgICAgIElFUkMyMChwYWlyKS5hcHByb3ZlKFJPVVRFUiwgbGlxdWlkaXR5KTsKCiAgICAgICAgKHVpbnQgYW1vdW50QSwgdWludCBhbW91bnRCKSA9IElVbmlzd2FwVjJSb3V0ZXIoUk9VVEVSKS5yZW1vdmVMaXF1aWRpdHkoCiAgICAgICAgICAgIF90b2tlbkEsCiAgICAgICAgICAgIF90b2tlbkIsCiAgICAgICAgICAgIGxpcXVpZGl0eSwKICAgICAgICAgICAgMSwKICAgICAgICAgICAgMSwKICAgICAgICAgICAgYWRkcmVzcyh0aGlzKSwKICAgICAgICAgICAgYmxvY2sudGltZXN0YW1wCiAgICAgICAgKTsKICAgIH0KfQoKaW50ZXJmYWNlIElVbmlzd2FwVjJSb3V0ZXIgewogICAgZnVuY3Rpb24gYWRkTGlxdWlkaXR5KAogICAgICAgIGFkZHJlc3MgdG9rZW5BLAogICAgICAgIGFkZHJlc3MgdG9rZW5CLAogICAgICAgIHVpbnQgYW1vdW50QURlc2lyZWQsCiAgICAgICAgdWludCBhbW91bnRCRGVzaXJlZCwKICAgICAgICB1aW50IGFtb3VudEFNaW4sCiAgICAgICAgdWludCBhbW91bnRCTWluLAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgdWludCBkZWFkbGluZQogICAgKSBleHRlcm5hbCByZXR1cm5zICh1aW50IGFtb3VudEEsIHVpbnQgYW1vdW50QiwgdWludCBsaXF1aWRpdHkpOwoKICAgIGZ1bmN0aW9uIHJlbW92ZUxpcXVpZGl0eSgKICAgICAgICBhZGRyZXNzIHRva2VuQSwKICAgICAgICBhZGRyZXNzIHRva2VuQiwKICAgICAgICB1aW50IGxpcXVpZGl0eSwKICAgICAgICB1aW50IGFtb3VudEFNaW4sCiAgICAgICAgdWludCBhbW91bnRCTWluLAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgdWludCBkZWFkbGluZQogICAgKSBleHRlcm5hbCByZXR1cm5zICh1aW50IGFtb3VudEEsIHVpbnQgYW1vdW50Qik7Cn0KCmludGVyZmFjZSBJVW5pc3dhcFYyRmFjdG9yeSB7CiAgICBmdW5jdGlvbiBnZXRQYWlyKGFkZHJlc3MgdG9rZW4wLCBhZGRyZXNzIHRva2VuMSkgZXh0ZXJuYWwgdmlldyByZXR1cm5zIChhZGRyZXNzKTsKfQoKaW50ZXJmYWNlIElFUkMyMCB7CiAgICBmdW5jdGlvbiB0b3RhbFN1cHBseSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIHJlY2lwaWVudCwgdWludCBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwoKICAgIGZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKCiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oCiAgICAgICAgYWRkcmVzcyBzZW5kZXIsCiAgICAgICAgYWRkcmVzcyByZWNpcGllbnQsCiAgICAgICAgdWludCBhbW91bnQKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7Cn0K",
    },
]

const html = `<h3 id="add--remove-liquidity">Add / Remove Liquidity</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestUniswapLiquidity</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> FACTORY <span class="hljs-operator">=</span> <span class="hljs-number">0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> ROUTER <span class="hljs-operator">=</span> <span class="hljs-number">0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _tokenA,
        <span class="hljs-keyword">address</span> _tokenB,
        <span class="hljs-keyword">uint</span> _amountA,
        <span class="hljs-keyword">uint</span> _amountB
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        IERC20(_tokenA).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amountA);
        IERC20(_tokenB).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amountB);

        IERC20(_tokenA).approve(ROUTER, _amountA);
        IERC20(_tokenB).approve(ROUTER, _amountB);

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
`

export default html
