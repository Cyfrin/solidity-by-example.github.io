pragma solidity ^0.5.3;

contract Gas {
  // Transactions spend gas even if it does nothing.
  function doNothing() public {}

  // Transaction costs in ether = gas price * gas used
  function gasPrice() public returns (uint) {
    return tx.gasprice;
  }

  // Getter functions cost no gas when called by an external account.
  function getNothing() public pure {}

  // Using up all the gas throws and reverts state changes.
  uint public i = 0;

  function gasLimit() public {
    while(gasleft() > 0) {
      i += 1;
    }
  }

  // Block gas limit
  function getBlockGasLimit() public view returns (uint) {
    return block.gaslimit;
  }
}
