import React from "react"
import PropTypes from "prop-types"
import Html from "./Html"
import "./Example.css"

function Example(props) {
  return (
    <div className="Example">
      <h2>{props.title}</h2>

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
