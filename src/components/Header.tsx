import React from "react"
import { useAppContext, Theme } from "../contexts/AppContext"
import styles from "./Header.module.css"
import DarkMode from "./svg/DarkMode"
import LightMode from "./svg/LightMode"
import logoLight from "./logo.png"
import logoDark from "./logo-dark.png"

function Header() {
  const { state, setTheme } = useAppContext()

  let logo = state.theme == "dark" ? logoDark : logoLight

  function onClickTheme() {
    setTheme(state.theme == "light" ? "dark" : "light")
  }

  // NOTE: need to use links for versions so that react-snap can crawl
  return (
    <div className={styles.component}>
      <a href="/">
        <img src={logo} alt="logo" className={styles.logo} />
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
