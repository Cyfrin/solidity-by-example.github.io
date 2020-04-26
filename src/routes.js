import HelloWorld from "./pages/HelloWorld"
import FirstApp from "./pages/FirstApp"
import Primitives from "./pages/Primitives"
import Variables from "./pages/Variables"
import StateVariables from "./pages/StateVariables"
import EtherUnits from "./pages/EtherUnits"
import Gas from "./pages/Gas"
// Flow control
import IfElse from "./pages/IfElse"
import Loop from "./pages/Loop"
// collection data types
import Mapping from "./pages/Mapping"
import Array from "./pages/Array"
// custom data types
import Enum from "./pages/Enum"
import Structs from "./pages/Structs"
import DataLocations from "./pages/DataLocations"
// function
import Function from "./pages/Function"
import ViewAndPureFunctions from "./pages/ViewAndPureFunctions"
import Error from "./pages/Error"
import FunctionModifier from "./pages/FunctionModifier"
import Events from "./pages/Events"
// inheritance
import Constructor from "./pages/Constructor"
import Inheritance from "./pages/Inheritance"
import Shadow from "./pages/Shadow"
import Super from "./pages/Super"
import Visibility from "./pages/Visibility"

import NewContract from "./pages/NewContract"
import CallingContract from "./pages/CallingContract"

import Payable from "./pages/Payable"
import SendingEther from "./pages/SendingEther"
import Fallback from "./pages/Fallback"
import Import from "./pages/Import"
import Call from "./pages/Call"
import Delegatecall from "./pages/Delegatecall"
import Library from "./pages/Library"
import Keccak256 from "./pages/Keccak256"
import Signature from "./pages/Signature"
// application
import MultiSigWallet from "./pages/MultiSigWallet"
import Dividend from "./pages/Dividend"
import PaymentChannel from "./pages/PaymentChannel"
import MerkleTree from "./pages/MerkleTree"
import Create2 from "./pages/Create2"
// Hack
import ReEntrancy from "./pages/ReEntrancy"
import SelfDestruct from "./pages/SelfDestruct"

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
    path: "payable",
    component: Payable,
    title: "Payable",
  },
  {
    path: "sending-ether",
    component: SendingEther,
    title: "Sending Ether",
  },
  {
    path: "fallback",
    component: Fallback,
    title: "Fallback",
  },
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
    path: "dividend",
    component: Dividend,
    title: "Dividend",
  },
  {
    path: "payment-channel",
    component: PaymentChannel,
    title: "Payment Channel",
  },
  {
    path: "merkle-tree",
    component: MerkleTree,
    title: "Merkle Tree",
  },
  {
    path: "create2",
    component: Create2,
    title: "Precompute Contract Address with Create2",
  },
]

const HACK_ROUTES = [
  {
    path: "re-entrancy",
    component: ReEntrancy,
    title: "Re-Entrancy",
  },
  {
    path: "self-destruct",
    component: SelfDestruct,
    title: "Self Destruct",
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
