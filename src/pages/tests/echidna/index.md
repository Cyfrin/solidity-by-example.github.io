---
title: Echidna
version: 0.8.10
description: An example of testing contracts with Echidna
---

Examples of fuzzing with [Echidna](https://github.com/crytic/echidna).

1. Save the solidity contract as `TestEchidna.sol`
2. In the folder where your contract is stored execute the following command.

```shell
docker run -it --rm -v $PWD:/code trailofbits/eth-security-toolbox
```

Inside docker, your code will be stored at `/code`

3. See the comments below and execute `echidna-test` commands.

```solidity
{{{TestEchidna}}}
```

### Testing Time and Sender

Echidna can fuzz timestamp. Range of timestamp is set in the configuration. Default is 7 days.

Contract callers can also be set in the configuration. Default accounts are

- `0x10000`
- `0x20000`
- `0x00a329C0648769a73afAC7F9381e08fb43DBEA70`

Click [here](https://github.com/crytic/echidna/blob/master/examples/solidity/basic/default.yaml) to see default configuration

```solidity
{{{EchidnaTestTimeAndCaller}}}
```
