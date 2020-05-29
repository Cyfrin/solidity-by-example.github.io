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

You can also import from [GitHub](https://github.com) by simply copying the url

```solidity
import "https://github.com/owner/repo/blob/branch/path/to/Contract.sol";

// Example import ECDSA.sol from openzeppelin-contract repo, release-v3.0.0 branch
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.0.0/contracts/cryptography/ECDSA.sol";
```
