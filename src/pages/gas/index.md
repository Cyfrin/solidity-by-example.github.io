---
title: Gas
version: 0.7.6
description: Example of gas and gas limit in Solidity
---

### How much `ether` do you need to pay for a transaction?

You pay `gas spent * gas price` amount of `ether`, where

- `gas` is a unit of computation
- `gas spent` is the total amount of `gas` used in a transaction
- `gas price` is how much `ether` you are willing to pay per `gas`

Transactions with higher gas price have higher priority to be included in a block.

Unspent gas will be refunded.

### Gas Limit

There are 2 upper bounds to the amount of gas you can spend

- `gas limit` (max amount of gas your willing to use for your transaction, set by you)
- `block gas limit` (max amount of gas allowed in a block, set by the network)

```solidity
{{{Gas}}}
```
