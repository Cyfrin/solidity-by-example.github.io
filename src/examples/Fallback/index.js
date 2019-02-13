import React, { Component } from 'react'
import Example from '../../Example'
import html from './index.md.js'

class Fallback extends Component {
  render() {
    return (
      <Example
        title="Fallback"
        html={html}
      />
    )
  }
}

export default Fallback
