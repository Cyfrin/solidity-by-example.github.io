// metadata
export const version = "0.8.13"
export const title = "Uniswap V3 Swap Examples"
export const description = "Uniswap V3 swap examples"

const html = `<h3 id="uniswap-v3-swap-examples">Uniswap V3 Swap Examples</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3SwapExamples</span> </span>{
    ISwapRouter <span class="hljs-keyword">constant</span> router <span class="hljs-operator">=</span>
        ISwapRouter(<span class="hljs-number">0xE592427A0AEce92De3Edee1F18E0157C05861564</span>);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapExactInputSingleHop</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> tokenIn,
        <span class="hljs-keyword">address</span> tokenOut,
        <span class="hljs-keyword">uint24</span> poolFee,
        <span class="hljs-keyword">uint</span> amountIn
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>) </span>{
        IERC20(tokenIn).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountIn);
        IERC20(tokenIn).approve(<span class="hljs-keyword">address</span>(router), amountIn);

        ISwapRouter.ExactInputSingleParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> ISwapRouter
            .ExactInputSingleParams({
                tokenIn: tokenIn,
                tokenOut: tokenOut,
                fee: poolFee,
                recipient: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
                deadline: <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>,
                amountIn: amountIn,
                amountOutMinimum: <span class="hljs-number">0</span>,
                sqrtPriceLimitX96: <span class="hljs-number">0</span>
            });

        amountOut <span class="hljs-operator">=</span> router.exactInputSingle(params);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapExactInputMultiHop</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> path,
        <span class="hljs-keyword">address</span> tokenIn,
        <span class="hljs-keyword">uint</span> amountIn
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>) </span>{
        IERC20(tokenIn).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountIn);
        IERC20(tokenIn).approve(<span class="hljs-keyword">address</span>(router), amountIn);

        ISwapRouter.ExactInputParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> ISwapRouter.ExactInputParams({
            path: path,
            recipient: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
            deadline: <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>,
            amountIn: amountIn,
            amountOutMinimum: <span class="hljs-number">0</span>
        });
        amountOut <span class="hljs-operator">=</span> router.exactInput(params);
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">ISwapRouter</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">ExactInputSingleParams</span> {
        <span class="hljs-keyword">address</span> tokenIn;
        <span class="hljs-keyword">address</span> tokenOut;
        <span class="hljs-keyword">uint24</span> fee;
        <span class="hljs-keyword">address</span> recipient;
        <span class="hljs-keyword">uint</span> deadline;
        <span class="hljs-keyword">uint</span> amountIn;
        <span class="hljs-keyword">uint</span> amountOutMinimum;
        <span class="hljs-keyword">uint160</span> sqrtPriceLimitX96;
    }

    <span class="hljs-comment">/// @notice Swaps amountIn of one token for as much as possible of another token</span>
    <span class="hljs-comment">/// @param params The parameters necessary for the swap, encoded as ExactInputSingleParams in calldata</span>
    <span class="hljs-comment">/// @return amountOut The amount of the received token</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">exactInputSingle</span>(<span class="hljs-params">ExactInputSingleParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>)</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">ExactInputParams</span> {
        <span class="hljs-keyword">bytes</span> path;
        <span class="hljs-keyword">address</span> recipient;
        <span class="hljs-keyword">uint</span> deadline;
        <span class="hljs-keyword">uint</span> amountIn;
        <span class="hljs-keyword">uint</span> amountOutMinimum;
    }

    <span class="hljs-comment">/// @notice Swaps amountIn of one token for as much as possible of another along the specified path</span>
    <span class="hljs-comment">/// @param params The parameters necessary for the multi-hop swap, encoded as ExactInputParams in calldata</span>
    <span class="hljs-comment">/// @return amountOut The amount of the received token</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">exactInput</span>(<span class="hljs-params">ExactInputParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>)</span>;
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
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/console.sol"</span>;

<span class="hljs-keyword">import</span> <span class="hljs-string">"../src/UniswapV3SwapExamples.sol"</span>;

<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> USDC <span class="hljs-operator">=</span> <span class="hljs-number">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniV3Test</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    IWETH <span class="hljs-keyword">private</span> weth <span class="hljs-operator">=</span> IWETH(WETH);
    IERC20 <span class="hljs-keyword">private</span> dai <span class="hljs-operator">=</span> IERC20(DAI);
    IERC20 <span class="hljs-keyword">private</span> usdc <span class="hljs-operator">=</span> IERC20(USDC);

    UniswapV3SwapExamples <span class="hljs-keyword">private</span> uni <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> UniswapV3SwapExamples();

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testSingleHop</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        weth.deposit{<span class="hljs-built_in">value</span>: <span class="hljs-number">1e18</span>}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), <span class="hljs-number">1e18</span>);

        <span class="hljs-keyword">uint</span> amountOut <span class="hljs-operator">=</span> uni.swapExactInputSingleHop(WETH, DAI, <span class="hljs-number">3000</span>, <span class="hljs-number">1e18</span>);

        console.log(<span class="hljs-string">"DAI"</span>, amountOut);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testMultiHop</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        weth.deposit{<span class="hljs-built_in">value</span>: <span class="hljs-number">1e18</span>}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), <span class="hljs-number">1e18</span>);

        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> path <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(
            WETH,
            <span class="hljs-keyword">uint24</span>(<span class="hljs-number">3000</span>),
            USDC,
            <span class="hljs-keyword">uint24</span>(<span class="hljs-number">100</span>),
            DAI
        );

        <span class="hljs-keyword">uint</span> amountOut <span class="hljs-operator">=</span> uni.swapExactInputMultiHop(path, WETH, <span class="hljs-number">1e18</span>);

        console.log(<span class="hljs-string">"DAI"</span>, amountOut);
    }
}
</code></pre>
<ol start="2">
<li>Execute the following commands to run the test</li>
</ol>
<pre><code class="language-shell">FORK_URL=https://eth-mainnet.g.alchemy.com/v2/vtqCl_WPHwVu683HSlNFlL36pTaaWIJw
forge test -vv --gas-report --fork-url $FORK_URL --match-path test/UniswapV3SwapExamples.test.sol
</code></pre>
<h3 id="links">Links</h3>
<p><a href="https://docs.uniswap.org/protocol/guides/swaps/single-swaps" target="__blank">Uniswap V3</a></p>
<p><a href="https://github.com/foundry-rs/foundry" target="__blank">Foundry</a></p>
<p><a href="https://github.com/t4sk/defi-notes" target="__blank">Uniswap V3 Foundry example</a></p>
`

export default html
