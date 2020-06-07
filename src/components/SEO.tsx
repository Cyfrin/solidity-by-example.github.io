import React from "react"
import { Helmet } from "react-helmet"

interface Props {
  title: string
  description: string
}

const SEO: React.FC<Props> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="Description" content={description} />
    </Helmet>
  )
}

export default SEO
