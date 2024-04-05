// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract EVMStorage {
    // Intro (list topics)
    // NOTE: Yul syntax

    // NOTE: Yul assignment
    function test_yul_var() public pure returns (uint256) {
        uint256 s = 0;

        assembly {
            // Declare variable
            let x := 1
            // Reassign
            x := 2
            // Assign to Solidity variable
            s := 2
        }

        return s;
    }

    // NOTE: Yul if
    function test_if_(uint256 x) public pure returns (uint256) {
        uint256 z;
        assembly {
            if x { z := 11 }
        }
        return z;
    }

    // NOTE: Yul types (everything is bytes32)
    function test_yul_types() public pure returns (bool, uint256, bytes32) {
        bool x;
        uint256 y;
        bytes32 z;

        assembly {
            x := 1
            y := 0xaaa
            z := "Hello Yul"
        }

        return (x, y, z);
    }
}

contract YulStorageSingleSlot {
    // NOTE:
    // 2**256 slots, each slot can store 32 bytes
    // Slots are assigned in the order they are declared
    // TODO: how is data packed for bytes?
    // Data < 32 bytes are packed into a slot (right to left?)
    // Struct
    // TODO: Constants don't use storage
    // sstore, sload

    // Single variable stored in one slot
    // slot 0
    uint256 public s_x;
    // slot 1
    uint256 public s_y;
    // slot 2
    bytes32 public s_z;

    function test_sstore() public {
        assembly {
            sstore(0, 111)
            sstore(1, 222)
            sstore(2, 0xababab)
        }
    }

    function test_sstore_again() public {
        assembly {
            sstore(s_x.slot, 123)
            sstore(s_y.slot, 456)
            sstore(s_z.slot, 0xcdcdcd)
        }
    }

    function test_sload() public view returns (uint256, uint256, bytes32) {
        uint256 x;
        uint256 y;
        bytes32 z;

        assembly {
            x := sload(0)
            y := sload(1)
            z := sload(2)
        }

        return (x, y, z);
    }

    function test_sload_again()
        public
        view
        returns (uint256, uint256, bytes32)
    {
        uint256 x;
        uint256 y;
        bytes32 z;

        assembly {
            x := sload(s_x.slot)
            y := sload(s_y.slot)
            z := sload(s_z.slot)
        }

        return (x, y, z);
    }
}

// TODO: bit masking

contract YulStoragePackedSlot {
    // Data < 32 bytes are packed into a slot
    // Bit masking (how to create 111...111)
    // slot, offset

    // slot 0
    uint128 public s_a;
    uint64 public s_b;
    uint32 public s_c;
    uint32 public s_d;
    // slot 1
    // 20 bytes = 160 bits
    address public s_addr;
    // 96 bits
    uint64 public s_x;
    uint32 public s_y;

    function test_sstore() public {
        bytes32 v;

        assembly {
            // Load 32 bytes from slot0
            v := sload(0)

            // s_d | s_c | s_b | s_a
            // 32  | 32  | 64  | 128 bits

            // Set s_a = 1
            // mask = all 1s at and to the left of 128 bit counting from right
            //        111 ... 111 | 000 ... 000
            //                    |    128 bits
            let mask_a := not(sub(shl(128, 1), 1))
            // Set left most 128 bits to 0
            v := and(v, mask_a)
            // Set s_a = 1
            v := or(v, 1)

            // Set s_b = 2
            // mask = 111...111 | 000 ... 000 | 111 ... 111
            //                  |     64 bits |    128 bits
            let mask_b := not(shl(128, sub(shl(64, 1), 1)))
            // Clear previous value of s_b by setting bits (128 to 191 bits) to 0
            v := and(v, mask_b)
            v := or(v, shl(128, 2))

            // Set s_c = 3
            // mask = 111...111 | 000...000 | 111 ... 111 | 111 ... 111
            //                  |   32 bits |     64 bits |    128 bits
            let mask_c := not(shl(192, sub(shl(32, 1), 1)))
            // Clear previous value of s_c by setting bits (192 to 223 bits) to 0
            v := and(v, mask_c)
            v := or(v, shl(192, 3))

            // Set s_d = 4
            // mask = 000...000 | 111...111 | 111 ... 111 | 111 ... 111
            //                  |   32 bits |     64 bits |    128 bits
            let mask_d := not(shl(224, sub(shl(32, 1), 1)))
            // Clear previous value of s_d by setting bits (224 to 255 bits) to 0
            v := and(v, mask_d)
            v := or(v, shl(224, 4))

            // Store new value to slot0
            sstore(0, v)
        }
    }

    // TODO: offset
    // slot and offset
    function test_sstore_again() public {
        bytes32 v;

        assembly {
            // Load 32 bytes from slot0
            v := sload(s_a.slot)

            // s_d | s_c | s_b | s_a
            // 32  | 32  | 64  | 128 bits

            // Set s_a = 11
            // mask = all 1s at and to the left of 128 bit counting from right
            //        111 ... 111 | 000 ... 000
            //                    |    128 bits
            let mask_a := not(sub(shl(128, 1), 1))
            // Set left most 128 bits to 0
            v := and(v, mask_a)
            // Set s_a = 1
            v := or(v, 11)

            // Set s_b = 22
            // mask = 111...111 | 000 ... 000 | 111 ... 111
            //                  |     64 bits |    128 bits
            let mask_b := not(shl(128, sub(shl(64, 1), 1)))
            // Clear previous value of s_b by setting bits (128 to 191 bits) to 0
            v := and(v, mask_b)
            v := or(v, shl(128, 22))

            // Set s_c = 33
            // mask = 111...111 | 000...000 | 111 ... 111 | 111 ... 111
            //                  |   32 bits |     64 bits |    128 bits
            let mask_c := not(shl(192, sub(shl(32, 1), 1)))
            // Clear previous value of s_c by setting bits (192 to 223 bits) to 0
            v := and(v, mask_c)
            v := or(v, shl(192, 33))

            // Set s_d = 44
            // mask = 000...000 | 111...111 | 111 ... 111 | 111 ... 111
            //                  |   32 bits |     64 bits |    128 bits
            let mask_d := not(shl(224, sub(shl(32, 1), 1)))
            // Clear previous value of s_d by setting bits (224 to 255 bits) to 0
            v := and(v, mask_d)
            v := or(v, shl(224, 44))

            // Store new value to slot0
            sstore(s_a.slot, v)
        }
    }
}

