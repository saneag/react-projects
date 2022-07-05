import React from 'react'
import { motion } from 'framer-motion'
import imageCompression from 'browser-image-compression'
import { ShowModalCar } from '../../pages/Home'

import styles from './styles.module.scss'

function Car(car) {
    const { setSelectedImg } = React.useContext(ShowModalCar)

    //image compression
    // async function handleImageUpload(event) {

    //     const imageFile = event.target.files[0];
    //     console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
    //     console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    //     const options = {
    //         maxSizeMB: 1,
    //         maxWidthOrHeight: 1920,
    //         useWebWorker: true
    //     }
    //     try {
    //         const compressedFile = await imageCompression(imageFile, options);
    //         console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
    //         console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

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