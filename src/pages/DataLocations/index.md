Variables are declared as either `storage`, `memory` or `calldata` to explicitly
specify the location of the data.

- `storage` - variable is a state variable (store on blockchain)
- `memory` - variable is in memory and it exists while a function is being called
- `calldata` - special data location that contains function arguments, only available for `external` functions

```solidity
{{{DataLocations}}}
```
