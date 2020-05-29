import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="If / Else"
      version={SOL_VERSION}
      description="If / Else conditional statement in Solidity"
      html={html}
    />
  )
}
