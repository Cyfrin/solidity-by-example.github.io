const html = `<p>Solidity supports enumerables and they are useful to keep track of state.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.1;

contract Shipping {
    // Order matters
    enum Status {
        Pending,
        Shipping,
        Delivered,
        Cancelled
    }

    Status public status;

    // Try:
    // - execute ship() and then confirmDelivery()
    // - re-deploy the contract and execute cancel()
    // Any other order of execution fails.

    function ship() public {
        require(status == Status.Pending);
        status = Status.Shipping;
    }

    function confirmDelivery() public {
        require(status == Status.Shipping);
        status = Status.Delivered;
    }

    function cancel() public {
        require(status == Status.Pending);
        status = Status.Cancelled;
    }
}
</code></pre>
`

export default html
