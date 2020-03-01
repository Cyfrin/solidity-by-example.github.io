import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"

function Signature(props) {
  return (
    <Example
      title="Verifying Signature"
      description="An example of how to verify signatures in Solidity"
      html={html}
    />
  )
}

export default Signature
