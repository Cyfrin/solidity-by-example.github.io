import React from "react"
import SEO from "./SEO"
import Html from "./Html"
import styles from "./Example.module.css"

interface Props {
  title: string
  description: string
  version: "0.8.3"
  html: string
}

const Example: React.FC<Props> = ({ title, version, description, html }) => {
  return (
    <div className={styles.component}>
      <SEO
        title={`${title} | Solidity by Example | ${version}`}
        description={description}
      />
      <div className={styles.content}>
        <h2>{title}</h2>

        <Html html={html} />

        <p>
          Try on{" "}
          <a href="https://remix.ethereum.org" target="__blank">
            Remix
          </a>
        </p>
        <p>
          Take a course at{" "}
          <a href="https://www.smartcontract.engineer" target="__blank">
            Smart Contract Engineer
          </a>
        </p>
      </div>
    </div>
  )
}

export default Example
