---
title: Vault
version: 0.8.26
description: Vault
keywords: [defi, vault]
cyfrinLink: https://www.cyfrin.io/glossary/vault-contract-solidity-code-example
---

Simple example of vault contract, commonly used in DeFi protocols.

Most vaults on the mainnet are more complex. Here we will focus on the math for calculating shares to mint on deposit and the amount of token to withdraw.

### How the contract works

1. Some amount of shares are minted when a user deposits.
2. The DeFi protocol would use the users' deposits to generate yield (somehow).
3. User burns shares to withdraw his tokens + yield.

```solidity
{{{Vault}}}
```
