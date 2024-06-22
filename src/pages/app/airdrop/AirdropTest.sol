// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test, console2} from "forge-std/Test.sol";
import {MerkleHelper} from "./MerkleHelper.sol";
import {Airdrop} from "../../../src/app/airdrop/Airdrop.sol";
import {Token} from "../../../src/app/airdrop/Token.sol";

contract AirdropTest is Test {
    Token private token;
    Airdrop private airdrop;
    MerkleHelper private merkleHelper;

    address[] private users;
    uint256[] private amounts;
    bytes32[] private hashes;

    uint256 constant N = 100;

    function setUp() public {
        merkleHelper = new MerkleHelper();
        token = new Token("test", "TEST", 18);

        // Initialize users and airdrop amounts
        for (uint256 i = 1; i <= N; i++) {
            users.push(address(uint160(i)));
            amounts.push(i * 100);
        }

        // Calculate leaf hashes
        for (uint256 i = 0; i < N; i++) {
            hashes.push(keccak256(abi.encode(users[i], amounts[i])));
        }

        bytes32 root = merkleHelper.calcRoot(hashes);

        airdrop = new Airdrop(address(token), root);

        token.setAuthorized(address(airdrop), true);
    }

    function test_valid_proof() public {
        for (uint256 i = 0; i < N; i++) {
            bytes32[] memory proof = merkleHelper.getProof(hashes, i);
            airdrop.claim(proof, users[i], amounts[i]);
            assertEq(token.balanceOf(users[i]), amounts[i]);
        }
    }

    function test_invalid_proof() public {
        bytes32[] memory proof = merkleHelper.getProof(hashes, 0);
        vm.expectRevert();
        airdrop.claim(proof, users[1], amounts[1]);
    }

    function test_claim_twice() public {
        bytes32[] memory proof = merkleHelper.getProof(hashes, 0);
        airdrop.claim(proof, users[0], amounts[0]);

        vm.expectRevert();
        airdrop.claim(proof, users[0], amounts[0]);
    }
}
