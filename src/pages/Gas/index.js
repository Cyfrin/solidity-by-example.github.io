import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

export default function(props) {
  return (
    <Example
      title="Gas"
      description="An example of gas and gas limit in Solidity"
      html={html}
    />
  )
}
