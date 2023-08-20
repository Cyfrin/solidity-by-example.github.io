import React from "react"
import Search from "./svg/Search"
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
        <div className={styles.component}>
            <Search size={18} className={styles.icon} />
            <input
                className={styles.input}
                placeholder="Search"
                value={value}
                onChange={_onChange}
            />
        </div>
    )
}

export default SearchBar
