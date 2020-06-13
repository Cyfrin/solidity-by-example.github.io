---
title: Source of Randomness
version: 0.6.10
description: Blockchain is not a reliable source of randomness in Solidity
---

### Vulnerability

`blockhash` and `block.timestamp` are not reliable sources for randomness.

```solidity
{{{Randomness}}}
```

### Preventative Techniques

- Don't use `blockhash` and `block.timestamp` as source of randomness
