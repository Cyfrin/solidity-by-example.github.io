import React from "react"
import Example from "../../../../components/Example"
import html from "./index.html.js"

export default function (props) {
  return (
    <Example
      title="Block Timestamp Manipulation"
      description="An example of a Solidity contract vulnerable to block timestamp manipulation"
      html={html}
    />
  )
}
