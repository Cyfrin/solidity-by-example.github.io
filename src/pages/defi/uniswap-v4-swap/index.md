---
title: Uniswap V4 Swap
version: 0.8.26
description: Example of swapping tokens on Uniswap V4
keywords: [defi, uniswap, v4, swap, amm, poolmanager]
---

Uniswap V4 introduces a singleton `PoolManager` that holds all pools in a single contract.

Key differences from V3:

- **Singleton architecture** - All pools live in one contract
- **Flash accounting** - Token transfers only happen at the end, reducing gas
- **unlock/unlockCallback pattern** - Interact via callbacks

To swap:

1. Call `poolManager.unlock()` with encoded parameters
2. PoolManager calls your `unlockCallback()`
3. Inside callback: execute swap, settle inputs, take outputs
4. Deltas must net to zero before unlock completes

```solidity
{{{UniswapV4Swap}}}
```
