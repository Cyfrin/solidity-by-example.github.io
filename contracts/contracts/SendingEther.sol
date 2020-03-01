pragma solidity ^0.5.16;

/*
3 ways to send ether from a contract to another contract
- transfer (2300 gas, throws error)
- send     (2300 gas, returns bool)
- call     (forward all gas or set gas, returns bool)

NOTE: recommended method after 2019 Dec (use call and guard against re-entrancy)
      guard against re-entrancy by
      - making all state changes before calling other contracts
      - using re-entrancy guard modifier
*/

contract ReceiveEther {
    // This is a special function called the fallback.
    // The fallback function declared payable enables other contracts to
    // send Ether by send, transfer, or call.
    function () external payable {}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract SendEther {
    function sendViaTransfer(address payable _to) public payable {
        // This function is no longer recommended for sending Ether.
        _to.transfer(msg.value);
    }

    function sendViaSend(address payable _to) public payable {
        // Send returns a boolean value indicating success or failure.
        // This function is not recommended for sending Ether.
        bool sent = _to.send(msg.value);
        require(sent, "Failed to send Ether");
    }

    function sendViaCall(address payable _to) public payable {
        // Call returns a boolean value indicating success or failure.
        (bool sent, bytes memory data) = _to.call.value(msg.value)("");
        require(sent, "Failed to send Ether");
    }
}
