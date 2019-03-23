pragma solidity ^0.5.1;

contract Function {
    uint counter;

    // This function costs Ether.
    function increment(uint i) public {
        counter += i;
    }

    // This function is free when it is called from an account.
    function add(uint i, uint j) public pure returns (uint) {
        return i + j;
    }

    // Functions can return multiple values.
    function returnMultipleVals() public pure returns (uint, uint) {
        return (1, 2);
    }

    // Return values can be named. This is useful when a contract
    // interacts with web3.js where you can access the returned
    // values by name instead of the returned order.
    function named() public pure returns (uint x, uint y) {
        return (1, 2);
    }

    // Return values can be assigned to their name.
    // In this case the return statement can be omitted;
    function assigned() public pure returns (uint x, uint y) {
        x = 1;
        y = 2;
    }

    // Use destructing assignment when calling another
    // function that returns multiple values.
    function destructingAssigments() public pure returns (uint) {
        (uint x, uint y) = (1, 2);
        // Values can be left out.
        (uint a, , uint b) = (4, 5, 6);
        (uint i,) =  returnMultipleVals();

        return x + y + a + b + i;
    }
}
