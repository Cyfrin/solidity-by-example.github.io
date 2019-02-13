const html = `<p>State variables are variables which are permanently stored on the blockchain.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.3;

contract SimpleStorage {
    // Variables declared here, inside the contract but outside the
    // functions will be stored on the blockchain.
    string public text;

    // Function to get text.
    function get() public view returns (string memory) {
        return text;
    }
    // Actually we don&#39;t need the function above. The compiler automatically
    // creates getter functions for all public state variables.
    // The compiler will create a function called text().

    // Function to set text.
    function set(string memory _text) public {
        text = _text;
    }
}
</code></pre>
`

export default html
