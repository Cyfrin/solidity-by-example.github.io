# solidity-by-example.github.io

[Solidity By Example](https://solidity-by-example.org)

### License

[MIT License](LICENSE)

## TODO

mobile friendly code (scale to mobile width?)
Sending ether - example calling function and sending ether

- [ ] iterable map library
- [ ] multisig book
  - [ ] reorganize subjects
- [ ] enum and escrow

- [ ] storage vs memory

- [ ] embed YouTube
- [ ] erc20
  - Can you make tutorial how to integrate Smart token in a website as payment.need web3.js
- [ ] SEO
- [ ] DEX ?
- [ ] Plasma ?
  - [ ] merkle tree
  - [ ] rlp
  - [ ] slicing bytes with assembly
  - [ ] priority queue
- [ ] Casper ?
- [ ] black hole
- [ ] hacks

  - [ ] reentrancy
  - [ ] writing to storage
  - [ ] uint overflow
  - [ ] selfdestruct
  - [ ] blockhash

- [x] applications
  - [x] multisig wallet
        // TODO verify with (mythril and klabs)
        // TODO review gnosis multi sig wallet
  - [x] dividends (split payment)
  - [x] payment channel
    - [ ] unidirectional
    - [ ] bidirectional
    - [ ] payment hub

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
