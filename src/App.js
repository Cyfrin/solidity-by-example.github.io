import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import HelloWorld from "./pages/HelloWorld"
import GettingAndSettingVariables from "./pages/GettingAndSettingVariables"
import SafeMath from "./pages/SafeMath"
import Payable from "./pages/Payable"
import SendingEther from "./pages/SendingEther"
import Fallback from "./pages/Fallback"
import FallbackGasLimit from "./pages/FallbackGasLimit"
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
import Wei from "./pages/Wei"
import Gas from "./pages/Gas"
import Keccak256 from "./pages/Keccak256"
import Signature from "./pages/Signature"
import MultiSigWallet from "./pages/MultiSigWallet"
import Dividend from "./pages/Dividend"
import PaymentChannel from "./pages/PaymentChannel"

function App(props) {
  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/hello-world" component={HelloWorld} />
            <Route
              path="/getting-and-setting-variables"
              component={GettingAndSettingVariables}
            />
            <Route path="/import" component={Import} />
            <Route path="/safe-math" component={SafeMath} />
            <Route path="/events" component={Events} />
            <Route path="/error" component={Error} />
            <Route path="/sending-ether" component={SendingEther} />
            <Route path="/payable" component={Payable} />
            <Route path="/fallback" component={Fallback} />
            <Route path="/fallback-gas-limit" component={FallbackGasLimit} />
            <Route path="/re-entrancy" component={ReEntrancy} />
            <Route path="/self-destruct" component={SelfDestruct} />
            <Route path="/function" component={Function} />
            <Route path="/function-modifier" component={FunctionModifier} />
            <Route
              path="/view-and-pure-functions"
              component={ViewAndPureFunctions}
            />
            <Route path="/inheritance" component={Inheritance} />
            <Route
              path="/shadowing-inherited-state-variables"
              component={Shadow}
            />
            <Route path="/constructor" component={Constructor} />
            <Route path="/super" component={Super} />
            <Route path="/visibility" component={Visibility} />
            <Route path="/loop" component={Loop} />
            <Route path="/enum" component={Enum} />
            <Route path="/mapping" component={Mapping} />
            <Route path="/array" component={Array} />
            <Route path="/structs" component={Structs} />
            <Route path="/new-contract" component={NewContract} />
            <Route path="/calling-contract" component={CallingContract} />
            <Route path="/call" component={Call} />
            <Route path="/delegatecall" component={Delegatecall} />
            <Route path="/library" component={Library} />
            <Route path="/wei" component={Wei} />
            <Route path="/gas" component={Gas} />
            <Route path="/hashing" component={Keccak256} />
            <Route path="/signature" component={Signature} />
            <Route path="/multi-sig-wallet" component={MultiSigWallet} />
            <Route path="/dividend" component={Dividend} />
            <Route path="/payment-channel" component={PaymentChannel} />
            <Route component={Home} />
          </Switch>
        </Router>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
