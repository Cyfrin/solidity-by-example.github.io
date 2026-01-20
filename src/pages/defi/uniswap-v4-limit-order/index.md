---
title: Uniswap V4 Limit Order
version: 0.8.26
description: Example of a limit order hook for Uniswap V4
keywords: [defi, uniswap, v4, limit, order, hook, amm]
---

Uniswap V4 hooks allow custom logic to execute during the swap lifecycle. This example demonstrates a limit order hook using `afterSwap`.

How limit orders work with hooks:

1. Users call `placeLimitOrder()` specifying a tick (price) and direction
2. Tokens are held by the hook contract
3. When swaps move the price past the target tick, `afterSwap` is triggered
4. The hook detects filled orders and executes them
5. Users receive their swapped tokens

Key hook concepts:

- **Permissions** - `getHookPermissions()` declares which hooks you implement
- **Hook address** - Must have specific bits set based on permissions (use CREATE2)
- **Callbacks** - PoolManager calls your hook at each lifecycle point

```solidity
{{{UniswapV4LimitOrder}}}
```
