// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract TransientStorage {
    // TODO: get key hash
    uint256 constant KEY = 1;

    uint256 public count;

    modifier lock() {
        assembly {
            if tload(KEY) { revert(0, 0) }
            tstore(KEY, 1)
        }
        _;
        assembly {
            tstore(KEY, 0)
        }
    }

    function inc() public lock {
        // Some code here
        count += 1;
    }
}

contract Counter {
    uint256 public count;
    bool private locked;

    modifier lock() {
        require(!locked, "locked");
        locked = true;
        _;
        locked = false;
    }

    function inc() public lock {
        // Some code here
        count += 1;
    }
}
