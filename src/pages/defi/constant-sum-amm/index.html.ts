// metadata
export const version = "0.8.20"
export const title = "Constant Sum AMM"
export const description = "Constant sum AMM"

export const keywords = ["defi", "constant", "sum", "amm"]

export const codes = [
    {
        fileName: "CSAMM.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IENTQU1NIHsKICAgIElFUkMyMCBwdWJsaWMgaW1tdXRhYmxlIHRva2VuMDsKICAgIElFUkMyMCBwdWJsaWMgaW1tdXRhYmxlIHRva2VuMTsKCiAgICB1aW50IHB1YmxpYyByZXNlcnZlMDsKICAgIHVpbnQgcHVibGljIHJlc2VydmUxOwoKICAgIHVpbnQgcHVibGljIHRvdGFsU3VwcGx5OwogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQpIHB1YmxpYyBiYWxhbmNlT2Y7CgogICAgY29uc3RydWN0b3IoYWRkcmVzcyBfdG9rZW4wLCBhZGRyZXNzIF90b2tlbjEpIHsKICAgICAgICAvLyBOT1RFOiBUaGlzIGNvbnRyYWN0IGFzc3VtZXMgdGhhdCB0b2tlbjAgYW5kIHRva2VuMQogICAgICAgIC8vIGJvdGggaGF2ZSBzYW1lIGRlY2ltYWxzCiAgICAgICAgdG9rZW4wID0gSUVSQzIwKF90b2tlbjApOwogICAgICAgIHRva2VuMSA9IElFUkMyMChfdG9rZW4xKTsKICAgIH0KCiAgICBmdW5jdGlvbiBfbWludChhZGRyZXNzIF90bywgdWludCBfYW1vdW50KSBwcml2YXRlIHsKICAgICAgICBiYWxhbmNlT2ZbX3RvXSArPSBfYW1vdW50OwogICAgICAgIHRvdGFsU3VwcGx5ICs9IF9hbW91bnQ7CiAgICB9CgogICAgZnVuY3Rpb24gX2J1cm4oYWRkcmVzcyBfZnJvbSwgdWludCBfYW1vdW50KSBwcml2YXRlIHsKICAgICAgICBiYWxhbmNlT2ZbX2Zyb21dIC09IF9hbW91bnQ7CiAgICAgICAgdG90YWxTdXBwbHkgLT0gX2Ftb3VudDsKICAgIH0KCiAgICBmdW5jdGlvbiBfdXBkYXRlKHVpbnQgX3JlczAsIHVpbnQgX3JlczEpIHByaXZhdGUgewogICAgICAgIHJlc2VydmUwID0gX3JlczA7CiAgICAgICAgcmVzZXJ2ZTEgPSBfcmVzMTsKICAgIH0KCiAgICBmdW5jdGlvbiBzd2FwKGFkZHJlc3MgX3Rva2VuSW4sIHVpbnQgX2Ftb3VudEluKSBleHRlcm5hbCByZXR1cm5zICh1aW50IGFtb3VudE91dCkgewogICAgICAgIHJlcXVpcmUoCiAgICAgICAgICAgIF90b2tlbkluID09IGFkZHJlc3ModG9rZW4wKSB8fCBfdG9rZW5JbiA9PSBhZGRyZXNzKHRva2VuMSksCiAgICAgICAgICAgICJpbnZhbGlkIHRva2VuIgogICAgICAgICk7CgogICAgICAgIGJvb2wgaXNUb2tlbjAgPSBfdG9rZW5JbiA9PSBhZGRyZXNzKHRva2VuMCk7CgogICAgICAgIChJRVJDMjAgdG9rZW5JbiwgSUVSQzIwIHRva2VuT3V0LCB1aW50IHJlc0luLCB1aW50IHJlc091dCkgPSBpc1Rva2VuMAogICAgICAgICAgICA/ICh0b2tlbjAsIHRva2VuMSwgcmVzZXJ2ZTAsIHJlc2VydmUxKQogICAgICAgICAgICA6ICh0b2tlbjEsIHRva2VuMCwgcmVzZXJ2ZTEsIHJlc2VydmUwKTsKCiAgICAgICAgdG9rZW5Jbi50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgX2Ftb3VudEluKTsKICAgICAgICB1aW50IGFtb3VudEluID0gdG9rZW5Jbi5iYWxhbmNlT2YoYWRkcmVzcyh0aGlzKSkgLSByZXNJbjsKCiAgICAgICAgLy8gMC4zJSBmZWUKICAgICAgICBhbW91bnRPdXQgPSAoYW1vdW50SW4gKiA5OTcpIC8gMTAwMDsKCiAgICAgICAgKHVpbnQgcmVzMCwgdWludCByZXMxKSA9IGlzVG9rZW4wCiAgICAgICAgICAgID8gKHJlc0luICsgYW1vdW50SW4sIHJlc091dCAtIGFtb3VudE91dCkKICAgICAgICAgICAgOiAocmVzT3V0IC0gYW1vdW50T3V0LCByZXNJbiArIGFtb3VudEluKTsKCiAgICAgICAgX3VwZGF0ZShyZXMwLCByZXMxKTsKICAgICAgICB0b2tlbk91dC50cmFuc2Zlcihtc2cuc2VuZGVyLCBhbW91bnRPdXQpOwogICAgfQoKICAgIGZ1bmN0aW9uIGFkZExpcXVpZGl0eSh1aW50IF9hbW91bnQwLCB1aW50IF9hbW91bnQxKSBleHRlcm5hbCByZXR1cm5zICh1aW50IHNoYXJlcykgewogICAgICAgIHRva2VuMC50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgX2Ftb3VudDApOwogICAgICAgIHRva2VuMS50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgX2Ftb3VudDEpOwoKICAgICAgICB1aW50IGJhbDAgPSB0b2tlbjAuYmFsYW5jZU9mKGFkZHJlc3ModGhpcykpOwogICAgICAgIHVpbnQgYmFsMSA9IHRva2VuMS5iYWxhbmNlT2YoYWRkcmVzcyh0aGlzKSk7CgogICAgICAgIHVpbnQgZDAgPSBiYWwwIC0gcmVzZXJ2ZTA7CiAgICAgICAgdWludCBkMSA9IGJhbDEgLSByZXNlcnZlMTsKCiAgICAgICAgLyoKICAgICAgICBhID0gYW1vdW50IGluCiAgICAgICAgTCA9IHRvdGFsIGxpcXVpZGl0eQogICAgICAgIHMgPSBzaGFyZXMgdG8gbWludAogICAgICAgIFQgPSB0b3RhbCBzdXBwbHkKCiAgICAgICAgcyBzaG91bGQgYmUgcHJvcG9ydGlvbmFsIHRvIGluY3JlYXNlIGZyb20gTCB0byBMICsgYQogICAgICAgIChMICsgYSkgLyBMID0gKFQgKyBzKSAvIFQKCiAgICAgICAgcyA9IGEgKiBUIC8gTAogICAgICAgICovCiAgICAgICAgaWYgKHRvdGFsU3VwcGx5ID4gMCkgewogICAgICAgICAgICBzaGFyZXMgPSAoKGQwICsgZDEpICogdG90YWxTdXBwbHkpIC8gKHJlc2VydmUwICsgcmVzZXJ2ZTEpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHNoYXJlcyA9IGQwICsgZDE7CiAgICAgICAgfQoKICAgICAgICByZXF1aXJlKHNoYXJlcyA+IDAsICJzaGFyZXMgPSAwIik7CiAgICAgICAgX21pbnQobXNnLnNlbmRlciwgc2hhcmVzKTsKCiAgICAgICAgX3VwZGF0ZShiYWwwLCBiYWwxKTsKICAgIH0KCiAgICBmdW5jdGlvbiByZW1vdmVMaXF1aWRpdHkodWludCBfc2hhcmVzKSBleHRlcm5hbCByZXR1cm5zICh1aW50IGQwLCB1aW50IGQxKSB7CiAgICAgICAgLyoKICAgICAgICBhID0gYW1vdW50IG91dAogICAgICAgIEwgPSB0b3RhbCBsaXF1aWRpdHkKICAgICAgICBzID0gc2hhcmVzCiAgICAgICAgVCA9IHRvdGFsIHN1cHBseQoKICAgICAgICBhIC8gTCA9IHMgLyBUCgogICAgICAgIGEgPSBMICogcyAvIFQKICAgICAgICAgID0gKHJlc2VydmUwICsgcmVzZXJ2ZTEpICogcyAvIFQKICAgICAgICAqLwogICAgICAgIGQwID0gKHJlc2VydmUwICogX3NoYXJlcykgLyB0b3RhbFN1cHBseTsKICAgICAgICBkMSA9IChyZXNlcnZlMSAqIF9zaGFyZXMpIC8gdG90YWxTdXBwbHk7CgogICAgICAgIF9idXJuKG1zZy5zZW5kZXIsIF9zaGFyZXMpOwogICAgICAgIF91cGRhdGUocmVzZXJ2ZTAgLSBkMCwgcmVzZXJ2ZTEgLSBkMSk7CgogICAgICAgIGlmIChkMCA+IDApIHsKICAgICAgICAgICAgdG9rZW4wLnRyYW5zZmVyKG1zZy5zZW5kZXIsIGQwKTsKICAgICAgICB9CiAgICAgICAgaWYgKGQxID4gMCkgewogICAgICAgICAgICB0b2tlbjEudHJhbnNmZXIobXNnLnNlbmRlciwgZDEpOwogICAgICAgIH0KICAgIH0KfQoKaW50ZXJmYWNlIElFUkMyMCB7CiAgICBmdW5jdGlvbiB0b3RhbFN1cHBseSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIHJlY2lwaWVudCwgdWludCBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwoKICAgIGZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKCiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oCiAgICAgICAgYWRkcmVzcyBzZW5kZXIsCiAgICAgICAgYWRkcmVzcyByZWNpcGllbnQsCiAgICAgICAgdWludCBhbW91bnQKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CgogICAgZXZlbnQgVHJhbnNmZXIoYWRkcmVzcyBpbmRleGVkIGZyb20sIGFkZHJlc3MgaW5kZXhlZCB0bywgdWludCBhbW91bnQpOwogICAgZXZlbnQgQXBwcm92YWwoYWRkcmVzcyBpbmRleGVkIG93bmVyLCBhZGRyZXNzIGluZGV4ZWQgc3BlbmRlciwgdWludCBhbW91bnQpOwp9Cg==",
    },
]

