import React from 'react'
import { motion } from 'framer-motion';
import { SortCarsContext } from '../../pages/Home'

import styles from './styles.module.scss'

function SortDropdown({ handleClick, sortMethods, sortMethodsAsc, sortMethodsDesc }) {
    const { sortCars } = React.useContext(SortCarsContext)

    return (
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
                    className={`${styles.sort_option} ${sortCars === method ? styles.active : ''}`}
                >
                    {method}
                </motion.li>
            )}
        </motion.ul>
    )
}

export default SortDropdown