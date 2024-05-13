// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// Memory layout
// array of length 2**256 (32 bytes), each element stores 1 byte (0x00 to 0xff)
// index     0    1    2   ...   0xfff...fff = 2**256 - 1
// memory | 00 | 00 | 00 | ... | 00 |

// Reserved slots
// 0x00 - 0x3f (64 bytes): scratch space for hashing methods
// 0x40 - 0x5f (32 bytes): free memory pointer - pointer to next available location in memory to store data
// 0x60 - 0x7f (32 bytes): zero slot - used as initial value for dynamic memory arrays and should never be written to

// Free memory pointer (0x40)
// 0x80 = Free memory pointer initially points here
contract MemBasic {
    // mstore(p, v) = store 32 bytes to memory starting at memory location p
    // mload(p) = load 32 bytes from memory starting at memory location p
    function test_1() public pure returns (bytes32 b32) {
        assembly {
            // Free memory pointer
            // p = 0x80
            let p := mload(0x40)
            mstore(p, 0xababab)
            b32 := mload(p)
        }
    }

    function test_2() public pure {
        assembly {
            mstore(0, 0x11)
            // index: 32 bytes of data stored in memory from index
            //  0x00: 0x0000000000000000000000000000000000000000000000000000000000000011
            mstore(1, 0x22)
            //           0 1
            //  0x00: 0x0000000000000000000000000000000000000000000000000000000000000000
            //  0x20: 0x2200000000000000000000000000000000000000000000000000000000000000
            mstore(2, 0x33)
            //           0 1 2
            //  0x00: 0x0000000000000000000000000000000000000000000000000000000000000000
            //  0x20: 0x0033000000000000000000000000000000000000000000000000000000000000
            mstore(3, 0x44)
            //           0 1 2 3
            //  0x00: 0x0000000000000000000000000000000000000000000000000000000000000000
            //  0x20: 0x0000440000000000000000000000000000000000000000000000000000000000
        }
    }
}

contract MemStruct {
    // Memory data is not packed - all data stored in chunks of 32 bytes
    struct Point {
        uint256 x;
        uint32 y;
        uint32 z;
    }

    function test_read()
        public
        pure
        returns (uint256 x, uint256 y, uint256 z)
    {
        // Point is loaded to memory starting at 0x80
        // 0x80 = initial free memory
        Point memory p = Point(1, 2, 3);

        assembly {
            // load 32 bytes starting from 0x80
            x := mload(0x80)
            // load 32 bytes starting from 0xa0 (0x80 + 32 = 0xa0)
            y := mload(0xa0)
            // load 32 bytes starting from 0xc0 (0xa0 + 32 = 0xc0)
            z := mload(0xc0)
        }
    }

    function test_write()
        public
        pure
        returns (bytes32 free_mem_ptr, uint256 x, uint256 y, uint256 z)
    {
        // Allocates memory 0x80 to 0xdf to Point
        // Free memory pointer = 0xdf + 1 = 0xe0
        Point memory p;

        // Write
        assembly {
            // store to 0x80
            mstore(p, 11)
            // store to 0xa0
            mstore(add(p, 0x20), 22)
            // store to 0xc0
            mstore(add(p, 0x40), 33)
            // 0xe0
            free_mem_ptr := mload(0x40)
        }

        x = p.x;
        y = p.y;
        z = p.z;
    }
}

contract MemFixedArray {
    function test_read()
        public
        pure
        returns (uint256 a0, uint256 a1, uint256 a2)
    {
        // arr is loaded to memory starting at 0x80
        // Each array element is stored as 32 bytes
        uint32[3] memory arr = [uint32(1), uint32(2), uint32(3)];

        assembly {
            a0 := mload(0x80)
            a1 := mload(0xa0)
            a2 := mload(0xc0)
        }
    }

    function test_write()
        public
        pure
        returns (uint256 a0, uint256 a1, uint256 a2)
    {
        uint32[3] memory arr;

        assembly {
            // 0x80
            mstore(arr, 11)
            // 0xa0
            mstore(add(arr, 0x20), 22)
            // 0xc0
            mstore(add(arr, 0x40), 33)
        }

        a0 = arr[0];
        a1 = arr[1];
        a2 = arr[2];
    }
}

