---
title: Contract that Creates other Contracts
version: 0.8.3
description: Learn how to create new contracts from inside of a contract with Solidity
---

Contracts can be created by other contracts using the `new` keyword. Since 0.8.0, `new` keyword supports `create2` feature by specifying `salt` options.


```solidity
{{{NewContract}}}
```
