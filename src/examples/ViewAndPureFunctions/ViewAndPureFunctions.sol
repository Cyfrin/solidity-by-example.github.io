pragma solidity ^0.5.1;

contract ViewAndPure {
    uint public x = 1;

    // Promise not to modify the state.
    function increment(uint a) public view returns (uint) {
        return x + a;
    }

    // Promise not to read from or modify the state.
    function add(uint a, uint b) public pure returns (uint) {
        return a + b;
    }
}
