---
title: Import
version: 0.5.16
description: Learn how to import other Solidity files
---

You can import local and external files in Solidity.

### Local

Here is our folder structure.

```
├── Import.sol
└── Foo.sol
```

Foo.sol

```solidity
{{{Foo}}}
```

Import.sol

```solidity
{{{Import}}}
```

### External

You can also import from [GitHub](https://github.com) by simply dropping the `https://` from the url

```solidity
// https://github.com/owner/repo/blob/branch/path/to/Contract.sol
import "github.com/owner/repo/blob/branch/path/to/Contract.sol";

// Example import ECDSA.sol from openzeppelin-contract repo, release-v2.5.0 branch
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/cryptography/ECDSA.sol
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/cryptography/ECDSA.sol";
```
