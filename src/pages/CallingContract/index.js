import React, { Component } from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

class CallingContract extends Component {
  render() {
    return <Example title="Calling Other Contract" html={html} />
  }
}

export default CallingContract
