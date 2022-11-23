# solidity-by-example.github.io

[Sway By Example](https://solidity-by-example.org)

### License

[MIT License](LICENSE)

### Memo

```shell
## Deploy ##
# md to react
npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts src/pages/array

# md to react all pages
find src/pages -type d -not -path "*/__snapshots__" -exec npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts {} \;

# build routes
npx ts-node --project ./scripts/tsconfig.json scripts/build-routes.ts

# deploy
npm run deploy

## Compile Solidity ##
solc-select install 0.8.13
solc-select use 0.8.13

# compile single file
solc src/pages/hello-world/HelloWorld.sol

# find and compile sol
find src/pages/hacks -name "*.sol" solc {} \;
find src/pages -type f -name "*.sol" -exec sh -c 'solc "$0"' {} \;

## Mics ##
# rename files
find . -type f -name "index.test.js" -exec sh -c 'mv "$0" "${0%.test.js}.test.tsx"' {} \;
```
