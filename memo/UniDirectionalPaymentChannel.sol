pragma solidity ^0.5.16;

import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/math/SafeMath.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/cryptography/ECDSA.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/utils/ReentrancyGuard.sol";


contract UniDirectionalPaymentChannel is ReentrancyGuard {
    using SafeMath for uint256;
    using ECDSA for bytes32;

    address payable public payer;
    address payable public payee;

    uint256 expiresAt;

    constructor(address payable _payee, uint256 _expiresAt) public payable {
        require(_expiresAt > block.timestamp, "Expiration must be > now");

        payer = msg.sender;
        payee = _payee;

        expiresAt = _expiresAt;
    }

    function verify(
        bytes memory _signature,
        address _payer,
        address _contract,
        uint256 _payeeBalance
    ) public pure returns (bool) {
        // NOTE: sign with address of this contract to protect agains
        // replay attack on other contracts
        return
            keccak256(abi.encodePacked(_contract, _payeeBalance))
                .toEthSignedMessageHash()
                .recover(_signature) == _payer;
    }

    modifier checkSignature(bytes memory _signature, uint256 _payeeBalance) {
        require(
            verify(_signature, payer, address(this), _payeeBalance),
            "Invalid signature"
        );
        _;
    }

    // TODO re-entrancy guard
    function close(uint256 _payeeBalance, bytes memory _signature)
        public
        nonReentrant
        checkSignature(_signature, _payeeBalance)
    {
        require(msg.sender == payee, "Not payee");

        (bool sent, ) = payee.call.value(_payeeBalance)("");
        require(sent, "Failed to send Ether");

        selfdestruct(payer);
    }

    function kill() public {
        require(msg.sender == payer, "Not payer");
        require(block.timestamp >= expiresAt, "channel not expired");
        selfdestruct(payer);
    }
}
