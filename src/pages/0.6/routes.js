import Array from "./Array"
import Call from "./Call"
import CallingContract from "./CallingContract"
import Constructor from "./Constructor"
import DataLocations from "./DataLocations"
import Delegatecall from "./Delegatecall"
import Enum from "./Enum"
import Error from "./Error"
import EtherUnits from "./EtherUnits"
import Events from "./Events"
import Fallback from "./Fallback"
import FirstApp from "./FirstApp"
import Function from "./Function"
import FunctionModifier from "./FunctionModifier"
import Gas from "./Gas"
import HelloWorld from "./HelloWorld"
import IfElse from "./IfElse"
import Import from "./Import"
import Inheritance from "./Inheritance"
import Keccak256 from "./Keccak256"
import Library from "./Library"
import Loop from "./Loop"
import Mapping from "./Mapping"
import NewContract from "./NewContract"
import Payable from "./Payable"
import Primitives from "./Primitives"
import SendingEther from "./SendingEther"
import Shadow from "./Shadow"
import Signature from "./Signature"
import StateVariables from "./StateVariables"
import Structs from "./Structs"
import Super from "./Super"
import Variables from "./Variables"
import ViewAndPureFunctions from "./ViewAndPureFunctions"
import Visibility from "./Visibility"

import BiDirectionalPaymentChannel from "./app/BiDirectionalPaymentChannel"
import UniDirectionalPaymentChannel from "./app/UniDirectionalPaymentChannel"
import IterableMapping from "./app/IterableMapping"
import MerkleTree from "./app/MerkleTree"
import MultiSigWallet from "./app/MultiSigWallet"
import Create2 from "./app/Create2"

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
    path: "delegatecall",
    component: HackDelegatecall,
    title: "Delegatecall",
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

const BASE_PATH = "/0.6"

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
