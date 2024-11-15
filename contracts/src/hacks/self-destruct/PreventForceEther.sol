// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract EtherGame {
    uint256 public constant TARGET_AMOUNT = 7 ether;
    uint256 public balance;
    address public winner;

    function deposit() public payable {
        require(msg.value == 1 ether, "You can only send 1 Ether");

        balance += msg.value;
        require(balance <= TARGET_AMOUNT, "Game is over");

        if (balance == TARGET_AMOUNT) {
            winner = msg.sender;
        }
    }

    function claimReward() public {
        require(msg.sender == winner, "Not winner");
        balance = 0;
        (bool sent,) = msg.sender.call{value: balance}("");
        require(sent, "Failed to send Ether");
    }
}
