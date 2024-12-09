// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {Test, console2, stdError} from "forge-std/Test.sol";

contract Counter {
    uint256 public count;

    function inc() external {
        count += 1;
    }

    function dec() external {
        count -= 1;
    }
}

contract CounterTest is Test {
    Counter public counter;

    // Invoked before each test
    function setUp() public {
        counter = new Counter();
    }

    function testInc() public {
        counter.inc();
        assertEq(counter.count(), 1);
    }

    function testFailDec() public {
        // This will fail with underflow
        counter.dec();
    }

    // Same as testFailDec
    function testDecUnderflow() public {
        vm.expectRevert(stdError.arithmeticError);
        counter.dec();
    }

    function testDec() public {
        counter.inc();
        counter.inc();
        counter.dec();
        assertEq(counter.count(), 1);
    }
}
