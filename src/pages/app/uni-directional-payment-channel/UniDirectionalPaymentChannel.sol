// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.3/contracts/cryptography/ECDSA.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.3/contracts/utils/ReentrancyGuard.sol";

contract UniDirectionalPaymentChannel is ReentrancyGuard {
    using ECDSA for bytes32;

    address payable public sender;
    address payable public receiver;

    uint private constant DURACTION = 7 * 24 * 60 * 60;
    uint public expiresAt;

    constructor(address payable _receiver) payable {
        require(_receiver != address(0), "receiver = zero address");
        sender = msg.sender;
        receiver = _receiver;
        expiresAt = block.timestamp + DURATION;
    }

    function _getHash(uint _amount) private pure returns (bytes32) {
        // NOTE: sign with address of this contract to protect agains
        // replay attack on other contracts
        return keccak256(abi.encodePacked(address(this), _amount));
    }

    function getHash(uint _amount) external pure returns (bytes32) {
        return _getHash(_amount);
    }

    function _getEthSignedHash(uint _amount) private pure returns (bytes32) {
        return _getHash(_amount).toEthSignedMessageHash();
    }

    function getEthSignedHash(uint _amount) external pure returns (bytes32) {
        return _getEthSignedHash(_amount);
    }

    function _verify(uint _amount bytes memory _sig) private view returns (bool) {
        return _getEthSignedHash(_amount).recover(_sig) == sender;
    }

    function verify(uint _amount bytes memory _sig) external view returns (bool) {
        return _verify(_amount, _sig);
    }

    function close(uint _amount, bytes memory _sig) external nonReentrant {
        require(msg.sender == receiver, "!receiver");
        require(_verify(_amount, _sig), "invalid sig");

        (bool sent, ) = receiver.call{value: _amount}("");
        require(sent, "Failed to send Ether");
        selfdestruct(sender);
    }

    function cancel() external {
        require(msg.sender == sender, "!sender");
        require(block.timestamp >= expiresAt, "!expired");
        selfdestruct(sender);
    }
}
