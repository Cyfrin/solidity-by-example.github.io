import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="Ether and Wei"
      version={SOL_VERSION}
      description="An example of Ether and Wei in Solidity"
      html={html}
    />
  )
}
