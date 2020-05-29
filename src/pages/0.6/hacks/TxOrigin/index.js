import React from "react"
import Example from "../../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../../constants"

export default function (props) {
  return (
    <Example
      title="Phishing with tx.origin"
      version={SOL_VERSION}
      description="An example of phishing with tx.origin in Solidity"
      html={html}
    />
  )
}
