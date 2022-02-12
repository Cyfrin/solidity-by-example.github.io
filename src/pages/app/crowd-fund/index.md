---
title: Crowd Fund
version: 0.8.10
description: An example of crowd funding contract
---

Crowd fund ERC20 token

1. User creates a campaign.
2. Users can pledge, transferring their token to a campaign.
3. After the campaign ends, campaign creator can claim the funds if total amount pledged is more than the campaign goal.
4. Otherwise, campaign did not reach it's goal, users can withdraw their pledge.

```solidity
{{{CrowdFund}}}
```
