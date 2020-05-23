import Array from "./pages/Array"
import Call from "./pages/Call"
import CallingContract from "./pages/CallingContract"
import Constructor from "./pages/Constructor"
import DataLocations from "./pages/DataLocations"
import Delegatecall from "./pages/Delegatecall"
import Enum from "./pages/Enum"
import Error from "./pages/Error"
import EtherUnits from "./pages/EtherUnits"
import Events from "./pages/Events"
import Fallback from "./pages/Fallback"
import FirstApp from "./pages/FirstApp"
import Function from "./pages/Function"
import FunctionModifier from "./pages/FunctionModifier"
import Gas from "./pages/Gas"
import HelloWorld from "./pages/HelloWorld"
import IfElse from "./pages/IfElse"
import Import from "./pages/Import"
import Inheritance from "./pages/Inheritance"
import Keccak256 from "./pages/Keccak256"
import Library from "./pages/Library"
import Loop from "./pages/Loop"
import Mapping from "./pages/Mapping"
import NewContract from "./pages/NewContract"
import Payable from "./pages/Payable"
import Primitives from "./pages/Primitives"
import SendingEther from "./pages/SendingEther"
import Shadow from "./pages/Shadow"
import Signature from "./pages/Signature"
import StateVariables from "./pages/StateVariables"
import Structs from "./pages/Structs"
import Super from "./pages/Super"
import Variables from "./pages/Variables"
import ViewAndPureFunctions from "./pages/ViewAndPureFunctions"
import Visibility from "./pages/Visibility"

import BiDirectionalPaymentChannel from "./pages/app/BiDirectionalPaymentChannel"
import UniDirectionalPaymentChannel from "./pages/app/UniDirectionalPaymentChannel"
import IterableMapping from "./pages/app/IterableMapping"
import MerkleTree from "./pages/app/MerkleTree"
import MultiSigWallet from "./pages/app/MultiSigWallet"
import Create2 from "./pages/app/Create2"

import ReEntrancy from "./pages/hacks/ReEntrancy"
import Overflow from "./pages/hacks/Overflow"
import SelfDestruct from "./pages/hacks/SelfDestruct"
import DenialOfService from "./pages/hacks/DenialOfService"
import TxOrigin from "./pages/hacks/TxOrigin"
import ExternalContract from "./pages/hacks/ExternalContract"
import HoneyPot from "./pages/hacks/HoneyPot"
import FrontRunning from "./pages/hacks/FrontRunning"
import BlockTimestampManipulation from "./pages/hacks/BlockTimestampManipulation"

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
]

const ROUTES = ROUTES_BY_CATEGORY.reduce((arr, { routes }) => {
  arr.push(...routes)
  return arr
}, [])

export default ROUTES
