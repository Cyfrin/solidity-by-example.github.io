import React from "react"
import styles from "./Header.module.css"
import logo from "./logo.svg"

function Header(props) {
  return (
    <div className={styles.component}>
      <a href="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </a>

      <h3>
        <a href="/">
          <div>Solidity by Example</div>
          <div>version 0.5.16</div>
        </a>
      </h3>
    </div>
  )
}

export default Header
