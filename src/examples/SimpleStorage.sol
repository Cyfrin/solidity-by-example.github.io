```solidity
pragma solidity ^0.5.3;

// State variables are values which are permanently stored on the blockchain.

contract SimpleStorage {
    // State variables are declared here, inside the contract but outside the
    // functions.
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
```
