---
title: Interface
version: 0.6.0
description: An example of interface in Solidity
---

Interface defines contraints so that any contract that implements this can communicate with another contract that require theses contraints.

Interface

- cannot have any functions implemented
- cannot inherit from other contracts, but they can inherit from other interfaces (0.6)
- all declared functions must be external
- cannot declare a constructor
- cannot declare state variables

```solidity
{{{Interface}}}
```
