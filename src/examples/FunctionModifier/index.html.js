const html = `<p>Modifiers are code that can be run before and / or after a function call.</p>
<p>Modifiers can be used to:</p>
<ul>
<li>Validate inputs</li>
<li>Check contract state</li>
<li>Restrict access</li>
</ul>
<pre><code class="language-solidity">pragma solidity ^0.5.1;

contract Modifier {
    // We will use these variables to demonstrate how to use
    // modifiers.
    uint public x;
    address public owner;

    constructor() public {
        // Set the owner of the contract.
        owner = msg.sender;
    }

    // Modifier to check that the caller is the owner of
    // the contract.
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        // Execute the function if the validation above passes.
        _;
    }

    // Modifiers can take inputs. This modifier checks that the
    // address passed in is not the zero address.
    modifier validAddress(address addr) {
        require(addr != address(0), "Invalid address");
        _;
    }

    // Modifiers can be run before and / or after the function.
    modifier sandwich() {
        x += 1;
        _;
        x += 1;
    }

    // You can attach multiple modifiers to a function.
    // In this case the two modifiers onlyOwner and validAddress
    // will be executed before this function.
    // Try:
    // - call this function from an account that did not create
    //   this contract
    // - call this function with the zero address:
    //   0x0000000000000000000000000000000000000000
    // Both cases will throw an error.
    function changeOwner(address newOwner)
        onlyOwner
        validAddress(newOwner)
        public
    {
        owner = newOwner;
    }

    // The modifier &#39;sandwich&#39; executes code before and after
    // this function. As a result, &#39;x&#39; will be incremented by 3.
    function callMe() sandwich public {
        x += 1;
    }
}
</code></pre>
`

export default html
