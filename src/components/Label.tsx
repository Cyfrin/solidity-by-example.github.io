import React from "react"
import styles from "./Label.module.css"

interface Props {}

const Label: React.FC<Props> = () => {
  const color = "#fbbc04"

  return (
    <span className={styles.component} style={{ backgroundColor: color }}>
      Breaking changes
    </span>
  )
}

export default Label
