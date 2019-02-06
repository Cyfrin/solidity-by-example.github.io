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
            <em>Solidity by Example</em> is an introduction
            to <a href="https://solidity.readthedocs.io">Solidity</a> using example programs.
          </p>

          <ul>
            <li><a href="/hello-world">Hello World</a></li>
          </ul>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Home
