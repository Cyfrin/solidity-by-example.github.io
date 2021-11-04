import React from "react"
import SEO from "../components/SEO"
import styles from "./index.module.css"
import youTube from "../components/youtube.svg"

interface Route {
  path: string
  title: string
}

const SOL_ROUTES: Route[] = [
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
  // crypto
  {
    path: "hashing",
    title: "Hashing with Keccak256",
  },
  {
    path: "signature",
    title: "Verifying Signature",
  },
]

const APP_ROUTES: Route[] = [
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
    path: "create2",
    title: "Precompute Contract Address with Create2",
  },
  {
    path: "minimal-proxy",
    title: "Minimal Proxy Contract",
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
]

const DEFI_ROUTES = [
  {
    path: "uniswap-v2",
    title: "Uniswap V2",
  },
  {
    path: "chainlink-price-oracle",
    title: "Chainlink Price Oracle",
  },
  {
    path: "staking-rewards",
    title: "Staking Rewards",
  },
]

export const ROUTES_BY_CATEGORY = [
  {
    title: "",
    routes: SOL_ROUTES,
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
    title: "DeFi",
    routes: DEFI_ROUTES.map((route) => ({
      ...route,
      path: `/defi/${route.path}`,
    })),
  },
]

const UPDATES = [
  "2021/11/04 - Update array examples",
  "2021/10/26 - Dutch Auction",
  "2021/10/22 - English Auction",
]

function HomePage() {
  return (
    <div className={styles.component}>
      <SEO
        title="Solidity by Example | 0.8.3"
        description="Learn smart contract programming using Solidity"
      />
      <h1 className={styles.header}>
        <a href="/">Solidity by Example</a>
      </h1>
      <div className={styles.subHeader}>v 0.8.3</div>
      <div className={styles.main}>
        <p>
          an introduction to <a href="https://solidity.readthedocs.io">Solidity</a> with
          simple examples
        </p>

        <div className={styles.youTube}>
          <img src={youTube} alt="logo" className={styles.youTubeLogo} />
          <a
            href="https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA"
            target="__blank"
          >
            Most code are explained here
          </a>
        </div>

        <div className={styles.updates}>
          {UPDATES.map((text, i) => (
            <div key={i}>{text}</div>
          ))}
        </div>

        {ROUTES_BY_CATEGORY.map(({ routes, title }, i) => (
          <div key={i}>
            {title && <h3>{title}</h3>}

            <ul className={styles.list}>
              {routes.map(({ path, title }) => (
                <li className={styles.listItem} key={path}>
                  <a href={path}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
