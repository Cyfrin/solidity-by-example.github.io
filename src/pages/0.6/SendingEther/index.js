import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="Sending Ether (transfer, send, call)"
      version={SOL_VERSION}
      description="An example of sending Ether in Solidity"
      html={html}
    />
  )
}
