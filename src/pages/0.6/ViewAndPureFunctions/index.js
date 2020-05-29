import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="View and Pure Functions"
      version={SOL_VERSION}
      description="An example of view and pure functions in Solidity"
      html={html}
    />
  )
}
