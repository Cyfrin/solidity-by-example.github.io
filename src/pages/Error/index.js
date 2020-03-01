import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

function Error(props) {
  return (
    <Example
      title="Error"
      description="Example of how to throw errors in Solidity"
      html={html}
    />
  )
}

export default Error
