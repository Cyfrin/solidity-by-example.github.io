import React, { Component } from 'react'
import Example from '../../Example'
import html from './index.md.js'

class SimpleStorage extends Component {
  render() {
    return (
      <Example
        title="Simple Storage"
        html={html}
      />
    )
  }
}

export default SimpleStorage
