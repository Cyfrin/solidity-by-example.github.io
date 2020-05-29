import React from "react"
import Example from "../../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../../constants"

export default function (props) {
  return (
    <Example
      title="Uni-Directional Payment Channel"
      version={SOL_VERSION}
      description="An example of uni-directional payment channels in Solidity"
      html={html}
    />
  )
}
