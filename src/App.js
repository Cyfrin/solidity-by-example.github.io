import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './Home'
import HelloWorld from './examples/HelloWorld'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/hello-world" component={HelloWorld} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App
