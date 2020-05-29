Contracts can be deleted from the blockchain by calling `selfdestruct`.

`selfdestruct` sends all remainig Ether stored in the contract to an
designated address.

### Vulnerability

A malicious contract can use `selfdestruct` to
force send Ether to any contract.

```solidity
{{{ForceEther}}}
```

### Preventative Techniques

Don't rely on `address(this).balance`

```solidity
{{{PreventForceEther}}}
```
