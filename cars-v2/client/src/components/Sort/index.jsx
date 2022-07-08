import React from 'react'

import styles from './styles.module.scss'

function Sort_Cars() {
    const sortMethods = ['A-Z', 'Z-A', 'Lowest to highest',
        'Highest to lowest', 'Newest to oldest', 'Oldest to newest']
    return (
        <div className={styles.sort_div}>
            <div className={styles.sort_title}>Sort by:</div>
            <div className={styles.sort_options}>
                {sortMethods.map((method, index) => <div key={index} className={styles.sort_option}>{method}</div>)}
            </div>
        </div>
    )
}

export default Sort_Cars