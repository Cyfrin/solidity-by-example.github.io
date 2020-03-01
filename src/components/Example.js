import React from "react"
import PropTypes from "prop-types"
import SEO from "./SEO"
import Html from "./Html"
import styles from "./Example.module.css"

function Example(props) {
  const { title } = props

  return (
    <div className={styles.component}>
      <SEO {...props} title={`${title} | Learn Solidity by Example`} />
      <h2>{title}</h2>

      <Html html={props.html} />

      <p>
        Try on{" "}
        <a href="https://remix.ethereum.org" target="__blank">
          Remix
        </a>
      </p>
    </div>
  )
}

Example.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
}

export default Example
