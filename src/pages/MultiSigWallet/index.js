import React from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

export default function(props) {
  return (
    <Example
      title="Multi-Sig Wallet"
      description="An example of multi-sig wallet in Solidity"
      html={html}
    />
  )
}
