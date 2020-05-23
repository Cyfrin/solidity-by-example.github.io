import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

export default function (props) {
  return (
    <Example
      title="Front Running"
      description="An example of a Solidity contract vulnerable to front running"
      html={html}
    />
  )
}
