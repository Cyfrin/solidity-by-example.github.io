---
title: Multi-Sig Wallet
version: 0.8.24
description: An example of multi-sig wallet in Solidity
keywords: [app, application, multi, sig, signature, wallet]
---

Let's create an multi-sig wallet. Here are the specifications.

The wallet owners can

- submit a transaction
- approve and revoke approval of pending transactions
- anyone can execute a transaction after enough owners has approved it.

```solidity
{{{MultiSigWallet}}}
```

Here is a contract to test sending transactions from the multi-sig wallet

```solidity
{{{TestContract}}}
```
