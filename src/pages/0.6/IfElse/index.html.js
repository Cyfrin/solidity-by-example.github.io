const html = `<p>Solidity support conditional statements <code>if</code>, <code>else if</code> and <code>else</code>.</p>
<pre><code class="language-solidity">pragma solidity ^0.6.0;

contract IfElse {
    function foo(uint x) public pure returns (uint) {
        if (x &lt; 10) {
            return 0;
        } else if (x &lt; 20) {
            return 1;
        } else {
            return 2;
        }
    }
}
</code></pre>
`

export default html
