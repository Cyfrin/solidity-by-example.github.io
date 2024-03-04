---
title: Vault Inflation
version: 0.8.24
description: An example of vault inflation
keywords: [hack, security, inflation, erc4626, vault]
---

### Vulnerability

Vault shares can be inflated by donating ERC20 token to the vault.

Attacker can exploit this behavior to steal other user's deposits.

### Example

User 0 front runs user 1's deposit.

1. User 0 deposits `1`.
2. User 0 donates `100 * 1e18`. This inflates the value of each share.
3. User 1 deposits `100 * 1e18`. This mints 0 shares to user 1.
4. User 0 withdraws all `200 * 1e18 + 1`.

### Protections

- Min shares -> protects from front running
- Internal balance -> protects from donation
- Dead shares -> contract is first depositor
- Decimal offset (OpenZeppelin ERC4626)

```solidity
{{{VaultInflation}}}
```
