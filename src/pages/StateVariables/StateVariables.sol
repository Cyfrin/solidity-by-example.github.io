pragma solidity ^0.5.16;

contract SimpleStorage {
    // State variable to store a number
    uint public num;

    // You need to send a transaction to write to a state variable.
    function set(uint _num) public {
        num = _num;
    }

    // You can read from a state varaible without sending a transaction.
    // Actually we don't need this function. The compiler automatically
    // creates getter functions for all public variables.
    function get() public view returns (uint) {
        return num;
    }
}
