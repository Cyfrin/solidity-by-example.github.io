import React, { Component } from 'react'
import Example from '../../components/Example'
import html from './index.html.js'

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
