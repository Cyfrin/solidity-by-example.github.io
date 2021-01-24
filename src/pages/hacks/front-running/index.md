---
title: Front Running
version: 0.7.6
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

- use commit-reveal scheme
- use submarine send
