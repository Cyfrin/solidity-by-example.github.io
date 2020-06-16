---
title: Inheritance
version: 0.6.10
description: Example of inheritance in Solidity
---

Solidity supports multiple inheritance. Contracts can inherit other contract by using the `is` keyword.

Function that is going to be overridden by a child contract must be declared as `virtual`.

Function that is going to override a parent function must use the keyword `override`.

Order of inheritance is important.

You have to list the parent contracts in the order from “most base-like” to “most derived”.

```solidity
{{{Inheritance}}}
```
