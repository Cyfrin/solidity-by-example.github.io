// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

contract Loop {
    function loop() public {
        // for loop
        for (uint i = 0; i < 10; i++) {
            if (i == 3) {
                // Skip to next iteration with continue
                continue;
            }
            if (i == 5) {
                // Exit loop with break
                break;
            }
        }

        // while loop
        uint i;
        while (i < 10) {
            i++;
        }
    }
}