// Struct
contract YulStorageStruct {
    struct SingleSlot {
        uint128 x;
        uint64 y;
        uint64 z;
    }

    struct MultipleSlots {
        uint256 a;
        uint256 b;
        uint256 c;
    }

    // slot 0
    SingleSlot public single;
    // slot 1, 2, 3
    MultipleSlots public multi;

    // TODO: access
}

// contract YulStorageFixedArray {
//     // slot + index
//     uint256[3] private arr_0 = [1, 2, 3];
//     // slot + packed index
//     uint128[3] private arr_1 = [4, 5, 6];

//     function test_arr_0() public {
//         uint256 v;
//         assembly {
//             let i := 1
//             v := sload(add(0, i))
//         }

//         console2.log("v", v);
//     }

//     function test_arr_1() public {
//         bytes32 b32;
//         assembly {
//             let i := 0
//             // slots 0, 1, 2 used by arr_0
//             b32 := sload(add(3, i))
//         }

//         console2.logBytes32(b32);
//     }
// }

// storage dynamic array
// mapping
// nested mapping
// memory
// - keccack256 in memory

// contract YulStorageDynamicArrays {
//     // slot = keccak256(slot) + index
//     uint256[] private arr = [1, 2, 3];

// TODO: where is length stored?
//     function test_arr() public {
//         uint256 slot = 0;
//         bytes32 start = keccak256(abi.encode(slot));
//         uint256 v;

//         assembly {
//             sstore(add(start, 1), 22)
//         }

//         assembly {
//             v := sload(add(start, 1))
//         }

//         console2.log("v", v, arr[1]);
//     }
// }

// contract Mapping {
//     // location = keccack256(key, slot)
//     mapping(address => uint256) public map;

//     function test() public {
//         map[address(1)] = 2;

//         uint256 key = uint256(uint160(address(1)));
//         uint256 slot = 0;
//         bytes32 loc = keccak256(abi.encode(key, slot));
//         uint256 val;

//         assembly {
//             val := sload(loc)
//         }

//         console2.log("v", val);
//     }
// }

// contract NestedMapping {
//     // key0 => key1 => val
//     // location = keccak256(key1, keccack256(key0, slot))
//     mapping(address => mapping(address => uint256)) public map;

//     function test() public {
//         map[address(1)][address(2)] = 3;

//         uint256 key0 = uint256(uint160(address(1)));
//         uint256 key1 = uint256(uint160(address(2)));
//         uint256 slot = 0;

//         bytes32 loc =
//             keccak256(abi.encode(key1, keccak256(abi.encode(key0, slot))));
//         uint256 val;

//         assembly {
//             val := sload(loc)
//         }

//         console2.log("v", val);
//     }
// }

// contract MappingArray {
//     // mapping -> keccak256(key, slot)
//     // array -> keccak256(slot) + index
//     // mapping -> array -> keccak256(keccak256(key, 0)) + index

//     mapping(address => uint256[]) public map;

//     function test() public {
//         map[address(0xa)].push(1);
//         map[address(0xa)].push(2);
//         map[address(0xa)].push(3);
//         map[address(0xa)].push(4);
//         map[address(0xa)].push(5);

//         address map_key = address(0xa);
//         uint256 arr_index = 1;

//         uint256 map_slot = 0;
//         bytes32 map_hash = keccak256(abi.encode(map_key, map_slot));
//         bytes32 arr_hash = keccak256(abi.encode(map_hash));

//         uint256 val;
//         uint256 len;

//         assembly {
//             len := sload(map_hash)
//             val := sload(add(arr_hash, arr_index))
//         }

//         console2.log("len", len);
//         console2.log("v", val);
//     }
// }

// TODO:
// - return func output
// - revert
// - create contract
// - keccak256
contract YulMem {}
