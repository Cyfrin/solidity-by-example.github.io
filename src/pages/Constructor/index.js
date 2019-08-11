import React, { Component } from 'react'
import Example from '../../components/Example'
import html from './index.html.js'

class Constructor extends Component {
  render() {
    return (
      <Example
        title="Constructor"
        html={html}
      />
    )
  }
}

export default Constructor
