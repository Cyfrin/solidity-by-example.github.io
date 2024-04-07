// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./IERC20Permit.sol";

contract ERC20Bank {
    IERC20Permit public immutable token;
    mapping(address => uint256) public balanceOf;

    constructor(address _token) {
        token = IERC20Permit(_token);
    }

    function deposit(uint256 _amount) external {
        token.transferFrom(msg.sender, address(this), _amount);
        balanceOf[msg.sender] += _amount;
    }

    function depositWithPermit(
        address owner,
        address recipient,
        uint256 amount,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external {
        token.permit(owner, address(this), amount, deadline, v, r, s);
        token.transferFrom(owner, address(this), amount);
        balanceOf[recipient] += amount;
    }

    function withdraw(uint256 _amount) external {
        balanceOf[msg.sender] -= _amount;
        token.transfer(msg.sender, _amount);
    }
}
