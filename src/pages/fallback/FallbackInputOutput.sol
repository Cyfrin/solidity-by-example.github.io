pragma solidity ^0.8.17;

// TestFallbackInputOutput -> FallbackInputOutput -> Counter
contract FallbackInputOutput {
    address immutable target;

    constructor(address _target) {
        target = _target;
    }

    fallback(bytes calldata data) external payable returns (bytes memory) {
        (bool ok, bytes memory res) = target.call{value: msg.value}(data);
        require(ok, "call failed");
        return res;
    }
}

contract Counter {
    uint public count;

    function get() external view returns (uint) {
        return count;
    }

    function inc() external returns (uint) {
        count += 1;
        return count;
    }
}

contract TestFallbackInputOutput {
    event Log(bytes res);

    function test(address _fallback, bytes calldata data) external {
        (bool ok, bytes memory res) = _fallback.call(data);
        require(ok, "call failed");
        emit Log(res);
    }

    function getTestData() external pure returns (bytes memory, bytes memory) {
        return (abi.encodeCall(Counter.get, ()), abi.encodeCall(Counter.inc, ()));
    }
}
