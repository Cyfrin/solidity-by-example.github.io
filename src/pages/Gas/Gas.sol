pragma solidity ^0.5.3;

contract Gas {
  // Transactions spend gas even if it does nothing.
  function doNothing() public {}

  // Getter functions cost no gas when called by an external account.
  function getNothing() public pure {}

  // Transaction costs in ether = gas price * gas used
  // Unspent gas are refunded.
  function testGasRefund() public returns (uint) {
    return tx.gasprice;
  }

  // Using up all the gas causes an error and reverts state changes.
  // Gas spent are not refunded.
  uint public i = 0;

  function burn() public {
    while(gasleft() > 0) {
      i += 1;
    }
  }

  // Block gas limit
  function getBlockGasLimit() public view returns (uint) {
    return block.gaslimit;
  }
}
