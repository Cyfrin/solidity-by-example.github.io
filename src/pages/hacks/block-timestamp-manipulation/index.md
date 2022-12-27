---
title: Block Timestamp Manipulation
version: 0.8.17
description: An example of a Solidity contract vulnerable to block timestamp manipulation
---

### Vulnerability

`block.timestamp` can be manipulated by miners with the following constraints

- it cannot be stamped with an earlier time than its parent
- it cannot be too far in the future

```solidity
{{{BlockTimestamp}}}
```

### Preventative Techniques

- Don't use `block.timestamp` for a source of entropy and random number
