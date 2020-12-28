import React from "react"
import styles from "./Header.module.css"
import logo from "./logo.svg"

function Header() {
  // NOTE: need to use links for versions so that react-snap can crawl
  return (
    <div className={styles.component}>
      <a href="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </a>

      <h3 className={styles.header}>
        <a href="/">Solidity by Example</a>

        <div className={styles.versions}>
          <div className={styles.version}>version 0.8.0</div>
        </div>
      </h3>
    </div>
  )
}

export default Header
