---
title: Re-Entrancy
version: 0.8.3
description: An example of re-entrancy attack in Solidity
---

### Vulnerability

Let's say that contract `A` calls contract `B`.

Reentracy exploit allows `B` to call back into `A` before `A` finishes execution.

```solidity
{{{ReEntrancy}}}
```

### Preventative Techniques

- Ensure all state changes happen before calling external contracts
- Use function modifiers that prevent re-entrancy

Here is a example of a re-entracy guard

```solidity
{{{ReEntrancyGuard}}}
```
