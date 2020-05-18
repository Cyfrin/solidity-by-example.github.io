# solidity-by-example.github.io

TODO: simplify bi directional payment channel

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
- [x] first application (counter app)
- [x] primitives (uint, bytes32, address...)
- [x] variables (local, state, global)
- [x] getters and setters (tx)
- [x] ether and wei
- [x] gas and gas price

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
- [ ] TODO?: string and bytes
- [x] enum
- [x] structs
- [x] data locations - storage, memory, calldata

### Function

- [x] function
- [x] view and pure functions
- [x] error
- [x] function modifiers

- [x] events

### Inheritance

- [x] constructor
- [x] inheritance
- [x] shadowing state variables
- [x] calling parent contracts
- [x] visibility
- [ ] TODO?: interface

### Sending and Receiving Ether

- [x] payable
- [x] send ether from contract
- [x] fallback

### Contract Interaction

- [x] call
- [x] delegate call
- [x] calling other contracts
- [x] creating contract from a contract (pre: calling other contract)

### Misc

- [x] import
- [x] library
- [ ] TODO? assembly

### Cryptography

- [x] hash function
- [x] signature verification

## Application

- [x] multisig wallet
- [ ] TODO? erc20
- [x] iterable mapping
- [ ] TODO? heap
- [x] merkle tree
- [x] create2
- [x] payment channels (uni, bidirectional)
- [ ] TODO?: casper?
- [ ] TODO?: minimal proxy contract?

## Hacks

- [x] reentrancy
- [x] arithmetic overflow / underflow
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
- [ ] sidenav and or link to next topic
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
