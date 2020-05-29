import React from "react"
import Example from "../../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../../constants"

export default function (props) {
  return (
    <Example
      title="Merkle Tree"
      version={SOL_VERSION}
      description="Learn about Merkle tree in Solidity"
      html={html}
    />
  )
}
