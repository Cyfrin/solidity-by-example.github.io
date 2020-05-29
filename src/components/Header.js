import React from "react"
import styles from "./Header.module.css"
import logo from "./logo.svg"
import { SOL_VERSION } from "../constants"

function Header(props) {
  return (
    <div className={styles.component}>
      <a href="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </a>

      <h3>
        <a href="/">
          <div>Solidity by Example</div>
          <div>version {SOL_VERSION}</div>
        </a>
      </h3>
    </div>
  )
}

export default Header
