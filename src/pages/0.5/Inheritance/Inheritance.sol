pragma solidity ^0.5.16;

contract A {
    function foo() public pure returns (string memory) {
        return "A";
    }
}

// Contracts can inherit other contracts by using the keyword 'is'.
contract B is A {
    // Override A.foo()
    function foo() public pure returns (string memory) {
        return "B";
    }
}

contract C is A {
    // Override A.foo()
    function foo() public pure returns (string memory) {
        return "C";
    }
}

// Contracts can inherit from multiple parent contracts.
// When a function is called that is defined multiple times in
// different contracts, parent contracts are searched from
// right to left, and in depth-first manner.

contract D is B, C {
    // D.foo() returns "C"
    // since C is the right most parent contract with function foo()
}

contract E is C, B {
    // E.foo() returns "B"
    // since B is the right most parent contract with function foo()
}

// Inheritance must be ordered from “most base-like” to “most derived”.
// Swapping the order of A and B will throw a compilation error.
contract F is A, B {
}
