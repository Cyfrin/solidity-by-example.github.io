// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract FallbackWithData {
    address immutable target;

    event Log(bytes res);

    constructor(address _target) {
        target = _target;
    }

    fallback(bytes calldata data) external payable returns (bytes memory) {
        (bool ok, bytes memory res) = target.call{value: msg.value}(data);
        require(ok, "call failed");

        emit Log(res);

        return res;
    }
}

contract TestFallback {
    function test() external payable returns (uint) {
        return 0xFFFFFFFFFFFFF;
    }

    function getTestData() external view returns (bytes memory) {
        return abi.encodeCall(this.test, ());
    }
}
