import React, { Component } from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

class MultiSigWallet extends Component {
  render() {
    return <Example title="Multi-Sig Wallet" html={html} />
  }
}

export default MultiSigWallet
