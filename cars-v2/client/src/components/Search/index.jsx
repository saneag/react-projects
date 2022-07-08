import React from 'react'
import { SearchContext } from '../../pages/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faX } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

function Search() {
    const { search, setSearch } = React.useContext(SearchContext)
    return (
        <div className={styles.search_input}>
            <div>
                <FontAwesomeIcon className={`search_icon ${styles.seach_icon}`} icon={faSearch} />
                <input className='search_input' value={search} onChange={e => setSearch(e.target.value)} placeholder='Cars search ...' />
                {search && <FontAwesomeIcon className={`delete_icon ${styles.delete_icon}`} icon={faX} onClick={() => setSearch('')} />}
            </div>
        </div>
    )
}
export default Search