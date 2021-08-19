---
title: Self Destruct
version: 0.8.3
description: An example of how to delete your smart contract by calling seldestruct in Solidity
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
