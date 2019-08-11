import React, { Component } from 'react'
import Example from '../../components/Example'
import html from './index.html.js'

class Function extends Component {
  render() {
    return (
      <Example
        title="View and Pure Functions"
        html={html}
      />
    )
  }
}

export default Function
