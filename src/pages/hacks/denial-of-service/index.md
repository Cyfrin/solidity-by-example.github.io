---
title: Denial of Service
version: 0.8.26
description: An example of denial of service hack in Solidity
keywords: [hack, security, denial, service]
cyfrinLink: https://solidity-by-example.org/hacks/denial-of-service/
---

### Vulnerability

There are many ways to attack a smart contract to make it unusable.

One exploit we introduce here is denial of service by making the function to send Ether fail.

```solidity
{{{DenialOfService}}}
```

### Preventative Techniques

One way to prevent this is to allow the users to withdraw their Ether instead of sending it.

Here is an example.

```solidity
{{{PreventDenialOfService}}}
```
