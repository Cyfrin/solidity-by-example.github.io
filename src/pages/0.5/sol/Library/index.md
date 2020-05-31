---
title: Library
version: 0.5.16
description: Example of how to write and use libraries in your Solidity code
---

Libraries are similar to contracts, but you can't declare any state variable and
you can't send ether.

A library is embedded into the contract if all library functions are internal.

Otherwise the library must be deployed and then linked before the contract is deployed.

```solidity
{{{Library}}}
```
