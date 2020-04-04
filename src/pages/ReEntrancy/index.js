import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

export default function(props) {
  return (
    <Example
      title="Re-Entrancy"
      description="An example of re-entrancy attack in Solidity"
      html={html}
    />
  )
}
