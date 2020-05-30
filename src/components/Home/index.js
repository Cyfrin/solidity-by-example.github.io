import React from "react"
import PropTypes from "prop-types"
import SEO from "../SEO"
import Label from "../Label"
import styles from "./index.module.css"

function Home(props) {
  const { version, routesByCategory } = props

  return (
    <div className={styles.component}>
      <SEO
        title={`Solidity by Example | ${version}`}
        description="Learn smart contract programming using Solidity"
      />
      <h1 className={styles.header}>
        <a href="/">Solidity by Example</a>
      </h1>
      <div className={styles.subHeader}>v {version}</div>
      <div className={styles.main}>
        <p>
          an introduction to{" "}
          <a href="https://solidity.readthedocs.io">Solidity</a> with simple
          examples
        </p>

        {routesByCategory.map(({ routes, title }, i) => (
          <div key={i}>
            {title && <h3>{title}</h3>}

            <ul className={styles.list}>
              {routes.map(({ path, title, breakingChanges }) => (
                <li className={styles.listItem} key={path}>
                  <a href={path}>{title}</a>
                  {breakingChanges && (
                    <div className={styles.label}>
                      <Label />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

Home.propTypes = {
  version: PropTypes.oneOf(["0.6.0", "0.5.16"]).isRequired,
  routesByCategory: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      routes: PropTypes.arrayOf(
        PropTypes.shape({
          path: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          breakingChanges: PropTypes.bool,
        })
      ).isRequired,
    })
  ).isRequired,
}

export default Home
