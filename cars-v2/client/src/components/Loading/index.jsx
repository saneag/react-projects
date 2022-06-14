import React from 'react'
import { Transition } from 'react-transition-group'

import styles from './styles.module.scss'

function Loading() {

    const [loaderVisibile, setLoaderVisibile] = React.useState(true)
    return (
        <Transition
            in={loaderVisibile}
            timeout={200}
        >

            {(state) => {
                <div className={`${styles.loading} ${state}`}>
                    <div className={styles.loader}></div>
                </div>
            }}
        </Transition>
    )
}

export default Loading