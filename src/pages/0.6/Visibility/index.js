import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"

export default function (props) {
  return (
    <Example
      title="Visibility"
      description="An example of external, internal, private and public functions in Solidity"
      html={html}
    />
  )
}
