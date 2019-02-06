import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Code from './Code'
import Footer from './Footer'

class Example extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>

        <Code code={this.props.code} />

        <Footer />
      </div>
    )
  }
}

Example.propTypes = {
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
}

export default Example
