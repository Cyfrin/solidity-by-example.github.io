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
          <div className={styles.version}>version</div>
          <a href="/0.6">0.6</a>
          <di className={styles.bar}> | </di>
          <a href="/0.5">0.5</a>
        </div>
      </h3>
    </div>
  )
}

export default Header
