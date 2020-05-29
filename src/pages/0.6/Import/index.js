import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="Import"
      version={SOL_VERSION}
      description="Learn how to import other Solidity files"
      html={html}
    />
  )
}
