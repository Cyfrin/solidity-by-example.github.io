---
title: Signature Replay
version: 0.8.26
description: An example of a contract vulnerable to signature replay attack
keywords: [hack, security, cryptography, signature, replay]
cyfrinLink: https://www.cyfrin.io/glossary/signature-replay-hack-solidity-code-example
---

Signing messages off-chain and having a contract that requires that signature before executing
a function is a useful technique.

For example this technique is used to:

- reduce the number of transaction on chain
- gas-less transaction, called `meta transaction`

### Vulnerability

Same signature can be used multiple times to execute a function. This can be harmful
if the signer's intention was to approve a transaction once.

```solidity
{{{SigReplay}}}
```

### Preventative Techniques

Sign messages with `nonce` and address of the contract.

```solidity
{{{PreventSigReplay}}}
```

```solidity
{{{ECDSA}}}
```
