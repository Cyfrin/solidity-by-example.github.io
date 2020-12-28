import React from "react"
import Example from "../../../../components/Example"
import html, { version, title, description } from "./index.html"

function ExamplePage() {
  return (
    <Example
      version={version}
      title={title}
      description={description}
      html={html}
    />
  )
}

export default ExamplePage
