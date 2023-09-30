import React from "react"
import { useAppContext, Theme } from "../contexts/AppContext"
import styles from "./Header.module.css"
import DarkMode from "./svg/DarkMode"
import LightMode from "./svg/LightMode"
import Solidity from "./svg/Solidity"

function Header() {
  const { state, setTheme } = useAppContext()

  function onClickTheme() {
    setTheme(state.theme == "light" ? "dark" : "light")
  }

  // NOTE: need to use links for versions so that react-snap can crawl
  return (
    <div className={styles.component}>
      <a href="/">
        <Solidity
          className={styles.logo}
          size={60}
          fill={state.theme == "dark" ? "rgb(0, 255, 0)" : "currentColor"}
        />
      </a>

      <h3 className={styles.header}>
        <a href="/">Solidity by Example</a>
      </h3>

      <button className={styles.mode} onClick={onClickTheme}>
        {state.theme == "dark" ? <DarkMode size={20} /> : <LightMode size={20} />}
      </button>
    </div>
  )
}

export default Header
