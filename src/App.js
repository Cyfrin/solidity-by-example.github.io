import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css'
import Header from './Header'
import Home from './Home'
import HelloWorld from './examples/HelloWorld'
import SimpleStorage from './examples/SimpleStorage'
import SafeMath from './examples/SafeMath'
import Payable from './examples/Payable'
import SendingEther from './examples/SendingEther'
import Fallback from './examples/Fallback'
import FallbackGasLimit from './examples/FallbackGasLimit'
import Events from './examples/Events'
import Import from './examples/Import'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-main">
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route path="/hello-world" component={HelloWorld} />
              <Route path="/simple-storage" component={SimpleStorage} />
              <Route path="/import" component={Import} />
              <Route path="/safe-math" component={SafeMath} />
              <Route path="/events" component={Events} />
              <Route path="/sending-ether" component={SendingEther} />
              <Route path="/payable" component={Payable} />
              <Route path="/fallback" component={Fallback} />
              <Route path="/fallback-gas-limit" component={FallbackGasLimit} />
              <Route component={Home} />
            </Switch>
          </Router>
        </div>
      </div>
    )
  }
}

export default App
