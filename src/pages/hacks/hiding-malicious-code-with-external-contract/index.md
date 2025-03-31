---
title: Hiding Malicious Code with External Contract
version: 0.8.26
description: An example of exploit where malicious code is hidden in an external contract in Solidity
keywords: [hack, security, hide, hiding, malicious, code, external, contract]
cyfrinLink: https://www.cyfrin.io/glossary/hiding-malicious-code-with-external-contract-hack-solidity-code-example
---

### Vulnerability

In Solidity, any address can be cast into specific contract,
even if the contract at the address is not the one being cast.

This can be exploited to hide malicious code. Let's see how.

```solidity
{{{ExternalContract}}}
```

### Preventative Techniques

- Initialize a new contract inside the constructor
- Make the address of external contract `public` so that the code of the
  external contract can be reviewed

```solidity
Bar public bar;

constructor() public {
    bar = new Bar();
}
```
