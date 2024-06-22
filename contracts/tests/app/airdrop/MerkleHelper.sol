// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract MerkleHelper {
    // Store proof in state variable, since data cannot be pushed to dynamic memory array
    bytes32[] public proof;

    // Warning - Mutates hashes array
    function calcRoot(bytes32[] memory hashes) public pure returns (bytes32) {
        uint256 n = hashes.length;

        while (n > 1) {
            for (uint256 i = 0; i < n; i += 2) {
                bytes32 left = hashes[i];
                bytes32 right = hashes[i + 1 < n ? i + 1 : i];
                (left, right) = left <= right ? (left, right) : (right, left);
                hashes[i / 2] = keccak256(abi.encode(left, right));
            }
            n = (n + (n & 1)) / 2;
        }

        return hashes[0];
    }

    // Warning - Mutates hashes array
    function getProof(bytes32[] memory hashes, uint256 index)
        public
        returns (bytes32[] memory)
    {
        // Reset proof
        delete proof;

        uint256 n = hashes.length;
        uint256 k = index;

        while (n > 1) {
            // Get proof for this level
            uint256 j = k & 1 == 1 ? k - 1 : (k + 1 < n ? k + 1 : k);
            bytes32 h = hashes[j];
            proof.push(h);
            k /= 2;

            // Calculate next level of hashes
            for (uint256 i = 0; i < n; i += 2) {
                bytes32 left = hashes[i];
                bytes32 right = hashes[i + 1 < n ? i + 1 : i];
                (left, right) = left <= right ? (left, right) : (right, left);
                hashes[i / 2] = keccak256(abi.encode(left, right));
            }
            n = (n + (n & 1)) / 2;
        }

        return proof;
    }
}
