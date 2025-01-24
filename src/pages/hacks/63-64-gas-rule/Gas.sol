// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract A {
    function f(address b) external {
        uint256 gasStart = gasleft();
        B(payable(b)).g(msg.sender, gasStart);
    }
}

contract B {
    event Log(uint256 gas);

    mapping(address => bool) public authorized;

    constructor() {
        authorized[msg.sender] = true;
    }

    receive() external payable {}

    function setAuth(address addr, bool auth) external {
        require(authorized[msg.sender], "not authorized");
        authorized[addr] = auth;
    }

    // Send 9000000000000000000 gas to drain ETH
    function g(address receiver, uint256 gasStart) external {
        require(authorized[msg.sender], "not authorized");

        uint256 gasNow = gasleft();
        uint256 gasUsed = gasStart - gasNow;
        // Fix
        //uint256 gasUsed = gasStart - (gasNow / 63) - gasNow;
        (bool ok,) = receiver.call{value: gasUsed}("");
        require(ok, "send failed");

        emit Log(gasUsed);
    }
}

/*
# 63 / 64 gas rule
External calls receive max 63 / 64 of gas left in current contract
1 / 64 gas is kept in the current contract

g0 = call to gasleft() somewhere in A
g1 = call to gasleft() somewhere in B
g* = Actual gas left immediately before call to B

  g*    63/64 g*
A |---->| B
|         |
g0        g1

# Gas used
dg = gas used between g0 and g1
   = g0 - g* + 63/64 g* - g1
   = g0 - g1 - 1/64 g* >= 0

# Problem
- Refund of g0 - g1 over pays by 1/64 g*
- g* can be large by sending large amount of gas

# Fix
g1 <= 63/64 g* <= g0
g1/63 <= 1/64 g* <= g0/63
g0 - g1 - g1/63 >= g0 - g1 - 1/64 g* >= g0 - g1 - 1/63 g0 = 62/63 g0 - g1
                                     >= 0

Refund g0 - g1 - g1/63
*/
