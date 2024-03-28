// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test, console2} from "forge-std/Test.sol";
import "../../../src/defi/uniswap-v3-swap/UniswapV3SingleHopSwap.sol";

contract UniswapV3SingleHopSwapTest is Test {
    address private constant SWAP_ROUTER_02 =
        0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45;
    address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address private constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address private constant DAI_WETH_POOL_3000 =
        0xC2e9F25Be6257c210d7Adf0D4Cd6E3E881ba25f8;

    IWETH private constant weth = IWETH(WETH);
    IERC20 private constant dai = IERC20(DAI);

    UniswapV3SingleHopSwap private swap;

    uint256 private constant AMOUNT_IN = 1e18;
    uint256 private constant AMOUNT_OUT = 50 * 1e18;
    uint256 private constant MAX_AMOUNT_IN = 1e18;

    function setUp() public {
        swap = new UniswapV3SingleHopSwap();
        weth.deposit{value: AMOUNT_IN + MAX_AMOUNT_IN}();
        weth.approve(address(swap), type(uint256).max);
    }

    function test_swapExactInputSingleHop() public {
        swap.swapExactInputSingleHop(AMOUNT_IN, 1);
        uint256 d1 = dai.balanceOf(address(this));
        assertGt(d1, 0, "DAI balance = 0");
    }

    function test_swapExactOutputSingleHop() public {
        uint256 w0 = weth.balanceOf(address(this));
        uint256 d0 = dai.balanceOf(address(this));
        swap.swapExactOutputSingleHop(AMOUNT_OUT, MAX_AMOUNT_IN);
        uint256 w1 = weth.balanceOf(address(this));
        uint256 d1 = dai.balanceOf(address(this));

        assertLt(w1, w0, "WETH balance didn't decrease");
        assertGt(d1, d0, "DAI balance didn't increase");
        assertEq(weth.balanceOf(address(swap)), 0, "WETH balance of swap != 0");
        assertEq(dai.balanceOf(address(swap)), 0, "DAI balance of swap != 0");
    }
}
