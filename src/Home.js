import React, { Component } from 'react'
import './Home.css'
import logo from './logo.svg'
import Footer from './Footer'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="Home-header">
          <a href="/">
            <img src={logo} alt="logo" className="Home-logo" />
          </a>
          <h2><a href="/">Solidity by Example</a></h2>
        </div>
        <p>
          <em>Solidity by Example</em> is a hands-on introduction
          to <a href="https://solidity.readthedocs.io">Solidity</a> using example programs.
        </p>

        <ul>

          <li><a href="/hello-world">Hello World</a></li>

        </ul>
        <Footer />
      </div>
    )
  }
}

export default Home
