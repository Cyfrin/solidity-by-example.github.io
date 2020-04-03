Payment channels allow participants to repeatedly transfer Ether off chain.

Here is how this contract is used:

- `Alice` deploys the contract, funding it with some Ether.
- `Alice` authorises a payment by signing a message (off chain) and sends the signed message to `Bob`.
- `Bob` claims his payment by presenting the signed message to the smart contract.

```solidity
{{{PaymentChannel}}}
```
