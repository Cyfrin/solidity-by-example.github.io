// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

// Uniswap V4 PoolManager on Ethereum mainnet
address constant POOL_MANAGER = 0x000000000004444c5dc75cB358380D2e3dE08A90;

/// @notice Example of flash loans on Uniswap V4
/// @dev V4 flash loans are FREE due to flash accounting - no fees!
/// Borrow tokens during unlock callback, repay before callback ends
contract UniswapV4Flash is IUnlockCallback {
    IPoolManager public immutable poolManager;

    error NotPoolManager();
    error FlashLoanFailed();

    constructor() {
        poolManager = IPoolManager(POOL_MANAGER);
    }

    /// @notice Execute a flash loan
    /// @param currency The token to borrow (use address(0) for native ETH)
    /// @param amount Amount to borrow
    /// @param data Arbitrary data to pass to your flash loan logic
    function flash(Currency currency, uint256 amount, bytes calldata data)
        external
    {
        bytes memory callbackData = abi.encode(
            FlashParams({
                currency: currency,
                amount: amount,
                sender: msg.sender,
                data: data
            })
        );

        poolManager.unlock(callbackData);
    }

    /// @notice Callback from PoolManager - execute flash loan logic here
    function unlockCallback(bytes calldata callbackData)
        external
        override
        returns (bytes memory)
    {
        if (msg.sender != address(poolManager)) revert NotPoolManager();

        FlashParams memory params = abi.decode(callbackData, (FlashParams));

        // Take tokens from the pool (creates a debt)
        poolManager.take(params.currency, address(this), params.amount);

        // ============================================
        // Your flash loan logic goes here!
        // You now have the borrowed tokens to use
        // ============================================

        // Example: call custom logic
        _executeFlashLoanLogic(params.currency, params.amount, params.data);

        // ============================================
        // Repay the flash loan
        // ============================================

        // For ERC20: transfer tokens to PoolManager, then settle
        if (!isNative(params.currency)) {
            IERC20(Currency.unwrap(params.currency)).transfer(
                address(poolManager),
                params.amount
            );
            poolManager.settle(params.currency);
        } else {
            // For native ETH: settle with value
            poolManager.settle{value: params.amount}(params.currency);
        }

        // No fees! Delta is now zero, unlock will succeed
        return bytes("");
    }

    /// @notice Override this to implement your flash loan logic
    function _executeFlashLoanLogic(
        Currency currency,
        uint256 amount,
        bytes memory data
    ) internal virtual {
        // Example: arbitrage, liquidation, collateral swap, etc.
        // The borrowed tokens are in this contract
    }

    function isNative(Currency currency) internal pure returns (bool) {
        return Currency.unwrap(currency) == address(0);
    }

    // Allow receiving ETH
    receive() external payable {}

    struct FlashParams {
        Currency currency;
        uint256 amount;
        address sender;
        bytes data;
    }
}

// Currency is an address wrapper (address(0) = native ETH)
type Currency is address;

library CurrencyLibrary {
    function unwrap(Currency currency) internal pure returns (address) {
        return Currency.unwrap(currency);
    }
}

using CurrencyLibrary for Currency;

interface IPoolManager {
    function unlock(bytes calldata data) external returns (bytes memory);
    function settle(Currency currency) external payable returns (uint256);
    function take(Currency currency, address to, uint256 amount) external;
}

interface IUnlockCallback {
    function unlockCallback(bytes calldata data) external returns (bytes memory);
}

interface IERC20 {
    function transfer(address recipient, uint256 amount)
        external
        returns (bool);
    function balanceOf(address account) external view returns (uint256);
}
