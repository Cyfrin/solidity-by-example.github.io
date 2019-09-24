const html = `<p>Transactions run on <code>gas</code>. You pay <code>gas price * gas</code> in Ether.</p>
<p>You specify the gas price.</p>
<p>Transactions with higher gas price will be processed faster.</p>
<p>Unspent gas will be refunded.</p>
<p>There are two upper bounds to the amount of gas you can spend</p>
<ul>
<li>gas limit set by you (how much you are willing to pay for the transaction)</li>
<li>maximum amount of gas allowed in a block set by the network</li>
</ul>
<pre><code class="language-solidity">pragma solidity ^0.5.3;

contract Gas {
  // Transactions spend gas even if it does nothing.
  function doNothing() public {}

  // Getter functions cost no gas when called by either
  // - an external account
  // - other getter functions inside this contract
  // - other getter functions from another contract
  function getNothing() public pure {}

  // In a transaction, you pay for the total gas used by the function.
  // If a function calls two other functions,
  // - a getter function and
  // - a function to create a transaction,
  // then you pay for the total gas used by the two functions.
  function getNothingAndDoNothing() public {
    getNothing();
    doNothing();
  }

  // Transaction costs in ether = gas price * gas used
  // Unspent gas are refunded.
  function testGasRefund() public returns (uint) {
    return tx.gasprice;
  }

  // Using up all the gas causes an error and reverts state changes.
  // Gas spent are not refunded.
  uint public i = 0;

  function burn() public {
    while(gasleft() &gt; 0) {
      i += 1;
    }
  }

  // Block gas limit
  function getBlockGasLimit() public view returns (uint) {
    return block.gaslimit;
  }
}
</code></pre>
`

export default html
