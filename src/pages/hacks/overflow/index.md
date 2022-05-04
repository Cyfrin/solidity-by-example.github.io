---
title: Arithmetic Overflow and Underflow
version: 0.8.13
description: An example of hacking Solidity with arithmetic overflow / underflow
---

### Vulnerability

##### Solidity < 0.8

Integers in Solidity overflow / underflow without any errors

##### Solidity >= 0.8

Default behaviour of Solidity 0.8 for overflow / underflow is to throw an error.

```solidity
{{{Overflow}}}
```

### Preventative Techniques

- Use <a href="https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/math/SafeMath.sol" target="__blank">SafeMath</a> to will prevent arithmetic overflow and underflow

- Solidity 0.8 defaults to throwing an error for overflow / underflow
