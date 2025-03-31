import React from "react"
import logo from "./powered-by-cyfrin.png"
import styles from "./PoweredByCyfrinLogo.module.css"

const PoweredByCyfrinLogo: React.FC<{}> = () => {
  return (
    <a target="_blank" href="https://www.cyfrin.io/">
      <img src={logo} alt="Powered by Cyfrin" className={styles.component} />
    </a>
  )
}

export default PoweredByCyfrinLogo
