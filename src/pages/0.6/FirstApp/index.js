import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"

export default function (props) {
  return (
    <Example
      title="First Application"
      description="First Application - Counter"
      html={html}
    />
  )
}
