---
title: Sending Ether (transfer, send, call)
version: 0.5.16
description: An example of sending Ether in Solidity
---

You can send Ether to other contracts by

- `transfer` (2300 gas, throws error)
- `send` (2300 gas, returns bool)
- `call` (forward all gas or set gas, returns bool)

`call` in combination with re-entrancy guard is the recommended method to use after December 2019.

Guard against re-entrancy by

- making all state changes before calling other contracts
- using re-entrancy guard modifier

```solidity
{{{SendingEther}}}
```
