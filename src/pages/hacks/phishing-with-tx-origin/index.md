---
title: Phishing with tx.origin
version: 0.8.3
description: An example of phishing with tx.origin in Solidity
---

### What's the difference between `msg.sender` and `tx.origin`?

If contract A calls B, and B calls C, in C `msg.sender` is B and `tx.origin` is A.

### Vulnerability

A malicious contract can deceive the owner of a contract into calling a
function that only the owner should be able to call.

```solidity
{{{TxOrigin}}}
```

### Preventative Techniques

Use `msg.sender` instead of `tx.origin`

```solidity
function transfer(address payable _to, uint256 _amount) public {
  require(msg.sender == owner, "Not owner");

  (bool sent, ) = _to.call.value(_amount)("");
  require(sent, "Failed to send Ether");
}

```
