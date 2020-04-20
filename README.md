# solidity-by-example.github.io

[Solidity By Example](https://solidity-by-example.org)

### License

[MIT License](LICENSE)

## Dev memo

```shell
# deploy
npm run deploy

npm run md-to-html -- path/to/folder/with/md
```

### Basic - 0

- [x] hello world
- [x] primitives (uint, bytes32, address...)
- [x] variables (local, state, global)
- [x] getters and setters (tx)
- [x] ether and wei
- [x] gas and gas price
- [x] first application (counter app)

### Basic - 1

##### Flow control

- [x] if / else
- [x] for loop

# Data types

- [x] mapping
  - [x] CRUD
  - [x] nested
  - [x] not iterable
- [x] array
  - [x] fixed size / dynamic size
  - [x] CRUD
  - [x] delete element (compact)
- [ ] string
- [ ] bytes
- [ ] custom types (struct, enum)
  - [ ] enum
  - [ ] structs
    - [ ] struct with mapping, array
    - [ ] array of structs, mapping to structs
    - [ ] storage declaration
- [ ] TODO: app

- [ ] error (pre: if / else)
- [ ] events
  - [ ] 3 indexes
  - [ ] ui
  - [ ] storage

### Function

- [ ] function
  - [ ] different ways to return outputs
    - [ ] destructing outputs
  - [ ] view and pure functions
  - [ ] TODO: storage, memory, calldata?
  - [ ] restriction on inputs and return types (pre: array and maps)
- [ ] function modifiers (pre: error)
  - [ ] before and after function call
  - [ ] examples (restrict access, validate inputs, re-entrancy lock) (pre: error handling, re-entrancy)
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

- [ ] import
- [ ] library
  - [ ] safe math
  - [ ] iterable mapping
- [ ] TODO: assembly??

### Cryptography

- [ ] hash function
- [ ] signature verification (pre: hash function, assembly?)
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

- [ ] reentrancy
- [ ] arithmetic overflow / underflow
- [ ] unexpected ether (self destruct)
- [ ] delegatecall
- [ ] default visibility
- [ ] entropy illusion
- [ ] external contract referencing
- [ ] short address / param attack
- [ ] unchecked call return value
- [ ] race condition / front running
- [ ] DOS
- [ ] block timestamp manipulation
- [ ] constructor with care
- [ ] unintializsd storage pointers
- [ ] floating points and precisions
- [ ] tx.origin
- [ ] writing to storage
- [ ] blockhash
- [ ] honeypot

## Patterns

- [ ] push vs pull
- [ ] factory

## TODO

- [ ] build pipeline (.gitignore index.html.js and rebuild it when deploy)
- [ ] contributors
- [ ] exercises
- [x] mobile friendly
- [x] copy to clipboard
- [ ] sidenav
- [ ] link to next topic
- [ ] seo
- [ ] 0.6
- [ ] submarine send
- [x] rename index.md.mustache to index.md
- [ ] style like
      https://reactjs.org/
      https://doc.rust-lang.org/rust-by-example/index.html
      https://www.tutorialspoint.com/solidity/solidity_overview.htm

## suggestions

next video please : how to use erc20 in our contracts , example a smart contract that when it gets eth it throws back usdc to the same address or the reverse
thanks in advance :)
