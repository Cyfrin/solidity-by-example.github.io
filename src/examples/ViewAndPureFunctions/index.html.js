const html = `<p>Getter functions can be declared <code>view</code> or <code>pure</code>.</p>
<p><code>View</code> function declares that no state will be changed.</p>
<p><code>Pure</code> function declares that no state variable will be read.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.3;

contract ViewAndPure {
    uint public x = 1;

    // Promise not to modify the state.
    function increment(uint a) public view returns (uint) {
        return x + a;
    }

    // Promise not to read from or modify the state.
    function add(uint a, uint b) public pure returns (uint) {
        return a + b;
    }
}
</code></pre>
`

export default html
