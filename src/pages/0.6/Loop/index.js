import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="For and While Loop"
      version={SOL_VERSION}
      description="Example of for and while loop in Solidity"
      html={html}
    />
  )
}
