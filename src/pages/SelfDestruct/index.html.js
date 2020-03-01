const html = `<p>Contracts can be deleted from the blockchain by calling <code>selfdestruct</code>.</p>
<p><code>selfdestruct</code> sends all remainig Ether stored in the contract to an
designated address.</p>
<p>A malicious contract can use <code>selfdestruct</code> to
force send Ether to any contract.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

// To demonstrate how to force sending Ether to another contract:
// 1. Deploy the SelfDestruct contract, funding 1 Ether.
// 2. Deploy the Target contract.
// 3. Execute kill function in SelfDestruct, passing the address of Target as input.
// 4. Check the balance of Target contract. It should now have 1 Ether.

contract SelfDestruct {
    constructor() public payable {
    }

    function kill(address payable to) public {
        selfdestruct(to);
    }
}

contract Target {
    // Notice this contract does not have a payable fallback,
    // so we should not be able to send Ether to this contract...

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
</code></pre>
`

export default html
