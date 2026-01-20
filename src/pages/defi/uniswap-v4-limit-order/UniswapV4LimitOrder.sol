// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

/// @notice Simplified Uniswap V4 Limit Order Hook
/// @dev Hooks allow custom logic to execute during swap lifecycle
/// This example demonstrates a basic limit order mechanism using afterSwap
contract LimitOrderHook is IHooks {
    IPoolManager public immutable poolManager;

    // Mapping: poolId => tick => zeroForOne => total liquidity
    mapping(bytes32 => mapping(int24 => mapping(bool => uint256))) public tickLiquidity;

    // Mapping: poolId => tick => zeroForOne => user => liquidity
    mapping(bytes32 => mapping(int24 => mapping(bool => mapping(address => uint256))))
        public userPositions;

    error NotPoolManager();
    error InvalidTick();

    constructor(IPoolManager _poolManager) {
        poolManager = _poolManager;
    }

    /// @notice Place a limit order at a specific tick
    /// @param key The pool to place the order in
    /// @param tick The tick (price point) for the limit order
    /// @param zeroForOne true = sell token0 for token1, false = sell token1 for token0
    /// @param amount Amount of tokens to sell
    function placeLimitOrder(
        PoolKey calldata key,
        int24 tick,
        bool zeroForOne,
        uint256 amount
    ) external {
        // Validate tick is on the correct side of current price
        (, int24 currentTick,,) = poolManager.getSlot0(toId(key));

        // For selling token0: tick must be above current (price goes up)
        // For selling token1: tick must be below current (price goes down)
        if (zeroForOne && tick <= currentTick) revert InvalidTick();
        if (!zeroForOne && tick >= currentTick) revert InvalidTick();

        bytes32 poolId = toId(key);

        // Transfer tokens from user
        Currency currency = zeroForOne ? key.currency0 : key.currency1;
        IERC20(Currency.unwrap(currency)).transferFrom(
            msg.sender,
            address(this),
            amount
        );

        // Record the position
        tickLiquidity[poolId][tick][zeroForOne] += amount;
        userPositions[poolId][tick][zeroForOne][msg.sender] += amount;
    }

    /// @notice Called by PoolManager after every swap
    /// @dev Check if price crossed any limit order ticks and execute them
    function afterSwap(
        address,
        PoolKey calldata key,
        IPoolManager.SwapParams calldata params,
        BalanceDelta,
        bytes calldata
    ) external override returns (bytes4, int128) {
        if (msg.sender != address(poolManager)) revert NotPoolManager();

        (, int24 currentTick,,) = poolManager.getSlot0(toId(key));
        bytes32 poolId = toId(key);

        // Check if any limit orders at this tick should be filled
        // zeroForOne swaps move price down, so check sell-token1 orders
        // !zeroForOne swaps move price up, so check sell-token0 orders
        bool checkZeroForOne = !params.zeroForOne;

        uint256 liquidity = tickLiquidity[poolId][currentTick][checkZeroForOne];

        if (liquidity > 0) {
            // Execute limit orders at this tick
            _executeLimitOrders(key, currentTick, checkZeroForOne, liquidity);
        }

        return (IHooks.afterSwap.selector, 0);
    }

    /// @notice Execute limit orders at a specific tick
    function _executeLimitOrders(
        PoolKey calldata key,
        int24 tick,
        bool zeroForOne,
        uint256 amount
    ) internal {
        // In a full implementation, this would:
        // 1. Swap the tokens using poolManager.swap()
        // 2. Distribute output tokens to limit order placers
        // 3. Clear the filled positions

        bytes32 poolId = toId(key);

        // Clear the tick liquidity (orders are filled)
        tickLiquidity[poolId][tick][zeroForOne] = 0;

        // Emit event for off-chain tracking
        emit LimitOrderFilled(poolId, tick, zeroForOne, amount);
    }

    /// @notice Users can cancel unfilled limit orders
    function cancelLimitOrder(
        PoolKey calldata key,
        int24 tick,
        bool zeroForOne
    ) external {
        bytes32 poolId = toId(key);
        uint256 amount = userPositions[poolId][tick][zeroForOne][msg.sender];

        require(amount > 0, "No position");

        // Clear position
        userPositions[poolId][tick][zeroForOne][msg.sender] = 0;
        tickLiquidity[poolId][tick][zeroForOne] -= amount;

        // Return tokens
        Currency currency = zeroForOne ? key.currency0 : key.currency1;
        IERC20(Currency.unwrap(currency)).transfer(msg.sender, amount);
    }

    /// @notice Return hook permissions - we only need afterSwap
    function getHookPermissions() public pure returns (Hooks.Permissions memory) {
        return Hooks.Permissions({
            beforeInitialize: false,
            afterInitialize: false,
            beforeAddLiquidity: false,
            afterAddLiquidity: false,
            beforeRemoveLiquidity: false,
            afterRemoveLiquidity: false,
            beforeSwap: false,
            afterSwap: true, // We need this!
            beforeDonate: false,
            afterDonate: false,
            beforeSwapReturnDelta: false,
            afterSwapReturnDelta: false,
            afterAddLiquidityReturnDelta: false,
            afterRemoveLiquidityReturnDelta: false
        });
    }

    // Helper to compute pool ID
    function toId(PoolKey memory key) internal pure returns (bytes32) {
        return keccak256(abi.encode(key));
    }

    // Required hook interface functions (no-op for unused hooks)
    function beforeInitialize(address, PoolKey calldata, uint160)
        external pure override returns (bytes4) {
        return IHooks.beforeInitialize.selector;
    }
    function afterInitialize(address, PoolKey calldata, uint160, int24)
        external pure override returns (bytes4) {
        return IHooks.afterInitialize.selector;
    }
    function beforeAddLiquidity(address, PoolKey calldata, IPoolManager.ModifyLiquidityParams calldata, bytes calldata)
        external pure override returns (bytes4) {
        return IHooks.beforeAddLiquidity.selector;
    }
    function afterAddLiquidity(address, PoolKey calldata, IPoolManager.ModifyLiquidityParams calldata, BalanceDelta, BalanceDelta, bytes calldata)
        external pure override returns (bytes4, BalanceDelta) {
        return (IHooks.afterAddLiquidity.selector, BalanceDelta.wrap(0));
    }
    function beforeRemoveLiquidity(address, PoolKey calldata, IPoolManager.ModifyLiquidityParams calldata, bytes calldata)
        external pure override returns (bytes4) {
        return IHooks.beforeRemoveLiquidity.selector;
    }
    function afterRemoveLiquidity(address, PoolKey calldata, IPoolManager.ModifyLiquidityParams calldata, BalanceDelta, BalanceDelta, bytes calldata)
        external pure override returns (bytes4, BalanceDelta) {
        return (IHooks.afterRemoveLiquidity.selector, BalanceDelta.wrap(0));
    }
    function beforeSwap(address, PoolKey calldata, IPoolManager.SwapParams calldata, bytes calldata)
        external pure override returns (bytes4, BeforeSwapDelta, uint24) {
        return (IHooks.beforeSwap.selector, BeforeSwapDelta.wrap(0), 0);
    }
    function beforeDonate(address, PoolKey calldata, uint256, uint256, bytes calldata)
        external pure override returns (bytes4) {
        return IHooks.beforeDonate.selector;
    }
    function afterDonate(address, PoolKey calldata, uint256, uint256, bytes calldata)
        external pure override returns (bytes4) {
        return IHooks.afterDonate.selector;
    }

    event LimitOrderFilled(
        bytes32 indexed poolId,
        int24 tick,
        bool zeroForOne,
        uint256 amount
    );
}

