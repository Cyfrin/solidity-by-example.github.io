import React, { Component } from 'react'
import Example from '../../Example'
import html from './index.html.js'

class Error extends Component {
  render() {
    return (
      <Example
        title="Error"
        html={html}
      />
    )
  }
}

export default Error
