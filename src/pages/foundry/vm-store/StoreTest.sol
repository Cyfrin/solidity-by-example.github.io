// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {Test, console2} from "forge-std/Test.sol";

contract Vault {
    // Slot 0
    address public owner;
    // Slot 1
    uint256 public password;
    // Slot 2
    mapping(address => uint256) public balances;

    constructor(uint256 _password) {
        owner = msg.sender;
        password = _password;
    }

    function withdraw() external {
        require(msg.sender == owner, "not owner");
        uint256 bal = balances[msg.sender];
        balances[msg.sender] = 0;
        payable(msg.sender).transfer(bal);
    }
}

contract StoreTest is Test {
    Vault vault;

    function setUp() public {
        vault = new Vault(12345);
    }

    // vm.store(address account, bytes32 slot, bytes32 value)
    // - account: Address of the contract
    // - slot: Storage slot to write to
    // - value: Value to write

    function test_store_simple_slot() public {
        // Slot 0 stores the owner address
        // Change owner to address(1)
        vm.store(address(vault), bytes32(uint256(0)), bytes32(uint256(uint160(address(1)))));
        assertEq(vault.owner(), address(1));

        // Slot 1 stores the password
        // Change password to 999
        vm.store(address(vault), bytes32(uint256(1)), bytes32(uint256(999)));
        assertEq(vault.password(), 999);
    }

    function test_store_mapping() public {
        // For mappings, the slot is calculated as:
        // keccak256(abi.encode(key, mapping_slot))

        address user = address(0xBEEF);
        uint256 mappingSlot = 2; // balances is at slot 2

        // Calculate the storage slot for balances[user]
        bytes32 slot = keccak256(abi.encode(user, mappingSlot));

        // Set balance of user to 100 ether
        vm.store(address(vault), slot, bytes32(uint256(100 ether)));

        assertEq(vault.balances(user), 100 ether);
    }
}
