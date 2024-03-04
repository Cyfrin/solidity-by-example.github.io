// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract TestMultiCall {
    function test(uint256 _i) external pure returns (uint256) {
        return _i;
    }

    function getData(uint256 _i) external pure returns (bytes memory) {
        return abi.encodeWithSelector(this.test.selector, _i);
    }
}
