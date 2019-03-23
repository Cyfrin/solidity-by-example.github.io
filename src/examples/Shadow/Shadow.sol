pragma solidity ^0.5.1;

contract A {
    string public name = "Contract A";

    function getName() public view returns (string memory) {
        return name;
    }
}

contract B is A {
    // This is the incorrect way to override inherited state variables.
    string public name = "Contract B";

    // B.getName returns "Contract A"

    // Functions defined in contract A that use the 'name' state variable
    // will access A.name. Functions defined in B that uses 'name' will
    // access B.name.
}

contract C is A {
    // This is the correct way to override inherited state variables.
    constructor() public {
        name = "Contract C";
    }

    // C.getName returns "Contract C"
}
