import React from 'react'

import styles from './styles.module.scss'

function Loading() {
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [])

    return (
        <>
            {
                isLoading &&
                (<div className={styles.loading}>
                    <div className={styles.loader}></div>
                </div>)
            }
        </>
    )
}

export default Loading