import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

export default function(props) {
  return (
    <Example
      title="Shadowing Inherited State Variables"
      description="An example of shadowing state variables by inheritance"
      html={html}
    />
  )
}
