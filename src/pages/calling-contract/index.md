---
title: Calling Other Contract
version: 0.8.17
description: In Solidity, contract can call other contracts in several ways
---

Contract can call other contracts in 2 ways.

The easiest way to is to just call it, like `A.foo(x, y, z)`.

Another way to call other contracts is to use the low-level `call`.

This method is not recommended.

```solidity
{{{CallingContract}}}
```

### With Interface - Recommended method

An interface is similar to an abstract contract as it must be inherited by another contract like the abstract contract. An interface functions visibility must be marked as external. It cannot have a constructor neither can it declare state variables.

```solidity
{{{CallingContractWithInterface}}}
```
