// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

library MerkleHelper {
    // Bubble sort
    function sort(bytes32[] memory arr)
        internal
        pure
        returns (bytes32[] memory)
    {
        uint256 n = arr.length;
        for (uint256 i = 0; i < n; i++) {
            for (uint256 j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    (arr[j], arr[j + 1]) = (arr[j + 1], arr[j]);
                }
            }
        }

        return arr;
    }

    function yulKeccak256(bytes32 a, bytes32 b)
        internal
        pure
        returns (bytes32 v)
    {
        assembly {
            mstore(0x00, a)
            mstore(0x20, b)
            v := keccak256(0x00, 0x40)
        }
    }

    function calcRoot(bytes32[] memory hashes)
        internal
        pure
        returns (bytes32)
    {
        uint256 n = hashes.length;

        while (n > 1) {
            for (uint256 i = 0; i < n; i += 2) {
                bytes32 left = hashes[i];
                bytes32 right = hashes[i + 1 < n ? i + 1 : i];
                (left, right) = left <= right ? (left, right) : (right, left);
                hashes[i >> 1] = yulKeccak256(left, right);
            }
            n = (n + (n & 1)) >> 1;
        }

        return hashes[0];
    }

    function getProof(bytes32[] memory hashes, uint256 index)
        internal
        pure
        returns (bytes32[] memory)
    {
        bytes32[] memory proof = new bytes32[](0);
        uint256 len = 0;

        uint256 n = hashes.length;
        uint256 k = index;

        while (n > 1) {
            // Get proof for this level
            uint256 j = k & 1 == 1 ? k - 1 : (k + 1 < n ? k + 1 : k);
            bytes32 h = hashes[j];

            // proof.push(h)
            assembly {
                len := add(len, 1)
                let pos := add(proof, shl(5, len))
                mstore(pos, h)
                mstore(proof, len)
                mstore(0x40, add(pos, 0x20))
            }

            k >>= 1;

            // Calculate next level of hashes
            for (uint256 i = 0; i < n; i += 2) {
                bytes32 left = hashes[i];
                bytes32 right = hashes[i + 1 < n ? i + 1 : i];
                (left, right) = left <= right ? (left, right) : (right, left);
                hashes[i >> 1] = yulKeccak256(left, right);
            }
            n = (n + (n & 1)) >> 1;
        }

        return proof;
    }

    function verify(bytes32[] memory proof, bytes32 root, bytes32 leaf)
        internal
        pure
        returns (bool)
    {
        bytes32 h = leaf;

        for (uint256 i = 0; i < proof.length; i++) {
            (bytes32 left, bytes32 right) =
                h <= proof[i] ? (h, proof[i]) : (proof[i], h);
            h = yulKeccak256(left, right);
        }

        return h == root;
    }
}
