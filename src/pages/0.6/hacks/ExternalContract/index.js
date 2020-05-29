import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"

export default function (props) {
  return (
    <Example
      title="Hiding Malicious Code with External Contract"
      description="An example of exploit where malicious code is hidden in an external contract in Solidity"
      html={html}
    />
  )
}
