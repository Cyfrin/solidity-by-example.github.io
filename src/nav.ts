export interface Route {
  path: string
  title: string
}

export interface Translation {
  lang: string
  url: string
}

export const TRANSLATIONS: Translation[] = [
  {
    lang: "Armenian",
    url: "https://pranatech.org/solidity-by-example-hy/",
  },
  {
    lang: "Persian",
    url: "https://dpanosian.com/fa/solidity-by-example",
  },
  {
    lang: "Spanish",
    url: "https://github.com/lcadafalch/solidity_attacks",
  },
  {
    lang: "Simplified Chinese",
    url: "https://github.com/Web3-Club/solidity-by-example_Chinese",
  },
]

export const SOL_ROUTES: Route[] = [
  {
    path: "hello-world",
    title: "Hello World",
  },
  {
    path: "first-app",
    title: "First App",
  },
  {
    path: "primitives",
    title: "Primitive Data Types",
  },
  {
    path: "variables",
    title: "Variables",
  },
  {
    path: "constants",
    title: "Constants",
  },
  {
    path: "immutable",
    title: "Immutable",
  },
  {
    path: "state-variables",
    title: "Reading and Writing to a State Variable",
  },
  {
    path: "ether-units",
    title: "Ether and Wei",
  },
  {
    path: "gas",
    title: "Gas and Gas Price",
  },
  // Flow control
  {
    path: "if-else",
    title: "If / Else",
  },
  {
    path: "loop",
    title: "For and While Loop",
  },
  // collection data types
  {
    path: "mapping",
    title: "Mapping",
  },
  {
    path: "array",
    title: "Array",
  },
  // custom data types
  {
    path: "enum",
    title: "Enum",
  },
  {
    path: "structs",
    title: "Structs",
  },
  {
    path: "data-locations",
    title: "Data Locations - Storage, Memory and Calldata",
  },
  // function
  {
    path: "function",
    title: "Function",
  },
  {
    path: "view-and-pure-functions",
    title: "View and Pure Functions",
  },
  {
    path: "error",
    title: "Error",
  },
  {
    path: "function-modifier",
    title: "Function Modifier",
  },
  {
    path: "events",
    title: "Events",
  },
  // inheritance
  {
    path: "constructor",
    title: "Constructor",
  },
  {
    path: "inheritance",
    title: "Inheritance",
  },
  {
    path: "shadowing-inherited-state-variables",
    title: "Shadowing Inherited State Variables",
  },
  {
    path: "super",
    title: "Calling Parent Contracts",
  },
  {
    path: "visibility",
    title: "Visibility",
  },
  {
    path: "interface",
    title: "Interface",
  },
  // send / receive ether
  {
    path: "payable",
    title: "Payable",
  },
  {
    path: "sending-ether",
    title: "Sending Ether - Transfer, Send, and Call",
  },
  {
    path: "fallback",
    title: "Fallback",
  },
  // contract interaction
  {
    path: "call",
    title: "Call",
  },
  {
    path: "delegatecall",
    title: "Delegatecall",
  },
  {
    path: "function-selector",
    title: "Function Selector",
  },

  {
    path: "calling-contract",
    title: "Calling Other Contract",
  },
  {
    path: "new-contract",
    title: "Creating Contracts from a Contract",
  },
  // misc
  {
    path: "try-catch",
    title: "Try / Catch",
  },
  {
    path: "import",
    title: "Import",
  },
  {
    path: "library",
    title: "Library",
  },
  {
    path: "abi-encode",
    title: "ABI Encode",
  },
  {
    path: "abi-decode",
    title: "ABI Decode",
  },
  // crypto
  {
    path: "hashing",
    title: "Hashing with Keccak256",
  },
  {
    path: "signature",
    title: "Verifying Signature",
  },
  {
    path: "gas-golf",
    title: "Gas Optimizations",
  },
  {
    path: "bitwise",
    title: "Bitwise Operators",
  },
  {
    path: "unchecked-math",
    title: "Unchecked Math",
  },
  {
    path: "assembly-variable",
    title: "Assembly Variable",
  },
  {
    path: "assembly-if",
    title: "Assembly Conditional Statements",
  },
  {
    path: "assembly-loop",
    title: "Assembly Loop",
  },
  {
    path: "assembly-error",
    title: "Assembly Error",
  },
  {
    path: "assembly-math",
    title: "Assembly Math",
  },
]

export const APP_ROUTES: Route[] = [
  {
    path: "ether-wallet",
    title: "Ether Wallet",
  },
  {
    path: "multi-sig-wallet",
    title: "Multi Sig Wallet",
  },
  {
    path: "merkle-tree",
    title: "Merkle Tree",
  },
  {
    path: "iterable-mapping",
    title: "Iterable Mapping",
  },
  {
    path: "erc20",
    title: "ERC20",
  },
  {
    path: "erc721",
    title: "ERC721",
  },
  {
    path: "erc1155",
    title: "ERC1155",
  },
  {
    path: "gasless-token-transfer",
    title: "Gasless Token Transfer",
  },
  {
    path: "simple-bytecode-contract",
    title: "Simple Bytecode Contract",
  },
  {
    path: "create2",
    title: "Precompute Contract Address with Create2",
  },
  {
    path: "minimal-proxy",
    title: "Minimal Proxy Contract",
  },
  {
    path: "upgradeable-proxy",
    title: "Upgradeable Proxy",
  },
  {
    path: "deploy-any-contract",
    title: "Deploy Any Contract",
  },
  {
    path: "write-to-any-slot",
    title: "Write to Any Slot",
  },
  {
    path: "uni-directional-payment-channel",
    title: "Uni-directional Payment Channel",
  },
  {
    path: "bi-directional-payment-channel",
    title: "Bi-directional Payment Channel",
  },
  {
    path: "english-auction",
    title: "English Auction",
  },
  {
    path: "dutch-auction",
    title: "Dutch Auction",
  },
  {
    path: "crowd-fund",
    title: "Crowd Fund",
  },
  {
    path: "multi-call",
    title: "Multi Call",
  },
  {
    path: "multi-delegatecall",
    title: "Multi Delegatecall",
  },
  {
    path: "time-lock",
    title: "Time Lock",
  },
  {
    path: "assembly-bin-exp",
    title: "Assembly Binary Exponentiation",
  },
]

