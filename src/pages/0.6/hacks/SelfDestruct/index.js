import React from "react"
import Example from "../../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../../constants"

export default function (props) {
  return (
    <Example
      title="Self Destruct"
      version={SOL_VERSION}
      description="An example of how to delete your smart contract by calling seldestruct in Solidity"
      html={html}
    />
  )
}
