# solidity-by-example.github.io

[Solidity By Example](https://solidity-by-example.org)

### License

[MIT License](LICENSE)

## TODO

Sending ether - example calling function and sending ether

- [ ] email subscription
- [ ] archive 0.5
- [ ] sending ether to payable function
- [ ] build multisig step by step
- [ ] assembly

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
- [ ] assembly
- [ ] patterns
