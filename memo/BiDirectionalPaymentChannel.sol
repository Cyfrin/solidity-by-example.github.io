pragma solidity ^0.5.11;
pragma experimental ABIEncoderV2;

/*
1. Alice and Bob fund a multi-sig wallet
2. Precompute payment channel address
3. Alice and Bob sign initial balances of the payment channel
4. Deploy payment channel from multi-sig
5. startOrChallengeExit to start the process of closing a channel

Update channel balances
1. Repeat steps 1 - 3 above
*/

// TODO: griefing
// TODO events
// TODO? update contract balance
// TODO? exit without challenge if both users agree

import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/math/SafeMath.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/cryptography/ECDSA.sol";


contract BiDirectionalPaymentChannel {
    using SafeMath for uint256;
    using ECDSA for bytes32;

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
        // NOTE: need to cast payable address to address type (not necessary in 0.6)
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

    function startOrChallengeExit(
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
    }
}
