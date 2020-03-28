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

### Basic - 0

- [x] hello world
- [x] first application (counter app)
- [x] primitives (uint, bytes32, address...)
- [x] variables (local, state, global)
- [x] getters and setters (tx)
- [x] gas and gas price
- [x] ether and wei
- [ ] TODO: app

### Basic - 1

##### Flow control

- [x] if / else
- [x] for loop

- [x] error (pre: if / else)
- [x] events
  - [x] 3 indexes
  - [x] ui
  - [x] storage
- [ ] TODO: app

# Data types

- [x] mapping
  - [x] CRUD
  - [x] nested
  - [x] not iterable
- [x] array
  - [x] fixed size / dynamic size
  - [x] CRUD
  - [x] delete element (compact)
- [x] string
- [x] bytes
- [x] custom types (struct, enum)
  - [x] enum
  - [x] structs
    - [x] struct with mapping, array
    - [x] array of structs, mapping to structs
    - [x] storage declaration
- [ ] TODO: app

### Function

- [x] function
  - [x] remind getters and setters (tx)
  - [x] different ways to return outputs
  - [x] destructing outputs
  - [x] view and pure functions
  - [ ] TODO: storage, memory, calldata?
  - [ ] restriction on inputs and return types (pre: array and maps)
- [x] function modifiers (pre: error)
  - [x] before and after function call
  - [x] examples (restrict access, validate inputs, re-entrancy lock) (pre: error handling, re-entrancy)
- [ ] TODO: app

### Inheritance

- [ ] constructor
- [ ] inheritance
- [ ] calling parent contracts
- [ ] shadowing state variables
- [ ] visibility (pre: inheritance)
- [ ] TODO: interface??
- [ ] TODO: app

### Sending and Receiving Ether

- [x] payable
- [x] fallback (pre: payable?)
- [x] send ether from contract (pre: payable, ether)
  - [ ] TODO: send ether to constructor? (pre: constructor)
- [ ] TODO: app

### Contract Interaction

- [ ] call (pre: sending ether)
- [ ] delegate call (pre: call)
- [ ] calling other contracts (pre: sending ether from contract)
- [ ] creating contract from a contract (pre: calling other contract)
- [ ] TODO: app

### Misc

- [x] import
- [x] library
  - [x] safe math
  - [x] iterable mapping
- [ ] TODO: assembly??

### Cryptography

- [x] hash function
- [x] signature verification (pre: hash function, assembly?)
- [ ] TODO: app

## Application

- [ ] multisig wallet
- [ ] erc20
- [ ] iterable mapping
- [ ] heap
- [ ] merkle tree
- [ ] payment channels (uni, bidirectional)
- [ ] create2
- [ ] TODO: casper?
- [ ] TODO: minimal proxy contract?

## Hacks

- [ ] uint overflow
- [ ] reentrancy
- [ ] writing to storage
- [ ] selfdestruct
- [ ] blockhash
- [ ] honeypot

## Patterns

- [ ] push vs pull
- [ ] factory

## TODO

- [ ] mobile friendly
- [ ] 0.6

## suggestions

next video please : how to use erc20 in our contracts , example a smart contract that when it gets eth it throws back usdc to the same address or the reverse
thanks in advance :)
