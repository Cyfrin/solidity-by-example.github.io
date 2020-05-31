import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="Contract that Create other Contracts"
      version={SOL_VERSION}
      description="Learn how to create new contract from inside a contract with Solidity"
      html={html}
    />
  )
}
