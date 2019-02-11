import React, { Component } from 'react'
import PropTypes from 'prop-types'
import hljs from 'highlight.js'
import 'highlight.js/styles/foundation.css'
import hljsDefineSolidity from 'highlightjs-solidity'

class Markdown extends Component {
  componentDidMount() {
    hljsDefineSolidity(hljs)
    hljs.initHighlightingOnLoad()
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.code}}>
      </div>
    )
  }
}

Markdown.propTypes = {
  code: PropTypes.string.isRequired
}

export default Markdown
