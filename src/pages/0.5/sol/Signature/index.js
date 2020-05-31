import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="Verifying Signature"
      version={SOL_VERSION}
      description="An example of how to verify signatures in Solidity"
      html={html}
    />
  )
}
