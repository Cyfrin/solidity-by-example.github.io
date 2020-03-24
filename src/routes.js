import HelloWorld from "./pages/HelloWorld"
import StateVariables from "./pages/StateVariables"
import Payable from "./pages/Payable"
import SendingEther from "./pages/SendingEther"
import Fallback from "./pages/Fallback"
import ReEntrancy from "./pages/ReEntrancy"
import SelfDestruct from "./pages/SelfDestruct"
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
import MultiSigWallet from "./pages/MultiSigWallet"
import Dividend from "./pages/Dividend"
import PaymentChannel from "./pages/PaymentChannel"
import MerkleTree from "./pages/MerkleTree"

const routes = [
  {
    path: "/hello-world",
    component: HelloWorld,
  },
  {
    path: "/state-variables",
    component: StateVariables,
  },
  {
    path: "/import",
    component: Import,
  },
  {
    path: "/events",
    component: Events,
  },
  {
    path: "/error",
    component: Error,
  },
  {
    path: "/sending-ether",
    component: SendingEther,
  },
  {
    path: "/payable",
    component: Payable,
  },
  {
    path: "/fallback",
    component: Fallback,
  },
  {
    path: "/re-entrancy",
    component: ReEntrancy,
  },
  {
    path: "/self-destruct",
    component: SelfDestruct,
  },
  {
    path: "/function",
    component: Function,
  },
  {
    path: "/function-modifier",
    component: FunctionModifier,
  },
  {
    path: "/view-and-pure-functions",
    component: ViewAndPureFunctions,
  },
  {
    path: "/inheritance",
    component: Inheritance,
  },
  {
    path: "/shadowing-inherited-state-variables",
    component: Shadow,
  },
  {
    path: "/constructor",
    component: Constructor,
  },
  {
    path: "/super",
    component: Super,
  },
  {
    path: "/visibility",
    component: Visibility,
  },
  {
    path: "/loop",
    component: Loop,
  },
  {
    path: "/enum",
    component: Enum,
  },
  {
    path: "/mapping",
    component: Mapping,
  },
  {
    path: "/array",
    component: Array,
  },
  {
    path: "/structs",
    component: Structs,
  },
  {
    path: "/new-contract",
    component: NewContract,
  },
  {
    path: "/calling-contract",
    component: CallingContract,
  },
  {
    path: "/call",
    component: Call,
  },
  {
    path: "/delegatecall",
    component: Delegatecall,
  },
  {
    path: "/library",
    component: Library,
  },
  {
    path: "/ether-units",
    component: EtherUnits,
  },
  {
    path: "/gas",
    component: Gas,
  },
  {
    path: "/hashing",
    component: Keccak256,
  },
  {
    path: "/signature",
    component: Signature,
  },
  {
    path: "/multi-sig-wallet",
    component: MultiSigWallet,
  },
  {
    path: "/dividend",
    component: Dividend,
  },
  {
    path: "/payment-channel",
    component: PaymentChannel,
  },
  {
    path: "/merkle-tree",
    component: MerkleTree,
  },
]

export default routes
