// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "forge-std/Test.sol";

// Examples of deal and hoax
// deal(address, uint) - Set ETH balance of address
// deal(address, address, uint256) - Sets ERC20 token balance (works for most tokens)
// hoax(address, uint) - deal + prank

contract ERC20 {
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
}

contract SendTest is Test {
    ERC20 token = new ERC20();

    function testSendEth() public {
        // Set ETH balance
        deal(address(1), 100);
        assertEq(address(1).balance, 100);

        // Set ERC20 balance
        deal(address(token), address(1), 10);
        assertEq(token.balanceOf(address(1)), 10);
    }
}
