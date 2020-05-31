import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="Reading and Writing to a State Variable"
      version={SOL_VERSION}
      description="Reading and Writing to a State Variable"
      html={html}
    />
  )
}
