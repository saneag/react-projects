import React from 'react'
import { motion } from 'framer-motion'
import { ShowModalCar } from '../../App'

import styles from './styles.module.scss'

function Car(car) {
    const { setSelectedImg } = React.useContext(ShowModalCar)

    return (
        <div className={styles.root}>
            <motion.div className='img-wrap' key={car.link}
                whileHover={{ opacity: 1 }}
                onClick={() => { setSelectedImg(car.link) }}
            >
                <motion.img src={car.link} className={styles.image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                </motion.img>
            </motion.div>
            <p>{car.marca} <span className={styles.model}>{car.model}</span></p>
        </div>
    )
}

export default Car