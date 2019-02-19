const html = `<p>A <code>constructor</code> is an optional function that is executed upon contract creation.</p>
<p>Here are examples of how to pass arguments to parent <code>constructors</code>.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.1;

contract A {
    string public name;

    constructor(string memory _name) public {
        name = _name;
    }
}

// There are 2 ways to initialize parent contract with parameters.

// Pass the parameters here in the inheritance list.
contract B is A("Contract B") {
}

contract C is A {
    // Pass the parameters here in the constructor, similar to modifiers.
    constructor(string memory _name) A(_name) public {
    }
}
</code></pre>
`

export default html
