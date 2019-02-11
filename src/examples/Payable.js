import React, { Component } from 'react'
import Example from '../Example'
import markdown from './Payable.md.js'

class Payable extends Component {
  render() {
    return (
      <Example
        title="Safe Math"
        code={markdown}
      />
    )
  }
}

export default Payable
