import React, { useEffect } from "react"
import PropTypes from "prop-types"
import hljs from "highlight.js"
import "highlight.js/styles/foundation.css"
import hljsDefineSolidity from "highlightjs-solidity"

function Html(props) {
  const { html } = props

  useEffect(() => {
    hljsDefineSolidity(hljs)
    hljs.initHighlightingOnLoad()
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>
}

Html.propTypes = {
  html: PropTypes.string.isRequired,
}

export default Html
