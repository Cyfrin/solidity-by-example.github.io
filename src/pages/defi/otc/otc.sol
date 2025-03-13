// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract OTC {
    uint256 public counter;

    struct Order {
        address owner;
        address bid_token;
        address ask_token;
        uint bid_amount;
        uint ask_amount;
    }

    Order[] public orders;

    function give(address bid_token, address ask_token, uint bid_amount, uint ask_amount) public {        
        IERC20(bid_token).transferFrom(msg.sender, address(this), bid_amount);        
        orders.push(Order({
            owner: msg.sender,
            bid_token: bid_token,
            ask_token: ask_token,
            bid_amount: bid_amount,
            ask_amount: ask_amount
        }));
    }

    function take(uint id) public {
        IERC20(orders[id].ask_token).transferFrom(msg.sender, orders[id].owner, orders[id].ask_amount);
        IERC20(orders[id].bid_token).transfer(msg.sender, orders[id].bid_amount);
        orders[id].bid_amount = 0;
        orders[id].ask_amount = 0;        
    }

    function withdraw(uint id) public {
        require(msg.sender == orders[id].owner, "Owner mismatch");
        IERC20(orders[id].bid_token).transfer(msg.sender, orders[id].bid_amount);
        orders[id].bid_amount = 0;
        orders[id].ask_amount = 0;
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