import React from "react"
import styles from "./Footer.module.css"

function Footer() {
  return (
    <div className={styles.component}>
      <div className={styles.row}>
        <a
          href="https://etherscan.io/address/0xA8DD4bA80d8904d7cAcE5c3622CCf78bEa5AcFEe"
          target="__blank"
        >
          Donate: 0xA8DD4bA80d8904d7cAcE5c3622CCf78bEa5AcFEe
        </a>
      </div>
      <div className={styles.row}>
        <a href="mailto:contact@solidity-by-example.org">
          contact@solidity-by-example.org
        </a>
      </div>
      <div className={styles.row}>
        <a
          href="https://github.com/solidity-by-example/solidity-by-example.github.io"
          target="__blank"
        >
          source
        </a>
        <div className={styles.bar}>|</div>
        <a
          href="https://github.com/solidity-by-example/solidity-by-example.github.io/blob/gh-pages/LICENSE"
          target="__blank"
        >
          license
        </a>
      </div>
    </div>
  )
}

export default Footer
