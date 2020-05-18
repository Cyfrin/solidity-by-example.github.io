import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"

function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="Description" content={description} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default SEO
