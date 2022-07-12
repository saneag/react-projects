import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedImg } from '../../redux/slices/showModalCarSlice'

import { motion } from 'framer-motion'
// import imageCompression from 'browser-image-compression'
// import { handleImageUpload } from '../../utils/compress_images'

import convertPrice from '../../utils/convertPrice'

import styles from './styles.module.scss'

function Car(car) {
    const dispatch = useDispatch()
    const [showInfo, setShowInfo] = React.useState(false)

    const price = (value) => convertPrice(value)

    return (
        <div className={styles.root}>
            <motion.div
                whileHover={{
                    scale: 1.1,
                }}
                onHoverStart={() => setShowInfo(true)}
                onHoverEnd={() => setShowInfo(false)}
            >
                <motion.div key={car.imageUrl}
                    onClick={() => { dispatch(setSelectedImg(car.imageUrl)) }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <div>
                        <motion.img src={car.imageUrl} className={styles.image}
                            animate={{ opacity: 1 }}></motion.img>
                        {showInfo && <div className={styles.info}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span>Anul: <span className={styles.year}>{car.year}</span></span>
                                <span> Pretul: <span className={styles.cash}>$ {price(car.price)}</span></span>
                            </motion.div>
                        </div>}
                    </div>
                    <p>{car.brand} <span className={styles.model}>{car.model}</span></p>
                </motion.div>
            </motion.div>
        </div>
        // <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e)} />
    )
}

export default React.memo(Car)