pragma solidity ^0.5.3;

contract Wei {
  uint public oneEther = 1 ether;

  function test() public pure {
    assert(1 ether == 1e18 wei);
    assert(1 wei == 1);
  }
}
