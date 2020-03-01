import HelloWorld from "./pages/0.5/HelloWorld"
import StateVariables from "./pages/0.5/StateVariables"
import SafeMath from "./pages/0.5/SafeMath"
import Payable from "./pages/0.5/Payable"
import SendingEther from "./pages/0.5/SendingEther"
import Fallback from "./pages/0.5/Fallback"
import ReEntrancy from "./pages/0.5/ReEntrancy"
import SelfDestruct from "./pages/0.5/SelfDestruct"
import Events from "./pages/0.5/Events"
import Error from "./pages/0.5/Error"
import Import from "./pages/0.5/Import"
import Function from "./pages/0.5/Function"
import FunctionModifier from "./pages/0.5/FunctionModifier"
import ViewAndPureFunctions from "./pages/0.5/ViewAndPureFunctions"
import Inheritance from "./pages/0.5/Inheritance"
import Shadow from "./pages/0.5/Shadow"
import Constructor from "./pages/0.5/Constructor"
import Super from "./pages/0.5/Super"
import Visibility from "./pages/0.5/Visibility"
import Loop from "./pages/0.5/Loop"
import Enum from "./pages/0.5/Enum"
import Mapping from "./pages/0.5/Mapping"
import Array from "./pages/0.5/Array"
import Structs from "./pages/0.5/Structs"
import NewContract from "./pages/0.5/NewContract"
import CallingContract from "./pages/0.5/CallingContract"
import Call from "./pages/0.5/Call"
import Delegatecall from "./pages/0.5/Delegatecall"
import Library from "./pages/0.5/Library"
import EtherUnits from "./pages/0.5/EtherUnits"
import Gas from "./pages/0.5/Gas"
import Keccak256 from "./pages/0.5/Keccak256"
import Signature from "./pages/0.5/Signature"
import MultiSigWallet from "./pages/0.5/MultiSigWallet"
import Dividend from "./pages/0.5/Dividend"
import PaymentChannel from "./pages/0.5/PaymentChannel"
import MerkleTree from "./pages/0.5/MerkleTree"

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
    path: "/safe-math",
    component: SafeMath,
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
