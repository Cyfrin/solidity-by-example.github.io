---
title: Re-Entrancy
version: 0.8.26
description: An example of re-entrancy attack in Solidity
keywords: [hack, security, re-entrancy]
cyfrinLink: https://www.cyfrin.io/glossary/re-entrancy-hack-solidity-code-example
---

### Vulnerability

Let's say that contract `A` calls contract `B`.

Reentrancy exploit allows `B` to call back into `A` before `A` finishes execution.

```solidity
{{{ReEntrancy}}}
```

### Preventative Techniques

- Ensure all state changes happen before calling external contracts
- Use function modifiers that prevent re-entrancy

Here is an example of a re-entracy guard

```solidity
{{{ReEntrancyGuard}}}
```
