import React from "react"
import Example from "../../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../../constants"

export default function (props) {
  return (
    <Example
      title="Hiding Malicious Code with External Contract"
      version={SOL_VERSION}
      description="An example of exploit where malicious code is hidden in an external contract in Solidity"
      html={html}
    />
  )
}
