import React, { Component } from 'react'
import Example from '../../components/Example'
import html from './index.html.js'

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
