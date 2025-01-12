---
title: Self Destruct
version: 0.8.26
description: An example of how to delete your smart contract by calling selfdestruct in Solidity
keywords: [hack, security, selfdestruct]
cyfrinLink: https://www.cyfrin.io/glossary/self-destruct-hack-solidity-code-example
---

Contracts can be deleted from the blockchain by calling `selfdestruct`.

`selfdestruct` sends all remaining Ether stored in the contract to a
designated address.

### Vulnerability

A malicious contract can use `selfdestruct` to
force sending Ether to any contract.

```solidity
{{{ForceEther}}}
```

### Preventative Techniques

Don't rely on `address(this).balance`

```solidity
{{{PreventForceEther}}}
```
