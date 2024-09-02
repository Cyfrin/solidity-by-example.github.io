---
title: Events Advanced
version: 0.8.26
description: Advanced topics and concepts related to Solidity events
keywords: [events, advanced, event-driven, monitoring, filtering, security]
---

This page covers advanced topics and use cases related to events in Solidity, building upon the basics covered in the [Events](../events) page.

`Events` in Solidity are a powerful tool that enables various advanced functionalities and architectures. Some advanced use cases for events include:

- Event filtering and monitoring for real-time updates and analytics
- Event log analysis and decoding for data extraction and processing
- Event-driven architectures for decentralized applications (dApps)
- Event subscriptions for real-time notifications and updates

## Event-Driven Architecture

The `EventDrivenArchitecture` contract demonstrates an event-driven architecture where events are used to coordinate and trigger different stages of a process, such as initiating and confirming transfers.

## Event Subscription and Real-Time Updates

The `EventSubscription` contract showcases how to implement event subscriptions, allowing external contracts or clients to subscribe and receive real-time updates when events are emitted. It also demonstrates how to handle event subscriptions and manage the subscription lifecycle.

```solidity
{{{EventsAdvanced}}}
```

## Best Practices and Recommendations

- Index the right event parameters to enable efficient filtering and searching. Addresses should typically be indexed, while amounts generally should not.
- Avoid redundant events by not emitting events that are already covered by underlying libraries or contracts.
- Events cannot be used in `view` or `pure` functions, as they alter the state of the blockchain by storing logs.
- Be mindful of the gas cost associated with emitting events, especially when indexing parameters, as it can impact the overall gas consumption of your contract.
