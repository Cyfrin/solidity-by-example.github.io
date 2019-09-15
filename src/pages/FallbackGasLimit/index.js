import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

function FallbackGasLimit(props) {
  return (
    <Example
      title="Fallback Gas Limit"
      description="In Solidity fallback functions have a gas limit. Here is an example."
      html={html}
    />
  )
}

export default FallbackGasLimit
