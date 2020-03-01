pragma solidity ^0.5.16;

contract Loop {
    uint public count;

    // This is a demonstration of transaction gas limit.
    // Try:
    // Set the gas limit to 100000 and loop(100).
    // It should throw an error after spending all the gas.
    function loop(uint n) public returns (uint) {
        for (uint i = 0; i < n; i++) {
            count++;
        }

        return count;
    }
}
