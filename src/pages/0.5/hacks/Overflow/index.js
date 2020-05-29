import React from "react"
import Example from "../../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../../constants"

export default function (props) {
  return (
    <Example
      title="Arithmetic Overflow and Underflow"
      version={SOL_VERSION}
      description="An example of hacking Solidity with arithmetic overflow / underflow"
      html={html}
    />
  )
}
