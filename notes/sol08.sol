* arithmetic operations revert on underflow and overflow
* custom errors
* functions outside contract
* import {symbol1 as alias, symbol2} from "filename";
* Salted contract creations / create2
* SMTChecker

// SPDX-License-Identifier: MIT
pragma solidity ^0.8;


// safe math
contract SafeMath {
    function testUnderflow() public pure returns (uint) {
        uint x = 0;
        x--;
        return x;
    }

    function testUncheckedUnderflow() public pure returns (uint) {
        uint x = 0;
        unchecked { x--; }
        return x;
    }
}

// custom error

error Unauthorized();

contract VendingMachine {
    address payable owner = payable(msg.sender);

    function withdraw() public {
        if (msg.sender != owner)
            revert Unauthorized();

        owner.transfer(address(this).balance);
    }
    // ...
}

error InsufficientBalance(uint256 available, uint256 required);

contract TestToken {
    mapping(address => uint) balance;
    function transfer(address to, uint256 amount) public {
        if (amount > balance[msg.sender])
            revert InsufficientBalance({
                available: balance[msg.sender],
                required: amount
            });
        balance[msg.sender] -= amount;
        balance[to] += amount;
    }
}

// functions outside contract

function helper(uint x) view returns (uint) {
    return x * 2;
}

contract SimpleAuction {
    function bid() public payable { // Function
        // ...
    }
}

contract TestHelper {
    function test() external view returns (uint) {
        return helper(123);
    }
}

// * import {symbol1 as alias, symbol2} from "filename";
import { Unauthorized, helper as h1 } from "./Sol08.sol";

function helper(uint x) view returns (uint) {
}

contract Import {
}

// Salted contract creations / create2
contract D {
    uint public x;
    constructor(uint a) {
        x = a;
    }
}

contract Create2 {
    function getBytes32(uint salt) external pure returns (bytes32) {
        return bytes32(salt);
    }

    function getAddress(bytes32 salt, uint arg) external view returns (address) {
        address addr = address(uint160(uint(keccak256(abi.encodePacked(
            bytes1(0xff),
            address(this),
            salt,
            keccak256(abi.encodePacked(
                type(D).creationCode,
                arg
            ))
        )))));

        return addr;
    }

    address public deployedAddr;

    function createDSalted(bytes32 salt, uint arg) public {
        D d = new D{salt: salt}(arg);
        deployedAddr = address(d);
    }
}

// SMT
contract Overflow {
    uint immutable x;
    uint immutable y;

    function add(uint _x, uint _y) internal pure returns (uint) {
        return _x + _y;
    }

    constructor(uint _x, uint _y) {
        (x, y) = (_x, _y);
    }

    function stateAdd() public view returns (uint) {
        return add(x, y);
    }
}