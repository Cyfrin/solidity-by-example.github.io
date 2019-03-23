pragma solidity ^0.5.1;

contract FallbackGasLimit {
    event BurnGas(uint gasLeft);

    // Try:
    // Send ether to this contract from an account. This should succeed.
    function () external payable {
        // Use up gas by emitting events, logging the remaining gas
        // on each iteration.
        for (uint i = 0; i < 10; i++) {
            emit BurnGas(gasleft());
        }
    }
}

contract TestFallbackGasLimit {
    // Try:
    // Execute this function. This function will fail since
    // the fallback function of FallbackGasLimit is only allowed to use 2300 gas.
    function test(FallbackGasLimit fallback) public {
        address(fallback).transfer(0 ether);
    }
}
