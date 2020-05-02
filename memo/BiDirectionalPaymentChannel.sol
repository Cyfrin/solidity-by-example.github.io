pragma solidity ^0.5.11;
pragma experimental ABIEncoderV2;

import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/math/SafeMath.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/cryptography/ECDSA.sol";

contract BiDirectionalPaymentChannel {
    using SafeMath for uint;
    using ECDSA for bytes32;

    address payable[2] users;
    mapping(address => bool) public isUser;

    enum Status {
        Open,
        Closing,
        Closed
    }

    Status public status;
    uint challengePeriod;
    uint challengeExpiresAt = 2 ** 256 - 1;
    uint nonce;
    mapping(address => uint) public balances;

    // NOTE: deposit from multi-sig wallet
    // NOTE: need to sign initial balances before this contract is deployed
    // TODO: griefing
    // TODO? deposit and update balance total?

    constructor(
        address payable[2] memory _users,
        uint _challengePeriod
    )
        public payable
    {
        for (uint i = 0; i < _users.length; i++) {
            users[i] = _users[i];
            require(!isUser[users[i]], "User address must be unique");
            isUser[users[i]] = true;
        }

        challengePeriod = _challengePeriod;
    }

    function verify(
        bytes[2] memory _signatures,
        address _contract,
        address[2] memory _signers,
        uint[2] memory _balances,
        uint _nonce
    )
        public pure returns (bool)
    {
        for (uint i = 0; i < _signatures.length; i++) {
            /*
            NOTE: sign with address of this contract to protect
                  agains replay attack on other contracts
            */
            bool valid = _signers[i] == keccak256(
                    abi.encodePacked(_contract, _balances, _nonce)
                )
                .toEthSignedMessageHash()
                .recover(_signatures[i]);

            if (!valid) {
                return false;
            }
        }

        return true;
    }

    modifier onlyUser() {
        require(isUser[msg.sender], "Not authorized");
        _;
    }

    modifier checkSignatures(
        bytes[2] memory _signatures, uint[2] memory _balances, uint _nonce
    ) {
        // NOTE: need to cast payable address to address type (not necessary in 0.6)
        address[2] memory signers;
        for (uint i = 0; i < users.length; i++) {
            signers[i] = address(users[i]);
        }

        require(
            verify(_signatures, address(this), signers, _balances, _nonce),
            "Invalid signature"
        );

        _;
    }

    // TODO? check contract balance >= sum(balances)
    function startExit(
        uint[2] memory _balances, uint _nonce, bytes[2] memory _signatures
    )
        public
        onlyUser
        checkSignatures(_signatures, _balances, _nonce)
    {
        require(status == Status.Open, "Channel status must be open");
        require(
            block.timestamp < challengeExpiresAt,
            "Expired challenge period"
        );

        status = Status.Closing;
        nonce = _nonce;
        challengeExpiresAt = block.timestamp.add(challengePeriod);
    }

    function challengeExit(
        uint[2] memory _balances, uint _nonce, bytes[2] memory _signatures
    )
        public
        onlyUser
        checkSignatures(_signatures, _balances, _nonce)
    {
        require(status == Status.Closing, "Channel status must be closing");
        require(
            block.timestamp < challengeExpiresAt,
            "Expired challenge period"
        );
        require(
            _nonce > nonce,
            "Nonce must be greater than the current nonce"
        );

        nonce = _nonce;
        challengeExpiresAt = block.timestamp.add(challengePeriod);
    }

    // TODO? exit without challenge if both users agree

    function close(
        uint[2] memory _balances, uint _nonce, bytes[2] memory _signatures
    )
        public
        onlyUser
        checkSignatures(_signatures, _balances, _nonce)
    {
        require(status == Status.Closing, "Channel status must be closing");
        require(
            block.timestamp >= challengeExpiresAt,
            "Challenge period has not expired yet"
        );
        require(_nonce == nonce, "Invalid nonce");

        status = Status.Closed;

        for (uint i = 0; i < users.length; i++) {
            balances[users[i]] = _balances[i];
            // TODO: require sum(balances) == address(this).balance?
        }
    }

    // NOTE: use withdraw to avoid DOS from sending
    function withdraw() public onlyUser {
        require(status == Status.Closed, "Channel status must be closed");

        uint amount = balances[msg.sender];
        balances[msg.sender] = 0;

        (bool sent,) = msg.sender.call.value(amount)("");
        require(sent, "Failed to send Ether");
    }
}
