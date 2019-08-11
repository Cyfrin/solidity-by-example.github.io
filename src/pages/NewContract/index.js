import React, { Component } from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

class NewContract extends Component {
  render() {
    return <Example title="Creating Contract from Other Contract" html={html} />
  }
}

export default NewContract
