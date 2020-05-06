pragma solidity ^0.5.11;
pragma experimental ABIEncoderV2;

/*
Opening a channel
1. Alice and Bob fund a multi-sig wallet
2. Precompute payment channel address
3. Alice and Bob exchanges signatures of initial balances
4. Alice and Bob creates a transaction that can deploy a payment channel from
   the multi-sig wallet

Closing a channel when Alice and Bob do not agree on the final balances
1. Deploy payment channel from multi-sig
2. call challengeExit() to start the process of closing a channel
3. Alice and Bob can withdraw funds once the channel is expired

Closing a channel when Alice and Bob agree on the final balance
1. From multi-sig wallet create a transaction that will
   - send payments to Alice and Bob
   - and then delete the transaction that would have created the payment channel 

Update channel balances 
1. Repeat steps 1 - 3 from opening a channel
2. From multi-sig wallet create a transaction that will
   - deleting the transaction that would have deployed the old payment channel
   - and then create a transaction that can deploy a payment channel with the
     new balances
*/

import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/math/SafeMath.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/cryptography/ECDSA.sol";


contract BiDirectionalPaymentChannel {
    using SafeMath for uint256;
    using ECDSA for bytes32;

    event ChallengeExit(address indexed sender, uint256 nonce);
    event Withdraw(address indexed to, uint256 amount);

    address payable[2] public users;
    mapping(address => bool) public isUser;

    mapping(address => uint256) public balances;

    uint256 public challengePeriod;
    uint256 public expiresAt;
    uint256 public nonce;

    modifier checkBalances(uint256[2] _balances) {
        require(
            address(this).balance >= _balances[0].add(_balances[1]),
            "balance of contract must be >= to the total balance of users"
        );
        _;
    }

    // NOTE: deposit from multi-sig wallet
    constructor(
        address payable[2] memory _users,
        uint256[2] _balances,
        uint256 _expiresAt,
        uint256 _challengePeriod
    ) public payable checkBalances(_balances) {
        require(_expiresAt > block.timestamp, "Expiration must be > now");
        require(_challengePeriod > 0, "Challenge period must be > 0");

        for (uint256 i = 0; i < _users.length; i++) {
            address user = _users[i];

            require(!isUser[user], "user must be unique");
            users[i] = user;
            isUser[user] = true;

            balances[user] = _balances[i];
        }

        expiresAt = _expiresAt;
        challengePeriod = _challengePeriod;
    }

    function verify(
        bytes[2] memory _signatures,
        address _contract,
        address[2] memory _signers,
        uint256[2] memory _balances,
        uint256 _nonce
    ) public pure returns (bool) {
        for (uint256 i = 0; i < _signatures.length; i++) {
            /*
            NOTE: sign with address of this contract to protect
                  agains replay attack on other contracts
            */
            bool valid = _signers[i] ==
                keccak256(abi.encodePacked(_contract, _balances, _nonce))
                    .toEthSignedMessageHash()
                    .recover(_signatures[i]);

            if (!valid) {
                return false;
            }
        }

        return true;
    }

    modifier checkSignatures(
        bytes[2] memory _signatures,
        uint256[2] memory _balances,
        uint256 _nonce
    ) {
        // NOTE: need to cast payable address to address type (not in 0.6)
        address[2] memory signers;
        for (uint256 i = 0; i < users.length; i++) {
            signers[i] = address(users[i]);
        }

        require(
            verify(_signatures, address(this), signers, _balances, _nonce),
            "Invalid signature"
        );

        _;
    }

    modifier onlyUser() {
        require(isUser[msg.sender], "Not user");
        _;
    }

    function challengeExit(
        uint256[2] memory _balances,
        uint256 _nonce,
        bytes[2] memory _signatures
    )
        public
        onlyUser
        checkSignatures(_signatures, _balances, _nonce)
        checkBalances(_balances)
    {
        require(block.timestamp < expiresAt, "Expired challenge period");
        require(_nonce > nonce, "Nonce must be greater than the current nonce");

        for (uint256 i = 0; i < _balances.length; i++) {
            balances[users[i]] = _balances[i];
        }

        nonce = _nonce;
        expiresAt = block.timestamp.add(challengePeriod);

        emit ChallengeExit(msg.sender, nonce);
    }

    function withdraw() public onlyUser {
        require(
            block.timestamp >= expiresAt,
            "Challenge period has not expired yet"
        );

        uint256 amount = balances[msg.sender];
        balances[msg.sender] = 0;

        (bool sent, ) = msg.sender.call.value(amount)("");
        require(sent, "Failed to send Ether");

        emit Withdraw(msg.sender, amount);
    }
}
