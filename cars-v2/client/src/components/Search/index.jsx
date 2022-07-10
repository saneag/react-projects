import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch } from '../../redux/slices/searchSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faX } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

function Search() {
    const dispatch = useDispatch()
    const search = useSelector(state => state.search.search)

    return (
        <div className={styles.search_input}>
            <div>
                <FontAwesomeIcon className={`search_icon ${styles.seach_icon}`} icon={faSearch} />
                <input className='search_input'
                    value={search}
                    onChange={e => dispatch(setSearch(e.target.value))}
                    placeholder='Cars search ...' />
                {search && <FontAwesomeIcon className={`delete_icon ${styles.delete_icon}`}
                    icon={faX} onClick={() => dispatch(setSearch(''))} />}
            </div>
        </div>
    )
}
export default Search