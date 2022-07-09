import React from 'react'
import { motion } from 'framer-motion';
import { SortCarsContext } from '../../pages/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'
import SortDropdown from '../SortDropdown';

function Sort_Cars() {
    const { sortCars, setSortCars } = React.useContext(SortCarsContext)
    const [showDropDown, setShowDropDown] = React.useState(false)

    const sortMethods = ['marca', 'model', 'an', 'combustibil',
        'capacitate', 'putere', 'tractiune', 'cutie', 'pret']

    const handleClick = (method) => {
        setShowDropDown(!showDropDown)
        setSortCars(method)
    }

    return (
        <div className={styles.sort_div}>
            <div>
                <motion.div
                    className={`sort_title ${styles.sort_title}`}
                    onClick={() => setShowDropDown(!showDropDown)}>
                    Sort by: {sortCars}
                    <FontAwesomeIcon icon={faArrowDown}
                        className={styles.sort_arrow} />
                </motion.div>
                {showDropDown && <SortDropdown handleClick={handleClick} sortMethods={sortMethods} />}
            </div>
        </div>
    )
}

export default Sort_Cars