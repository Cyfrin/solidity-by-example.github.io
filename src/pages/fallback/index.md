---
title: Fallback
version: 0.8.17
description: Example of how to use fallback in Solidity
---

`fallback` is a special function that is executed either when

- a function that does not exist is called or
- Ether is sent directly to a contract but `receive()` does not exist or `msg.data` is not empty

`fallback` has a 2300 gas limit when called by `transfer` or `send`.

```solidity
{{{Fallback}}}
```

`fallback` can optionally take `bytes` for input and output

```solidity
{{{FallbackInputOutput}}}
```
