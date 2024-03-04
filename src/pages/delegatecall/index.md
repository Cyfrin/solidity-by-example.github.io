---
title: Delegatecall
version: 0.8.24
description: Example of how to use deletegatecall in Solidity
keywords: [delegatecall, call, contract, contracts, function, functions]
---

`delegatecall` is a low level function similar to `call`.

When contract `A` executes `delegatecall` to contract `B`, `B`'s code is executed

with contract `A`'s storage, `msg.sender` and `msg.value`.

```solidity
{{{Delegatecall}}}
```
