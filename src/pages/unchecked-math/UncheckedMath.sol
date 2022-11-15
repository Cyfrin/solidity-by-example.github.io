// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// TODO: log gas usage
contract UncheckedMath {
    function add(uint x, uint y) external pure returns (uint) {
        return x + y;

        unchecked {
            return x + y;
        }
    }

    function sub(uint x, uint y) external pure returns (uint) {
        return x - y;

        unchecked {
            return x - y;
        }
    }

    function sumOfCubes(uint x, uint y) external pure returns (uint) {
        // Wrap complex math logic inside unchecked
        unchecked {
            uint x3 = x * x * x;
            uint y3 = y * y * y;

            return x3 + y3;
        }
    }
}
