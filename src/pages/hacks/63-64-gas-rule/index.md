---
title: 63 / 64 Gas Rule
version: 0.8.26
description: An example of 63 / 64 gas rule
keywords: [hack, security, 63, 64, gas]
---

According to 63 / 64 gas rule, external calls receive at most 63 / 64 of remaining gas in the calling contract.

### Vulnerability

Contracts that refund gas used must account for this 1/64 gas that is not spent.

Here is a simplified example of a contract that refunds gas.

```solidity
{{{Gas}}}
```
