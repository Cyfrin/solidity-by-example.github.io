// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Test, console2} from "forge-std/Test.sol";
import "../../../src/defi/uniswap-v3-flash/UniswapV3Flash.sol";

contract UniswapV3FlashTest is Test {
    address constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    // DAI / WETH 0.3% fee
    address constant POOL = 0xC2e9F25Be6257c210d7Adf0D4Cd6E3E881ba25f8;
    uint24 constant POOL_FEE = 3000;

    IERC20 private constant weth = IERC20(WETH);
    IERC20 private constant dai = IERC20(DAI);
    UniswapV3Flash private uni;
    address constant user = address(11);

    function setUp() public {
        uni = new UniswapV3Flash(POOL);

        deal(DAI, user, 1e6 * 1e18);
        vm.prank(user);
        dai.approve(address(uni), type(uint256).max);
    }

    function test_flash() public {
        uint256 dai_before = dai.balanceOf(user);
        vm.prank(user);
        uni.flash(1e6 * 1e18, 0);
        uint256 dai_after = dai.balanceOf(user);

        uint256 fee = dai_before - dai_after;
        console2.log("DAI fee", fee);
    }
}
