import React from "react"
import { useAppContext } from "../contexts/AppContext"
import Hamburger from "./svg/Hamburger"
import styles from "./Header.module.css"
import DarkMode from "./svg/DarkMode"
import LightMode from "./svg/LightMode"
import Solidity from "./svg/Solidity"

function Header() {
  const { state, setTheme, toggleSideNav } = useAppContext()

  function onClickTheme() {
    setTheme(state.theme == "light" ? "dark" : "light")
  }

  return (
    <div className={styles.component}>
      <Hamburger size={20} className={styles.hamburger} onClick={toggleSideNav} />
      <div className={styles.center}>
        <a href="/" className={styles.a}>
          <Solidity
            className={styles.logo}
            size={30}
            fill={state.theme == "dark" ? "rgb(0, 255, 0)" : "currentColor"}
          />
        </a>
        <h3 className={styles.header}>
          <a href="/" className={styles.a}>
            Solidity by Example
          </a>
        </h3>
      </div>
      <button className={styles.mode} onClick={onClickTheme}>
        {state.theme == "dark" ? <DarkMode size={20} /> : <LightMode size={20} />}
      </button>
    </div>
  )
}

export default Header
