import React from 'react'
import { motion } from 'framer-motion';
import { SortContext } from '../../pages/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

function Sort_Cars() {
    const { sort, setSort } = React.useContext(SortContext)
    const [showDropDown, setShowDropDown] = React.useState(false)
    const [isActive, setIsActive] = React.useState(false)
    const [sortAsc, setSortAsc] = React.useState(true)
    const [sortDesc, setSortDesc] = React.useState(false)

    const sortMethods = ['A-Z', 'Z-A', 'Lowest to highest',
        'Highest to lowest', 'Newest to oldest', 'Oldest to newest']

    const sortMethodsAsc = ['A-Z', 'Lowest to highest', 'Newest to oldest']
    const sortMethodsDesc = ['Z-A', 'Highest to lowest', 'Oldest to newest']

    const handleClick = (method) => {
        setShowDropDown(!showDropDown)
        setSort(method)
        if (sortMethodsAsc.includes(method)) {
            setSortAsc(true)
            setSortDesc(false)
        }
        if (sortMethodsDesc.includes(method)) {
            setSortAsc(false)
            setSortDesc(true)
        }
    }

    return (
        <div className={styles.sort_div}>
            <div>
                <motion.div
                    className={`sort_title ${styles.sort_title}`}
                    onClick={() => setShowDropDown(!showDropDown)}>
                    Sort by: {sort}
                    {sortAsc && <FontAwesomeIcon icon={faArrowDown}
                        className={styles.sort_arrow} />}
                    {sortDesc && <FontAwesomeIcon icon={faArrowUp}
                        className={styles.sort_arrow} />}
                </motion.div>
                <div>
                    {showDropDown &&
                        <motion.ul
                            initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className={styles.sort_options}>
                            {sortMethods.map((method, index) =>
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    key={index}
                                    onClick={() => handleClick(method)}
                                    className={`${styles.sort_option} ${sort === method ? styles.active : ''}`}
                                >
                                    {method}
                                </motion.li>
                            )}
                        </motion.ul>
                    }
                </div>
            </div>
        </div>
    )
}

export default Sort_Cars