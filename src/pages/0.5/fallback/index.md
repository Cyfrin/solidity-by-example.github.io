---
title: Fallback
version: 0.5.16
description: Example of how to use fallback in Solidity
---

`Fallback` is an anonymous function that does not take any arguments and does not return anything.

It is executed when

- a function that does not exist is called
- Ether is sent directly to a contract

`Fallback` functions have a 2300 gas limit when called by `transfer` or `send`.

```solidity
{{{Fallback}}}
```
