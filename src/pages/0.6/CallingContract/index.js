import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="Calling Other Contract"
      version={SOL_VERSION}
      description="In Solidity, contract can call other contracts in several ways."
      html={html}
    />
  )
}
