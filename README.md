# solidity-by-example.github.io

TODO: simplify bi directional payment channel

[Solidity By Example](https://solidity-by-example.org)

### License

[MIT License](LICENSE)

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

- [x] if / else (TODO: ternary)
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
- [ ] interface

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
- [ ] erc20
- [x] iterable mapping
- [x] merkle tree
- [x] create2
- [x] payment channels (uni, bidirectional)
- [ ] TODO?: casper?
- [ ] TODO?: minimal proxy contract?

## Hacks

- [x] reentrancy
- [x] arithmetic overflow / underflow
- [x] unexpected ether (self destruct)
- [x] delegatecall (pre: storage layout)
- [x] default visibility (skip)
- [ ] entropy illusion
- [x] external contract referencing
- [x] honeypot (pre: external call & reentrancy)
- [x] short address / param attack (skip)
- [x] unchecked call return value (skip)
- [x] front running
- [x] DOS
- [x] block timestamp manipulation
- [x] constructor with care (skip)
- [x] unintializsd storage pointers (skip)
- [x] floating points and precisions (skip)
- [x] tx.origin

### Ethernaut

- [x] hello ethernaut
- [x] fallback
- [x] fallout (constructor with care)
- [ ] coin flip (randomness guessing head / tail based on prev block hash)
- [x] telephone
- [x] token
- [x] delegation (delegatecall to change ownership)
- [x] force
- [ ] vault (read private data)
- [x] king
- [x] re-entrancy
- [x] elevation
- [ ] privacy (optimized storage)
- [x] gatekeeper one
- [x] gatekeeper two
- [x] naught coin
- [x] preservation (delegatecall to change address and then ownership)
- [x] recovery
- [ ] magic number (contract creation)
- [ ] alien codex (edit ABI)
- [x] denial (denial of service using assert and using up all gas)
- [ ] shop (external contract call)

## Patterns

- [ ] push vs pull
- [ ] commit reveal
- [ ] factory

## TODO

- [ ] search
- [ ] build pipeline (.gitignore index.html.js and rebuild it when deploy)
- [ ] exercises
- [ ] sidenav and or link to next topic
- [ ] seo
- [ ] submarine send

### 0.6 memo

- [ ] script to generate example pages
- [ ] redirect to current page for 0.5 and 0.6
- [ ] typescript

- [ ] override and virtual
- [ ] shadow disallowed
- [ ] fallback and receive
- [ ] 0.6 features

### Memo

````
```shell
# deploy
npm run deploy

# find and compile sol
find src/ -name "*.sol" -exec docker run -v $PWD/src:/src ethereum/solc:0.6.0 {} \;

# compile single file
docker run -v $PWD/src:/src ethereum/solc:0.6.0 /src/pages/HelloWorld/HelloWorld.sol

# md to react
npm run md-to-react -- path/to/folder/with/md

# md to react all pages
find src -type d -not -path "*/__snapshots__" -exec npm run md-to-react -- {} \;
````
