import React, { Component } from "react"
import Example from "../../Example"
import html from "./index.html.js"

class Library extends Component {
  render() {
    return <Example title="Library" html={html} />
  }
}

export default Library
