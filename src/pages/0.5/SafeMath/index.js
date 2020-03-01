import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"

function SafeMath(props) {
  return (
    <Example
      title="Safe Math"
      description="An example of how to use SafeMath in Solidity"
      html={html}
    />
  )
}

export default SafeMath
