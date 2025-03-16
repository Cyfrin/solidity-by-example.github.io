// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract AssemblyBinExp {
    function rpow(uint256 x, uint256 n, uint256 b)
        public
        pure
        returns (uint256 z)
    {
        assembly {
            switch x
            case 0 {
                switch n
                case 0 { z := b } // 0**0 = 1
                default { revert(0, 0) } // 0**n (n > 0) має одразу ревертнутись
            }
            default {
                z := b
                if mod(n, 2) { z := x } // Оптимізовано перевірку парності
                
                let half := div(b, 2) // Для округлення
                
                for { n := div(n, 2) } n { n := div(n, 2) } {
                    let xx := mul(x, x)
                    if and(iszero(iszero(x)), iszero(eq(div(xx, x), x))) {
                        revert(0, 0) // Захист від переповнення
                    }
                    let xxRound := add(xx, half)
                    if lt(xxRound, xx) { revert(0, 0) }
                    x := div(xxRound, b)

                    if mod(n, 2) {
                        let zx := mul(z, x)
                        if and(iszero(iszero(x)), iszero(eq(div(zx, x), z))) {
                            revert(0, 0)
                        }
                        zx := add(zx, half)
                        z := div(zx, b)
                    }
                }
            }
        }
    }
}
