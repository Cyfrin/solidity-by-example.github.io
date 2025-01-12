---
title: Crowd Fund
version: 0.8.26
description: An example of crowdfunding contract
keywords: [app, application, crowd, fund, funding]
cyfrinLink: https://www.cyfrin.io/glossary/crowd-fund-solidity-code-example
---

Crowd fund ERC20 token

1. User creates a campaign.
2. Users can pledge, transferring their token to a campaign.
3. After the campaign ends, campaign creator can claim the funds if total amount pledged is more than the campaign goal.
4. Otherwise, campaign did not reach its goal, users can withdraw their pledge.

```solidity
{{{CrowdFund}}}
```
