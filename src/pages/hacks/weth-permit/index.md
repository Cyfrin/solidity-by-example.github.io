---
title: WETH Permit
version: 0.8.20
description: An example of WETH permit hack
keywords: [hack, security, weth, permit]
---

### Vulnerability

Most ERC20 have the `permit` function to approve a spender if a valid signature is provided.

However `WETH` does not. Surprisingly, when `permit` is called on `WETH`, the function call will execute without any errors.

This is because the `fallback` inside `WETH` is execute when `permit` is called.

### Example

0. Alice gives infinit approval for `ERC20Bank` to spend `WETH`
1. Alice calls `deposit`, deposits 1 WETH into `ERC20Bank`
2. Attacker calls `depositWithPermit`, passes an empty signature and transfers all tokens from Alice into `ERC20Bank`, crediting the attacker for the deposit.
3. Attacker withdraws all tokens credited to him.

### ERC20Bank

```solidity
{{{ERC20Bank}}}
```

### Exploit

```solidity
{{{ERC20BankExploitTest}}}
```

### Other contracts

```solidity
{{{IERC20}}}
```

```solidity
{{{IERC20Permit}}}
```

```solidity
{{{ERC20}}}
```

```solidity
{{{WETH}}}
```
