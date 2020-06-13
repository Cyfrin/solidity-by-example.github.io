// metadata
export const version = "0.6.10"
export const title = "Front Running"
export const description = "An example of a Solidity contract vulnerable to front running"

const html = `<h3 id="vulnerability">Vulnerability</h3>
<p>Transactions take some time before they are mined. An attacker can watch the transaction pool
and send a transaction, have it included in a block before the original transaction.
This mechanism can be abused to re-order transactions to the attacker&#39;s advantage.</p>
<pre><code class="language-solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

/*
Alice creates a guessing game.
You win 10 ether if you can find the correct string that hashes to the target
hash. Let&#39;s see how this contract is vulnerable to front running.
*/

/*
1. Alice deploys FindThisHash with 10 Ether.
2. Bob finds the correct string that will hash to the target hash. ("Ethereum")
3. Bob calls solve("Ethereum") with gas price set to 15 gwei.
4. Eve is watching the transaction pool for the answer to be submitted.
5. Eve sees Bob&#39;s answer and calls solve("Ethereum") with a higher gas price
   than Bob (100 gwei).
6. Eve&#39;s transaction was mined before Bob&#39;s transaction.
   Eve won the reward of 10 ether.

What happened?
Transactions take some time before they are mined.
Transactions not yet mined are put in the transaction pool.
Transactions with higher gas price are typically mined first.
An attacker can get the answer from the transaction pool, send a transaction
with a higher gas price so that their transaction will be included in a block
before the original.
*/

contract FindThisHash {
    bytes32 constant public hash =
      0x564ccaf7594d66b1eaaea24fe01f0585bf52ee70852af4eac0cc4b04711cd0e2;

    constructor() public payable {}

    function solve(string memory solution) public {
        require(hash == keccak256(abi.encodePacked(solution)), "Incorrect answer");

        (bool sent, ) = msg.sender.call{value: 10 ether}("");
        require(sent, "Failed to send Ether");
    }
}</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<ul>
<li>use commit-reveal scheme</li>
<li>use submarine send</li>
</ul>
`

export default html
