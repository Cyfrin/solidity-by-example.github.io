import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"

function Library(props) {
  return (
    <Example
      title="Library"
      description="Example of how to write and use libraries in your Solidity code"
      html={html}
    />
  )
}

export default Library
