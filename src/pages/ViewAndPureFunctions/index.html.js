const html = `<p>Getter functions can be declared <code>view</code> or <code>pure</code>.</p>
<p><code>View</code> function declares that no state will be changed.</p>
<p><code>Pure</code> function declares that no state variable will be changed or read.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.11;

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
