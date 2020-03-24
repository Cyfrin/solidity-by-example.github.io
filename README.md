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

## Basic

- [ ] hello world
- [ ] local and state variables
- [ ] ether and wei uints
- [ ] gas and gas price
- [ ] function
  - [ ] getters and setters
  - [ ] different ways to return outputs
  - [ ] destructing outputs
  - [ ] restriction on inputs and return types (pre: array and maps)
  - [ ] view and pure functions
- [ ] function modifiers
  - [ ] before and after function call
  - [ ] examples (restrict access, validate inputs, re-entrancy lock) (pre: error handling, re-entrancy)
- [ ] error
  - [ ] assert, require, revert
- [ ] events
  - [ ] 3 indexes
  - [ ] ui
  - [ ] storage
- [ ] enum (pre: error)
- [ ] structs (pre: array?)
- [ ] loop
  - [ ] gas limits
- [ ] mapping
  - [ ] CRUD
  - [ ] not iterable
- [ ] array
  - [ ] delete element (compact)
- [ ] inheritance
  - [ ] constructor
  - [ ] calling parent contracts
  - [ ] shadowing state variables
- [ ] visibility (pre: inheritance)
- [ ] interface?
- [ ] assembly?
- [ ] payable
- [ ] fallback (pre: payable?)
- [ ] send ether from contract (pre: payable, ether)
- [ ] call (pre: sending ether)
- [ ] delegate call (pre: call)
- [ ] calling other contracts (pre: sending ether from contract)
- [ ] creating contract from a contract (pre: calling other contract)
- [ ] import
- [ ] library
  - [ ] safe math
  - [ ] iterable mapping
  - [ ] array
- [ ] hash function
- [ ] signature verification (pre: hash function, assembly?)

## Application

- [ ] multisig wallet
- [ ] erc20
- [ ] iterable mapping
- [ ] heap
- [ ] merkle tree
- [ ] payment channels (uni, bidirectional, payment hub?)
- [ ] create2

## Hacks

- [ ] uint overflow
- [ ] reentrancy
- [ ] writing to storage
- [ ] selfdestruct
- [ ] blockhash
- [ ] honeypot

# Patterns

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

- [ ] mobile friendly
- [ ] archive 0.5

hacks

- [ ] reentrancy
- [ ] writing to storage
- [ ] uint overflow
- [ ] selfdestruct
- [ ] blockhash
- [ ] honeypot

applications

- [ ] multisig wallet
- [ ] erc20
- [ ] unidirectional?
- [ ] bidirectional
- [ ] payment hub?
- [ ] counterfactual?
- [ ] minimal proxy contract?

patterns

## suggestions

next video please : how to use erc20 in our contracts , example a smart contract that when it gets eth it throws back usdc to the same address or the reverse
thanks in advance :)
