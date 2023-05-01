import React, { useState } from "react"
import styles from "./SearchBar.module.css"

interface Props {
  onChange: (q: string) => void
}

const SearchBar: React.FC<Props> = ({ onChange }) => {
  const [query, setQuery] = useState("")

  function _onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const q = e.target.value
    setQuery(q)
    onChange(q.trim())
  }

  return (
    <input
      className={styles.input}
      placeholder="Search"
      value={query}
      onChange={_onChange}
    />
  )
}

export default SearchBar
