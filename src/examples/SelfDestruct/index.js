import React, { Component } from 'react'
import Example from '../../Example'
import html from './index.html.js'

class SelfDestruct extends Component {
  render() {
    return (
      <Example
        title="Self Destruct"
        html={html}
      />
    )
  }
}

export default SelfDestruct
