// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "forge-std/Test.sol";

contract Error {
    error NotAuthorized();

    function throwError() external {
        require(false, "not authorized");
    }

    function throwCustomError() external {
        revert NotAuthorized();
    }
}

contract ErrorTest is Test {
    Error public err;

    function setUp() public {
        err = new Error();
    }

    // Start test name with testFail
    function testFail() public {
        err.throwError();
    }

    function testRevert() public {
        vm.expectRevert();
        err.throwError();
    }

    function testRequireMessage() public {
        vm.expectRevert(bytes("not authorized"));
        err.throwError();
    }

    function testCustomError() public {
        vm.expectRevert(Error.NotAuthorized.selector);
        err.throwCustomError();
    }

    // Add label to assertions
    function testErrorLabel() public {
        assertEq(uint256(1), uint256(1), "test 1");
        assertEq(uint256(1), uint256(1), "test 2");
        assertEq(uint256(1), uint256(1), "test 3");
    }
}
