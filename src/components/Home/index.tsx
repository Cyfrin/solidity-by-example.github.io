import React from "react"
import SEO from "../SEO"
import Label from "../Label"
import styles from "./index.module.css"

interface Route {
  path: string
  title: string
  breakingChanges?: boolean
}

interface Props {
  version: "0.6.10" | "0.5.16"
  routesByCategory: { title: string; routes: Route[] }[]
}

const Home: React.FC<Props> = ({ version, routesByCategory }) => {
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

export default Home
