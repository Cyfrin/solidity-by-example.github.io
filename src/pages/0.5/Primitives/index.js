import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="Primitive Data Types"
      version={SOL_VERSION}
      description="Primitive data types"
      html={html}
    />
  )
}
