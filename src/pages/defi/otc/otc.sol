// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract TokenExchange {
    address fromAddress;
    address fromToken;
    uint256 fromAmount;
    address toToken;
    uint256 toAmount;

    function CreateExchange(address _fromToken, address _toToken, uint256 _fromAmount, uint256 _toAmount) public {
        IERC20(_fromToken).transferFrom(msg.sender, address(this), _fromAmount);
        fromAddress = msg.sender;
        fromToken = _fromToken;
        fromAmount = _fromAmount;
        toToken = _toToken;
        toAmount = _toAmount;
    }

    function DoChange() public {
        IERC20(toToken).transferFrom(msg.sender, address(this), toAmount);
        IERC20(fromToken).transfer(msg.sender, fromAmount);
        IERC20(toToken).transfer(fromAddress, toAmount);
    }
}

interface IERC20 {
    function totalSupply() external view returns (uint256);

    function balanceOf(address who) external view returns (uint256);

    function allowance(address owner, address spender) external view returns (uint256);

    function transfer(address to, uint256 value) external returns (bool);

    function approve(address spender, uint256 value) external returns (bool);

    function transferFrom(address from, address to, uint256 value) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);

    event Approval(address indexed owner, address indexed spender, uint256 value);
}