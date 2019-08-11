import React, { Component } from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

class Call extends Component {
  render() {
    return <Example title="Call" html={html} />
  }
}

export default Call
