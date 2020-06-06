import Array from "./sol/Array"
import Call from "./sol/Call"
import CallingContract from "./sol/CallingContract"
import Constructor from "./sol/Constructor"
import DataLocations from "./sol/DataLocations"
import Delegatecall from "./sol/Delegatecall"
import Enum from "./sol/Enum"
import Error from "./sol/Error"
import EtherUnits from "./sol/EtherUnits"
import Events from "./sol/Events"
import Fallback from "./sol/Fallback"
import FirstApp from "./sol/FirstApp"
import Function from "./sol/Function"
import FunctionModifier from "./sol/FunctionModifier"
import Gas from "./sol/Gas"
import HelloWorld from "./sol/HelloWorld"
import IfElse from "./sol/IfElse"
import Import from "./sol/Import"
import Inheritance from "./sol/Inheritance"
import Interface from "./sol/Interface"
import Keccak256 from "./sol/Keccak256"
import Library from "./sol/Library"
import Loop from "./sol/Loop"
import Mapping from "./sol/Mapping"
import NewContract from "./sol/NewContract"
import Payable from "./sol/Payable"
import Primitives from "./sol/Primitives"
import SendingEther from "./sol/SendingEther"
import Shadow from "./sol/Shadow"
import Signature from "./sol/Signature"
import StateVariables from "./sol/StateVariables"
import Structs from "./sol/Structs"
import Super from "./sol/Super"
import Variables from "./sol/Variables"
import ViewAndPureFunctions from "./sol/ViewAndPureFunctions"
import Visibility from "./sol/Visibility"

import BiDirectionalPaymentChannel from "./app/BiDirectionalPaymentChannel"
import UniDirectionalPaymentChannel from "./app/UniDirectionalPaymentChannel"
import IterableMapping from "./app/IterableMapping"
import MerkleTree from "./app/MerkleTree"
import MultiSigWallet from "./app/MultiSigWallet"
import Create2 from "./app/Create2"
import ERC20 from "./app/ERC20"

import ReEntrancy from "./hacks/ReEntrancy"
import Overflow from "./hacks/Overflow"
import SelfDestruct from "./hacks/SelfDestruct"
import DenialOfService from "./hacks/DenialOfService"
import TxOrigin from "./hacks/TxOrigin"
import ExternalContract from "./hacks/ExternalContract"
import HoneyPot from "./hacks/HoneyPot"
import FrontRunning from "./hacks/FrontRunning"
import BlockTimestampManipulation from "./hacks/BlockTimestampManipulation"
import HackDelegatecall from "./hacks/Delegatecall"
import PrivateData from "./hacks/PrivateData"
import Randomness from "./hacks/Randomness"

