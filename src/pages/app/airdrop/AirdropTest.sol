// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Test, console2} from "forge-std/Test.sol";
import {MerkleHelper} from "./MerkleHelper.sol";
import {Airdrop} from "../../../src/app/airdrop/Airdrop.sol";
import {Token} from "../../../src/app/airdrop/Token.sol";

contract AirdropTest is Test {
    Token private token;
    Airdrop private airdrop;

    struct Reward {
        address to;
        uint256 amount;
    }

    Reward[] private rewards;
    bytes32[] private hashes;
    mapping(bytes32 => Reward) private hashToReward;

    uint256 constant N = 100;

    function setUp() public {
        token = new Token("test", "TEST", 18);

        // Initialize users and airdrop amounts
        for (uint256 i = 0; i < N; i++) {
            rewards.push(
                Reward({to: address(uint160(i)), amount: (i + 1) * 100})
            );
            hashes.push(keccak256(abi.encode(rewards[i].to, rewards[i].amount)));
            hashToReward[hashes[i]] = rewards[i];
        }

        hashes = MerkleHelper.sort(hashes);

        bytes32 root = MerkleHelper.calcRoot(hashes);

        airdrop = new Airdrop(address(token), root);

        token.setAuthorized(address(airdrop), true);
    }

    function test_valid_proof() public {
        for (uint256 i = 0; i < N; i++) {
            bytes32 h = hashes[i];
            Reward memory reward = hashToReward[h];
            bytes32[] memory proof = MerkleHelper.getProof(hashes, i);

            airdrop.claim(proof, reward.to, reward.amount);
            assertEq(token.balanceOf(reward.to), reward.amount);
        }
    }
}
