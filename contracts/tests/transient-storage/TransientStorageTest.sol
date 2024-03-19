// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test, console2} from "forge-std/Test.sol";
import {
    TransientStorage,
    Counter
} from "../../src/transient-storage/TransientStorage.sol";

contract TransientStorageTest is Test {
    TransientStorage private transient;
    Counter private counter;

    function setUp() public {
        transient = new TransientStorage();
        counter = new Counter();
    }

    // gas: 27911
    function test_transient() public {
        transient.inc();
    }

    // gas: 35784
    function test_counter() public {
        counter.inc();
    }
}
