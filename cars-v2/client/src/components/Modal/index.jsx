import React from 'react'
import { motion } from 'framer-motion'
import { ShowModalCar } from '../../App'

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
                    animate={{ y: '50px' }} />
                <motion.div className={styles.grid}
                    initial={{ x: '100vw' }}
                    animate={{ x: '0px' }}>
                    {/* <p><span>Marca:</span> {car.marca}</p>
                        <p><span>Model:</span> {car.model}</p>
                        <p><span>Anul:</span> {car.anul}</p>
                        <p><span>Combustibil:</span> {car.combustibil}</p>
                        <p><span>Capacitatea:</span> {car.capacitatea}</p>
                        <p><span>Puterea:</span> {car.puterea}</p>
                        <p><span>Tractiunea:</span> {car.tractiunea}</p>
                        <p><span>Cutia:</span> {car.cutia}</p>
                        <p><span>Pret:</span> {car.pret}</p> */}
                    <div>
                        {
                            Object.keys(car).map((key, index) =>
                                index != 9 ? <p key={key}><span>{key} :</span></p> : '')
                        }
                    </div>
                    <div>
                        {
                            Object.values(car).map((value, index) =>
                                index != 9 ? <p key={value}>
                                    {index == 8 ? `$ ${value}` : value}
                                    {index === 4 ? ' ml' : index == 5 ? ' hp' : ''}
                                </p> : '')
                        }
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Modal