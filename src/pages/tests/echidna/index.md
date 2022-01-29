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
