// metadata
export const version = "0.5.16"
export const title = "First Application"
export const description = "Example of smart contract in Solidity"

const html = `<p>Here is a simple contract that you can get, increment and decrement the count store in this contract.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

contract Counter {
    uint public count;

    // Function to get the current count
    function get() public view returns (uint) {
        return count;
    }

    // Function to increment count by 1
    function inc() public {
        count += 1;
    }

    // Function to decrement count by 1
    function dec() public {
        count -= 1;
    }
}
</code></pre>
`

export default html
