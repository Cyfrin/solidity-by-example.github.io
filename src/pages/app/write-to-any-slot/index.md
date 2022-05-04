---
title: Write to Any Slot
version: 0.8.13
description: Write to Any Slot
---

Solidity storage is like an array of length 2^256.
Each slot in the array can store 32 bytes.

State variables define which slots will be used to store data.

However using assembly, you can write to any slot.

```solidity
{{{Slot}}}
```
