import React, { Component } from "react"
import Example from "../../Example"
import html from "./index.html.js"

class Super extends Component {
  render() {
    return <Example title="Calling Parent Contracts" html={html} />
  }
}

export default Super
