import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="Gas and Gas Price"
      version={SOL_VERSION}
      description="An example of gas and gas limit in Solidity"
      html={html}
    />
  )
}
