// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {Test, console2, stdError} from "forge-std/Test.sol";

contract Auth {
	address public owner;

	constructor() {
		owner = msg.sender;
	}

	function setOwner(address _owner) external {
		require(msg.sender == owner, "not authorized");
		owner = _owner;
	}
}

contract AuthTest is Test {
	Auth private auth;

	function setUp() public {
		// owner = this contract
		auth = new Auth();
	}

	function testSetOwner() public {
        auth.setOwner(address(1));
        assertEq(auth.owner(), address(1));
    }

    function testFailNotOwner() public {
        // Next call will be called by address(1)
        vm.prank(address(1));
        auth.setOwner(address(1));
    }
}
