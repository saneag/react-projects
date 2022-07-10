import React from 'react'
import { motion } from 'framer-motion'
// import imageCompression from 'browser-image-compression'
// import { handleImageUpload } from '../../utils/compress_images'
import { ShowModalCar } from '../../pages/Home'

import styles from './styles.module.scss'

function Car(car) {
    const { setSelectedImg } = React.useContext(ShowModalCar)
    const [showInfo, setShowInfo] = React.useState(false)

    let price = String(car.pret).length > 3 ? String(car.pret).slice(0, -3) + '.' + String(car.pret).slice(-3) : car.pret
    price = price.length > 7 ? price.slice(0, -7) + '.' + price.slice(-7) : price

    return (
        <div className={styles.root}>
            <motion.div
                whileHover={{
                    scale: 1.1,
                }}
                onHoverStart={() => setShowInfo(true)}
                onHoverEnd={() => setShowInfo(false)}
            >
                <motion.div key={car.link}
                    onClick={() => { setSelectedImg(car.link) }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <div>
                        <motion.img src={car.link} className={styles.image}
                            animate={{ opacity: 1 }}></motion.img>
                        {showInfo && <div className={styles.info}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span>Anul: <span className={styles.year}>{car.an}</span></span>
                                <span> Pretul: <span className={styles.cash}>$ {price}</span></span>
                            </motion.div>
                        </div>}
                    </div>
                    <p>{car.marca} <span className={styles.model}>{car.model}</span></p>
                </motion.div>
            </motion.div>
        </div>
        // <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e)} />
    )
}

export default Car