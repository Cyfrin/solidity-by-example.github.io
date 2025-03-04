---
title: Multi-Sig Wallet
version: 0.8.26
description: An example of multi-sig wallet in Solidity
keywords: [app, application, multi, sig, signature, wallet]
cyfrinLink: https://www.cyfrin.io/glossary/multisig-wallet-solidity-code-example
---

Let's create a multi-sig wallet. Here are the specifications.

The wallet owners can

- submit a transaction
- approve and revoke approval of pending transactions
- anyone can execute a transaction after enough owners have approved it.

```solidity
{{{MultiSigWallet}}}
```

Here is a contract to test sending transactions from the multi-sig wallet

```solidity
{{{TestContract}}}
```
