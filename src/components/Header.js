import React from "react"
import { useHistory, useParams } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "./logo.svg"
import { SOL_VERSIONS } from "../constants"

function Header(props) {
  const { version = SOL_VERSIONS[0] } = useParams()
  const history = useHistory()

  function onSelect(e) {
    const version = e.target.value
    history.push(`/${version}`)
  }

  return (
    <div className={styles.component}>
      <a href="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </a>

      <h3 className={styles.header}>
        <a href="/">Solidity by Example</a>

        <div className={styles.select}>
          <div className={styles.version}>version</div>
          <select value={version} onChange={onSelect}>
            {SOL_VERSIONS.map((ver) => (
              <option key={ver} value={ver}>
                {ver}
              </option>
            ))}
          </select>
        </div>
      </h3>
    </div>
  )
}

export default Header
