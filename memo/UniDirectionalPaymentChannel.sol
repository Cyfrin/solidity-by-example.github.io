
pragma solidity ^0.5.11;

import "github.com/OpenZeppelin/openzeppelin-contracts/contracts/math/SafeMath.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/contracts/cryptography/ECDSA.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol";

contract UniDirectionalPaymentChannel is ReentrancyGuard {
    using SafeMath for uint;
    using ECDSA for bytes32;

    address payable public payer;
    address payable public payee;

    // NOTE: contract is closed after the contract calls selfdestruct()
    enum Status {
        Open,
        Closing
    }

    Status public status;
    uint challengePeriod;
    uint finalPayeeBalance;
    uint challengeExpiresAt = 2 ** 256 - 1;

    constructor(address payable _payee, uint _challengePeriod) public payable {
        payer = msg.sender;
        payee = _payee;

        challengePeriod = _challengePeriod;
    }

    function verify(
        bytes memory _signature, address _payer, address _contract, uint _payeeBalance
    )
        public pure returns (bool)
    {
        // NOTE: sign with address of this contract to protect agains replay attack on other contracts
        return keccak256(abi.encodePacked(_contract, _payeeBalance))
            .toEthSignedMessageHash()
            .recover(_signature) == _payer;
    }

    modifier onlyPayerOrPayee() {
        require(msg.sender == payer || msg.sender == payee, "Not authorized");
        _;
    }

    modifier checkSignature(bytes memory _signature, uint _payeeBalance) {
        require(
            verify(_signature, payer, address(this), _payeeBalance),
            "Invalid signature"
        );
        _;
    }

    function startExit(uint _payeeBalance, bytes memory _signature)
        public
        onlyPayerOrPayee
        checkSignature(_signature, _payeeBalance)
        nonReentrant
    {
        require(status == Status.Open, "Channel status must be open");
        require(block.timestamp < challengeExpiresAt, "Expired challenge period");

        status = Status.Closing;
        finalPayeeBalance = _payeeBalance;
        challengeExpiresAt = block.timestamp.add(challengePeriod);
    }

    function challengeExit(uint _payeeBalance, bytes memory _signature)
        public
        onlyPayerOrPayee
        checkSignature(_signature, _payeeBalance)
        nonReentrant
    {
        require(status == Status.Closing, "Channel status must be closing");
        require(block.timestamp < challengeExpiresAt, "Expired challenge period");
        require(
            _payeeBalance > finalPayeeBalance,
            "Payee balance must be greater than current final payee balance"
        );

        finalPayeeBalance = _payeeBalance;
        challengeExpiresAt = block.timestamp.add(challengePeriod);
    }

    // NOTE: griefing (payee does not close) => payer can force close after some time
    function close() public onlyPayerOrPayee nonReentrant {
        require(status == Status.Closing, "Channel status must be closing");
        require(block.timestamp >= challengeExpiresAt, "Challenge period has not expired yet");

        // NOTE: potential DOS by payee
        (bool sent,) = payee.call.value(finalPayeeBalance)("");
        require(sent, "Failed to send Ether");

        // NOTE: avoids replay attack by self destruct
        // NOTE: avoids DOS attack by forcing Ether
        selfdestruct(payer);
    }
}
