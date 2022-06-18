import React from 'react'

import styles from './styles.module.scss'

function Loading() {
    return (
        <>
            <div className={styles.loading}>
                <div className={styles.loader}></div>
            </div>
        </>
    )
}

export default Loading