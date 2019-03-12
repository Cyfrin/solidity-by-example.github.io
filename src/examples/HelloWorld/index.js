import React, { Component } from 'react'
import Example from '../../Example'
import html from './index.html.js'

class HelloWorld extends Component {
  render() {
    return (
      <Example
        title="Hello World"
        html={html}
      />
    )
  }
}

export default HelloWorld