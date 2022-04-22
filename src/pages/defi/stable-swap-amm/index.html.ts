// metadata
export const version = "0.8.10"
export const title = "Stable Swap AMM"
export const description = "Curve's stable swap AMM"

const html = `<p>Simplified version of Curve&#39;s stable swap AMM</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8;</span>

<span class="hljs-comment">/*
Invariant - price of trade and amount of liquidity are determined by this equation

An^n sum(x_i) + D = ADn^n + D^(n + 1) / (n^n prod(x_i))

Topics
0. Newton&#x27;s method x_(n + 1) = x_n - f(x_n) / f&#x27;(x_n)
1. Invariant
2. Swap
   - Calculate Y
   - Calculate D
3. Get virtual price
4. Add liquidity
   - Imbalance fee
5. Remove liquidity
6. Remove liquidity one token
   - Calculate withdraw one token
   - getYD
<span class="hljs-doctag">TODO:</span> test?
*/</span>

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">Math</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">abs</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> y ? x <span class="hljs-operator">-</span> y : y <span class="hljs-operator">-</span> x;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">StableSwap</span> </span>{
    <span class="hljs-comment">// Number of tokens</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> N <span class="hljs-operator">=</span> <span class="hljs-number">3</span>;
    <span class="hljs-comment">// Amplification coefficient multiplied by N^(N - 1)</span>
    <span class="hljs-comment">// Higher value makes the curve more flat</span>
    <span class="hljs-comment">// Lower value makes the curve more like constant product AMM</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> A <span class="hljs-operator">=</span> <span class="hljs-number">1000</span> <span class="hljs-operator">*</span> (N<span class="hljs-operator">*</span><span class="hljs-operator">*</span>(N <span class="hljs-operator">-</span> <span class="hljs-number">1</span>));
    <span class="hljs-comment">// 0.03%</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> SWAP_FEE <span class="hljs-operator">=</span> <span class="hljs-number">300</span>;
    <span class="hljs-comment">// Liquidity fee is derived from 2 constraints</span>
    <span class="hljs-comment">// 1. Fee is 0 for adding / removing liquidity that results in a balanced pool</span>
    <span class="hljs-comment">// 2. Swapping in a balanced pool is like adding and then removing liquidity</span>
    <span class="hljs-comment">//    from a balanced pool</span>
    <span class="hljs-comment">// swap fee = add liquidity fee + remove liquidity fee</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> LIQUIDITY_FEE <span class="hljs-operator">=</span> (SWAP_FEE <span class="hljs-operator">*</span> N) <span class="hljs-operator">/</span> (<span class="hljs-number">4</span> <span class="hljs-operator">*</span> (N <span class="hljs-operator">-</span> <span class="hljs-number">1</span>));
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> FEE_DENOMINATOR <span class="hljs-operator">=</span> <span class="hljs-number">1e6</span>;

    <span class="hljs-keyword">address</span>[N] <span class="hljs-keyword">public</span> tokens;
    <span class="hljs-comment">// Normalize each token to 18 decimals</span>
    <span class="hljs-comment">// Example - DAI (18 decimals), USDC (6 decimals), USDT (6 decimals)</span>
    <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">private</span> multipliers <span class="hljs-operator">=</span> [<span class="hljs-number">1</span>, <span class="hljs-number">1e12</span>, <span class="hljs-number">1e12</span>];
    <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">public</span> balances;

    <span class="hljs-comment">// 1 share = 1e18, 18 decimals</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> DECIMALS <span class="hljs-operator">=</span> <span class="hljs-number">18</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> totalSupply;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> balanceOf;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        balanceOf[_to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
        totalSupply <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_burn</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _from, <span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        balanceOf[_from] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
        totalSupply <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
    }

    <span class="hljs-comment">// Return precision-adjusted balances, adjusted to 18 decimals</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_xp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> xp</span>) </span>{
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
            xp[i] <span class="hljs-operator">=</span> balances[i] <span class="hljs-operator">*</span> multipliers[i];
        }
    }

    <span class="hljs-comment">/**
     * @notice Calculate D, sum of balances in a perfectly balanced pool
     * If balances of x_0, x_1, ... x_(n-1) then sum(x_i) = D
     * @param xp Precision-adjusted balances
     * @return D
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_getD</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> xp</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">/*
        Newton&#x27;s method to compute D
        -----------------------------
        f(D) = ADn^n + D^(n + 1) / (n^n prod(x_i)) - An^n sum(x_i) - D 
        f&#x27;(D) = An^n + (n + 1) D^n / (n^n prod(x_i)) - 1

                     (as + np)D_n
        D_(n+1) = -----------------------
                  (a - 1)D_n + (n + 1)p

        a = An^n
        s = sum(x_i)
        p = (D_n)^(n + 1) / (n^n prod(x_i))
        */</span>
        <span class="hljs-keyword">uint</span> a <span class="hljs-operator">=</span> A <span class="hljs-operator">*</span> N; <span class="hljs-comment">// An^n</span>

        <span class="hljs-keyword">uint</span> s; <span class="hljs-comment">// x_0 + x_1 + ... + x_(n-1)</span>
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
            s <span class="hljs-operator">+</span><span class="hljs-operator">=</span> xp[i];
        }

        <span class="hljs-comment">// Newton&#x27;s method</span>
        <span class="hljs-comment">// Initial guess, d &lt;= s</span>
        <span class="hljs-keyword">uint</span> d <span class="hljs-operator">=</span> s;
        <span class="hljs-keyword">uint</span> d_prev;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> <span class="hljs-number">255</span>; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
            <span class="hljs-comment">// p = D^(n + 1) / (n^n * x_0 * ... * x_(n-1))</span>
            <span class="hljs-keyword">uint</span> p <span class="hljs-operator">=</span> d;
            <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> j; j <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>j) {
                p <span class="hljs-operator">=</span> (p <span class="hljs-operator">*</span> d) <span class="hljs-operator">/</span> (N <span class="hljs-operator">*</span> xp[j]);
            }
            d_prev <span class="hljs-operator">=</span> d;
            d <span class="hljs-operator">=</span> ((a <span class="hljs-operator">*</span> s <span class="hljs-operator">+</span> N <span class="hljs-operator">*</span> p) <span class="hljs-operator">*</span> d) <span class="hljs-operator">/</span> ((a <span class="hljs-operator">-</span> <span class="hljs-number">1</span>) <span class="hljs-operator">*</span> d <span class="hljs-operator">+</span> (N <span class="hljs-operator">+</span> <span class="hljs-number">1</span>) <span class="hljs-operator">*</span> p);

            <span class="hljs-keyword">if</span> (Math.abs(d, d_prev) <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>) {
                <span class="hljs-keyword">return</span> d;
            }
        }
        <span class="hljs-keyword">revert</span>(<span class="hljs-string">"D didn&#x27;t converge"</span>);
    }

    <span class="hljs-comment">/**
     * @notice Calculate the new balance of token j given the new balance of token i
     * @param i Index of token in
     * @param j Index of token out
     * @param x New balance of token i
     * @param xp Current precision-adjusted balances
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_getY</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> i,
        <span class="hljs-keyword">uint</span> j,
        <span class="hljs-keyword">uint</span> x,
        <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> xp
    </span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">/*
        Newton&#x27;s method to compute y
        -----------------------------
        y = x_j

        f(y) = y^2 + y(b - D) - c

                    y_n^2 + c
        y_(n+1) = --------------
                   2y_n + b - D

        where
        s = sum(x_k), k != j
        p = prod(x_k), k != j
        b = s + D / (An^n)
        c = D^(n + 1) / (n^n * p * An^n)
        */</span>
        <span class="hljs-keyword">uint</span> a <span class="hljs-operator">=</span> A <span class="hljs-operator">*</span> N;
        <span class="hljs-keyword">uint</span> d <span class="hljs-operator">=</span> _getD(xp);
        <span class="hljs-keyword">uint</span> s;
        <span class="hljs-keyword">uint</span> c <span class="hljs-operator">=</span> d;

        <span class="hljs-keyword">uint</span> _x;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> k; k <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>k) {
            <span class="hljs-keyword">if</span> (k <span class="hljs-operator">=</span><span class="hljs-operator">=</span> i) {
                _x <span class="hljs-operator">=</span> x;
            } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (k <span class="hljs-operator">=</span><span class="hljs-operator">=</span> j) {
                <span class="hljs-keyword">continue</span>;
            } <span class="hljs-keyword">else</span> {
                _x <span class="hljs-operator">=</span> xp[k];
            }

            s <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _x;
            c <span class="hljs-operator">=</span> (c <span class="hljs-operator">*</span> d) <span class="hljs-operator">/</span> (N <span class="hljs-operator">*</span> _x);
        }
        c <span class="hljs-operator">=</span> (c <span class="hljs-operator">*</span> d) <span class="hljs-operator">/</span> (N <span class="hljs-operator">*</span> a);
        <span class="hljs-keyword">uint</span> b <span class="hljs-operator">=</span> s <span class="hljs-operator">+</span> d <span class="hljs-operator">/</span> a;

        <span class="hljs-comment">// Newton&#x27;s method</span>
        <span class="hljs-keyword">uint</span> y_prev;
        <span class="hljs-comment">// Initial guess, y &lt;= d</span>
        <span class="hljs-keyword">uint</span> y <span class="hljs-operator">=</span> d;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> _i; _i <span class="hljs-operator">&lt;</span> <span class="hljs-number">255</span>; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>_i) {
            y_prev <span class="hljs-operator">=</span> y;
            y <span class="hljs-operator">=</span> (y <span class="hljs-operator">*</span> y <span class="hljs-operator">+</span> c) <span class="hljs-operator">/</span> (<span class="hljs-number">2</span> <span class="hljs-operator">*</span> y <span class="hljs-operator">+</span> b <span class="hljs-operator">-</span> d);
            <span class="hljs-keyword">if</span> (Math.abs(y, y_prev) <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>) {
                <span class="hljs-keyword">return</span> y;
            }
        }
        <span class="hljs-keyword">revert</span>(<span class="hljs-string">"y didn&#x27;t converge"</span>);
    }

    <span class="hljs-comment">/**
     * @notice Calculate the new balance of token i given precision-adjusted
     * balances xp and liquidity d
     * @dev Equation is calculate y is same as _getY
     * @param i Index of token to calculate the new balance
     * @param xp Precision-adjusted balances
     * @param d Liquidity d
     * @return New balance of token i
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_getYD</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> i,
        <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> xp,
        <span class="hljs-keyword">uint</span> d
    </span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">uint</span> a <span class="hljs-operator">=</span> A <span class="hljs-operator">*</span> N;
        <span class="hljs-keyword">uint</span> s;
        <span class="hljs-keyword">uint</span> c <span class="hljs-operator">=</span> d;

        <span class="hljs-keyword">uint</span> _x;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> k; k <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>k) {
            <span class="hljs-keyword">if</span> (k <span class="hljs-operator">!</span><span class="hljs-operator">=</span> i) {
                _x <span class="hljs-operator">=</span> xp[k];
            } <span class="hljs-keyword">else</span> {
                <span class="hljs-keyword">continue</span>;
            }

            s <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _x;
            c <span class="hljs-operator">=</span> (c <span class="hljs-operator">*</span> d) <span class="hljs-operator">/</span> (N <span class="hljs-operator">*</span> _x);
        }
        c <span class="hljs-operator">=</span> (c <span class="hljs-operator">*</span> d) <span class="hljs-operator">/</span> (N <span class="hljs-operator">*</span> a);
        <span class="hljs-keyword">uint</span> b <span class="hljs-operator">=</span> s <span class="hljs-operator">+</span> d <span class="hljs-operator">/</span> a;

        <span class="hljs-comment">// Newton&#x27;s method</span>
        <span class="hljs-keyword">uint</span> y_prev;
        <span class="hljs-comment">// Initial guess, y &lt;= d</span>
        <span class="hljs-keyword">uint</span> y <span class="hljs-operator">=</span> d;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> _i; _i <span class="hljs-operator">&lt;</span> <span class="hljs-number">255</span>; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>_i) {
            y_prev <span class="hljs-operator">=</span> y;
            y <span class="hljs-operator">=</span> (y <span class="hljs-operator">*</span> y <span class="hljs-operator">+</span> c) <span class="hljs-operator">/</span> (<span class="hljs-number">2</span> <span class="hljs-operator">*</span> y <span class="hljs-operator">+</span> b <span class="hljs-operator">-</span> d);
            <span class="hljs-keyword">if</span> (Math.abs(y, y_prev) <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>) {
                <span class="hljs-keyword">return</span> y;
            }
        }
        <span class="hljs-keyword">revert</span>(<span class="hljs-string">"y didn&#x27;t converge"</span>);
    }

    <span class="hljs-comment">// Estimate value of 1 share</span>
    <span class="hljs-comment">// How many tokens is one share worth?</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getVirtualPrice</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">uint</span> d <span class="hljs-operator">=</span> _getD(_xp());
        <span class="hljs-keyword">uint</span> _totalSupply <span class="hljs-operator">=</span> totalSupply;
        <span class="hljs-keyword">if</span> (_totalSupply <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-keyword">return</span> (d <span class="hljs-operator">*</span> <span class="hljs-number">10</span><span class="hljs-operator">*</span><span class="hljs-operator">*</span>DECIMALS) <span class="hljs-operator">/</span> _totalSupply;
        }
        <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
    }

    <span class="hljs-comment">/**
     * @notice Swap dx amount of token i for token j
     * @param i Index of token in
     * @param j Index of token out
     * @param dx Token in amount
     * @param minDy Minimum token out
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> i,
        <span class="hljs-keyword">uint</span> j,
        <span class="hljs-keyword">uint</span> dx,
        <span class="hljs-keyword">uint</span> minDy
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> dy</span>) </span>{
        <span class="hljs-built_in">require</span>(i <span class="hljs-operator">!</span><span class="hljs-operator">=</span> j, <span class="hljs-string">"i = j"</span>);

        IERC20(tokens[i]).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), dx);

        <span class="hljs-comment">// Calculate dy</span>
        <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> xp <span class="hljs-operator">=</span> _xp();
        <span class="hljs-keyword">uint</span> x <span class="hljs-operator">=</span> xp[i] <span class="hljs-operator">+</span> dx <span class="hljs-operator">*</span> multipliers[i];

        <span class="hljs-keyword">uint</span> y0 <span class="hljs-operator">=</span> xp[j];
        <span class="hljs-keyword">uint</span> y1 <span class="hljs-operator">=</span> _getY(i, j, x, xp);
        <span class="hljs-comment">// y0 must be &gt;= y1, since x has increased</span>
        <span class="hljs-comment">// -1 to round down</span>
        dy <span class="hljs-operator">=</span> (y0 <span class="hljs-operator">-</span> y1 <span class="hljs-operator">-</span> <span class="hljs-number">1</span>) <span class="hljs-operator">/</span> multipliers[j];

        <span class="hljs-comment">// Subtract fee from dy</span>
        <span class="hljs-keyword">uint</span> fee <span class="hljs-operator">=</span> (dy <span class="hljs-operator">*</span> SWAP_FEE) <span class="hljs-operator">/</span> FEE_DENOMINATOR;
        dy <span class="hljs-operator">-</span><span class="hljs-operator">=</span> fee;
        <span class="hljs-built_in">require</span>(dy <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> minDy, <span class="hljs-string">"dy &lt; min"</span>);

        balances[i] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> dx;
        balances[j] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> dy;

        IERC20(tokens[j]).<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, dy);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">calldata</span> amounts, <span class="hljs-keyword">uint</span> minShares</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> shares</span>)
    </span>{
        <span class="hljs-comment">// calculate current liquidity d0</span>
        <span class="hljs-keyword">uint</span> _totalSupply <span class="hljs-operator">=</span> totalSupply;
        <span class="hljs-keyword">uint</span> d0;
        <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> old_xs <span class="hljs-operator">=</span> _xp();
        <span class="hljs-keyword">if</span> (_totalSupply <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            d0 <span class="hljs-operator">=</span> _getD(old_xs);
        }

        <span class="hljs-comment">// Transfer tokens in</span>
        <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> new_xs;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
            <span class="hljs-keyword">uint</span> amount <span class="hljs-operator">=</span> amounts[i];
            <span class="hljs-keyword">if</span> (amount <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
                IERC20(tokens[i]).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount);
                new_xs[i] <span class="hljs-operator">=</span> old_xs[i] <span class="hljs-operator">+</span> amount <span class="hljs-operator">*</span> multipliers[i];
            } <span class="hljs-keyword">else</span> {
                new_xs[i] <span class="hljs-operator">=</span> old_xs[i];
            }
        }

        <span class="hljs-comment">// Calculate new liquidity d1</span>
        <span class="hljs-keyword">uint</span> d1 <span class="hljs-operator">=</span> _getD(new_xs);
        <span class="hljs-built_in">require</span>(d1 <span class="hljs-operator">&gt;</span> d0, <span class="hljs-string">"liquidity didn&#x27;t increase"</span>);

        <span class="hljs-comment">// Reccalcuate D accounting for fee on imbalance</span>
        <span class="hljs-keyword">uint</span> d2;
        <span class="hljs-keyword">if</span> (_totalSupply <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
                <span class="hljs-comment">// <span class="hljs-doctag">TODO:</span> why old_xs[i] * d1 / d0? why not d1 / N?</span>
                <span class="hljs-keyword">uint</span> idealBalance <span class="hljs-operator">=</span> (old_xs[i] <span class="hljs-operator">*</span> d1) <span class="hljs-operator">/</span> d0;
                <span class="hljs-keyword">uint</span> diff <span class="hljs-operator">=</span> Math.abs(new_xs[i], idealBalance);
                new_xs[i] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> (LIQUIDITY_FEE <span class="hljs-operator">*</span> diff) <span class="hljs-operator">/</span> FEE_DENOMINATOR;
            }

            d2 <span class="hljs-operator">=</span> _getD(new_xs);
        } <span class="hljs-keyword">else</span> {
            d2 <span class="hljs-operator">=</span> d1;
        }

        <span class="hljs-comment">// Update balances</span>
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
            balances[i] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amounts[i];
        }

        <span class="hljs-comment">// Shares to mint = (d2 - d0) / d0 * total supply</span>
        <span class="hljs-comment">// d1 &gt;= d2 &gt;= d0</span>
        <span class="hljs-keyword">if</span> (_totalSupply <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            shares <span class="hljs-operator">=</span> ((d2 <span class="hljs-operator">-</span> d0) <span class="hljs-operator">*</span> _totalSupply) <span class="hljs-operator">/</span> d0;
        } <span class="hljs-keyword">else</span> {
            shares <span class="hljs-operator">=</span> d2;
        }
        <span class="hljs-built_in">require</span>(shares <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> minShares, <span class="hljs-string">"shares &lt; min"</span>);
        _mint(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, shares);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> shares, <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">calldata</span> minAmountsOut</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> amountsOut</span>)
    </span>{
        <span class="hljs-keyword">uint</span> _totalSupply <span class="hljs-operator">=</span> totalSupply;

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
            <span class="hljs-keyword">uint</span> amountOut <span class="hljs-operator">=</span> (balances[i] <span class="hljs-operator">*</span> shares) <span class="hljs-operator">/</span> _totalSupply;
            <span class="hljs-built_in">require</span>(amountOut <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> minAmountsOut[i], <span class="hljs-string">"out &lt; min"</span>);

            balances[i] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amountOut;
            amountsOut[i] <span class="hljs-operator">=</span> amountOut;

            IERC20(tokens[i]).<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amountOut);
        }

        _burn(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, shares);
    }

    <span class="hljs-comment">/**
     * @notice Calculate amount of token i to receive for shares
     * @param shares Shares to burn
     * @param i Index of token to withdraw
     * @return dy Amount of token i to receive
     *         fee Fee for withdraw. Fee already included in dy
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_calcWithdrawOneToken</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> shares, <span class="hljs-keyword">uint</span> i</span>)
        <span class="hljs-title"><span class="hljs-keyword">private</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> dy, <span class="hljs-keyword">uint</span> fee</span>)
    </span>{
        <span class="hljs-keyword">uint</span> _totalSupply <span class="hljs-operator">=</span> totalSupply;
        <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> xp <span class="hljs-operator">=</span> _xp();

        <span class="hljs-comment">// Calculate d0 and d1</span>
        <span class="hljs-keyword">uint</span> d0 <span class="hljs-operator">=</span> _getD(xp);
        <span class="hljs-keyword">uint</span> d1 <span class="hljs-operator">=</span> d0 <span class="hljs-operator">-</span> (d0 <span class="hljs-operator">*</span> shares) <span class="hljs-operator">/</span> _totalSupply;

        <span class="hljs-comment">// Calculate reduction in y if D = d1</span>
        <span class="hljs-keyword">uint</span> y0 <span class="hljs-operator">=</span> _getYD(i, xp, d1);
        <span class="hljs-comment">// d1 &lt;= d0 so y must be &lt;= xp[i]</span>
        <span class="hljs-keyword">uint</span> dy0 <span class="hljs-operator">=</span> (xp[i] <span class="hljs-operator">-</span> y0) <span class="hljs-operator">/</span> multipliers[i];

        <span class="hljs-comment">// Calculate imbalance fee, update xp with fees</span>
        <span class="hljs-keyword">uint</span> dx;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> j; j <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>j) {
            <span class="hljs-keyword">if</span> (j <span class="hljs-operator">=</span><span class="hljs-operator">=</span> i) {
                dx <span class="hljs-operator">=</span> (xp[j] <span class="hljs-operator">*</span> d1) <span class="hljs-operator">/</span> d0 <span class="hljs-operator">-</span> y0;
            } <span class="hljs-keyword">else</span> {
                <span class="hljs-comment">// d1 / d0 &lt;= 1</span>
                dx <span class="hljs-operator">=</span> xp[j] <span class="hljs-operator">-</span> (xp[j] <span class="hljs-operator">*</span> d1) <span class="hljs-operator">/</span> d0;
            }
            xp[j] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> (LIQUIDITY_FEE <span class="hljs-operator">*</span> dx) <span class="hljs-operator">/</span> FEE_DENOMINATOR;
        }

        <span class="hljs-comment">// Recalculate y with xp including imbalance fees</span>
        <span class="hljs-keyword">uint</span> y1 <span class="hljs-operator">=</span> _getYD(i, xp, d1);
        <span class="hljs-comment">// - 1 to round down</span>
        dy <span class="hljs-operator">=</span> (xp[i] <span class="hljs-operator">-</span> y1 <span class="hljs-operator">-</span> <span class="hljs-number">1</span>) <span class="hljs-operator">/</span> multipliers[i];
        fee <span class="hljs-operator">=</span> dy0 <span class="hljs-operator">-</span> dy;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">calcWithdrawOneToken</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> shares, <span class="hljs-keyword">uint</span> i</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> dy, <span class="hljs-keyword">uint</span> fee</span>)
    </span>{
        <span class="hljs-keyword">return</span> _calcWithdrawOneToken(shares, i);
    }

    <span class="hljs-comment">/**
     * @notice Withdraw liquidity in token i
     * @param shares Shares to burn
     * @param i Token to withdraw
     * @param minAmountOut Minimum amount of token i that must be withdrawn
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeLiquidityOneToken</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> shares,
        <span class="hljs-keyword">uint</span> i,
        <span class="hljs-keyword">uint</span> minAmountOut
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>) </span>{
        (amountOut, ) <span class="hljs-operator">=</span> _calcWithdrawOneToken(shares, i);
        <span class="hljs-built_in">require</span>(amountOut <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> minAmountOut, <span class="hljs-string">"out &lt; min"</span>);

        balances[i] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amountOut;
        _burn(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, shares);

        IERC20(tokens[i]).<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amountOut);
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
