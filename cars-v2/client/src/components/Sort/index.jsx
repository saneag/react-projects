import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSortBy, setSortOrder } from '../../redux/slices/sortSlice'

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'
import SortDropdown from '../SortDropdown';

function Sort_Cars() {
    const [showDropDown, setShowDropDown] = React.useState(false)

    const sortBy = useSelector(state => state.sort.sortBy)
    const sortOrder = useSelector(state => state.sort.sortOrder)
    const dispatch = useDispatch();

    const sortMethods = ['marca', 'an', 'putere', 'pret']

    const handleClick = (method) => {
        setShowDropDown(!showDropDown)
        dispatch(setSortBy(method))
    }

    const handleChange = (e) => {
        e.stopPropagation()
        dispatch(setSortOrder(!sortOrder))
    }

    return (
        <div className={styles.sort_div}>
            <div>
                <motion.div
                    className={`sort_title ${styles.sort_title}`}
                    onClick={() => setShowDropDown(!showDropDown)}>
                    Sort by: {sortBy}
                    <FontAwesomeIcon icon={sortOrder ? faArrowDown : faArrowUp}
                        className={styles.sort_arrow}
                        onClick={e => handleChange(e)} />
                </motion.div>
                {showDropDown && <SortDropdown handleClick={handleClick} sortMethods={sortMethods} />}
            </div>
        </div>
    )
}

export default Sort_Cars