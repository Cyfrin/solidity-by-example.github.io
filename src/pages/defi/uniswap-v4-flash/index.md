---
title: Uniswap V4 Flash Loan
version: 0.8.26
description: Example of flash loans on Uniswap V4
keywords: [defi, uniswap, v4, flash, loan, amm, poolmanager]
---

Uniswap V4 flash loans are **free** - no fees! This is possible due to flash accounting.

How it works:

1. Call `poolManager.unlock()` to start
2. In callback, call `poolManager.take()` to borrow tokens (creates a debt)
3. Use the tokens for arbitrage, liquidations, collateral swaps, etc.
4. Repay by transferring tokens back and calling `poolManager.settle()`
5. As long as deltas net to zero, the transaction succeeds

Unlike V3 which charged a fee on flash loans, V4's singleton architecture and flash accounting make borrowing essentially free - you only pay gas.

```solidity
{{{UniswapV4Flash}}}
```
