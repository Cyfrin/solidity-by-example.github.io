---
title: Uniswap V3 Liquidity Examples
version: 0.8.17
description: Uniswap V3 liquidity examples
---

Examples of minting new position, collect fees, increase and decrease liquidity.

```solidity
{{{UniswapV3Liquidity}}}
```

### Test with Foundry

```solidity
{{{UniswapV3LiquidityTest}}}
```

```shell
FORK_URL=https://eth-mainnet.g.alchemy.com/v2/613t3mfjTevdrCwDl28CVvuk6wSIxRPi
forge test -vv --gas-report --fork-url $FORK_URL --match-path test/UniswapV3Liquidity.test.sol
```

### Links

<a href="https://docs.uniswap.org/protocol/guides/providing-liquidity/setting-up" target="__blank">Uniswap V3</a>

<a href="https://github.com/foundry-rs/foundry" target="__blank">Foundry</a>

<a href="https://github.com/t4sk/defi-notes" target="__blank">Uniswap V3 Foundry example</a>
