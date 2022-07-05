import React from 'react'
import { motion } from 'framer-motion'
// import imageCompression from 'browser-image-compression'
// import { handleImageUpload } from '../../utils/compress_images'
import { ShowModalCar } from '../../pages/Home'

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
                <motion.img src={car.link} className={styles.image}
                    animate={{ opacity: 1 }}></motion.img>
                <p>{car.marca} <span className={styles.model}>{car.model}</span></p>
            </motion.div>
        </div>
        // <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e)} />
    )
}

export default Car