// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts

pragma solidity ^0.8.0;

library Hashes {
    function commutativeKeccak256(bytes32 a, bytes32 b)
        internal
        pure
        returns (bytes32)
    {
        return a < b ? _efficientKeccak256(a, b) : _efficientKeccak256(b, a);
    }

    function _efficientKeccak256(bytes32 a, bytes32 b)
        private
        pure
        returns (bytes32 value)
    {
        /// @solidity memory-safe-assembly
        assembly {
            mstore(0x00, a)
            mstore(0x20, b)
            value := keccak256(0x00, 0x40)
        }
    }
}
