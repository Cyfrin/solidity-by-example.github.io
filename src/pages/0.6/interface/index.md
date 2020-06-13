---
title: Interface
version: 0.6.10
description: An example of interface in Solidity
---

Interface define contraints so that any contract that implements this can communicate with another contract that require these contraints.

Interface

- cannot have any functions implemented
- cannot inherit from other contracts, but they can inherit from other interfaces (0.6)
- all declared functions must be external
- cannot declare a constructor
- cannot declare state variables

```solidity
{{{Interface}}}
```
