---
title: Function Selector
version: 0.8.13
description: Example of how function selectors are computed
---

When a function is called, the first 4 bytes of `calldata` specifies which function to call.

This 4 bytes is called a function selector.

Take for example, this code below. It uses `call` to execute `transfer` on a contract at the address `addr`.

```solidity
addr.call(abi.encodeWithSignature("transfer(address,uint256)", 0xSomeAddress, 123))
```

The first 4 bytes returned from `abi.encodeWithSignature(....)` is the function selector.

Perhaps you can save a tiny amount of gas if you precompute and inline the function selector in your code?

Here is how the function selector is computed.

```solidity
{{{FunctionSelector}}}
```
