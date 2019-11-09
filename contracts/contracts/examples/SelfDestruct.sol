pragma solidity ^0.5.11;

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
