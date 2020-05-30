import React from "react"
import PropTypes from "prop-types"
import styles from "./Label.module.css"

export function Label(props) {
  const color = "#fbbc04"
  return (
    <span className={styles.component} style={{ backgroundColor: color }}>
      Breaking changes
    </span>
  )
}

export default Label
