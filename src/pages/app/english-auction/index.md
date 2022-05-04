---
title: English Auction
version: 0.8.13
description: An example of English auction in Solidity
---

English auction for NFT.

### Auction

1. Seller of NFT deploys this contract.
2. Auction lasts for 7 days.
3. Participants can bid by depositing ETH greater than the current highest bidder.
4. All bidders can withdraw their bid if it is not the current highest bid.

### After the auction

1. Highest bidder becomes the new owner of NFT.
2. The seller receives the highest bid of ETH.

```solidity
{{{EnglishAuction}}}
```
