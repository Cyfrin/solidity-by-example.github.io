import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="Payable"
      version={SOL_VERSION}
      description="An example of how to use the keyword payable in Solidity"
      html={html}
    />
  )
}