contract MemDynamicArray {
    function test_read()
        public
        pure
        returns (uint256 len, uint256 a0, uint256 a1, uint256 a2)
    {
        uint256[] memory arr = new uint256[](5);
        arr[0] = uint256(11);
        arr[1] = uint256(22);
        arr[2] = uint256(33);
        arr[3] = uint256(44);
        arr[4] = uint256(55);

        assembly {
            // 0x80
            len := mload(arr)
            // 0xa0
            a0 := mload(add(arr, 0x20))
            // 0xc0
            a1 := mload(add(arr, 0x40))
            // 0xe0
            a2 := mload(add(arr, 0x60))
        }
    }

    function test_write() public pure returns (uint256[] memory) {
        uint256[] memory arr;

        assembly {
            // Store length of arr
            mstore(arr, 3)
            // Store 1, 2, 3
            mstore(add(arr, 0x20), 11)
            mstore(add(arr, 0x40), 22)
            mstore(add(arr, 0x60), 33)
            // Update free memory pointer
            mstore(0x40, add(arr, 0x80))
        }

        // Data will be ABI encoded when arr is returned to caller
        return arr;
    }
}

contract MemInternalFuncReturn {
    function internal_func_return_val() private pure returns (uint256) {
        return uint256(0xababab);
    }

    function test_val() public pure {
        // 0xababab will be stored in top of the stack
        internal_func_return_val();
    }

    function internal_func_return_mem()
        private
        pure
        returns (bytes32[] memory)
    {
        bytes32[] memory arr = new bytes32[](3);
        arr[0] = bytes32(uint256(0xaaa));
        arr[1] = bytes32(uint256(0xbbb));
        arr[2] = bytes32(uint256(0xccc));
        return arr;
    }

    function test_mem()
        public
        pure
        returns (uint256 len, bytes32 a0, bytes32 a1, bytes32 a2)
    {
        // Stores 0x80 to top of the stack
        // 0x80 = memory pointer to beginning of arr
        internal_func_return_mem();
        // Read data from arr, initialized in internal_func_return_mem, using assembly
        assembly {
            len := mload(0x80)
            a0 := mload(0xa0)
            a1 := mload(0xc0)
            a2 := mload(0xe0)
        }
    }
}

contract ABIEncode {
    // js code to split string into chunks of length 64
    // str.match(/.{1,64}/g)

    // Value types < 32 bytes -> zero padded on the left side
    // 0x000000000000000000000000abababababababababababababababababababab
    function encode_addr() public pure returns (bytes memory) {
        address addr = 0xABaBaBaBABabABabAbAbABAbABabababaBaBABaB;
        return abi.encode(addr);
    }

    // Fixed sized bytes -> zero padded on the righ side
    // 0xaabbccdd00000000000000000000000000000000000000000000000000000000
    function encode_bytes4() public pure returns (bytes memory) {
        bytes4 b4 = 0xaabbccdd;
        return abi.encode(b4);
    }

    // Dynamic size types
    // offset | length | data
    // offset = 32 bytes index where data starts
    // length = 32 bytes data length

    // 0x0000000000000000000000000000000000000000000000000000000000000020
    //   0000000000000000000000000000000000000000000000000000000000000003
    //   ababab0000000000000000000000000000000000000000000000000000000000
    function enode_bytes() public pure returns (bytes memory) {
        bytes memory b = new bytes(3);
        b[0] = 0xab;
        b[1] = 0xab;
        b[2] = 0xab;
        return abi.encode(b);
    }

    // 0x0000000000000000000000000000000000000000000000000000000000000020
    //   0000000000000000000000000000000000000000000000000000000000000003
    //   0000000000000000000000000000000000000000000000000000000000000001
    //   0000000000000000000000000000000000000000000000000000000000000002
    //   0000000000000000000000000000000000000000000000000000000000000003
    function enode_uint8_arr() public pure returns (bytes memory) {
        uint8[] memory a = new uint8[](3);
        a[0] = 1;
        a[1] = 2;
        a[2] = 3;
        return abi.encode(a);
    }

    // Fixed size arrays
    // 0x0000000000000000000000000000000000000000000000000000000000000001
    //   0000000000000000000000000000000000000000000000000000000000000002
    //   0000000000000000000000000000000000000000000000000000000000000003
    function enode_uint256_fixed_size_arr()
        public
        pure
        returns (bytes memory)
    {
        uint8[3] memory a;
        a[0] = 1;
        a[1] = 2;
        a[2] = 3;
        return abi.encode(a);
    }

    // Struct
    struct Point {
        uint256 x;
        uint128 y;
        uint128 z;
    }

    // 0x0000000000000000000000000000000000000000000000000000000000000001
    //   0000000000000000000000000000000000000000000000000000000000000002
    //   0000000000000000000000000000000000000000000000000000000000000003
    function encode_struct() public pure returns (bytes memory) {
        Point memory p = Point(1, 2, 3);
        return abi.encode(p);
    }

    // Dynamic sized array of structs
    // offset | length | struct data
    // 0x0000000000000000000000000000000000000000000000000000000000000020
    //   0000000000000000000000000000000000000000000000000000000000000003
    //   0000000000000000000000000000000000000000000000000000000000000001
    //   0000000000000000000000000000000000000000000000000000000000000002
    //   0000000000000000000000000000000000000000000000000000000000000003
    //   0000000000000000000000000000000000000000000000000000000000000004
    //   0000000000000000000000000000000000000000000000000000000000000005
    //   0000000000000000000000000000000000000000000000000000000000000006
    //   0000000000000000000000000000000000000000000000000000000000000007
    //   0000000000000000000000000000000000000000000000000000000000000008
    //   0000000000000000000000000000000000000000000000000000000000000009
    function encode_struct_array() public pure returns (bytes memory) {
        Point[] memory arr = new Point[](3);
        arr[0] = Point(1, 2, 3);
        arr[1] = Point(4, 5, 6);
        arr[2] = Point(7, 8, 9);
        return abi.encode(arr);
    }
}

