// metadata
export const version = "0.6.10"
export const title = "Inheritance"
export const description = "Example of inheritance in Solidity"

const html = `<p>Solidity supports multiple inheritance. Contracts can inherit other contract by using the <code>is</code> keyword.</p>
<p>Function that is going to be overridden by a child contract must be declared as <code>virtual</code>.</p>
<p>Function that is going to override a parent function must use the keyword <code>override</code>.</p>
<p>Order of inheritance is important.</p>
<p>You have to list the parent contracts in the order from “most base-like” to “most derived”.</p>
<pre><code class="language-solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

/* Graph of inheritance
    A
   / \\
  B   C
 / \\ /
F  D,E

*/

contract A {
    function foo() public pure virtual returns (string memory) {
        return "A";
    }
}

// Contracts inherit other contracts by using the keyword &#39;is&#39;.
contract B is A {
    // Override A.foo()
    function foo() public pure virtual override returns (string memory) {
        return "B";
    }
}

contract C is A {
    // Override A.foo()
    function foo() public pure virtual override returns (string memory) {
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
    function foo() public pure override(B, C) returns (string memory) {
        return super.foo();
    }
}

contract E is C, B {
    // E.foo() returns "B"
    // since B is the right most parent contract with function foo()
    function foo() public pure override(C, B) returns (string memory) {
        return super.foo();
    }
}

// Inheritance must be ordered from “most base-like” to “most derived”.
// Swapping the order of A and B will throw a compilation error.
contract F is A, B {
    function foo() public pure override(A, B) returns (string memory) {
        return super.foo();
    }
}
</code></pre>
`

export default html
