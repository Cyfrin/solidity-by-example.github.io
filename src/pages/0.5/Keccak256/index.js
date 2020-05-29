import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="Hashing with Keccak256"
      version={SOL_VERSION}
      description="Example of hashing using Keccak256 in Solidity"
      html={html}
    />
  )
}
