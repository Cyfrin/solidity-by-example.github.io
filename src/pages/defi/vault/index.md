---
title: Vault
version: 0.8.13
description: Vault
---

Simple example of vault contract, commonly used in DeFi protocols.

Most vaults on the mainnet are more complex. Here we will focus on the math for calculating shares to mint on deposit and the amount of token to withdraw.

### How the contract works

1. Some amount of shares are minted when an user deposits.
2. The DeFi protocol would use the users' deposits to generate yield (somehow).
3. User burn shares to withdraw his tokens + yield.

```solidity
{{{Vault}}}
```
