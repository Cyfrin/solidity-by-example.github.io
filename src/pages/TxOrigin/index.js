import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

export default function (props) {
  return (
    <Example
      title="Phishing with tx.origin"
      description="An example of phishing with tx.origin in Solidity"
      html={html}
    />
  )
}
