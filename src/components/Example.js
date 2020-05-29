import React from "react"
import PropTypes from "prop-types"
import { SOL_VERSIONS } from "../constants"
import SEO from "./SEO"
import Html from "./Html"
import styles from "./Example.module.css"

function Example(props) {
  const { title, version } = props

  return (
    <div className={styles.component}>
      <SEO {...props} title={`${title} | Solidity by Example | ${version}`} />
      <div className={styles.content}>
        <h2>{title}</h2>

        <Html html={props.html} />

        <p>
          Try on{" "}
          <a href="https://remix.ethereum.org" target="__blank">
            Remix
          </a>
        </p>
      </div>
    </div>
  )
}

Example.propTypes = {
  title: PropTypes.string.isRequired,
  version: PropTypes.oneOf(SOL_VERSIONS).isRequired,
  html: PropTypes.string.isRequired,
}

export default Example
