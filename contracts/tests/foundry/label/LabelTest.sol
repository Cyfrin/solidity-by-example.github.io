// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "forge-std/Test.sol";

address constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

interface IERC20 {
    function balanceOf(address) external view returns (uint256);
}

contract LabelTest is Test {
    IERC20 weth;

    function setUp() public {
        weth = IERC20(WETH);
        // Label address with "WETH", this will be displayed in stack traces
        vm.label(WETH, "WETH");
    }

    function test() public {
        console.log("%e", weth.balanceOf(address(this)));
    }
}
