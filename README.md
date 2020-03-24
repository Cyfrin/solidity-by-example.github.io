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

### Key Concepts

- [x] hello world
- [ ] first application (counter app)
- [ ] variables (local, state, global)
- [ ] gas and gas price
- [ ] ether and wei
- [ ] getters and setters (tx)

### Data types

- [x] primitives (uint, address,...)
- [x] custom types (struct, enum)
  - [x] enum
  - [x] structs
- [ ] storage, memory, calldata?
- [ ] reference types (?)
  - [ ] mapping
    - [ ] CRUD
    - [ ] nested, structs
    - [ ] not iterable
  - [ ] array
    - [ ] CRUD
    - [ ] nested, structs
    - [ ] delete element (compact)
  - [ ] string

### Flow control

- [ ] if / else
- [ ] for loop
  - [ ] gas limits

### Function

- [x] function
  - [ ] getters and setters (tx)
  - [ ] storage, memory, calldata?
  - [ ] different ways to return outputs
  - [ ] destructing outputs
  - [ ] restriction on inputs and return types (pre: array and maps)
  - [ ] view and pure functions
- [x] error
  - [ ] assert, require, revert
- [x] function modifiers (pre: error)
  - [ ] before and after function call
  - [ ] examples (restrict access, validate inputs, re-entrancy lock) (pre: error handling, re-entrancy)

### Inheritance

- [ ] inheritance
  - [ ] constructor
  - [ ] calling parent contracts
  - [ ] shadowing state variables
- [ ] visibility (pre: inheritance)
- [ ] interface??

### Sending and Receiving Ether

- [ ] payable
- [ ] fallback (pre: payable?)
- [ ] send ether from contract (pre: payable, ether)
  - [ ] send ether to constructor?

### Contract Interaction

- [ ] call (pre: sending ether)
- [ ] delegate call (pre: call)
- [ ] library
  - [ ] safe math
  - [ ] iterable mapping
  - [ ] array
- [ ] calling other contracts (pre: sending ether from contract)
- [ ] creating contract from a contract (pre: calling other contract)

### Misc

- [ ] import
- [ ] assembly??
- [ ] events
  - [ ] 3 indexes
  - [ ] ui
  - [ ] storage

### Cryptography

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
- [ ] casper?
- [ ] minimal proxy contract?

## Hacks

- [ ] uint overflow
- [ ] reentrancy
- [ ] writing to storage
- [ ] selfdestruct
- [ ] blockhash
- [ ] honeypot

## Patterns

## TODO

- [ ] mobile friendly
- [ ] archive 0.5

## suggestions

next video please : how to use erc20 in our contracts , example a smart contract that when it gets eth it throws back usdc to the same address or the reverse
thanks in advance :)
