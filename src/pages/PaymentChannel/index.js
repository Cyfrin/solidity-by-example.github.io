import React, { Component } from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

class PaymentChannel extends Component {
  render() {
    return <Example title="Payment Channel" html={html} />
  }
}

export default PaymentChannel
