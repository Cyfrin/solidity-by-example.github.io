const html = `<p>Solidity overflow integers as if nothing is wrong. It would be nice if it threw an error.</p>
<p>So we use <code>SafeMath</code> library by <a href="https://openzeppelin.org/">OpenZeppelin</a>.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.11;

// Import SafeMath library from github (this import only works on Remix).
import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Math {
    // Include the SafeMath library inside this contract
    using SafeMath for uint;

    // uint is aliase for uint256 (unsigned integer ranging from 0 to 2 ** 256 - 1)
    uint public max = 2**256 - 1;
    // Variables initialize to their default value, 0 in this case.
    uint public min;

    // Try:
    // add(1, 2)
    // add(0, -1)
    function add(uint x, uint y) public view returns (uint) {
        return x + y;
    }

    // Arithmetic overflow does not throw any error.
    function overflow() public view returns (uint) {
        return max + 1; // returns 0
    }

    function underflow() public view returns (uint) {
        return min - 1; // return 2 ** 256 - 1
    }

    // SafeMath.add throws an error when an integer overflows.
    // Try:
    // safeAdd(2 ** 256 - 1, 1)
    function safeAdd(uint x, uint y) public view returns (uint) {
        return x.add(y);
    }

    // SafeMath.sub throws an error when an integer underflows.
    // Try:
    // safeSub(0, 1)
    function safeSub(uint x, uint y) public view returns (uint) {
        return x.sub(y);
    }
}
</code></pre>
`

export default html
