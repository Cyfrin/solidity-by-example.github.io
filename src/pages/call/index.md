---
title: Call
version: 0.8.17
description: In Solidity call is a low level function to interact with other contracts
---

`call` is a low level function to interact with other contracts.

This is the recommended method to use when you're just sending Ether via calling the `fallback` function.

However it is not the recommend way to call existing functions.

### Few reasons why low-level call is not recommended

- Reverts are not bubbled up
- Type checks are bypassed
- Function existence checks are omitted

```solidity
{{{Call}}}
```
