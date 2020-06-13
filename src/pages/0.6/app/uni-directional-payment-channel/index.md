---
title: Uni-Directional Payment Channel
version: 0.6.10
description: An example of uni-directional payment channels in Solidity
---

Payment channels allow participants to repeatedly transfer Ether off chain.

Here is how this contract is used:

- `Alice` deploys the contract, funding it with some Ether.
- `Alice` authorizes a payment by signing a message (off chain) and sends the signature to `Bob`.
- `Bob` claims his payment by presenting the signed message to the smart contract.
- If `Bob` does not claim his payment, `Alice` get her Ether back after the contract expires

This is called a uni-directional payment channel since the payment can go only in a signle direction from `Alice` to `Bob`.

```solidity
{{{UniDirectionalPaymentChannel}}}
```
