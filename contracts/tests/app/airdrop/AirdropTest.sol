pragma solidity 0.8.24;

import {Test, console2} from "forge-std/Test.sol";

import { Airdrop } from "../../../src/app/airdrop/Airdrop.sol";
import { Token } from "../../../src/app/airdrop/Token.sol";

contract AirdropTest is Test {
    Token private token;
    Airdrop private airdrop;

    address[] private users;
    uint256[] private amounts;

    uint256 constant N = 3;

    function calcRoot(bytes32[N] memory hashes) public pure returns (bytes32) {
        uint256 n = N;
        while (n > 1) {
            for (uint i = 0; i < n; i += 2) {
                bytes32 left = hashes[i];
                bytes32 right = hashes[i + 1 < n ? i + 1 : i];
                (left, right) = left <= right ? (left, right) : (right, left);
                hashes[i / 2] = keccak256(abi.encode(left, right));
            }
            n = (n + (n & 1)) / 2;
        }

        return hashes[0];
    }

    function getNodes(bytes32[N] memory hashes) public pure returns (bytes32[N][N] memory) {
        bytes32[N][N] memory nodes;

        for (uint i = 0; i < hashes.length; i++) {
            nodes[0][i] = hashes[i];
        }

        uint256 j = 1;
        uint256 n = N;
        while (n > 1) {
            for (uint i = 0; i < n; i += 2) {
                bytes32 left = hashes[i];
                bytes32 right = hashes[i + 1 < n ? i + 1 : i];
                (left, right) = left <= right ? (left, right) : (right, left);
                bytes32 h = keccak256(abi.encode(left, right));
                hashes[i / 2] = h;
                nodes[j][i / 2] = h;
            }
            j += 1;
            n = (n + (n & 1)) / 2;
        }

        return nodes;
    }

    function setUp() public {
        token = new Token("test", "TEST", 18);

        for (uint256 i = 1; i <= N; i++) {
            users.push(address(uint160(i)));
            amounts.push(i * 100);
        }

        // Calculate Merkle root
        bytes32[N] memory hashes;
        // leaf hashes
        for (uint i = 0; i < N; i++) {
            hashes[i] = keccak256(abi.encode(users[i], amounts[i]));
        }

        bytes32[N][N] memory nodes = getNodes(hashes);
        bytes32 root = calcRoot(hashes);

        for (uint i = 0; i < N; i++) {
            for (uint j = 0; j < N; j++) {
                console2.log(i, j);
                console2.logBytes32(nodes[i][j]);
            }
        }

        airdrop = new Airdrop(address(token), root);

    }

    function test_valid_proof() public {

    }

    function test_invalid_proof() public {
    }

    function test_claim_twice() public {}
    
}