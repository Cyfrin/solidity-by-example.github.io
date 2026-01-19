---
title: Foundry vm.store
version: 0.8.26
description: Learn how to use vm.store to write directly to storage slots in Foundry tests
keywords: [foundry, vm.store, storage, cheatcode, testing]
---

Use `vm.store` to write directly to a contract's storage slots during testing.

This is useful for:

- Setting up test scenarios without calling contract functions
- Bypassing access controls to test specific states
- Testing edge cases that are hard to reach normally

For mappings, calculate the slot with `keccak256(abi.encode(key, mappingSlot))`.

```solidity
{{{StoreTest}}}
```
