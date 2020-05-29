import React from "react"
import { useHistory, useLocation } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "./logo.svg"
import { SOL_VERSIONS } from "../constants"

function getVersion(pathname) {
  return pathname.split("/")[1] || SOL_VERSIONS[0]
}

function Header(props) {
  const history = useHistory()
  const location = useLocation()
  const version = getVersion(location.pathname)

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
