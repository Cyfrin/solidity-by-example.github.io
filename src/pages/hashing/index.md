---
title: Hashing with Keccak256
version: 0.8.26
description: Example of hashing using Keccak256 in Solidity
keywords: [hash, hashing, function, functions, keccak256, cryptography]
cyfrinLink: https://www.cyfrin.io/glossary/hashing-with-keccak256-solidity-code-example
---

`keccak256` computes the Keccak-256 hash of the input.

Some use cases are:

- Creating a deterministic unique ID from an input
- Commit-Reveal scheme
- Compact cryptographic signature (by signing the hash instead of a larger input)

Solidity provides two methods for encoding data:

- `abi.encode`:
  - Encodes data into bytes with padding
  - Preserves all data information
  - Safer when dealing with dynamic types
  - Produces a longer output due to padding
- `abi.encodePacked`:
  - Performs packed encoding (compressed)
  - Produces a shorter output than `abi.encode`
  - More gas efficient
  - Risk of hash collisions with dynamic types (`collision` function)

```solidity
{{{Keccak256}}}
```
