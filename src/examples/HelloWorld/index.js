import React, { Component } from 'react'
import Example from '../../Example'
import html from './index.md.js'

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
