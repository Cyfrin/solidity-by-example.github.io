import React from "react"

interface Props {
  size: number
  className?: string
  onClick: () => void
}

const Hamburger: React.FC<Props> = ({ size, className = "", onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
      width={size}
      height={size}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  )
}

export default Hamburger
