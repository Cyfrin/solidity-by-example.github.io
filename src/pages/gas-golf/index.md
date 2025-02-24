---
title: Gas Saving Techniques
version: 0.8.26
description: Some gas saving techniques
keywords: [gas, golf]
cyfrinLink: https://www.cyfrin.io/glossary/gas-saving-techniques-solidity-code-example
---

Some gas saving techniques.

- Replacing `memory` with `calldata`
- Loading state variables to memory
- Replace for loop `i++` with `++i`
- Caching array elements
- Short circuit

```solidity
{{{GasGolf}}}
```
