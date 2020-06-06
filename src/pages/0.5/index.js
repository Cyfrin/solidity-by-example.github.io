import React from "react"
import Home from "../components/Home"

const SOL_ROUTES = [
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
    path: "calling-contract",
    title: "Calling Other Contract",
  },
  {
    path: "new-contract",
    title: "Creating Contracts from a Contract",
  },
  // misc
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

const APP_ROUTES = [
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
    path: "uni-directional-payment-channel",
    title: "Uni-directional Payment Channel",
  },
  {
    path: "bi-directional-payment-channel",
    title: "Bi-directional Payment Channel",
  },
]

const HACK_ROUTES = [
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
]

const BASE_PATH = "/0.5"

export const ROUTES_BY_CATEGORY = [
  {
    title: "",
    routes: SOL_ROUTES.map((route) => ({
      ...route,
      path: `${BASE_PATH}/${route.path}`,
    })),
  },
  {
    title: "Applications",
    routes: APP_ROUTES.map((route) => ({
      ...route,
      path: `${BASE_PATH}/app/${route.path}`,
    })),
  },
  {
    title: "Hacks",
    routes: HACK_ROUTES.map((route) => ({
      ...route,
      path: `${BASE_PATH}/hacks/${route.path}`,
    })),
  },
]

const Home_ver_0_5 = () => (
  <Home version="0.5.16" routesByCategory={ROUTES_BY_CATEGORY} />
)

export default Home_ver_0_5
