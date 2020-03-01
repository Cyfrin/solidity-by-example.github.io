const html = `<p>Variables stored on the blockchain are called <code>state variables</code>.</p>
<p><code>State variables</code> are declared inside a contract, but outside functions.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

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
    // Actually we don&#39;t need this function. The compiler automatically
    // creates getter functions for all public variables.
    function get() public view returns (string memory) {
        return text;
    }
}
</code></pre>
`

export default html
