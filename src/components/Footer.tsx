import React from "react"
import styles from "./Footer.module.css"
import updraft from "./updraft.png"
import youTube from "./youtube.png"
import telegram from "./telegram.png"
import discord from "./discord.png"

function Footer() {
  return (
    <div className={styles.component}>
      <div className={styles.row}>
        <img src={updraft} alt="cyfrin" className={styles.updraft} />
        <a href="https://updraft.cyfrin.io" target="__blank">
          Cyfrin Updraft
        </a>
      </div>
      <div className={styles.social}>
        <div className={styles.row}>
          <img src={discord} alt="discord" className={styles.discord} />
          <a href="https://discord.gg/bt8FK2wkcW" target="__blank">
            Discord
          </a>
        </div>
        <div className={styles.row}>
          <img src={telegram} alt="telegram" className={styles.telegram} />
          <a href="https://t.me/smartcontractprogrammer" target="__blank">
            Telegram
          </a>
        </div>
        <div className={styles.row}>
          <img src={youTube} alt="youtube" className={styles.youTube} />
          <a
            href="https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA"
            target="__blank"
          >
            YouTube
          </a>
        </div>
      </div>
      <div className={styles.row}>
        <a href="mailto:contact@solidity-by-example.org">
          contact@solidity-by-example.org
        </a>
      </div>
      <div className={styles.row}>
        <a
          href="https://github.com/Cyfrin/solidity-by-example.github.io"
          target="__blank"
        >
          Source
        </a>
        <div className={styles.bar}>|</div>
        <a
          href="https://github.com/Cyfrin/solidity-by-example.github.io/blob/gh-pages/LICENSE"
          target="__blank"
        >
          License
        </a>
      </div>
    </div>
  )
}

export default Footer
