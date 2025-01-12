---
title: Accessing Private Data
version: 0.8.26
description: An example of accessing private data from a Solidity smart contract
keywords: [hack, security, access, accessing, private, data, storage]
cyfrinLink: https://www.cyfrin.io/glossary/accessing-private-data-hack-solidity-code-example
---

### Vulnerability

All data on a smart contract can be read.

Let's see how we can read `private` data. In the process you will learn how Solidity stores state variables.

```solidity
{{{Vault}}}
```

### Preventative Techniques

- Don't store sensitive information on the blockchain.
