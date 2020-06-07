// metadata
export const version = "0.6.0"
export const title = "Hashing with Keccak256"
export const description = "Example of hashing using Keccak256 in Solidity"

const html = `<p><code>keccak256</code> computes the Keccak-256 hash of the input.</p>
<p>Some use cases are:</p>
<ul>
<li>Creating an deterministic unique ID from a input</li>
<li>Commit-Reveal scheme</li>
<li>Compact cryptographic signature (by signing the hash instead of a larger input)</li>
</ul>
<pre><code class="language-solidity">pragma solidity ^0.6.0;

contract HashFunction {
    function hash(string memory _text, uint _num, address _addr)
        public pure returns (bytes32)
    {
        return keccak256(abi.encodePacked(_text, _num, _addr));
    }

    // Example of hash collision
    // Hash collision can occur when you pass more than one dynamic data type
    // to abi.encodePacked. In such case, you should use abi.encode instead.
    function collision(string memory _text, string memory _anotherText)
        public pure returns (bytes32)
    {
        // encodePacked(AAA, BBB) -&gt; AAABBB
        // encodePacked(AA, ABBB) -&gt; AAABBB
        return keccak256(abi.encodePacked(_text, _anotherText));
    }
}

contract GuessTheMagicWord {
    bytes32 public answer =
        0x60298f78cc0b47170ba79c10aa3851d7648bd96f2f8e46a19dbc777c36fb0c00;

    // Magic word is "Solidity"
    function guess(string memory _word) public view returns (bool) {
        return keccak256(abi.encodePacked(_word)) == answer;
    }
}
</code></pre>
`

export default html
