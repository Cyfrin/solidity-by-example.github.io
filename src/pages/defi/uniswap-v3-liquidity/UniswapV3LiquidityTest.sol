// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Test, console2} from "forge-std/Test.sol";
import "../../../src/defi/uniswap-v3-liquidity/UniswapV3Liquidity.sol";

contract UniswapV3LiquidityTest is Test {
    IWETH private constant weth = IWETH(WETH);
    IERC20 private constant dai = IERC20(DAI);

    address private constant DAI_WHALE =
        0xe81D6f03028107A20DBc83176DA82aE8099E9C42;

    UniswapV3Liquidity private uni = new UniswapV3Liquidity();

    function setUp() public {
        vm.prank(DAI_WHALE);
        dai.transfer(address(this), 20 * 1e18);

        weth.deposit{value: 2 * 1e18}();

        dai.approve(address(uni), 20 * 1e18);
        weth.approve(address(uni), 2 * 1e18);
    }

    function testLiquidity() public {
        // Track total liquidity
        uint128 liquidity;

        // Mint new position
        uint256 daiAmount = 10 * 1e18;
        uint256 wethAmount = 1e18;

        (
            uint256 tokenId,
            uint128 liquidityDelta,
            uint256 amount0,
            uint256 amount1
        ) = uni.mintNewPosition(daiAmount, wethAmount);
        liquidity += liquidityDelta;

        console2.log("--- Mint new position ---");
        console2.log("token id", tokenId);
        console2.log("liquidity", liquidity);
        console2.log("amount 0", amount0);
        console2.log("amount 1", amount1);

        // Collect fees
        (uint256 fee0, uint256 fee1) = uni.collectAllFees(tokenId);

        console2.log("--- Collect fees ---");
        console2.log("fee 0", fee0);
        console2.log("fee 1", fee1);

        // Increase liquidity
        uint256 daiAmountToAdd = 5 * 1e18;
        uint256 wethAmountToAdd = 0.5 * 1e18;

        (liquidityDelta, amount0, amount1) = uni.increaseLiquidityCurrentRange(
            tokenId, daiAmountToAdd, wethAmountToAdd
        );
        liquidity += liquidityDelta;

        console2.log("--- Increase liquidity ---");
        console2.log("liquidity", liquidity);
        console2.log("amount 0", amount0);
        console2.log("amount 1", amount1);

        // Decrease liquidity
        (amount0, amount1) =
            uni.decreaseLiquidityCurrentRange(tokenId, liquidity);
        console2.log("--- Decrease liquidity ---");
        console2.log("amount 0", amount0);
        console2.log("amount 1", amount1);
    }
}
