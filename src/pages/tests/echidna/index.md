---
title: Echidna
version: 0.8.26
description: An example of testing contracts with Echidna
keywords: [test, echidna]
cyfrinLink: https://www.cyfrin.io/glossary/echidna-fuzz-testing-solidity-code-example
---

Examples of fuzzing with [Echidna](https://github.com/crytic/echidna).

1. Save the solidity contract as `TestEchidna.sol`
2. In the folder where your contract is stored execute the following command.

```shell
docker run -it --rm -v $PWD:/code trailofbits/eth-security-toolbox
```

Inside docker, your code will be stored at `/code`, in the root directory.

3. See the comments below and execute `echidna` commands.

```solidity
{{{TestEchidna}}}
```

### Testing Time and Sender

Echidna can fuzz timestamps. Range of timestamp is set in the configuration. Default is 7 days.

Contract callers can also be set in the configuration. Default accounts are

- `0x10000`
- `0x20000`
- `0x30000`

```solidity
{{{EchidnaTestTimeAndCaller}}}
```
