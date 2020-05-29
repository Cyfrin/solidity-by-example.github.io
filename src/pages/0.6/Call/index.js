import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

export default function(props) {
  return (
    <Example
      title="Call"
      description="In Solidity call is a low level function to interact with other contracts."
      html={html}
    />
  )
}
