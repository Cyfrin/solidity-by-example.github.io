import React from "react"
import Example from "../../../../components/Example"
import html from "./index.html.js"

export default function (props) {
  return (
    <Example
      title="Arithmetic Overflow and Underflow"
      description="An example of hacking Solidity with arithmetic overflow / underflow"
      html={html}
    />
  )
}
