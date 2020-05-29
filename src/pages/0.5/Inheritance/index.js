import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="Inheritance"
      version={SOL_VERSION}
      description="Example of inheritance in Solidity"
      html={html}
    />
  )
}
