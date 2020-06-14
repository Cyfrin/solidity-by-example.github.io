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
- [x] interface

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
- [x] erc20
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
- [x] read private data
- [x] delegatecall (pre: storage layout)
- [x] default visibility (skip)
- [x] entropy illusion
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
- [x] coin flip (randomness guessing head / tail based on prev block hash)
- [x] telephone
- [x] token
- [x] delegation (delegatecall to change ownership)
- [x] force
- [x] vault (read private data)
- [x] king
- [x] re-entrancy
- [x] elevation
- [x] privacy (optimized storage)
- [x] gatekeeper one
- [x] gatekeeper two
- [x] naught coin
- [x] preservation (delegatecall to change address and then ownership)
- [x] recovery
- [x] magic number (contract creation)
- [x] alien codex (edit ABI)
- [x] denial (denial of service using assert and using up all gas)
- [x] shop (external contract call)

## Patterns

- [ ] push vs pull
- [ ] commit reveal
- [ ] factory
- [ ] submarine send

## TODO

- [ ] search
- [ ] build pipeline (.gitignore index.html.js and rebuild it when deploy)
- [ ] auto deploy on pr merge

### 0.6 memo

- [ ] 0.6 features
- [ ] fallback and receive
- [ ] override and virtual
- [ ] shadow disallowed
- [ ] try / catch
- [ ] payable(address)

### Memo

```shell
# deploy
npm run deploy

# compile single file
docker run -v $PWD/src:/src ethereum/solc:0.6.0 /src/pages/0.6/sol/HelloWorld/HelloWorld.sol

# find and compile sol
find src/pages/0.5 -name "*.sol" -exec docker run -v $PWD/src:/src ethereum/solc:0.5.16 {} \;
find src/pages/0.6 -name "*.sol" -exec docker run -v $PWD/src:/src ethereum/solc:0.6.0 {} \;

# md to react
npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts src/pages/0.5/array

# md to react all pages
find src/pages -type d -not -path "*/__snapshots__" -exec npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts {} \;

# build routes
npx ts-node --project ./scripts/tsconfig.json scripts/build-routes.ts

# rename files
find . -type f -name "index.test.js" -exec sh -c 'mv "$0" "${0%.test.js}.test.tsx"' {} \;
```
