pragma solidity ^0.5.11;

contract HoneyPot {
    // constructor() public payable {}
    function () external payable {}

    function withdraw() public payable {
        uint balance = address(this).balance;

        // HACK: balance is always >= msg.value since balance is updated first
        if (msg.value >= balance) {
            msg.sender.transfer(msg.value + balance);
        }
    }
}
