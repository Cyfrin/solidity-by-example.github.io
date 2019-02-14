import React, { Component } from 'react'
import Example from '../../Example'
import html from './index.html.js'

class SendingEther extends Component {
  render() {
    return (
      <Example
        title="Sending Ether (send, transfer, call)"
        html={html}
      />
    )
  }
}

export default SendingEther
