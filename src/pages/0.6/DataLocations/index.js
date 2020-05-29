import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="Data Locations - Storage, Memory and Calldata"
      version={SOL_VERSION}
      description="Data locations - storage, memory and calldata"
      html={html}
    />
  )
}
