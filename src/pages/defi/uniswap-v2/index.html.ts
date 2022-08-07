// metadata
export const version = "0.8.13"
export const title = "Uniswap V2 Swap"
export const description = "Uniswap V2 swap"

const html = `<p><code>swapExactTokensForTokens</code> sells all tokens for another.</p>
<p><code>swapTokensForExactTokens</code> buys specific amount of tokens set by the caller.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV2SwapExamples</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> UNISWAP_V2_ROUTER <span class="hljs-operator">=</span>
        <span class="hljs-number">0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D</span>;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> USDC <span class="hljs-operator">=</span> <span class="hljs-number">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>;

    IUniswapV2Router <span class="hljs-keyword">private</span> router <span class="hljs-operator">=</span> IUniswapV2Router(UNISWAP_V2_ROUTER);
    IERC20 <span class="hljs-keyword">private</span> weth <span class="hljs-operator">=</span> IERC20(WETH);
    IERC20 <span class="hljs-keyword">private</span> dai <span class="hljs-operator">=</span> IERC20(DAI);

    <span class="hljs-comment">// Swap WETH to DAI</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapSingleHopExactAmountIn</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> amountIn, <span class="hljs-keyword">uint</span> amountOutMin</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amoutnOut</span>)
    </span>{
        weth.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountIn);
        weth.approve(<span class="hljs-keyword">address</span>(router), amountIn);

        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span> path;
        path <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">address</span>[](<span class="hljs-number">2</span>);
        path[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> WETH;
        path[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> DAI;

        <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> amounts <span class="hljs-operator">=</span> router.swapExactTokensForTokens(
            amountIn,
            amountOutMin,
            path,
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
            <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );

        <span class="hljs-comment">// amounts[0] = WETH amount, amounts[1] = DAI amount</span>
        <span class="hljs-keyword">return</span> amounts[<span class="hljs-number">1</span>];
    }

    <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapMultiHopExactAmountIn</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> amountIn, <span class="hljs-keyword">uint</span> amountOutMin</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amoutnOut</span>)
    </span>{
        dai.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountIn);
        dai.approve(<span class="hljs-keyword">address</span>(router), amountIn);

        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span> path;
        path <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">address</span>[](<span class="hljs-number">3</span>);
        path[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> DAI;
        path[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> WETH;
        path[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> USDC;

        <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> amounts <span class="hljs-operator">=</span> router.swapExactTokensForTokens(
            amountIn,
            amountOutMin,
            path,
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
            <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );

        <span class="hljs-comment">// amounts[0] = DAI amount</span>
        <span class="hljs-comment">// amounts[1] = WETH amount</span>
        <span class="hljs-comment">// amounts[2] = USDC amount</span>
        <span class="hljs-keyword">return</span> amounts[<span class="hljs-number">2</span>];
    }

    <span class="hljs-comment">// Swap WETH to DAI</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapSingleHopExactAmountOut</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOutDesired, <span class="hljs-keyword">uint</span> amountInMax</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>)
    </span>{
        weth.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountInMax);
        weth.approve(<span class="hljs-keyword">address</span>(router), amountInMax);

        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span> path;
        path <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">address</span>[](<span class="hljs-number">2</span>);
        path[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> WETH;
        path[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> DAI;

        <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> amounts <span class="hljs-operator">=</span> router.swapTokensForExactTokens(
            amountOutDesired,
            amountInMax,
            path,
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
            <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );

        <span class="hljs-comment">// Refund WETH to msg.sender</span>
        <span class="hljs-keyword">if</span> (amounts[<span class="hljs-number">0</span>] <span class="hljs-operator">&lt;</span> amountInMax) {
            weth.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amountInMax <span class="hljs-operator">-</span> amounts[<span class="hljs-number">0</span>]);
        }

        <span class="hljs-keyword">return</span> amounts[<span class="hljs-number">1</span>];
    }

    <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapMultiHopExactAmountOut</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOutDesired, <span class="hljs-keyword">uint</span> amountInMax</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>)
    </span>{
        dai.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountInMax);
        dai.approve(<span class="hljs-keyword">address</span>(router), amountInMax);

        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span> path;
        path <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">address</span>[](<span class="hljs-number">3</span>);
        path[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> DAI;
        path[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> WETH;
        path[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> USDC;

        <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> amounts <span class="hljs-operator">=</span> router.swapTokensForExactTokens(
            amountOutDesired,
            amountInMax,
            path,
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
            <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );

        <span class="hljs-comment">// Refund DAI to msg.sender</span>
        <span class="hljs-keyword">if</span> (amounts[<span class="hljs-number">0</span>] <span class="hljs-operator">&lt;</span> amountInMax) {
            dai.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amountInMax <span class="hljs-operator">-</span> amounts[<span class="hljs-number">0</span>]);
        }

        <span class="hljs-keyword">return</span> amounts[<span class="hljs-number">2</span>];
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Router</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapExactTokensForTokens</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> amountIn,
        <span class="hljs-keyword">uint</span> amountOutMin,
        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">calldata</span> path,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> deadline
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> amounts</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapTokensForExactTokens</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> amountOut,
        <span class="hljs-keyword">uint</span> amountInMax,
        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">calldata</span> path,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> deadline
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> amounts</span>)</span>;
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
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/console.sol"</span>;

<span class="hljs-keyword">import</span> <span class="hljs-string">"../src/UniswapV2SwapExamples.sol"</span>;

<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> USDC <span class="hljs-operator">=</span> <span class="hljs-number">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV2SwapExamplesTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    IWETH <span class="hljs-keyword">private</span> weth <span class="hljs-operator">=</span> IWETH(WETH);
    IERC20 <span class="hljs-keyword">private</span> dai <span class="hljs-operator">=</span> IERC20(DAI);
    IERC20 <span class="hljs-keyword">private</span> usdc <span class="hljs-operator">=</span> IERC20(USDC);

    UniswapV2SwapExamples <span class="hljs-keyword">private</span> uni <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> UniswapV2SwapExamples();

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{}

    <span class="hljs-comment">// Swap WETH -&gt; DAI</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testSwapSingleHopExactAmountIn</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint</span> wethAmount <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        weth.deposit{<span class="hljs-built_in">value</span>: wethAmount}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), wethAmount);

        <span class="hljs-keyword">uint</span> daiAmountMin <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">uint</span> daiAmountOut <span class="hljs-operator">=</span> uni.swapSingleHopExactAmountIn(wethAmount, daiAmountMin);

        console.log(<span class="hljs-string">"DAI"</span>, daiAmountOut);
        assertGe(daiAmountOut, daiAmountMin, <span class="hljs-string">"amount out &lt; min"</span>);
    }

    <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testSwapMultiHopExactAmountIn</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Swap WETH -&gt; DAI</span>
        <span class="hljs-keyword">uint</span> wethAmount <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        weth.deposit{<span class="hljs-built_in">value</span>: wethAmount}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), wethAmount);

        <span class="hljs-keyword">uint</span> daiAmountMin <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        uni.swapSingleHopExactAmountIn(wethAmount, daiAmountMin);

        <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
        <span class="hljs-keyword">uint</span> daiAmountIn <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        dai.approve(<span class="hljs-keyword">address</span>(uni), daiAmountIn);

        <span class="hljs-keyword">uint</span> usdcAmountOutMin <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">uint</span> usdcAmountOut <span class="hljs-operator">=</span> uni.swapMultiHopExactAmountIn(
            daiAmountIn,
            usdcAmountOutMin
        );

        console.log(<span class="hljs-string">"USDC"</span>, usdcAmountOut);
        assertGe(usdcAmountOut, usdcAmountOutMin, <span class="hljs-string">"amount out &lt; min"</span>);
    }

    <span class="hljs-comment">// Swap WETH -&gt; DAI</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testSwapSingleHopExactAmountOut</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint</span> wethAmount <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        weth.deposit{<span class="hljs-built_in">value</span>: wethAmount}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), wethAmount);

        <span class="hljs-keyword">uint</span> daiAmountDesired <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        <span class="hljs-keyword">uint</span> daiAmountOut <span class="hljs-operator">=</span> uni.swapSingleHopExactAmountOut(
            daiAmountDesired,
            wethAmount
        );

        console.log(<span class="hljs-string">"DAI"</span>, daiAmountOut);
        assertEq(daiAmountOut, daiAmountDesired, <span class="hljs-string">"amount out != amount out desired"</span>);
    }

    <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testSwapMultiHopExactAmountOut</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Swap WETH -&gt; DAI</span>
        <span class="hljs-keyword">uint</span> wethAmount <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        weth.deposit{<span class="hljs-built_in">value</span>: wethAmount}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), wethAmount);

        <span class="hljs-comment">// Buy 100 DAI</span>
        <span class="hljs-keyword">uint</span> daiAmountOut <span class="hljs-operator">=</span> <span class="hljs-number">100</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
        uni.swapSingleHopExactAmountOut(daiAmountOut, wethAmount);

        <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
        dai.approve(<span class="hljs-keyword">address</span>(uni), daiAmountOut);

        <span class="hljs-keyword">uint</span> amountOutDesired <span class="hljs-operator">=</span> <span class="hljs-number">1e6</span>;
        <span class="hljs-keyword">uint</span> amountOut <span class="hljs-operator">=</span> uni.swapMultiHopExactAmountOut(amountOutDesired, daiAmountOut);

        console.log(<span class="hljs-string">"USDC"</span>, amountOut);
        assertEq(amountOut, amountOutDesired, <span class="hljs-string">"amount out != amount out desired"</span>);
    }
}
</code></pre>
`

export default html
