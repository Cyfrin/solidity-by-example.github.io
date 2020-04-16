pragma solidity ^0.5.16;

contract Variables {
    // State varaibles are stored on the blockchain.
    string public text = "Hello";
    uint public num = 123;

    function doSomething() public {
        // Local variables are not saved to the blockchain.
        uint i = 456;

        // Here are some global variables
        uint timestamp = block.timestamp; // Current block timestamp
        address sender = msg.sender; // address of the caller
    }

    // Writing to a state variable will cost you transaction fee
    function set(uint _num) public {
        num = _num;
    }

    // Reading from a state varaible will not cost you any transaction fee.

    // Actually we don't need this function. The compiler automatically
    // creates getter functions for all public variables.
    function get() public view returns (uint) {
        return num;
    }
}
