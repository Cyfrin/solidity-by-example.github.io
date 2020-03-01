import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

function Call(props) {
  return (
    <Example
      title="Call"
      description="In Solidity call is a low level function to interact with other contracts."
      html={html}
    />
  )
}

export default Call
