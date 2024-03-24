// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test, console2} from "forge-std/Test.sol";
import {
    UniswapV3FlashSwap,
    IUniswapV3Pool,
    ISwapRouter02,
    IERC20,
    IWETH
} from "../../../src/defi/uniswap-v3-flash-swap/UniswapV3FlashSwap.sol";

address constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
address constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
address constant SWAP_ROUTER_02 = 0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45;
address constant DAI_WETH_POOL_3000 = 0xC2e9F25Be6257c210d7Adf0D4Cd6E3E881ba25f8;
address constant DAI_WETH_POOL_500 = 0x60594a405d53811d3BC4766596EFD80fd545A270;
uint24 constant FEE_0 = 3000;
uint24 constant FEE_1 = 500;

contract UniswapV3FlashTest is Test {
    IERC20 private constant dai = IERC20(DAI);
    IWETH private constant weth = IWETH(WETH);
    ISwapRouter02 private constant router = ISwapRouter02(SWAP_ROUTER_02);
    IUniswapV3Pool private constant pool0 = IUniswapV3Pool(DAI_WETH_POOL_3000);
    IUniswapV3Pool private constant pool1 = IUniswapV3Pool(DAI_WETH_POOL_500);
    UniswapV3FlashSwap private flashSwap;

    uint256 private constant DAI_AMOUNT_IN = 10 * 1e18;

    function setUp() public {
        flashSwap = new UniswapV3FlashSwap();

        // Create an arbitrage opportunity - make WETH cheaper on pool0
        weth.deposit{value: 500 * 1e18}();
        weth.approve(address(router), 500 * 1e18);
        router.exactInputSingle(
            ISwapRouter02.ExactInputSingleParams({
                tokenIn: WETH,
                tokenOut: DAI,
                fee: FEE_0,
                recipient: address(0),
                amountIn: 500 * 1e18,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            })
        );
    }

    function test_flashSwap() public {
        uint256 bal0 = dai.balanceOf(address(this));
        flashSwap.flashSwap({
            pool0: address(pool0),
            fee1: FEE_1,
            tokenIn: DAI,
            tokenOut: WETH,
            amountIn: DAI_AMOUNT_IN
        });
        uint256 bal1 = dai.balanceOf(address(this));
        uint256 profit = bal1 - bal0;
        assertGt(profit, 0, "profit = 0");
        console2.log("Profit %e", profit);
    }
}
