import React, { Component } from 'react'
import Example from '../../components/Example'
import html from './index.html.js'

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
