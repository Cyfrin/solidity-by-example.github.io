import React from "react"
import { useLocation } from "react-router-dom"
import { ROUTES_BY_CATEGORY } from "../pages/index"
import SEO from "./SEO"
import Html from "./Html"
import styles from "./Example.module.css"

const ROUTES = ROUTES_BY_CATEGORY.map(({ routes }) => routes).flat()

function getPrevNextRoutes(path: string) {
  const index = ROUTES.findIndex((route) => route.path == path)
  if (index > -1) {
    return [ROUTES[index - 1] || null, ROUTES[index + 1] || null]
  }
  return [null, null]
}

interface Props {
  title: string
  description: string
  version: "0.8.10"
  html: string
}

const Example: React.FC<Props> = ({ title, version, description, html }) => {
  const location = useLocation()
  const [prev, next] = getPrevNextRoutes(location.pathname)

  return (
    <div className={styles.component}>
      <SEO
        title={`${title} | Solidity by Example | ${version}`}
        description={description}
      />
      <div className={styles.content}>
        <h2>{title}</h2>

        <Html html={html} />

        <div className={styles.prevNext}>
          {prev && (
            <a href={prev.path}>
              {`< `}
              {prev.title}
            </a>
          )}
          {next && (
            <a href={next.path}>
              {next.title}
              {` >`}
            </a>
          )}
        </div>

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

export default Example
