import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

export default function(props) {
  return (
    <Example
      title="Contract that Create other Contracts"
      description="Learn how to create new contract from inside a contract with Solidity"
      html={html}
    />
  )
}