contract MemReturn {
    function test_return_vals() public pure returns (uint256, uint256) {
        // return(start, len) - Halt execution and return data stored in memory from start to start + len
        assembly {
            mstore(0x80, 11)
            mstore(0xa0, 22)
            return(0x80, 0x40)
        }
    }

    function test_return_dyn_arr() public pure returns (uint256[] memory) {
        // ABI encode uint256[] array with 3 elements 11, 22 and 33
        assembly {
            // offset
            mstore(0x80, 0x20)
            // length
            mstore(add(0x80, 0x20), 3)
            // array elements
            mstore(add(0x80, 0x40), 11)
            mstore(add(0x80, 0x60), 22)
            mstore(add(0x80, 0x80), 33)
            // No need to update free memory pointer - function execution ends here
            return(0x80, mul(5, 0x20))
        }
    }

    function test_return() public pure returns (uint256, uint256) {
        // Returns (11, 22)
        test_return_vals();
        // This code will never execute
        return (333, 444);
    }
}

contract MemRevert {
    function test_revert() public pure {
        // revert(start, len) - Revert executin and return data store in memory from start to start + len
        assembly {
            mstore(0x80, "ERROR HERE")
            revert(0x80, 0x20)
        }
    }
}

contract MemKeccak {
    function test_keccak() public pure returns (bytes32) {
        // keccak256(start, len) - Keccak256 from data in memory from start to start + len
        assembly {
            mstore(0x80, 1)
            mstore(0xa0, 2)

            let h := keccak256(0x80, 0x40)
            mstore(0xc0, h)

            return(0xc0, 0x20)
        }
    }

    function keccak() public pure returns (bytes32) {
        return keccak256(abi.encodePacked(uint256(1), uint256(2)));
    }
}

contract Target {
    function return_uint256(uint256 x) public pure returns (uint256) {
        return x;
    }

    function return_bytes(uint256 n) public pure returns (bytes memory) {
        bytes memory out = new bytes(n);
        for (uint256 i; i < n; i++) {
            out[i] = 0xab;
        }
        return out;
    }

    function return_uint256_arr(uint256 n)
        public
        pure
        returns (uint256[] memory)
    {
        uint256[] memory out = new uint256[](n);
        for (uint256 i = 0; i < n; i++) {
            out[i] = i + 1;
        }
        return out;
    }
}

