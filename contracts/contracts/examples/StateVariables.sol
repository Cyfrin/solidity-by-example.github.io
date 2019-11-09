pragma solidity ^0.5.11;

contract SimpleStorage {
    // These varaibles will be stored on the blockchain.
    string public text = "Hello";
    uint public i = 123;

    function doSomething() public {
        // These variables will not be stored on the blockchain.
        string memory text = "Test";
        uint i = 456;
    }

    // Function to set text.
    function set(string memory _text) public {
        text = _text;
    }

    // Function to get text.
    // Actually we don't need this function. The compiler automatically
    // creates getter functions for all public variables.
    function get() public view returns (string memory) {
        return text;
    }
}
