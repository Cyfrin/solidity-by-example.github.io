import React, { Component } from 'react'
import Example from '../../Example'
import html from './index.md.js'

class Events extends Component {
  render() {
    return (
      <Example
        title="Events"
        html={html}
      />
    )
  }
}

export default Events
