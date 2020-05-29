import React from "react"
import Example from "../../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../../constants"

export default function (props) {
  return (
    <Example
      title="Denail of Service"
      version={SOL_VERSION}
      description="An example of denial of service hack in Solidity"
      html={html}
    />
  )
}
