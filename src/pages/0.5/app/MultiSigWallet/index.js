import React from "react"
import Example from "../../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../../constants"

export default function (props) {
  return (
    <Example
      title="Multi-Sig Wallet"
      version={SOL_VERSION}
      description="An example of multi-sig wallet in Solidity"
      html={html}
    />
  )
}
