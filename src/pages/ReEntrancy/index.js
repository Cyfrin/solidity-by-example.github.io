import React, { Component } from 'react'
import Example from '../../components/Example'
import html from './index.html.js'

class Reentrancy extends Component {
  render() {
    return (
      <Example
        title="Re-Entrancy"
        html={html}
      />
    )
  }
}

export default Reentrancy
