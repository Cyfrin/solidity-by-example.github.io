import React from "react"
import SEO from "./SEO"
import Html from "./Html"
import styles from "./Example.module.css"

interface Path {
  title: string
  path: string
}

interface Code {
  fileName: string
  code: string
}

interface Props {
  title: string
  description: string
  version: "0.8.26"
  html: string
  cyfrinLink?: string
  prev: Path | null
  next: Path | null
  codes: Code[]
}

const Example: React.FC<Props> = ({
  title,
  version,
  description,
  cyfrinLink,
  html,
  prev,
  next,
  codes,
}) => {
  return (
    <div className={styles.component}>
      <SEO
        title={`${title} | Solidity by Example | ${version}`}
        description={description}
        cyfrinLink={cyfrinLink}
      />
      <div className={styles.content}>
        <h2>{title}</h2>

        {cyfrinLink ? (
          <div className={styles.cyfrinLink}>
            For the most up to date version of this content, please see{" "}
            <a href={cyfrinLink} target="__blank">
              {title} (Code Example)
            </a>{" "}
            on Cyfrin.io
          </div>
        ) : null}

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

        <h3>Try on Remix</h3>
        <ul>
          {codes.map(({ fileName, code }, i) => (
            <li key={i}>
              <a
                href={`https://remix.ethereum.org/?#code=${code}`}
                target="_blank"
                rel="noreferrer"
              >
                {fileName}
              </a>
            </li>
          ))}
        </ul>
        <h3>Try on Remix Lite</h3>
        <ul>
          {codes.map(({ fileName, code }, i) => (
            <li key={i}>
              <a
                href={`https://remix.byteatatime.dev/?#code=${code}`}
                target="_blank"
                rel="noreferrer"
              >
                {fileName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Example
