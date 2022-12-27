---
title: Uniswap V2 Flash Swap
version: 0.8.17
description: Uniswap V2 flash swap
---

### Uniswap V2 Flash Swap Example

```solidity
{{{UniswapV2FlashSwap}}}
```

### Test with Foundry

1. Copy and paste this into `test` folder in your foundry project

```solidity
{{{UniswapV2FlashSwapTest}}}
```

2. Execute the following commands to run the test

```shell
FORK_URL=https://eth-mainnet.g.alchemy.com/v2/613t3mfjTevdrCwDl28CVvuk6wSIxRPi
forge test -vv --gas-report --fork-url $FORK_URL --match-path test/UniswapV2FlashSwap.test.sol
```

### Links

<a href="https://github.com/foundry-rs/foundry" target="__blank">Foundry</a>

<a href="https://github.com/t4sk/defi-notes" target="__blank">Uniswap V3 Foundry example</a>
