import React from "react"
import Example from "../../../../components/Example"
import html, { version, title, description} from "./index.html.js"

export default function (props) {
  return (
    <Example
      version={version}
      title={title}
      description={description}
      html={html}
    />
  )
}
