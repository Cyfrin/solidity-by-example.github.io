---
title: Calling Other Contract
version: 0.8.24
description: In Solidity, contract can call other contracts in several ways
keywords: [calling, other, contract, contracts, call, function, functions]
---

Contract can call other contracts in 2 ways.

The easiest way to is to just call it, like `A.foo(x, y, z)`.

Another way to call other contracts is to use the low-level `call`.

This method is not recommended.

```solidity
{{{CallingContract}}}
```
