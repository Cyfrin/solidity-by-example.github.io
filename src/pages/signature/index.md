---
title: Verifying Signature
version: 0.8.26
description: An example of how to verify signatures in Solidity
keywords: [cryptography, verify, verifying, signature, signatures, ecrecover]
cyfrinLink: https://www.cyfrin.io/glossary/verifying-signature-solidity-code-example
---

Messages can be signed off chain and then verified on chain using a smart contract.

[Example using ethers.js](https://github.com/t4sk/hello-erc20-permit/blob/main/test/verify-signature.js)

```solidity
{{{Signature}}}
```

### Using Verify Signature in Remix

1. Get messageHash:
   - Call `getMessageHash` with these example parameters:

```solidity
address _to: 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2 // which is the second account on Remix
uint256 _amount: 123
string _message: "coffee and donuts"
uint256 _nonce: 1
```
   - Copy the returned messageHash

2. Sign the messageHash:
   - In "Deploy & Run Transactions" tab (which you're supposed to be on already)
   - Select the first account
   - Click on the icon after the `+` which is to sign a message, it will open a popup
   - Paste the messageHash
   - Click "Sign"
   - Remix returns:
     - A hash (ethSignedMessageHash)
     - A signature (you'll need this for verification)

3. Verify the signature:
   - Call `verify` with:
```solidity
address _signer: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
address _to: 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2
uint256 _amount: 123
string _message: "coffee and donuts"
uint256 _nonce: 1
bytes signature: [Signature from step 2]
```
   - Should return `true` if correctly signed
