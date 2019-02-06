import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css'
import Home from './Home'
import HelloWorld from './examples/HelloWorld'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/hello-world" component={HelloWorld} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
