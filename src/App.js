import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css'
import Header from './Header'
import Home from './Home'
import HelloWorld from './examples/HelloWorld'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-main">
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route path="/hello-world" component={HelloWorld} />
              <Route path="/" component={Home} />
            </Switch>
          </Router>
        </div>
      </div>
    )
  }
}

export default App
