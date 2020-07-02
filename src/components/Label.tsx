import React from "react"
import styles from "./Label.module.css"

interface Props {
  type: "breakingChanges" | "newFeature"
}

const Label: React.FC<Props> = ({ type }) => {
  switch (type) {
    case "breakingChanges": {
      const color = "#fbbc04"

      return (
        <span className={styles.component} style={{ backgroundColor: color }}>
          Breaking changes
        </span>
      )
    }
    case "newFeature": {
      const color = "#ccff90"

      return (
        <span className={styles.component} style={{ backgroundColor: color }}>
          New
        </span>
      )
    }
    default:
      throw new Error(`invalid label type ${type}`)
  }
}

export default Label
