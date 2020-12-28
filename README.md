# solidity-by-example.github.io

[Solidity By Example](https://solidity-by-example.org)

### License

[MIT License](LICENSE)

### Memo

```shell
## Deploy ##
# md to react
npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts src/pages/0.5/array

# md to react all pages
find src/pages -type d -not -path "*/__snapshots__" -exec npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts {} \;

# build routes
npx ts-node --project ./scripts/tsconfig.json scripts/build-routes.ts

# deploy
npm run deploy

## Compile Solidity ##
# compile single file
docker run -v $PWD/src:/src ethereum/solc:0.6.10 /src/pages/0.6/sol/HelloWorld/HelloWorld.sol

# find and compile sol
find src/pages/0.8 -name "*.sol" -exec docker run -v $PWD/src:/src ethereum/solc:0.8.0 {} \;

## Mics ##
# rename files
find . -type f -name "index.test.js" -exec sh -c 'mv "$0" "${0%.test.js}.test.tsx"' {} \;
```
