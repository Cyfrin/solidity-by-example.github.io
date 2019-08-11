import React, { Component } from 'react'
import Example from '../../components/Example'
import html from './index.html.js'

class Function extends Component {
  render() {
    return (
      <Example
        title="Function"
        html={html}
      />
    )
  }
}

export default Function
