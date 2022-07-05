import React from 'react'

import styles from './styles.module.scss'

function Search() {
    return (
        <div className={styles.search_input}>
            <input placeholder='Cars search ...' />
        </div>
    )
}
export default Search