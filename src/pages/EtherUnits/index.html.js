const html = `<p>One dollar is equal to 100 cent.</p>
<p>Similarly, one <code>Ether</code> is equal to 10^18 <code>Wei</code>.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

contract EtherUnits {
  uint public oneWei = 1 wei;
  uint public oneEther = 1 ether;

  function testOneWei() public pure returns (bool) {
    return 1 wei == 1;
  }

  function testOneEther() public pure returns (bool) {
    return 1 ether == 1e18 wei;
  }
}
</code></pre>
`

export default html
