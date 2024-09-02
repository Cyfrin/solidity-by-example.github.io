// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract UncheckedMath {
    function add(uint256 x, uint256 y) external pure returns (uint256) {
        // 22291 gas
        // return x + y;

        // 22103 gas
        unchecked {
            return x + y;
        }
    }

    function sub(uint256 x, uint256 y) external pure returns (uint256) {
        // 22329 gas
        // return x - y;

        // 22147 gas
        unchecked {
            return x - y;
        }
    }

    function sumOfCubes(uint256 x, uint256 y) external pure returns (uint256) {
        // Wrap complex math logic inside unchecked
        unchecked {
            uint256 x3 = x * x * x;
            uint256 y3 = y * y * y;

            return x3 + y3;
        }
    }
}
