import React, { Component } from 'react'
import Example from '../../Example'
import html from './index.html.js'

class FallbackGasLimit extends Component {
  render() {
    return (
      <Example
        title="Fallback Gas Limit"
        html={html}
      />
    )
  }
}

export default FallbackGasLimit