const html = `<p>Constant sum AMM <code>X + Y = K</code></p>
<p>Tokens trade one to one.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CSAMM</span> </span>{
    IERC20 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> token0;
    IERC20 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> token1;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> reserve0;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> reserve1;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> totalSupply;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> balanceOf;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _token0, <span class="hljs-keyword">address</span> _token1</span>) </span>{
        <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> This contract assumes that token0 and token1</span>
        <span class="hljs-comment">// both have same decimals</span>
        token0 <span class="hljs-operator">=</span> IERC20(_token0);
        token1 <span class="hljs-operator">=</span> IERC20(_token1);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        balanceOf[_to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
        totalSupply <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_burn</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _from, <span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        balanceOf[_from] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
        totalSupply <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_update</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _res0, <span class="hljs-keyword">uint</span> _res1</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        reserve0 <span class="hljs-operator">=</span> _res0;
        reserve1 <span class="hljs-operator">=</span> _res1;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _tokenIn, <span class="hljs-keyword">uint</span> _amountIn</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>) </span>{
        <span class="hljs-built_in">require</span>(
            _tokenIn <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token0) <span class="hljs-operator">|</span><span class="hljs-operator">|</span> _tokenIn <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token1),
            <span class="hljs-string">"invalid token"</span>
        );

        <span class="hljs-keyword">bool</span> isToken0 <span class="hljs-operator">=</span> _tokenIn <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token0);

        (IERC20 tokenIn, IERC20 tokenOut, <span class="hljs-keyword">uint</span> resIn, <span class="hljs-keyword">uint</span> resOut) <span class="hljs-operator">=</span> isToken0
            ? (token0, token1, reserve0, reserve1)
            : (token1, token0, reserve1, reserve0);

        tokenIn.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amountIn);
        <span class="hljs-keyword">uint</span> amountIn <span class="hljs-operator">=</span> tokenIn.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)) <span class="hljs-operator">-</span> resIn;

        <span class="hljs-comment">// 0.3% fee</span>
        amountOut <span class="hljs-operator">=</span> (amountIn <span class="hljs-operator">*</span> <span class="hljs-number">997</span>) <span class="hljs-operator">/</span> <span class="hljs-number">1000</span>;

        (<span class="hljs-keyword">uint</span> res0, <span class="hljs-keyword">uint</span> res1) <span class="hljs-operator">=</span> isToken0
            ? (resIn <span class="hljs-operator">+</span> amountIn, resOut <span class="hljs-operator">-</span> amountOut)
            : (resOut <span class="hljs-operator">-</span> amountOut, resIn <span class="hljs-operator">+</span> amountIn);

        _update(res0, res1);
        tokenOut.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amountOut);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _amount0, <span class="hljs-keyword">uint</span> _amount1</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> shares</span>) </span>{
        token0.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amount0);
        token1.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amount1);

        <span class="hljs-keyword">uint</span> bal0 <span class="hljs-operator">=</span> token0.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        <span class="hljs-keyword">uint</span> bal1 <span class="hljs-operator">=</span> token1.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));

        <span class="hljs-keyword">uint</span> d0 <span class="hljs-operator">=</span> bal0 <span class="hljs-operator">-</span> reserve0;
        <span class="hljs-keyword">uint</span> d1 <span class="hljs-operator">=</span> bal1 <span class="hljs-operator">-</span> reserve1;

        <span class="hljs-comment">/*
        a = amount in
        L = total liquidity
        s = shares to mint
        T = total supply

        s should be proportional to increase from L to L + a
        (L + a) / L = (T + s) / T

        s = a * T / L
        */</span>
        <span class="hljs-keyword">if</span> (totalSupply <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            shares <span class="hljs-operator">=</span> ((d0 <span class="hljs-operator">+</span> d1) <span class="hljs-operator">*</span> totalSupply) <span class="hljs-operator">/</span> (reserve0 <span class="hljs-operator">+</span> reserve1);
        } <span class="hljs-keyword">else</span> {
            shares <span class="hljs-operator">=</span> d0 <span class="hljs-operator">+</span> d1;
        }

        <span class="hljs-built_in">require</span>(shares <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"shares = 0"</span>);
        _mint(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, shares);

        _update(bal0, bal1);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _shares</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> d0, <span class="hljs-keyword">uint</span> d1</span>) </span>{
        <span class="hljs-comment">/*
        a = amount out
        L = total liquidity
        s = shares
        T = total supply

        a / L = s / T

        a = L * s / T
          = (reserve0 + reserve1) * s / T
        */</span>
        d0 <span class="hljs-operator">=</span> (reserve0 <span class="hljs-operator">*</span> _shares) <span class="hljs-operator">/</span> totalSupply;
        d1 <span class="hljs-operator">=</span> (reserve1 <span class="hljs-operator">*</span> _shares) <span class="hljs-operator">/</span> totalSupply;

        _burn(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _shares);
        _update(reserve0 <span class="hljs-operator">-</span> d0, reserve1 <span class="hljs-operator">-</span> d1);

        <span class="hljs-keyword">if</span> (d0 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            token0.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, d0);
        }
        <span class="hljs-keyword">if</span> (d1 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            token1.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, d1);
        }
    }
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

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint</span> amount</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Approval</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> spender, <span class="hljs-keyword">uint</span> amount</span>)</span>;
}
</code></pre>`

export default html
