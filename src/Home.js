import React, { Component } from 'react'
import './Home.css'
import Footer from './Footer'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1 className="Home-header">
          <a href="/">Solidity by Example</a>
        </h1>
        <div className="Home-main">
          <p>
            an introduction to <a href="https://solidity.readthedocs.io">Solidity</a> using example programs
          </p>

          <ul className="Home-list">
            <li><a href="/hello-world">Hello World</a></li>
            <li><a href="/simple-storage">Simple Storage</a></li>
            <li><a href="/import">Import</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/error">Error</a></li>
            <li><a href="/payable">Payable</a></li>
            <li><a href="/sending-ether">Sending Ether</a></li>
            <li><a href="/fallback">Fallback</a></li>
            <li><a href="/fallback-gas-limit">Fallback Gas Limit</a></li>
            <li><a href="/re-entrancy">Re-Entrancy</a></li>
            <li><a href="/self-destruct">Self Destruct</a></li>
            <li><a href="/safe-math">Safe Math</a></li>
          </ul>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Home
