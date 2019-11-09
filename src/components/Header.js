import React from "react"
import "./Header.css"
import logo from "./logo.svg"

function Header(props) {
  return (
    <div className="Header">
      <a href="/">
        <img src={logo} alt="logo" className="Header-logo" />
      </a>

      <h3>
        <a href="/">
          <div>Solidity by Example</div>
          <div>version 0.5.11</div>
        </a>
      </h3>
    </div>
  )
}

export default Header
