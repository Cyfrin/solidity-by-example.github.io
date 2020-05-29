import React from "react"
import Example from "../../../components/Example"
import html from "./index.html.js"
import { SOL_VERSION } from "../constants"

export default function (props) {
  return (
    <Example
      title="Constructor"
      version={SOL_VERSION}
      description="Learn how to initialize smart contracts in Solidity using a constructor"
      html={html}
    />
  )
}
