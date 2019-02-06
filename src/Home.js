import React, { Component } from 'react'
import logo from './logo.svg'

class Home extends Component {
  render() {
    return (
      <div id="intro">
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <img src={logo} width="120px" />
          <h2><a href="./">Solidity by Example</a></h2>
        </div>
        <p>
          <a href="https://solidity.readthedocs.io">Solidity</a> is an
          object-oriented, high-level language for implementing smart contracts.
          Smart contracts are programs which govern the behaviour of accounts
          within the Ethereum state.
        </p>

        <p>
          <em>Solidity by Example</em> is a hands-on introduction
          to Solidity using annotated example programs. Check out
          the examples below.
        </p>

        <ul>

          <li><a href="/hello-world">Hello World</a></li>

        </ul>
        <p className="footer">
          <a href="mailto:soliditybyexample@gmail.com">soliditybyexample@gmail.com</a> | <a href="https://github.com/solidity-by-example/solidity-by-example.github.io">source</a> | <a href="https://github.com/solidity-by-example/solidity-by-example.github.io#license">license</a>
        </p>
      </div>
    )
  }
}

export default Home
