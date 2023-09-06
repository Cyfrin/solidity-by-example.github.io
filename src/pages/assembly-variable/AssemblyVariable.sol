// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AssemblyVariable {
    function yul_let() public pure returns (uint z) {
        assembly {
            // Language used for assembly is called Yul
            
            // Local variables
            let x := 123
            z := 456
        }
    }
}