const HACK_ROUTES: Route[] = [
  {
    path: "re-entrancy",
    title: "Re-Entrancy",
  },
  {
    path: "overflow",
    title: "Arithmetic Overflow and Underflow",
  },
  {
    path: "self-destruct",
    title: "Self Destruct",
  },
  {
    path: "accessing-private-data",
    title: "Accessing Private Data",
  },
  {
    path: "delegatecall",
    title: "Delegatecall",
  },
  {
    path: "randomness",
    title: "Source of Randomness",
  },
  {
    path: "denial-of-service",
    title: "Denial of Service",
  },
  {
    path: "phishing-with-tx-origin",
    title: "Phishing with tx.origin",
  },
  {
    path: "hiding-malicious-code-with-external-contract",
    title: "Hiding Malicious Code with External Contract",
  },
  {
    path: "honeypot",
    title: "Honeypot",
  },
  {
    path: "front-running",
    title: "Front Running",
  },
  {
    path: "block-timestamp-manipulation",
    title: "Block Timestamp Manipulation",
  },
  {
    path: "signature-replay",
    title: "Signature Replay",
  },
  {
    path: "contract-size",
    title: "Bypass Contract Size Check",
  },
  {
    path: "deploy-different-contracts-same-address",
    title: "Deploy Different Contracts at Same Address",
  },
  {
    path: "vault-inflation",
    title: "Vault Inflation Attack",
  },
  {
    path: "weth-permit",
    title: "WETH Permit",
  },
]

export const TEST_ROUTES: Route[] = [
  {
    path: "echidna",
    title: "Echidna",
  },
]

export const DEFI_ROUTES = [
  {
    path: "uniswap-v2",
    title: "Uniswap V2 Swap",
  },
  {
    path: "uniswap-v2-add-remove-liquidity",
    title: "Uniswap V2 Add Remove Liquidity",
  },
  {
    path: "uniswap-v2-optimal-one-sided-supply",
    title: "Uniswap V2 Optimal One Sided Supply",
  },
  {
    path: "uniswap-v2-flash-swap",
    title: "Uniswap V2 Flash Swap",
  },
  {
    path: "uniswap-v3-swap",
    title: "Uniswap V3 Swap",
  },
  {
    path: "uniswap-v3-liquidity",
    title: "Uniswap V3 Liquidity",
  },
  {
    path: "uniswap-v3-flash",
    title: "Uniswap V3 Flash Loan",
  },
  {
    path: "uniswap-v3-flash-swap",
    title: "Uniswap V3 Flash Swap Arbitrage",
  },
  {
    path: "chainlink-price-oracle",
    title: "Chainlink Price Oracle",
  },
  {
    path: "dai-proxy",
    title: "DAI Proxy",
  },
  {
    path: "staking-rewards",
    title: "Staking Rewards",
  },
  {
    path: "discrete-staking-rewards",
    title: "Discrete Staking Rewards",
  },
  {
    path: "vault",
    title: "Vault",
  },
  {
    path: "constant-sum-amm",
    title: "Constant Sum AMM",
  },
  {
    path: "constant-product-amm",
    title: "Constant Product AMM",
  },
  {
    path: "stable-swap-amm",
    title: "Stable Swap AMM",
  },
]

export const ROUTES_BY_CATEGORY = [
  {
    title: "",
    routes: SOL_ROUTES.map((route) => ({
      ...route,
      path: `/${route.path}`,
    })),
  },
  {
    title: "Applications",
    routes: APP_ROUTES.map((route) => ({
      ...route,
      path: `/app/${route.path}`,
    })),
  },
  {
    title: "Hacks",
    routes: HACK_ROUTES.map((route) => ({
      ...route,
      path: `/hacks/${route.path}`,
    })),
  },
  {
    title: "Tests",
    routes: TEST_ROUTES.map((route) => ({
      ...route,
      path: `/tests/${route.path}`,
    })),
  },
  {
    title: "DeFi",
    routes: DEFI_ROUTES.map((route) => ({
      ...route,
      path: `/defi/${route.path}`,
    })),
  },
]

export const ROUTES = ROUTES_BY_CATEGORY.map(({ routes }) => routes).flat()
export const ROUTE_INDEX_BY_PATH = ROUTES.reduce((map, route: Route, i) => {
  // @ts-ignore
  map[route.path] = i
  return map
}, {})

export function getPrevNextPaths(path: string): {
  prev: Route | null
  next: Route | null
} {
  // @ts-ignore
  const index = ROUTE_INDEX_BY_PATH[path]
  if (index >= 0) {
    const prev = ROUTES[index - 1] || null
    const next = ROUTES[index + 1] || null
    return { prev, next }
  }
  return {
    prev: null,
    next: null,
  }
}
