import React from "react"
import { useAppContext, Mode } from "../contexts/AppContext"
import styles from "./Header.module.css"
import logoLight from "./logo.svg"
import logoDark from "./logo-dark.svg"
import modeLight from "./mode-light.svg"
import modeDark from "./mode-dark.svg"

function Header() {
  const { state, setMode } = useAppContext()

  let logo = state.mode == "dark" ? logoDark : logoLight

  function onClickMode(mode: Mode) {
    setMode(mode)
  }

  // NOTE: need to use links for versions so that react-snap can crawl
  return (
    <div className={styles.component}>
      <a href="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </a>

      <h3 className={styles.header}>
        <a href="/">Solidity by Example</a>

        <div className={styles.versions}>
          <div className={styles.version}>version 0.8.3</div>
        </div>
      </h3>

      {state.mode == "dark" ? (
        <img
          src={modeLight}
          alt="light mode"
          className={styles.light}
          onClick={(e) => onClickMode("light")}
        />
      ) : (
        <img
          src={modeDark}
          alt="dark mode"
          className={styles.dark}
          onClick={(e) => onClickMode("dark")}
        />
      )}
    </div>
  )
}

export default Header
