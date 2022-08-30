// metadata
export const version = "0.8.13"
export const title = "Uniswap V3 Liquidity Examples"
export const description = "Uniswap V3 liquidity examples"

const html = `<p>Examples of minting new position, collect fees, increase and decrease liquidity.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC721Receiver</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onERC721Received</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> operator,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">uint</span> tokenId,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3Liquidity</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC721Receiver</span> </span>{
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> dai <span class="hljs-operator">=</span> IERC20(DAI);
    IWETH <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> weth <span class="hljs-operator">=</span> IWETH(WETH);

    <span class="hljs-keyword">int24</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> MIN_TICK <span class="hljs-operator">=</span> <span class="hljs-number">-887272</span>;
    <span class="hljs-keyword">int24</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> MAX_TICK <span class="hljs-operator">=</span> <span class="hljs-operator">-</span>MIN_TICK;
    <span class="hljs-keyword">int24</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> TICK_SPACING <span class="hljs-operator">=</span> <span class="hljs-number">60</span>;

    INonfungiblePositionManager <span class="hljs-keyword">public</span> nonfungiblePositionManager <span class="hljs-operator">=</span>
        INonfungiblePositionManager(<span class="hljs-number">0xC36442b4a4522E871399CD717aBDD847Ab11FE88</span>);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onERC721Received</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> operator,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">uint</span> tokenId,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span>
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>) </span>{
        <span class="hljs-keyword">return</span> IERC721Receiver.onERC721Received.<span class="hljs-built_in">selector</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mintNewPosition</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> amount0ToAdd, <span class="hljs-keyword">uint</span> amount1ToAdd</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint</span> tokenId,
            <span class="hljs-keyword">uint128</span> liquidity,
            <span class="hljs-keyword">uint</span> amount0,
            <span class="hljs-keyword">uint</span> amount1
        </span>)
    </span>{
        dai.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount0ToAdd);
        weth.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount1ToAdd);

        dai.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), amount0ToAdd);
        weth.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), amount1ToAdd);

        INonfungiblePositionManager.MintParams
            <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> INonfungiblePositionManager.MintParams({
                token0: DAI,
                token1: WETH,
                fee: <span class="hljs-number">3000</span>,
                tickLower: (MIN_TICK <span class="hljs-operator">/</span> TICK_SPACING) <span class="hljs-operator">*</span> TICK_SPACING,
                tickUpper: (MAX_TICK <span class="hljs-operator">/</span> TICK_SPACING) <span class="hljs-operator">*</span> TICK_SPACING,
                amount0Desired: amount0ToAdd,
                amount1Desired: amount1ToAdd,
                amount0Min: <span class="hljs-number">0</span>,
                amount1Min: <span class="hljs-number">0</span>,
                recipient: <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>),
                deadline: <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
            });

        (tokenId, liquidity, amount0, amount1) <span class="hljs-operator">=</span> nonfungiblePositionManager.mint(
            params
        );

        <span class="hljs-keyword">if</span> (amount0 <span class="hljs-operator">&lt;</span> amount0ToAdd) {
            dai.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), <span class="hljs-number">0</span>);
            <span class="hljs-keyword">uint</span> refund0 <span class="hljs-operator">=</span> amount0ToAdd <span class="hljs-operator">-</span> amount0;
            dai.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, refund0);
        }
        <span class="hljs-keyword">if</span> (amount1 <span class="hljs-operator">&lt;</span> amount1ToAdd) {
            weth.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), <span class="hljs-number">0</span>);
            <span class="hljs-keyword">uint</span> refund1 <span class="hljs-operator">=</span> amount1ToAdd <span class="hljs-operator">-</span> amount1;
            weth.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, refund1);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">collectAllFees</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> tokenId</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amount0, <span class="hljs-keyword">uint</span> amount1</span>)
    </span>{
        INonfungiblePositionManager.CollectParams
            <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> INonfungiblePositionManager.CollectParams({
                tokenId: tokenId,
                recipient: <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>),
                amount0Max: <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint128</span>).<span class="hljs-built_in">max</span>,
                amount1Max: <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint128</span>).<span class="hljs-built_in">max</span>
            });

        (amount0, amount1) <span class="hljs-operator">=</span> nonfungiblePositionManager.collect(params);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">increaseLiquidityCurrentRange</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> tokenId,
        <span class="hljs-keyword">uint</span> amount0ToAdd,
        <span class="hljs-keyword">uint</span> amount1ToAdd
    </span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint128</span> liquidity,
            <span class="hljs-keyword">uint</span> amount0,
            <span class="hljs-keyword">uint</span> amount1
        </span>)
    </span>{
        dai.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount0ToAdd);
        weth.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount1ToAdd);

        dai.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), amount0ToAdd);
        weth.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), amount1ToAdd);

        INonfungiblePositionManager.IncreaseLiquidityParams
            <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> INonfungiblePositionManager.IncreaseLiquidityParams({
                tokenId: tokenId,
                amount0Desired: amount0ToAdd,
                amount1Desired: amount1ToAdd,
                amount0Min: <span class="hljs-number">0</span>,
                amount1Min: <span class="hljs-number">0</span>,
                deadline: <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
            });

        (liquidity, amount0, amount1) <span class="hljs-operator">=</span> nonfungiblePositionManager.increaseLiquidity(
            params
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">decreaseLiquidityCurrentRange</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> tokenId, <span class="hljs-keyword">uint128</span> liquidity</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amount0, <span class="hljs-keyword">uint</span> amount1</span>)
    </span>{
        INonfungiblePositionManager.DecreaseLiquidityParams
            <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> INonfungiblePositionManager.DecreaseLiquidityParams({
                tokenId: tokenId,
                liquidity: liquidity,
                amount0Min: <span class="hljs-number">0</span>,
                amount1Min: <span class="hljs-number">0</span>,
                deadline: <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
            });

        (amount0, amount1) <span class="hljs-operator">=</span> nonfungiblePositionManager.decreaseLiquidity(params);
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">INonfungiblePositionManager</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">MintParams</span> {
        <span class="hljs-keyword">address</span> token0;
        <span class="hljs-keyword">address</span> token1;
        <span class="hljs-keyword">uint24</span> fee;
        <span class="hljs-keyword">int24</span> tickLower;
        <span class="hljs-keyword">int24</span> tickUpper;
        <span class="hljs-keyword">uint</span> amount0Desired;
        <span class="hljs-keyword">uint</span> amount1Desired;
        <span class="hljs-keyword">uint</span> amount0Min;
        <span class="hljs-keyword">uint</span> amount1Min;
        <span class="hljs-keyword">address</span> recipient;
        <span class="hljs-keyword">uint</span> deadline;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mint</span>(<span class="hljs-params">MintParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint</span> tokenId,
            <span class="hljs-keyword">uint128</span> liquidity,
            <span class="hljs-keyword">uint</span> amount0,
            <span class="hljs-keyword">uint</span> amount1
        </span>)</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">IncreaseLiquidityParams</span> {
        <span class="hljs-keyword">uint</span> tokenId;
        <span class="hljs-keyword">uint</span> amount0Desired;
        <span class="hljs-keyword">uint</span> amount1Desired;
        <span class="hljs-keyword">uint</span> amount0Min;
        <span class="hljs-keyword">uint</span> amount1Min;
        <span class="hljs-keyword">uint</span> deadline;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">increaseLiquidity</span>(<span class="hljs-params">IncreaseLiquidityParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint128</span> liquidity,
            <span class="hljs-keyword">uint</span> amount0,
            <span class="hljs-keyword">uint</span> amount1
        </span>)</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">DecreaseLiquidityParams</span> {
        <span class="hljs-keyword">uint</span> tokenId;
        <span class="hljs-keyword">uint128</span> liquidity;
        <span class="hljs-keyword">uint</span> amount0Min;
        <span class="hljs-keyword">uint</span> amount1Min;
        <span class="hljs-keyword">uint</span> deadline;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">decreaseLiquidity</span>(<span class="hljs-params">DecreaseLiquidityParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amount0, <span class="hljs-keyword">uint</span> amount1</span>)</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">CollectParams</span> {
        <span class="hljs-keyword">uint</span> tokenId;
        <span class="hljs-keyword">address</span> recipient;
        <span class="hljs-keyword">uint128</span> amount0Max;
        <span class="hljs-keyword">uint128</span> amount1Max;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">collect</span>(<span class="hljs-params">CollectParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amount0, <span class="hljs-keyword">uint</span> amount1</span>)</span>;
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

<span class="hljs-keyword">import</span> <span class="hljs-string">"../src/UniswapV3Liquidity.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3LiquidityTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    IWETH <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> weth <span class="hljs-operator">=</span> IWETH(WETH);
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> dai <span class="hljs-operator">=</span> IERC20(DAI);

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> DAI_WHALE <span class="hljs-operator">=</span> <span class="hljs-number">0xe81D6f03028107A20DBc83176DA82aE8099E9C42</span>;

    UniswapV3Liquidity <span class="hljs-keyword">private</span> uni <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> UniswapV3Liquidity();

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        vm.prank(DAI_WHALE);
        dai.<span class="hljs-built_in">transfer</span>(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), <span class="hljs-number">20</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>);

        weth.deposit{<span class="hljs-built_in">value</span>: <span class="hljs-number">2</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>}();

        dai.approve(<span class="hljs-keyword">address</span>(uni), <span class="hljs-number">20</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>);
        weth.approve(<span class="hljs-keyword">address</span>(uni), <span class="hljs-number">2</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testLiquidity</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Track total liquidity</span>
        <span class="hljs-keyword">uint128</span> liquidity;

        <span class="hljs-comment">// Mint new position</span>
        <span class="hljs-keyword">uint</span> daiAmount <span class="hljs-operator">=</span> <span class="hljs-number">10</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
        <span class="hljs-keyword">uint</span> wethAmount <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;

        (<span class="hljs-keyword">uint</span> tokenId, <span class="hljs-keyword">uint128</span> liquidityDelta, <span class="hljs-keyword">uint</span> amount0, <span class="hljs-keyword">uint</span> amount1) <span class="hljs-operator">=</span> uni
            .mintNewPosition(daiAmount, wethAmount);
        liquidity <span class="hljs-operator">+</span><span class="hljs-operator">=</span> liquidityDelta;

        console.log(<span class="hljs-string">"--- Mint new position ---"</span>);
        console.log(<span class="hljs-string">"token id"</span>, tokenId);
        console.log(<span class="hljs-string">"liquidity"</span>, liquidity);
        console.log(<span class="hljs-string">"amount 0"</span>, amount0);
        console.log(<span class="hljs-string">"amount 1"</span>, amount1);

        <span class="hljs-comment">// Collect fees</span>
        (<span class="hljs-keyword">uint</span> fee0, <span class="hljs-keyword">uint</span> fee1) <span class="hljs-operator">=</span> uni.collectAllFees(tokenId);

        console.log(<span class="hljs-string">"--- Collect fees ---"</span>);
        console.log(<span class="hljs-string">"fee 0"</span>, fee0);
        console.log(<span class="hljs-string">"fee 1"</span>, fee1);

        <span class="hljs-comment">// Increase liquidity</span>
        <span class="hljs-keyword">uint</span> daiAmountToAdd <span class="hljs-operator">=</span> <span class="hljs-number">5</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
        <span class="hljs-keyword">uint</span> wethAmountToAdd <span class="hljs-operator">=</span> <span class="hljs-number">0</span><span class="hljs-number">.5</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;

        (liquidityDelta, amount0, amount1) <span class="hljs-operator">=</span> uni.increaseLiquidityCurrentRange(
            tokenId,
            daiAmountToAdd,
            wethAmountToAdd
        );
        liquidity <span class="hljs-operator">+</span><span class="hljs-operator">=</span> liquidityDelta;

        console.log(<span class="hljs-string">"--- Increase liquidity ---"</span>);
        console.log(<span class="hljs-string">"liquidity"</span>, liquidity);
        console.log(<span class="hljs-string">"amount 0"</span>, amount0);
        console.log(<span class="hljs-string">"amount 1"</span>, amount1);

        <span class="hljs-comment">// Decrease liquidity</span>
        (amount0, amount1) <span class="hljs-operator">=</span> uni.decreaseLiquidityCurrentRange(tokenId, liquidity);
        console.log(<span class="hljs-string">"--- Decrease liquidity ---"</span>);
        console.log(<span class="hljs-string">"amount 0"</span>, amount0);
        console.log(<span class="hljs-string">"amount 1"</span>, amount1);
    }
}
</code></pre>
<pre><code class="language-shell">FORK_URL=https://eth-mainnet.g.alchemy.com/v2/613t3mfjTevdrCwDl28CVvuk6wSIxRPi
forge test -vv --gas-report --fork-url $FORK_URL --match-path test/UniswapV3Liquidity.test.sol
</code></pre>
<h3 id="links">Links</h3>
<p><a href="https://docs.uniswap.org/protocol/guides/providing-liquidity/setting-up" target="__blank">Uniswap V3</a></p>
<p><a href="https://github.com/foundry-rs/foundry" target="__blank">Foundry</a></p>
<p><a href="https://github.com/t4sk/defi-notes" target="__blank">Uniswap V3 Foundry example</a></p>
`

export default html
