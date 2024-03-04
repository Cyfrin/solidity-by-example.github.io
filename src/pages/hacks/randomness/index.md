---
title: Source of Randomness
version: 0.8.24
description: Blockchain is not a reliable source of randomness in Solidity
keywords: [hack, security, source, random, randomness, blockhash, block, timestamp]
---

### Vulnerability

`blockhash` and `block.timestamp` are not reliable sources for randomness.

```solidity
{{{Randomness}}}
```

### Preventative Techniques

- Don't use `blockhash` and `block.timestamp` as source of randomness