// calldatacopy(p, start, size) - Copy start to start + size calldata to memory starting at pointer p
// returndatasize - Get size of returned data from call, staticcall or delegatecall
// returndatacopy(p, start, size) - Copy start to start + size return data to memory starting at pointer p
// call(g, a, v, in, in_size, out, out_size)
// - call contract at a, use max g gas, send v wei
// - with input from memory in to in + in_size
// - use memory out to out + out_size for output
// staticcall(g, a, in, in_size, out, out_size) - read only version of call
contract YulStaticCall {
    function test_staticcall(address a, bytes calldata data) public view {
        assembly {
            let p := mload(0x40)
            // Copy calldata to memory
            calldatacopy(p, data.offset, data.length)
            // No need to update free memory pointer?
            // mstore(0x40, add(p, data.length))

            let ok := staticcall(gas(), a, p, data.length, 0, 0)

            if iszero(ok) { revert(0, 0) }

            // p := mload(0x40)
            let return_data_size := returndatasize()
            // Copy returned data to memory
            // Is it safe to overwrite memory that was used for inputs?
            returndatacopy(p, 0, return_data_size)
            return(p, return_data_size)
        }
    }

    function test_abi_decode_uint256(address a, bytes calldata data)
        public
        view
        returns (uint256)
    {
        test_staticcall(a, data);
    }

    function test_abi_decode_bytes(address a, bytes calldata data)
        public
        view
        returns (bytes memory)
    {
        test_staticcall(a, data);
    }

    function test_abi_decode_uint256_arr(address a, bytes calldata data)
        public
        view
        returns (uint256[] memory)
    {
        test_staticcall(a, data);
    }

    function test_staticcall_return_abi_encoded_bytes(
        address addr,
        bytes calldata data
    ) public view returns (bytes memory out, uint256 return_data_size) {
        assembly {
            let p := mload(0x40)
            // Copy calldata to memory
            calldatacopy(p, data.offset, data.length)
            // Update free memory pointer
            mstore(0x40, add(p, data.length))

            let ok := staticcall(gas(), addr, p, data.length, 0, 0)

            if iszero(ok) { revert(0, 0) }

            // return_data_size = 32  for calling Target.f -> uint256
            //                  = 96  for calling Target.g -> bytes[] (32 offset, 32 length, 3 bytes padded to 32)
            //                  = 160 for calling Target.h -> uint256[] (32 offset, 32 length, 32 x 3 elements)
            return_data_size := returndatasize()
            // Store length of return data to out
            // pointer to out = 0x60 (zero slot)
            // TODO: safe to write to zero slot?
            mstore(out, return_data_size)
            // Copy return data to out
            returndatacopy(add(out, 0x20), 0, return_data_size)
            // Update free memory pointer
            mstore(0x40, add(out, add(0x20, return_data_size)))
        }
    }
}

contract Counter {
    uint256 public count;

    function inc() public returns (uint256) {
        count += 1;
        return count;
    }
}

contract YulCall {
    function test_call(address a, bytes memory data)
        public
        payable
        returns (bytes memory out)
    {
        bytes32 data_ptr;
        bytes32 out_ptr;
        assembly {
            // 0x80
            data_ptr := data
            // 0x60
            out_ptr := out

            let data_size := mload(data)
            let data_start := add(data, 0x20)
            let ok := call(gas(), a, callvalue(), data_start, data_size, 0, 0)

            if iszero(ok) { revert(0, 0) }

            let return_data_size := returndatasize()
            // Store length of return data to out
            mstore(out, return_data_size)
            // Copy return data to out
            returndatacopy(add(out, 0x20), 0, return_data_size)
            // Update free memory pointer
            mstore(0x40, add(out, add(0x20, return_data_size)))
        }
    }

    function test_inc(address counter) public returns (uint256 count) {
        bytes memory res = test_call(counter, abi.encodeCall(Counter.inc, ()));
        count = abi.decode(res, (uint256));
    }
}

// Memory expansion gas cost
// Gas cost is quadratic to memory allocation.
contract MemExp {
    function alloc_mem(uint256 n) external view returns (uint256) {
        uint256 gas_start = gasleft();
        uint256[] memory arr = new uint256[](n);
        uint256 gas_end = gasleft();
        return gas_start - gas_end;
    }
}

// arr size | gas
//        0 |    120
//        1 |    178
//       10 |    232
//       20 |    293
//       30 |    354
//       40 |    415
//       50 |    477
//       60 |    540
//       70 |    602
//       80 |    666
//       90 |    729
//      100 |    793
//      110 |    857
//      120 |    922
//      130 |    987
//      140 |   1053
//      150 |   1118
//      160 |   1185
//      170 |   1251
//      180 |   1318
//      190 |   1386
//      200 |   1454

//     1000 |   8144
//     2000 |  20023
//     3000 |  35808
//     4000 |  55500
//     5000 |  79097
//     6000 | 106601
//     7000 | 138011
//     8000 | 173328
//     9000 | 212550
//    10000 | 255679
//    11000 | 302715
//    12000 | 353656
//    13000 | 408504
//    14000 | 467257
//    15000 | 529918
//    16000 | 596484
//    17000 | 666957
//    18000 | 741336
//    19000 | 819621
//    20000 | 901812
