pragma solidity ^0.5.16;

contract Order {
    enum Status {
        Pending,
        Shipped,
        Accepted,
        Rejected,
        Canceled
    }

    // Default value of an enum type is the first element listed in
    // definition of the type, in this case "Pending"
    Status public status;

    // Try:
    // - execute ship() and then acceptDelivery() or rejectDelivery()
    // - re-deploy the contract and execute cancel()
    // Any other order of execution fails.

    function ship() public {
        require(status == Status.Pending);
        status = Status.Shipped;
    }

    function acceptDelivery() public {
        require(status == Status.Shipped);
        status = Status.Accepted;
    }

    function rejectDelivery() public {
        require(status == Status.Shipped);
        status = Status.Rejected;
    }

    function cancel() public {
        require(status == Status.Pending);
        status = Status.Canceled;
    }
}
