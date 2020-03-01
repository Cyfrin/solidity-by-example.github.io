import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"

function Shadow(props) {
  return (
    <Example
      title="Shadowing Inherited State Variables"
      description="An example of shadowing state variables by inheritance"
      html={html}
    />
  )
}

export default Shadow
