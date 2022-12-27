---
title: Front Running
version: 0.8.17
description: An example of a Solidity contract vulnerable to front running
---

### Vulnerability

Transactions take some time before they are mined. An attacker can watch the transaction pool
and send a transaction, have it included in a block before the original transaction.
This mechanism can be abused to re-order transactions to the attacker's advantage.

```solidity
{{{FrontRunning}}}
```

### Preventative Techniques

- use commit-reveal scheme (https://medium.com/swlh/exploring-commit-reveal-schemes-on-ethereum-c4ff5a777db8)
- use submarine send (https://libsubmarine.org/)

### Commit-Reveal Schemes

A commitment scheme is a cryptographic algorithm used to allow someone to commit to a value while keeping it hidden from others with the ability to reveal it later. The values in a commitment scheme are binding, meaning that no one can change them once committed. The scheme has two phases: a commit phase in which a value is chosen and specified, and a reveal phase in which the value is revealed and checked.

```solidity
{{{PreventFrontRunning}}}
```
