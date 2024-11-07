import React, { useEffect } from "react"

interface Props {
  title: string
  description: string
  cyfrinLink?: string
}

const SEO: React.FC<Props> = ({ title, description, cyfrinLink }) => {
  useEffect(() => {
    document.title = title

    const element = document.querySelector("meta[name='description']")
    if (element) {
      element.setAttribute("content", description)
    }

    if (cyfrinLink) {
      const link = document.createElement("link")
      link.rel = "canonical"
      link.href = cyfrinLink
      document.head.appendChild(link)
    }
  }, [])

  return null
}

export default SEO
