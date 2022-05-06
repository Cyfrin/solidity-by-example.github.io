// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract EtherWallet {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    receive() external payable {}

    function withdraw(uint _amount) external {
        require(msg.sender == owner, "caller is not owner");
        (bool sucess, ) = msg.sender.call{value: _amount}("");
        require(sucess,"Transfer failed.");
    }

    function getBalance() external view returns (uint) {
        return address(this).balance;
    }
}