const SOL_ROUTES = [
  {
    path: "hello-world",
    component: HelloWorld,
    title: "Hello World",
  },
  {
    path: "first-app",
    component: FirstApp,
    title: "First App",
  },
  {
    path: "primitives",
    component: Primitives,
    title: "Primitive Data Types",
  },
  {
    path: "variables",
    component: Variables,
    title: "Variables",
  },
  {
    path: "state-variables",
    component: StateVariables,
    title: "Reading and Writing to a State Variable",
  },
  {
    path: "ether-units",
    component: EtherUnits,
    title: "Ether and Wei",
  },
  {
    path: "gas",
    component: Gas,
    title: "Gas and Gas Price",
  },
  // Flow control
  {
    path: "if-else",
    component: IfElse,
    title: "If / Else",
  },
  {
    path: "loop",
    component: Loop,
    title: "For and While Loop",
  },
  // collection data types
  {
    path: "mapping",
    component: Mapping,
    title: "Mapping",
  },
  {
    path: "array",
    component: Array,
    title: "Array",
  },
  // custom data types
  {
    path: "enum",
    component: Enum,
    title: "Enum",
  },
  {
    path: "structs",
    component: Structs,
    title: "Structs",
  },
  {
    path: "data-locations",
    component: DataLocations,
    title: "Data Locations - Storage, Memory and Calldata",
  },
  // function
  {
    path: "function",
    component: Function,
    title: "Function",
  },
  {
    path: "view-and-pure-functions",
    component: ViewAndPureFunctions,
    title: "View and Pure Functions",
  },
  {
    path: "error",
    component: Error,
    title: "Error",
  },
  {
    path: "function-modifier",
    component: FunctionModifier,
    title: "Function Modifier",
  },
  {
    path: "events",
    component: Events,
    title: "Events",
  },
  // inheritance
  {
    path: "constructor",
    component: Constructor,
    title: "Constructor",
  },
  {
    path: "inheritance",
    component: Inheritance,
    title: "Inheritance",
  },
  {
    path: "shadowing-inherited-state-variables",
    component: Shadow,
    title: "Shadowing Inherited State Variables",
  },
  {
    path: "super",
    component: Super,
    title: "Calling Parent Contracts",
  },
  {
    path: "visibility",
    component: Visibility,
    title: "Visibility",
  },
  {
    path: "interface",
    component: Interface,
    title: "Interface",
  },
  // send / receive ether
  {
    path: "payable",
    component: Payable,
    title: "Payable",
  },
  {
    path: "sending-ether",
    component: SendingEther,
    title: "Sending Ether - Transfer, Send, and Call",
  },
  {
    path: "fallback",
    component: Fallback,
    title: "Fallback",
  },
  // contract interaction
  {
    path: "call",
    component: Call,
    title: "Call",
  },
  {
    path: "delegatecall",
    component: Delegatecall,
    title: "Delegatecall",
  },
  {
    path: "calling-contract",
    component: CallingContract,
    title: "Calling Other Contract",
  },
  {
    path: "new-contract",
    component: NewContract,
    title: "Creating Contracts from a Contract",
  },
  // misc
  {
    path: "import",
    component: Import,
    title: "Import",
  },
  {
    path: "library",
    component: Library,
    title: "Library",
  },
  // crypto
  {
    path: "hashing",
    component: Keccak256,
    title: "Hashing with Keccak256",
  },
  {
    path: "signature",
    component: Signature,
    title: "Verifying Signature",
  },
]

const APP_ROUTES = [
  {
    path: "multi-sig-wallet",
    component: MultiSigWallet,
    title: "Multi Sig Wallet",
  },
  {
    path: "merkle-tree",
    component: MerkleTree,
    title: "Merkle Tree",
  },
  {
    path: "iterable-mapping",
    component: IterableMapping,
    title: "Iterable Mapping",
  },
  {
    path: "erc20",
    component: ERC20,
    title: "ERC20",
  },
  {
    path: "create2",
    component: Create2,
    title: "Precompute Contract Address with Create2",
  },
  {
    path: "uni-directional-payment-channel",
    component: UniDirectionalPaymentChannel,
    title: "Uni-directional Payment Channel",
  },
  {
    path: "bi-directional-payment-channel",
    component: BiDirectionalPaymentChannel,
    title: "Bi-directional Payment Channel",
  },
]

const HACK_ROUTES = [
  {
    path: "re-entrancy",
    component: ReEntrancy,
    title: "Re-Entrancy",
  },
  {
    path: "overflow",
    component: Overflow,
    title: "Arithmetic Overflow and Underflow",
  },
  {
    path: "self-destruct",
    component: SelfDestruct,
    title: "Self Destruct",
  },
  {
    path: "accessing-private-data",
    component: PrivateData,
    title: "Accessing Private Data",
  },
  {
    path: "delegatecall",
    component: HackDelegatecall,
    title: "Delegatecall",
  },
  {
    path: "randomness",
    component: Randomness,
    title: "Source of Randomness",
  },
  {
    path: "denial-of-service",
    component: DenialOfService,
    title: "Denial of Service",
  },
  {
    path: "phishing-with-tx-origin",
    component: TxOrigin,
    title: "Phishing with tx.origin",
  },
  {
    path: "hiding-malicious-code-with-external-contract",
    component: ExternalContract,
    title: "Hiding Malicious Code with External Contract",
  },
  {
    path: "honeypot",
    component: HoneyPot,
    title: "Honeypot",
  },
  {
    path: "front-running",
    component: FrontRunning,
    title: "Front Running",
  },
  {
    path: "block-timestamp-manipulation",
    component: BlockTimestampManipulation,
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

const ROUTES = ROUTES_BY_CATEGORY.flatMap((arr) => arr.routes)

export default ROUTES
