import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Html from './Html'
import Footer from './Footer'

class Example extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>

        <Html html={this.props.html} />

        <p>Try on <a href="https://remix.ethereum.org" target="__blank">Remix</a></p>

        <Footer />
      </div>
    )
  }
}

Example.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
}

export default Example
