const html = `<p>Solidity supports multiple inheritance. Order of inheritance is important.</p>
<p>Let&#39;s examine.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.3;

contract A {
    function foo() public view returns (string memory) {
        return "A";
    }
}

// Contracts can inherit other contracts by using the keyword &#39;is&#39;.
contract B is A {
    // Override A.foo()
    function foo() public view returns (string memory) {
        return "B";
    }
}

contract C is A {
    // Override A.foo()
    function foo() public view returns (string memory) {
        return "C";
    }
}

// Contracts can inherit from multiple parent contracts.
contract D is B, C {
    // When a function is called that is defined multiple times in
    // different contracts, parent contracts are searched from
    // right to left.

    // D.foo() returns "C"
}

contract E is C, B {
    // E.foo() returns "B"
}

// Inheritance must be ordered from “most base-like” to “most derived”.
// Swapping the order of A and B will throw a compilation error.
contract F is A, B {
}
</code></pre>
`

export default html
