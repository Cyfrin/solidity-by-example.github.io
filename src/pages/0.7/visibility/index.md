---
title: Visibility
version: 0.6.10
description: An example of external, internal, private and public functions in Solidity
---

Functions and state variables have to declare whether they are accessible by other contracts.

Fucntions can be declared as

- `public` - any contract and account can call
- `private` - only inside the contract that defines the function
- `internal`- only inside contract that inherits an `internal` function
- `external` - only other contracts and accounts can call

State variables can be declared as `public`, `private`, or `internal` but not `external`.

```solidity
{{{Visibility}}}
```
