---
title: Deploy Different Contracts at the Same Address
version: 0.8.20
description: An example of a Solidity contract vulnerable to deploy different contracts at the same address
keywords:
    [hack, security, deploy, salt, create, create2, different, contract, same, address]
---

Contract address deployed with `create` is computed in the following way.

```
contract address = last 20 bytes of sha3(rlp_encode(sender, nonce))
```

where `sender` is the address of the deployer and `nonce` is the number of transactions sent by `sender`.

Hence it is possible to deploy different contracts at the same address if we can somehow reset the `nonce`.

Below is an example of how a DAO can be hacked.

```solidity
{{{TornadoHack}}}
```
