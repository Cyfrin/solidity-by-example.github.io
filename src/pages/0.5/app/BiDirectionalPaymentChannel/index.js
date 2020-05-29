import React from "react"
import Example from "../../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../../constants"

export default function (props) {
  return (
    <Example
      title="Bi-Directional Payment Channel"
      version={SOL_VERSION}
      description="An example of bi-directional payment channels in Solidity"
      html={html}
    />
  )
}
