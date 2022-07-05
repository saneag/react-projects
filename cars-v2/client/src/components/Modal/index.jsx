import React from 'react'
import { motion } from 'framer-motion'
import { ShowModalCar } from '../../pages/Home'

import styles from './styles.module.scss'

function Modal({ cars, showModal, setShowModal }) {
    const { selectedImg, setSelectedImg } = React.useContext(ShowModalCar)

    const handleClick = () => {
        setShowModal(!showModal)
        if (selectedImg) {
            setSelectedImg(null)
        }
    }
    const car = cars.find(car => car.link === selectedImg)

    return (
        <motion.div className={styles.backdrop} onClick={handleClick}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1 }}>
            <motion.div className={styles.modal_content}>
                <motion.img src={selectedImg}
                    initial={{ y: '-100vh' }}
                    animate={{ y: '0px' }} />
                <motion.div className={styles.info}
                    initial={{ x: '100vw' }}
                    animate={{ x: '0px' }}>
                    <div>
                        {
                            Object.keys(car).map((key, index) =>
                                index !== 9 ? <p key={key}><span>{key} :</span></p> : '')
                        }
                    </div>
                    <div>
                        {
                            Object.values(car).map((value, index) =>
                                index !== 9 ? <p key={value}>
                                    {index === 8 ? `$ ${value}` : value}
                                    {index === 4 ? ' ml' : index === 5 ? ' hp' : ''}
                                </p> : '')
                        }
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Modal