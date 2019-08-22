const html = `<p>Variables declared inside the contract but outside functions are stored on the blockchain.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.3;

contract SimpleStorage {
    // This varaible will be stored on the blockchain.
    string public text;

    function doSomething() public {
        // This variable will not be stored on the blockchain.
        string text = "Test";
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
