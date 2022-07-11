import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setShowModal, setSelectedImg } from '../../redux/slices/showModalCarSlice'

import { motion } from 'framer-motion'

import styles from './styles.module.scss'

function Modal({ cars }) {
    const dispatch = useDispatch()
    const selectedImg = useSelector(state => state.showModalCar.selectedImg)
    const showModal = useSelector(state => state.showModalCar.showModal)

    const handleClick = () => {
        dispatch(setShowModal(!showModal))
        if (selectedImg) {
            dispatch(setSelectedImg(null))
        }
    }
    const car = cars.find(car => car.link === selectedImg)

    let price = String(car.pret).length > 3 ? String(car.pret).slice(0, -3) + '.' + String(car.pret).slice(-3) : car.pret
    price = price.length > 7 ? price.slice(0, -7) + '.' + price.slice(-7) : price


    const [deviceType, setDeviceType] = React.useState("");

    React.useEffect(() => {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
                navigator.userAgent
            )
        ) {
            setDeviceType("Mobile");
        } else {
            setDeviceType("Desktop");
        }
    }, []);

    const closeModal = e => {
        if (deviceType != 'Mobile') {
            e.stopPropagation()
        }
    }

    return (
        <motion.div className={styles.backdrop} onClick={handleClick}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1 }}>
            <motion.div className={styles.modal_content}
                onClick={closeModal}
            >
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
                                    {index === 8 ? `$ ${price}` : value}
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