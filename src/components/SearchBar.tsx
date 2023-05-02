import React from "react"
import styles from "./SearchBar.module.css"

interface Props {
  value: string
  onChange: (q: string) => void
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  function _onChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value)
  }

  return (
    <input
      className={styles.input}
      placeholder="Search"
      value={value}
      onChange={_onChange}
    />
  )
}

export default SearchBar
