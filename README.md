# solidity-by-example.github.io

[Solidity By Example](https://solidity-by-example.org)

### License

[MIT License](LICENSE)

## Dev memo

```shell
# deploy
npm run deploy

# compile and copy files
cd contracts
truffle compile

npm run gen-pages

# compile SafeMath and Import on remix
# generate single page
npm run gen-html-page -- SafeMath
npm run gen-html-page -- Import
```

# Topics

## basics

- [x] Hello World
- [ ] Primitive types (uint, bool, address)
- [ ] Variables (local, state, global)
- [ ] conditional
- [ ] loops
- [ ] storage, memory, calldata
- [ ] string?
- [ ] array
- [ ] mapping
- [ ] enum
- [ ] struct
- [ ] contract
- [ ] special variables
- [ ] Ether and Wei
- [ ] Gas and Gas Price (prereq: loops and collection)

## intermediate

- [ ] Function
- [ ] Error
- [ ] Function Modifier
- [ ] View and Pure Functions

- [ ] Sending Ether
  - [ ] Payable
  - [ ] Fallback
- [ ] Call
- [ ] Delegatecall
- [ ] Calling Other Contract

- [ ] Constructor
- [ ] Inheritance
- [ ] Calling Parent Contracts
- [ ] Shadowing Inherited State Variables
- [ ] Visibility
- [ ] Creating Contract from Other Contract

- [ ] Events
- [ ] Library
- [ ] Self Destruct
- [ ] Hashing with Keccak256
- [ ] Verifying Signature
- [ ] Import
- [ ] interface
- [ ] assembly (call, delegatecall, signature)
- [ ] patterns

## TODO

Sending ether - example calling function and sending ether

- [ ] mobile friendly
- [ ] email subscription
- [ ] archive 0.5
- [ ] assembly
- [ ] interface?

hacks

- [ ] reentrancy
- [ ] writing to storage
- [ ] uint overflow
- [ ] selfdestruct
- [ ] blockhash

applications

- [ ] multisig wallet
- [ ] unidirectional
- [ ] bidirectional
- [ ] payment hub
- [ ] counterfactual
- [ ] minimal proxy contract

patterns
next video please : how to use erc20 in our contracts , example a smart contract that when it gets eth it throws back usdc to the same address or the reverse
thanks in advance :)
