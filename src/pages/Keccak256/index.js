import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

function Keccak256(props) {
  return (
    <Example
      title="Hashing with Keccak256"
      description="Example of hashing using Keccak256 in Solidity"
      html={html}
    />
  )
}

export default Keccak256
