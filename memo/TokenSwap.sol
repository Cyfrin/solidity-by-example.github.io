pragma solidity ^0.6.0;

// https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20

/*
- transfer
- approve and transferFrom, allowance is decreased
- decimals

# Create a ERC20 token
Alice send token to Bob
- explain decimal
- transfer (send to wrong address)
- using transfer from
    - Alice approve(bob, 100)
    - Bob transferFrom(alice, 100)

# Use ERC20 token
Alice trades with Bob
- Alice AliceCoin.approve(TokenSwap, 2)
- Bob BobCoin.approve(TokenSwap, 3)
- Alice or Bob calls TokenSwap.swap(2, 3)
- reuse contract using struct
*/
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract TokenSwap {
    IERC20 public token1;
    address public owner1;
    IERC20 public token2;
    address public owner2;

    constructor(
        address _token1,
        address _owner1,
        address _token2,
        address _owner2
    ) public {
        token1 = IERC20(_token1);
        owner1 = _owner1;
        token2 = IERC20(_token2);
        owner2 = _owner2;
    }

    function swap(uint _amount1, uint _amount2) public {
        require(msg.sender == owner1 || msg.sender == owner2, "Not authorized");
        require(token1.allowance(owner1, address(this)) >= _amount1, "Token 1 allowance too low");
        require(token2.allowance(owner2, address(this)) >= _amount2, "Token 2 allowance too low");

        _safeTransferFrom(token1, owner1, owner2, _amount1);
        _safeTransferFrom(token2, owner2, owner1, _amount2);
    }

    function _safeTransferFrom(IERC20 token, address sender, address recipient, uint amount) private {
        bool sent = token.transferFrom(sender, recipient, amount);
        require(sent, "Token transfer failed");
    }
}