const html = `<p>Functions declared <code>payable</code> can receive <code>ether</code> for the contract.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.1;

contract ReceiveEther {
    event Received(address sender, uint amount, uint balance);

    // Get the amount of ethers stored in this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    // Try calling this function along with some ether.
    // The balance of this contract will be automatically updated.
    function sendEther() public payable {
        emit Received(msg.sender, msg.value, address(this).balance);
    }

    // Try calling this function along with some ether.
    // The function would throw an error since this function is not payable.
    function notPayable() public {
    }

    // Delete this contract and refund all ether stored in this contract to msg.sender.
    function kill() public {
        selfdestruct(msg.sender);
    }
}
</code></pre>
`

export default html
