import React from "react"
import useCopy from "../hooks/useCopy"

interface Props {
  className?: string
  html: string
}

const Html: React.FC<Props> = ({ className = "", html }) => {
  useCopy([])

  return (
    <div className={`code ${className}`} dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default Html
