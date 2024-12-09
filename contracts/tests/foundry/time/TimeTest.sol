// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "forge-std/Test.sol";

contract TimeTest is Test {
    // vm.warp - set block.timestamp to future timestamp
    // vm.roll - set block.number
    // skip - increment current timestamp
    // rewind - decrement current timestamp

    function test() public {
        console.log("timestamp", block.timestamp);
        console.log("block number", block.number);

        console.log("warp");
        vm.warp(block.timestamp + 10);
        console.log("timestamp", block.timestamp);

        console.log("skip");
        skip(10);
        console.log("timestamp", block.timestamp);

        console.log("roll");
        vm.roll(10);
        console.log("block number", block.number);

        console.log("rewind");
        rewind(10);
        console.log("timestamp", block.timestamp);
    }
}
