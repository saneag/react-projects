import React from 'react'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import { ShowModalCar } from '../../App'

import styles from './styles.module.scss'

function Car(car) {
    const { setSelectedImg } = React.useContext(ShowModalCar)

    return (
        <div className={styles.root}>
            <motion.div key={car.link}
                onClick={() => { setSelectedImg(car.link) }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <LazyMotion features={domAnimation}>
                    <motion.img src={car.link} className={styles.image}
                        animate={{ opacity: 1 }}></motion.img>
                </LazyMotion>
                <p>{car.marca} <span className={styles.model}>{car.model}</span></p>
            </motion.div>
        </div>
    )
}

export default Car