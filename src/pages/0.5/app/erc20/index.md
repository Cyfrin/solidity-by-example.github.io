---
title: ERC20
version: 0.5.16
description: Example of ERC20 token in Solidity
---

Any contract that follow the <a href="https://eips.ethereum.org/EIPS/eip-20" target="__blank">ERC20 standard</a> is a ERC20 token.

ERC20 tokens provide functionalities to

- transfer tokens
- allow others to transfer tokens on behalf of the token holder

Here is the interface for ERC20.

```solidity
{{{IERC20}}}
```

## Create your own ERC20 token

Using <a href="https://github.com/OpenZeppelin/openzeppelin-contracts" target="__blank">Open Zeppelin</a> it's really easy to create your own ERC20 token.

Here is an example

```solidity
{{{MyToken}}}
```

## Contract to swap tokens

Here is an example contract, `TokenSwap`, to trade one ERC20 token for another.

This contract will swap tokens by calling

```solidity
transferFrom(address sender, address recipient, uint256 amount)

```

which will transfer `amount` of token from `sender` to `recipient`.

For `transferFrom` to succeed, `sender` must

- have more than `amount` tokens in their balance
- allowed `TokenSwap` to withdraw `amount` tokens by calling `approve`

prior to `TokenSwap` calling `transferFrom`

```solidity
{{{TokenSwap}}}
```
