// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/*
echidna TestEchidna.sol --contract TestCounter
*/
contract Counter {
    uint256 public count;

    function inc() external {
        count += 1;
    }

    function dec() external {
        count -= 1;
    }
}

contract TestCounter is Counter {
    function echidna_test_true() public view returns (bool) {
        return true;
    }

    function echidna_test_false() public view returns (bool) {
        return false;
    }

    function echidna_test_count() public view returns (bool) {
        // Here we are testing that Counter.count should always be <= 5.
        // Test will fail. Echidna is smart enough to call Counter.inc() more
        // than 5 times.
        return count <= 5;
    }
}

/*
echidna TestEchidna.sol --contract TestAssert --test-mode assertion
*/
contract TestAssert {
    function test_assert(uint256 _i) external {
        assert(_i < 10);
    }

    // More complex example
    function abs(uint256 x, uint256 y) private pure returns (uint256) {
        if (x >= y) {
            return x - y;
        }
        return y - x;
    }

    function test_abs(uint256 x, uint256 y) external {
        uint256 z = abs(x, y);
        if (x >= y) {
            assert(z <= x);
        } else {
            assert(z <= y);
        }
    }
}
