import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

function NewContract(props) {
  return (
    <Example
      title="Creating Contract from Other Contract"
      description="Learn how to create new contract from inside a contract with Solidity"
      html={html}
    />
  )
}

export default NewContract
