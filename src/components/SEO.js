import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="Description" content={description} />
    </Helmet>
  )
}

SEO.defaultProps = {
  title: "Solidity by Example",
  description: "Learn smart contract programming using Solidity",
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default SEO
