// metadata
export const version = "0.6.10"
export const title = "View and Pure Functions"
export const description = "An example of view and pure functions in Solidity"

const html = `<p>Getter functions can be declared <code>view</code> or <code>pure</code>.</p>
<p><code>View</code> function declares that no state will be changed.</p>
<p><code>Pure</code> function declares that no state variable will be changed or read.</p>
<pre><code class="language-solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

contract ViewAndPure {
    uint public x = 1;

    // Promise not to modify the state.
    function addToX(uint y) public view returns (uint) {
        return x + y;
    }

    // Promise not to modify or read from the state.
    function add(uint i, uint j) public pure returns (uint) {
        return i + j;
    }
}
</code></pre>
`

export default html
