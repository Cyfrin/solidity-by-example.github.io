const html = `<h3 id="vulnerability">Vulnerability</h3>
<p><code>block.timestamp</code> can be manipulated by miners with the following constraints</p>
<ul>
<li>it cannot be stamped with an earlier time than its parent</li>
<li>it cannot be too far in the future</li>
</ul>
<pre><code class="language-solidity">pragma solidity ^0.6.0;

/*
Roulette is a game where you can win all of the Ether in the contract
if you can submit a transaction at a specific timing.
A player needs to send 10 Ether and wins if the block.timestamp % 15 == 0.
*/

/*
1. Deploy Roulette with 10 Ether
2. Eve runs a powerful miner that can manipulate the block timestamp.
3. Eve sets the block.timestamp to a number in the future that is divisible by
   15 and finds the target block hash.
4. Eve&#39;s block is successfully included into the chain, Eve wins the
   Roulette game.
*/

contract Roulette {
    uint public pastBlockTime;

    constructor() public payable {}

    function spin() external payable {
        require(msg.value == 10 ether); // must send 10 ether to play
        require(now != pastBlockTime); // only 1 transaction per block

        pastBlockTime = now;

        if(now % 15 == 0) {
            (bool sent, ) = msg.sender.call.value(address(this).balance)("");
            require(sent, "Failed to send Ether");
        }
    }
}</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<ul>
<li>Don&#39;t use <code>block.timestamp</code> for a source of entropy and random number</li>
</ul>
`

export default html
