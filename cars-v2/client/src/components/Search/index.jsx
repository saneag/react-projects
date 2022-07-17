import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch } from '../../redux/slices/searchSlice'
import debounce from 'lodash/debounce'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faX } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

function Search() {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.auth.data)
    const search = useSelector(state => state.search.search)
    const [searchValue, setSearchValue] = React.useState('')

    React.useEffect(() => {
        if (search) {
            dispatch(setSearch(''))
            setSearchValue('')
        }
        // eslint-disable-next-line
    }, [userData])

    const inputRef = React.useRef()

    const onChangeInput = event => {
        setSearchValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    // eslint-disable-next-line
    const updateSearchValue = React.useCallback(
        debounce(value => {
            dispatch(setSearch(value))
        }, 400), []
    )

    const onClear = () => {
        setSearchValue('')
        dispatch(setSearch(''))
        inputRef.current.focus()
    }

    return (
        <div className={styles.search_input}>
            <div>
                <FontAwesomeIcon className={`search_icon ${styles.seach_icon}`} icon={faSearch} />
                <input
                    ref={inputRef}
                    className='search_input'
                    value={searchValue}
                    onChange={e => onChangeInput(e)}
                    placeholder='Cars search ...' />
                {searchValue && <FontAwesomeIcon className={`delete_icon ${styles.delete_icon}`}
                    icon={faX} onClick={onClear} />}
            </div>
        </div>
    )
}
export default React.memo(Search)