pragma solidity ^0.5.1;

contract SimpleStorage {
    // Variables declared here, inside the contract but outside the
    // functions will be stored on the blockchain.
    string public text;

    // Function to get text.
    function get() public view returns (string memory) {
        return text;
    }
    // Actually we don't need the function above. The compiler automatically
    // creates getter functions for all public state variables.
    // The compiler will create a function called text().

    // Function to set text.
    function set(string memory _text) public {
        text = _text;
    }
}
