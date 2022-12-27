// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "forge-std/Test.sol";
import "forge-std/console.sol";

import "../src/UniswapV3FlashSwap.sol";

contract UniswapV3FlashSwapTest is Test {
    address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address private constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;

    IWETH private weth = IWETH(WETH);

    UniswapV3FlashSwap private uni = new UniswapV3FlashSwap();

    function setUp() public {}

    function testFlashSwap() public {
        // USDC / WETH pool
        address pool0 = 0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8;
        uint24 fee0 = 3000;
        address pool1 = 0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640;
        uint24 fee1 = 500;

        // Approve WETH fee
        uint wethMaxFee = 1e18;
        weth.deposit{value: wethMaxFee}();
        weth.approve(address(uni), wethMaxFee);

        uint balBefore = weth.balanceOf(address(this));
        uni.flashSwap(pool0, fee1, WETH, USDC, 10 * 1e18);
        uint balAfter = weth.balanceOf(address(this));

        if (balAfter >= balBefore) {
            console.log("WETH profit", balAfter - balBefore);
        } else {
            console.log("WETH loss", balBefore - balAfter);
        }
    }
}
