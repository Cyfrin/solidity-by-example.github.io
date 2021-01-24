---
title: Delegatecall
version: 0.7.6
description: An example of exploits using delegatecall in Solidity
---

### Vulnerability

`delegatecall` is tricky to use and wrong usage or incorrect understanding
can lead to devastating results.

You must keep 2 things in mind when using `delegatecall`

1. `delegatecall` preserves context (storage, caller, etc...)
2. storage layout must be the same for the contract calling `delegatecall` and the contract getting called

```solidity
{{{Delegatecall_1}}}
```

Here is another example.

You will need to understand how Solidity stores
state variables before you can understand this exploit.

```solidity
{{{Delegatecall_2}}}
```

### Preventative Techniques

- Use stateless `Library`
