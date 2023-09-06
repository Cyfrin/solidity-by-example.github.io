// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AssemblyBinExp {
    // Binary exponentiation to calculate x**n
    function rpow(uint256 x, uint256 n, uint256 b) public pure returns (uint256 z) {
        assembly {
            switch x
            // x = 0
            case 0 {
                switch n
                case 0 {
                    // 0**0
                    z := b
                }
                default {
                    // 0**n, n > 0
                    z := 0
                }
            }
            // x > 0
            default {
                switch mod(n, 2)
                // even
                case 0 { z := b }
                // odd
                default { z := x }
                let half := div(b, 2)
                for { n := div(n, 2) } n { n := div(n, 2) } {
                    let xx := mul(x, x)
                    // Check overflow? revert if xx / x != x
                    if iszero(eq(div(xx, x), x)) { revert(0, 0) }
                    // Round - (xx + half) / b
                    let xxRound := add(xx, half)
                    // Check overflow - revert if xxRound < xx
                    if lt(xxRound, xx) { revert(0, 0) }
                    x := div(xxRound, b)
                    // if n % 2 == 1
                    if mod(n, 2) {
                        let zx := mul(z, x)
                        // revert if x != 0 and zx / x != z
                        if and(iszero(iszero(x)), iszero(eq(div(zx, x), z))) { revert(0, 0) }
                        // Round - (zx + half) / b
                        let zxRound := add(zx, half)
                        // Check overflow - revert if zxRound < zx
                        if lt(zxRound, zx) { revert(0, 0) }
                        z := div(zxRound, b)
                    }
                }
            }
        }
    }

}