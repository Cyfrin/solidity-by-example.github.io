import HelloWorld from "./pages/HelloWorld"
import FirstApp from "./pages/FirstApp"
import Primitives from "./pages/Primitives"
import Variables from "./pages/Variables"
import Payable from "./pages/Payable"
import SendingEther from "./pages/SendingEther"
import Fallback from "./pages/Fallback"
import Events from "./pages/Events"
import Error from "./pages/Error"
import Import from "./pages/Import"
import Function from "./pages/Function"
import FunctionModifier from "./pages/FunctionModifier"
import ViewAndPureFunctions from "./pages/ViewAndPureFunctions"
import Inheritance from "./pages/Inheritance"
import Shadow from "./pages/Shadow"
import Constructor from "./pages/Constructor"
import Super from "./pages/Super"
import Visibility from "./pages/Visibility"
import Loop from "./pages/Loop"
import Enum from "./pages/Enum"
import Mapping from "./pages/Mapping"
import Array from "./pages/Array"
import Structs from "./pages/Structs"
import NewContract from "./pages/NewContract"
import CallingContract from "./pages/CallingContract"
import Call from "./pages/Call"
import Delegatecall from "./pages/Delegatecall"
import Library from "./pages/Library"
import EtherUnits from "./pages/EtherUnits"
import Gas from "./pages/Gas"
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
    path: "ether-units",
    component: EtherUnits,
    title: "Ether and Wei",
  },
  {
    path: "gas",
    component: Gas,
    title: "Gas and Gas Price",
  },
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
    path: "function-modifier",
    component: FunctionModifier,
    title: "Function Modifier",
  },
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
    path: "super",
    component: Super,
    title: "Calling Parent Contracts",
  },
  {
    path: "shadowing-inherited-state-variables",
    component: Shadow,
    title: "Shadowing Inherited State Variables",
  },
  {
    path: "visibility",
    component: Visibility,
    title: "Visibility",
  },
  {
    path: "events",
    component: Events,
    title: "Events",
  },
  {
    path: "error",
    component: Error,
    title: "Error",
  },
  {
    path: "loop",
    component: Loop,
    title: "Loop",
  },
  {
    path: "array",
    component: Array,
    title: "Array",
  },
  {
    path: "mapping",
    component: Mapping,
    title: "Mapping",
  },
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
    routes: SOL_ROUTES.map(route => ({
      ...route,
      path: `/${route.path}`,
    })),
  },
  {
    title: "Applications",
    routes: APP_ROUTES.map(route => ({
      ...route,
      path: `/app/${route.path}`,
    })),
  },
  {
    title: "Hacks",
    routes: HACK_ROUTES.map(route => ({
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
