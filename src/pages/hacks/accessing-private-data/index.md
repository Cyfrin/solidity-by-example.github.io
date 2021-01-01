---
title: Accessing Private Data
version: 0.6.10
description: An example of accessing private data from a Solidity smart contract
---

### Vulnerability

All data on a smart contract can be read.

Let's see how we can read `private` data. In the process you will learn how Solidity stores state variables.

```solidity
{{{Vault}}}
```

### Preventative Techniques

- Don't store sensitive information on the blockchain.
