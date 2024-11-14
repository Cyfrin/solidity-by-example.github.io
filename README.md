# solidity-by-example.github.io

[Solidity By Example](https://solidity-by-example.org)

### License

[MIT License](LICENSE)

### Development

```shell
npm i
npm start
```

### Production

```shell
npm run build
# Preview production
npm run preview
# Deploy
npm run deploy
```

### Memo

TODO: code split / dynamic imports

```shell
## Deploy ##
# copy files from contracts
npx ts-node scripts/copy.ts
# md to react
npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts src/pages/array

# md to react all pages
find src/pages -type d -not -path "*/__snapshots__" -exec npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts {} \;

# build routes
npx ts-node --project ./scripts/tsconfig.json scripts/build-routes.ts

# build search index
npx ts-node --project ./scripts/tsconfig.json scripts/build-search-index.ts

## Compile Solidity ##
solc-select install 0.8.26
solc-select use 0.8.26

# compile single file
solc src/pages/hello-world/HelloWorld.sol

# find and compile sol
find src/pages/hacks -name "*.sol" solc {} \;
find src/pages -type f -name "*.sol" -exec sh -c 'solc "$0"' {} \;

## Misc ##
# rename files
find . -type f -name "index.test.js" -exec sh -c 'mv "$0" "${0%.test.js}.test.tsx"' {} \;
```
