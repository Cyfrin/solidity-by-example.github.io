import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

export default function(props) {
  return (
    <Example
      title="Payment Channel"
      description="An example of payment channels in Solidity"
      html={html}
    />
  )
}
