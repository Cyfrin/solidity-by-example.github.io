const html = `<p>Ether can be denominated in smaller units. The smallest unit is <code>wei</code></p>
<pre><code class="language-solidity">pragma solidity ^0.5.1;

contract Wei {
  uint public oneEther = 1 ether;

  function test() public pure {
    assert(1 ether == 1e18 wei);
    assert(1 wei == 1);
  }
}
</code></pre>
`

export default html
