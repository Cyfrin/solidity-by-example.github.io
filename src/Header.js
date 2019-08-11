import React, { Component } from "react"
import "./Header.css"
import logo from "./logo.svg"

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <a href="/">
          <img src={logo} alt="logo" className="Header-logo" />
        </a>

        <h3>
          <a href="/">
            <div>Solidity by Example</div>
            <div style={{ color: "lightgrey" }}>version 0.5.3</div>
          </a>
        </h3>
      </div>
    )
  }
}

export default Header
