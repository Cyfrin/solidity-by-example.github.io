import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="Visibility"
      version={SOL_VERSION}
      description="An example of external, internal, private and public functions in Solidity"
      html={html}
    />
  )
}
