import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="Shadowing Inherited State Variables"
      version={SOL_VERSION}
      description="An example of shadowing state variables by inheritance"
      html={html}
    />
  )
}
