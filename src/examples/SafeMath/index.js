import React, { Component } from 'react'
import Example from '../../Example'
import html from './index.md.js'

class SafeMath extends Component {
  render() {
    return (
      <Example
        title="Safe Math"
        html={html}
      />
    )
  }
}

export default SafeMath
