`delegatecall` is a low level function similar to `call`.

When contract `A` executes `delegatecall` to contract `B`, `B`'s code is excuted

with contract `A`'s storage, `msg.sender` and `msg.value`.

```solidity
{{{Delegatecall}}}
```
