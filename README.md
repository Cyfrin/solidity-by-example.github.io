# solidity-by-example.github.io

[Solidity By Example](https://solidity-by-example.org)

### License

[MIT License](LICENSE)

## TODO

Sending ether - example calling function and sending ether

- [ ] email subscription
- [ ] archive 0.5
- [ ] sending ether to payable function

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
