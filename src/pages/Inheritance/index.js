import React, { Component } from 'react'
import Example from '../../components/Example'
import html from './index.html.js'

class Inheritance extends Component {
  render() {
    return (
      <Example
        title="Inheritance"
        html={html}
      />
    )
  }
}

export default Inheritance
