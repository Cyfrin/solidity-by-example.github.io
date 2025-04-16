// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {IERC20} from "./IERC20.sol";

contract Auth {
    mapping(address => bool) public authorized;

    modifier auth() {
        require(authorized[msg.sender], "not authorized");
        _;
    }

    constructor() {
        authorized[msg.sender] = true;
    }

    function allow(address user) external auth {
        authorized[user] = true;
    }

    function deny(address user) external auth {
        authorized[user] = false;
    }
}

contract TokenLock is Auth {
    struct Lock {
        // Locked amount
        uint256 amount;
        // Last lock timestamp
        uint32 updatedAt;
        // Lock expiry timestamp
        uint32 expiresAt;
        // Lock duration
        uint32 duration;
    }

    mapping(address => Lock) public locks;
    mapping(address => uint256) public freed;

    function get(address token) external view returns (Lock memory) {
        return locks[token];
    }

    function set(address token, uint32 duration) external auth {
        locks[token].duration = duration;
    }

    function unlocked(address token) public view returns (uint256) {
        Lock memory l = locks[token];
        // block.timestamp >= expiresAt >= updatedAt
        // block.timestamp >= updateAt >= expiresAt
        if (block.timestamp >= l.expiresAt) {
            return l.amount;
        }
        // expiresAt > block.timestamp >= updateAt
        return l.amount * (block.timestamp - uint256(l.updatedAt))
            / uint256(l.expiresAt - l.updatedAt);
    }

    function claimable(address token) public view returns (uint256) {
        return freed[token] + unlocked(token);
    }

    function lock(address token, uint256 amount) external auth {
        uint256 free = unlocked(token);

        Lock storage l = locks[token];
        l.amount -= free;
        l.updatedAt = uint32(block.timestamp);
        l.expiresAt = uint32(block.timestamp) + l.duration;
        freed[token] += free;

        if (amount > 0) {
            IERC20(token).transferFrom(msg.sender, address(this), amount);
            l.amount += amount;
        }
    }

    function unlock(address token) external auth returns (uint256 amount) {
        uint256 free = unlocked(token);

        Lock storage l = locks[token];
        l.amount -= free;
        l.updatedAt = uint32(block.timestamp);

        amount = freed[token] + free;
        freed[token] = 0;

        if (amount > 0) {
            IERC20(token).transfer(msg.sender, amount);
        }
    }

    function sync(address token) external auth {
        uint256 reserved = freed[token] + locks[token].amount;
        uint256 bal = IERC20(token).balanceOf(address(this));
        if (bal > reserved) {
            IERC20(token).transfer(msg.sender, bal - reserved);
        }
    }
}
