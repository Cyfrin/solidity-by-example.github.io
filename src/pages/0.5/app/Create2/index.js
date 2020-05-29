import React from "react"
import Example from "../../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../../constants"

export default function (props) {
  return (
    <Example
      title="Precompute Contract Address with Create2"
      version={SOL_VERSION}
      description="Precompute contract address with create2"
      html={html}
    />
  )
}
