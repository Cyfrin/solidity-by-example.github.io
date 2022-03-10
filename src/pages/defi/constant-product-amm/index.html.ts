// metadata
export const version = "0.8.10"
export const title = "Constant Product AMM"
export const description = "Constant product AMM"

const html = `<p>Constant product AMM <code>XY = K</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CPAMM</span> </span>{
    IERC20 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> token0;
    IERC20 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> token1;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> reserve0;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> reserve1;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> totalSupply;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> balanceOf;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _token0, <span class="hljs-keyword">address</span> _token1</span>) </span>{
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

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_update</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _reserve0, <span class="hljs-keyword">uint</span> _reserve1</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        reserve0 <span class="hljs-operator">=</span> _reserve0;
        reserve1 <span class="hljs-operator">=</span> _reserve1;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _tokenIn, <span class="hljs-keyword">uint</span> _amountIn</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>) </span>{
        <span class="hljs-built_in">require</span>(
            _tokenIn <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token0) <span class="hljs-operator">|</span><span class="hljs-operator">|</span> _tokenIn <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token1),
            <span class="hljs-string">"invalid token"</span>
        );

        <span class="hljs-keyword">bool</span> isToken0 <span class="hljs-operator">=</span> _tokenIn <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token0);

        (IERC20 tokenIn, IERC20 tokenOut, <span class="hljs-keyword">uint</span> reserveIn, <span class="hljs-keyword">uint</span> reserveOut) <span class="hljs-operator">=</span> isToken0
            ? (token0, token1, reserve0, reserve1)
            : (token1, token0, reserve1, reserve0);

        <span class="hljs-keyword">uint</span> amountIn;
        tokenIn.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amountIn);
        amountIn <span class="hljs-operator">=</span> tokenIn.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)) <span class="hljs-operator">-</span> reserveIn;

        <span class="hljs-comment">/*
        How much dy for dx?

        xy = k
        (x + dx)(y - dy) = k
        y - dy = k / (x + dx)
        y - k / (x + dx) = dy
        y - xy / (x + dx) = dy
        (yx + ydx - xy) / (x + dx) = dy
        ydx / (x + dx) = dy
        */</span>
        <span class="hljs-comment">// 0.3% fee</span>
        <span class="hljs-keyword">uint</span> amountInWithFee <span class="hljs-operator">=</span> (amountIn <span class="hljs-operator">*</span> <span class="hljs-number">997</span>) <span class="hljs-operator">/</span> <span class="hljs-number">1000</span>;
        amountOut <span class="hljs-operator">=</span> (reserveOut <span class="hljs-operator">*</span> amountInWithFee) <span class="hljs-operator">/</span> (reserveIn <span class="hljs-operator">+</span> amountInWithFee);

        (<span class="hljs-keyword">uint</span> res0, <span class="hljs-keyword">uint</span> res1) <span class="hljs-operator">=</span> isToken0
            ? (reserveIn <span class="hljs-operator">+</span> amountIn, reserveOut <span class="hljs-operator">-</span> amountOut)
            : (reserveOut <span class="hljs-operator">-</span> amountOut, reserveIn <span class="hljs-operator">+</span> amountIn);

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
        How much dx, dy to add?

        xy = k
        (x + dx)(y + dy) = k&#x27;

        No price change, before and after adding liquidity
        x / y = (x + dx) / (y + dy)

        x(y + dy) = y(x + dx)
        x * dy = y * dx

        x / y = dx / dy
        dy = y / x * dx
        */</span>
        <span class="hljs-keyword">if</span> (reserve0 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span> <span class="hljs-operator">|</span><span class="hljs-operator">|</span> reserve1 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-built_in">require</span>(reserve0 <span class="hljs-operator">*</span> d1 <span class="hljs-operator">=</span><span class="hljs-operator">=</span> reserve1 <span class="hljs-operator">*</span> d0, <span class="hljs-string">"x / y != dx / dy"</span>);
        }

        <span class="hljs-comment">/*
        How much shares to mint?

        f(x, y) = value of liquidity
        We will define f(x, y) = sqrt(xy)

        L0 = f(x, y)
        L1 = f(x + dx, y + dy)
        T = total shares
        s = shares to mint

        Total shares should increase proportional to increase in liquidity
        L1 / L0 = (T + s) / T

        L1 * T = L0 * (T + s)

        (L1 - L0) * T / L0 = s 
        */</span>

        <span class="hljs-comment">/*
        Claim
        (L1 - L0) / L0 = dx / x = dy / y

        Proof
        --- Equation 1 ---
        (L1 - L0) / L0 = (sqrt((x + dx)(y + dy)) - sqrt(xy)) / sqrt(xy)
        
        dx / dy = x / y so replace dy = dx * y / x

        --- Equation 2 ---
        Equation 1 = (sqrt(xy + 2ydx + dx^2 * y / x) - sqrt(xy)) / sqrt(xy)

        Multiply by sqrt(x) / sqrt(x)
        Equation 2 = (sqrt(x^2y + 2xydx + dx^2 * y) - sqrt(x^2y)) / sqrt(x^2y)
                   = (sqrt(y)(sqrt(x^2 + 2xdx + dx^2) - sqrt(x^2)) / (sqrt(y)sqrt(x^2))
        
        sqrt(y) on top and bottom cancels out

        --- Equation 3 ---
        Equation 2 = (sqrt(x^2 + 2xdx + dx^2) - sqrt(x^2)) / (sqrt(x^2)
        = (sqrt((x + dx)^2) - sqrt(x^2)) / sqrt(x^2)  
        = ((x + dx) - x) / x
        = dx / x

        Since dx / dy = x / y,
        dx / x = dy / y

        Finally
        (L1 - L0) / L0 = dx / x = dy / y
        */</span>

        <span class="hljs-keyword">if</span> (totalSupply <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            shares <span class="hljs-operator">=</span> _min((d0 <span class="hljs-operator">*</span> totalSupply) <span class="hljs-operator">/</span> reserve0, (d1 <span class="hljs-operator">*</span> totalSupply) <span class="hljs-operator">/</span> reserve1);
        } <span class="hljs-keyword">else</span> {
            shares <span class="hljs-operator">=</span> _sqrt(d0 <span class="hljs-operator">*</span> d1);
        }
        <span class="hljs-built_in">require</span>(shares <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"shares = 0"</span>);
        _mint(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, shares);

        _update(bal0, bal1);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _shares</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amount0, <span class="hljs-keyword">uint</span> amount1</span>)
    </span>{
        <span class="hljs-comment">/*
        Claim
        dx, dy = amount of liquidity to remove
        dx = s / T * x
        dy = s / T * y

        Proof
        Let&#x27;s find dx, dy such that
        v / L = s / T
        
        where
        v = f(dx, dy) = sqrt(dxdy)
        L = total liquidity = sqrt(xy)
        s = shares
        T = total supply

        --- Equation 1 ---
        v = s / T * L
        sqrt(dxdy) = s / T * sqrt(xy)

        Amount of liquidity to remove must not change price so 
        dx / dy = x / y

        replace dy = dx * y / x
        sqrt(dxdy) = sqrt(dx * dx * y / x) = dx * sqrt(y / x)

        Divide both sides of Equation 1 with sqrt(y / x)
        dx = s / T * sqrt(xy) / sqrt(y / x)
           = s / T * sqrt(x^2) = s / T * x

        Likewise
        dy = s / T * y
        */</span>
        amount0 <span class="hljs-operator">=</span> (_shares <span class="hljs-operator">*</span> reserve0) <span class="hljs-operator">/</span> totalSupply;
        amount1 <span class="hljs-operator">=</span> (_shares <span class="hljs-operator">*</span> reserve1) <span class="hljs-operator">/</span> totalSupply;

        _burn(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _shares);
        _update(reserve0 <span class="hljs-operator">-</span> amount0, reserve1 <span class="hljs-operator">-</span> amount1);

        <span class="hljs-keyword">if</span> (amount0 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            token0.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amount0);
        }
        <span class="hljs-keyword">if</span> (amount1 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            token1.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amount1);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_sqrt</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> z</span>) </span>{
        <span class="hljs-keyword">if</span> (y <span class="hljs-operator">&gt;</span> <span class="hljs-number">3</span>) {
            z <span class="hljs-operator">=</span> y;
            <span class="hljs-keyword">uint</span> x <span class="hljs-operator">=</span> y <span class="hljs-operator">/</span> <span class="hljs-number">2</span> <span class="hljs-operator">+</span> <span class="hljs-number">1</span>;
            <span class="hljs-keyword">while</span> (x <span class="hljs-operator">&lt;</span> z) {
                z <span class="hljs-operator">=</span> x;
                x <span class="hljs-operator">=</span> (y <span class="hljs-operator">/</span> x <span class="hljs-operator">+</span> x) <span class="hljs-operator">/</span> <span class="hljs-number">2</span>;
            }
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (y <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>) {
            z <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_min</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> y ? x : y;
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
</code></pre>
`

export default html
