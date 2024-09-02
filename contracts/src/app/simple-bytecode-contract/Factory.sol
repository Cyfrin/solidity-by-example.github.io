// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract Factory {
    event Log(address addr);

    // Deploys a contract that always returns 255
    function deploy() external {
        bytes memory bytecode = hex"6960ff60005260206000f3600052600a6016f3";
        address addr;
        assembly {
            // create(value, offset, size)
            addr := create(0, add(bytecode, 0x20), 0x13)
        }
        require(addr != address(0));

        emit Log(addr);
    }
}

interface IContract {
    function getValue() external view returns (uint256);
}

// https://www.evm.codes/playground
/*
Run time code - return 255
60ff60005260206000f3

// Store 255 to memory
mstore(p, v) - store v at memory p to p + 32

PUSH1 0xff
PUSH1 0
MSTORE

// Return 32 bytes from memory
return(p, s) - end execution and return data from memory p to p + s

PUSH1 0x20
PUSH1 0
RETURN

Creation code - return runtime code
6960ff60005260206000f3600052600a6016f3

// Store run time code to memory
PUSH10 0X60ff60005260206000f3
PUSH1 0
MSTORE

// Return 10 bytes from memory starting at offset 22
PUSH1 0x0a
PUSH1 0x16
RETURN
*/
