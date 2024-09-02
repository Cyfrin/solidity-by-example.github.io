// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract AssemblyMath {
    function yul_add(uint256 x, uint256 y) public pure returns (uint256 z) {
        assembly {
            z := add(x, y)
            if lt(z, x) { revert(0, 0) }
        }
    }

    function yul_mul(uint256 x, uint256 y) public pure returns (uint256 z) {
        assembly {
            switch x
            case 0 { z := 0 }
            default {
                z := mul(x, y)
                if iszero(eq(div(z, x), y)) { revert(0, 0) }
            }
        }
    }

    // Round to nearest multiple of b
    function yul_fixed_point_round(uint256 x, uint256 b)
        public
        pure
        returns (uint256 z)
    {
        assembly {
            // b = 100
            // x = 90
            // z = 90 / 100 * 100 = 0, want z = 100
            // z := mul(div(x, b), b)

            let half := div(b, 2)
            z := add(x, half)
            z := mul(div(z, b), b)
            // x = 90
            // half = 50
            // z = 90 + 50 = 140
            // z = 140 / 100 * 100 = 100
        }
    }
}
