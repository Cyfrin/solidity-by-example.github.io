---
title: Fallback
version: 0.8.26
description: Example of how to use fallback in Solidity
keywords: [fallback, function, functions, receive, payable, send, ether, eth, transfer]
cyfrinLink: https://www.cyfrin.io/glossary/fallback-solidity-code-example
---

`fallback` is a special function that is executed either when

- a function that does not exist is called or
- Ether is sent directly to a contract but `receive()` does not exist or `msg.data` is not empty

To better understand the conditions under which Solidity calls the receive or fallback function, refer to the flowchart below:

```
                 send Ether
                      |
           msg.data is empty?
                /           \
            yes             no
             |                |
    receive() exists?     fallback()
        /        \
     yes          no
      |            |
  receive()     fallback()
```
  
`fallback` has a 2300 gas limit when called by `transfer` or `send`.

```solidity
{{{Fallback}}}
```

`fallback` can optionally take `bytes` for input and output

```solidity
{{{FallbackInputOutput}}}
```
