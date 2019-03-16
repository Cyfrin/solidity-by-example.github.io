import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Header from "./Header"
import Home from "./Home"
import HelloWorld from "./examples/HelloWorld"
import StateVariables from "./examples/StateVariables"
import SafeMath from "./examples/SafeMath"
import Payable from "./examples/Payable"
import SendingEther from "./examples/SendingEther"
import Fallback from "./examples/Fallback"
import FallbackGasLimit from "./examples/FallbackGasLimit"
import ReEntrancy from "./examples/ReEntrancy"
import SelfDestruct from "./examples/SelfDestruct"
import Events from "./examples/Events"
import Error from "./examples/Error"
import Import from "./examples/Import"
import Function from "./examples/Function"
import FunctionModifier from "./examples/FunctionModifier"
import ViewAndPureFunctions from "./examples/ViewAndPureFunctions"
import Inheritance from "./examples/Inheritance"
import Shadow from "./examples/Shadow"
import Constructor from "./examples/Constructor"
import Super from "./examples/Super"
import Visibility from "./examples/Visibility"
import Loop from "./examples/Loop"
import Enum from "./examples/Enum"
import Mapping from "./examples/Mapping"
import Array from "./examples/Array"
import Structs from "./examples/Structs"
import NewContract from "./examples/NewContract"
import CallingContract from "./examples/CallingContract"
import Call from "./examples/Call"
import Delegatecall from "./examples/Delegatecall"
import Library from "./examples/Library"
import Wei from "./examples/Wei"
import Gas from "./examples/Gas"
import Keccak256 from "./examples/Keccak256"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-main">
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route path="/hello-world" component={HelloWorld} />
              <Route path="/state-variables" component={StateVariables} />
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
              <Route component={Home} />
            </Switch>
          </Router>
        </div>
      </div>
    )
  }
}

export default App
