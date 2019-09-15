pragma solidity ^0.5.3;

contract Wei {
  uint public oneEther = 1 ether;
  uint public oneWei = 1 wei;

  function testOneEther() public pure returns (bool) {
    return 1 ether == 1e18 wei;
  }

  function testOneWei() public pure returns (bool) {
    return 1 wei == 1;
  }
}
