import React from "react"
import Example from "../../../../components/Example"
import html from "./index.html.js"

export default function (props) {
  return (
    <Example
      title="Delegatecall"
      description="An example of exploits using delegatecall in Solidity"
      html={html}
    />
  )
}
