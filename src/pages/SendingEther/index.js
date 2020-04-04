import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

export default function(props) {
  return (
    <Example
      title="Sending Ether (send, transfer, call)"
      description="An example of sending Ether in Solidity"
      html={html}
    />
  )
}