// ============ Types & Interfaces ============

type Currency is address;

library CurrencyLibrary {
    function unwrap(Currency currency) internal pure returns (address) {
        return Currency.unwrap(currency);
    }
}

using CurrencyLibrary for Currency;

struct PoolKey {
    Currency currency0;
    Currency currency1;
    uint24 fee;
    int24 tickSpacing;
    address hooks;
}

type BalanceDelta is int256;
type BeforeSwapDelta is int256;

library Hooks {
    struct Permissions {
        bool beforeInitialize;
        bool afterInitialize;
        bool beforeAddLiquidity;
        bool afterAddLiquidity;
        bool beforeRemoveLiquidity;
        bool afterRemoveLiquidity;
        bool beforeSwap;
        bool afterSwap;
        bool beforeDonate;
        bool afterDonate;
        bool beforeSwapReturnDelta;
        bool afterSwapReturnDelta;
        bool afterAddLiquidityReturnDelta;
        bool afterRemoveLiquidityReturnDelta;
    }
}

interface IPoolManager {
    struct SwapParams {
        bool zeroForOne;
        int256 amountSpecified;
        uint160 sqrtPriceLimitX96;
    }

    struct ModifyLiquidityParams {
        int24 tickLower;
        int24 tickUpper;
        int256 liquidityDelta;
        bytes32 salt;
    }

    function getSlot0(bytes32 poolId)
        external
        view
        returns (uint160 sqrtPriceX96, int24 tick, uint24 protocolFee, uint24 lpFee);

    function swap(PoolKey memory key, SwapParams memory params, bytes calldata hookData)
        external
        returns (BalanceDelta);
}

interface IHooks {
    function beforeInitialize(address sender, PoolKey calldata key, uint160 sqrtPriceX96)
        external returns (bytes4);
    function afterInitialize(address sender, PoolKey calldata key, uint160 sqrtPriceX96, int24 tick)
        external returns (bytes4);
    function beforeAddLiquidity(address sender, PoolKey calldata key, IPoolManager.ModifyLiquidityParams calldata params, bytes calldata hookData)
        external returns (bytes4);
    function afterAddLiquidity(address sender, PoolKey calldata key, IPoolManager.ModifyLiquidityParams calldata params, BalanceDelta delta, BalanceDelta feesAccrued, bytes calldata hookData)
        external returns (bytes4, BalanceDelta);
    function beforeRemoveLiquidity(address sender, PoolKey calldata key, IPoolManager.ModifyLiquidityParams calldata params, bytes calldata hookData)
        external returns (bytes4);
    function afterRemoveLiquidity(address sender, PoolKey calldata key, IPoolManager.ModifyLiquidityParams calldata params, BalanceDelta delta, BalanceDelta feesAccrued, bytes calldata hookData)
        external returns (bytes4, BalanceDelta);
    function beforeSwap(address sender, PoolKey calldata key, IPoolManager.SwapParams calldata params, bytes calldata hookData)
        external returns (bytes4, BeforeSwapDelta, uint24);
    function afterSwap(address sender, PoolKey calldata key, IPoolManager.SwapParams calldata params, BalanceDelta delta, bytes calldata hookData)
        external returns (bytes4, int128);
    function beforeDonate(address sender, PoolKey calldata key, uint256 amount0, uint256 amount1, bytes calldata hookData)
        external returns (bytes4);
    function afterDonate(address sender, PoolKey calldata key, uint256 amount0, uint256 amount1, bytes calldata hookData)
        external returns (bytes4);
}

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount)
        external returns (bool);
    function transfer(address recipient, uint256 amount)
        external returns (bool);
}
