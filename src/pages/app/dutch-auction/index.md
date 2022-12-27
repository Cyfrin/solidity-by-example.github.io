---
title: Dutch Auction
version: 0.8.17
description: An example of Dutch auction in Solidity
---

Dutch auction for NFT.

### Auction

1. Seller of NFT deploys this contract setting a starting price for the NFT.
2. Auction lasts for 7 days.
3. Price of NFT decreases over time.
4. Participants can buy by depositing ETH greater than the current price computed by the smart contract.
5. Auction ends when a buyer buys the NFT.

```solidity
{{{DutchAuction}}}
```
