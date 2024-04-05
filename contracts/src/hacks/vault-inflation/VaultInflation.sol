// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

uint8 constant DECIMALS = 18;

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount)
        external
        returns (bool);
    function allowance(address owner, address spender)
        external
        view
        returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount)
        external
        returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(
        address indexed owner, address indexed spender, uint256 value
    );
}

contract Token is IERC20 {
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    uint8 public decimals = DECIMALS;

    function transfer(address recipient, uint256 amount)
        external
        returns (bool)
    {
        balanceOf[msg.sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function approve(address spender, uint256 amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount)
        external
        returns (bool)
    {
        allowance[sender][msg.sender] -= amount;
        balanceOf[sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }

    function mint(address dst, uint256 amount) external {
        balanceOf[dst] += amount;
        totalSupply += amount;
        emit Transfer(address(0), dst, amount);
    }

    function burn(uint256 amount) external {
        balanceOf[msg.sender] -= amount;
        totalSupply -= amount;
        emit Transfer(msg.sender, address(0), amount);
    }
}

contract Vault {
    IERC20 public immutable token;

    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;

    constructor(address _token) {
        token = IERC20(_token);
    }

    function _mint(address _to, uint256 _shares) private {
        totalSupply += _shares;
        balanceOf[_to] += _shares;
    }

    function _burn(address _from, uint256 _shares) private {
        totalSupply -= _shares;
        balanceOf[_from] -= _shares;
    }

    // Inflation attack //
    // 1. User 0 deposits 1
    // 2. User 0 donates 100 * 1e18
    // 3. User 1 deposits 100 * 1e18 -> 0 shares minted
    // 4. User 0 withdraws 200 * 1e18 + 1
    //
    // user 1 shares = 100 * 1e18 * 1 / (100 * 1e18 + 1)
    //               = 0
    //
    //    | balance        | user 0 shares | user 1 shares | total supply |
    // 1. |              1 |             1 |             0 |            1 |
    // 2. | 100 * 1e18 + 1 |             1 |             0 |            1 |
    // 3. | 200 * 1e18 + 1 |             1 |             0 |            1 |
    // 4. |              0 |             0 |             0 |            0 |

    function deposit(uint256 amount) external {
        uint256 shares;
        if (totalSupply == 0) {
            shares = amount;
        } else {
            shares = (amount * totalSupply) / token.balanceOf(address(this));
        }

        _mint(msg.sender, shares);
        token.transferFrom(msg.sender, address(this), amount);
    }

    function withdraw(uint256 shares) external returns (uint256) {
        uint256 amount = (shares * token.balanceOf(address(this))) / totalSupply;
        _burn(msg.sender, shares);
        token.transfer(msg.sender, amount);
        return amount;
    }

    function previewRedeem(uint256 shares) external returns (uint256) {
        if (totalSupply == 0) {
            return 0;
        }
        return (shares * token.balanceOf(address(this))) / totalSupply;
    }
}
