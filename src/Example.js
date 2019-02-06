import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from './logo.svg'
import Code from './Code'
import Footer from './Footer'

class Example extends Component {
  render() {
    return (
      <div>
          <a href="/">
            <img src={logo} alt="logo" width="60px" />
          </a>
          <a>Solidity By Example</a>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          {/*}
          <a href="/">
            <img src={logo} alt="logo" width="80px" />
          </a>
          */}
          <h1>{this.props.title}</h1>
        </div>

        <Code code={this.props.code} />

        <Footer />
      </div>
    )
  }
}

Example.propTypes = {
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
}

export default Example
