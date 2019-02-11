import React, { Component } from 'react'
import PropTypes from 'prop-types'
import hljs from 'highlight.js'
import 'highlight.js/styles/foundation.css'
import hljsDefineSolidity from 'highlightjs-solidity'

class Html extends Component {
  componentDidMount() {
    hljsDefineSolidity(hljs)
    hljs.initHighlightingOnLoad()
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.html}}>
      </div>
    )
  }
}

Html.propTypes = {
  html: PropTypes.string.isRequired
}

export default Html
