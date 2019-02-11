import React, { Component } from 'react'
import Example from '../../Example'
import html from './index.md.js'

class Payable extends Component {
  render() {
    return (
      <Example
        title="Payable"
        html={html}
      />
    )
  }
}

export default Payable
