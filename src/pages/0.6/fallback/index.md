---
title: Fallback
version: 0.6.10
description: Example of how to use fallback in Solidity
---

A `fallback function` is an anonymous function that does not take any arguments and does not return anything.

Fallback functions are executed when

- calling a function that does not exist
- sending Ether directly to a contract

`Fallback` functions have a 2300 gas limit when called by `transfer` or `send`.

```solidity
{{{Fallback}}}
```
