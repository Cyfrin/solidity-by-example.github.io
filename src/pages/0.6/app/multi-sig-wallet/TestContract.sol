// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

contract TestContract {
    uint public i;

    function callMe(uint j) public {
        i += j;
    }

    function getData() public view returns (bytes memory) {
        return abi.encodeWithSignature("callMe(uint256)", 123);
    }
}
