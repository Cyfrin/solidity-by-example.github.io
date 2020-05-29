import React from "react"
import Example from "../../../../components/Example"
import html from "./index.html.js"

export default function (props) {
  return (
    <Example
      title="Self Destruct"
      description="An example of how to delete your smart contract by calling seldestruct in Solidity"
      html={html}
    />
  )
}
