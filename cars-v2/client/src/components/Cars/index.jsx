import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedCar } from '../../redux/slices/showModalCarSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPen } from '@fortawesome/free-solid-svg-icons'

import { motion } from 'framer-motion'

import convertPrice from '../../utils/convertPrice'

import styles from './styles.module.scss'

function Car(car) {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.auth.data)
    const [showInfo, setShowInfo] = React.useState(false)
    const [showEdit, setShowEdit] = React.useState(false)

    const price = (value) => convertPrice(value)

    const handleOnHoverStart = () => {
        setShowInfo(true)
        if (userData && userData._id === car.added_by_id) {
            setShowEdit(true)
        }
    }

    const handleOnHoverEnd = () => {
        setShowInfo(false)
        if (userData && userData._id === car.added_by_id) {
            setShowEdit(false)
        }
    }

    const deleteCar = () => {

    }

    const editCar = () => {

    }

    return (
        <div className={styles.root}>
            <motion.div
                whileHover={{
                    scale: 1.1,
                }}
                onHoverStart={handleOnHoverStart}
                onHoverEnd={handleOnHoverEnd}
            >
                <motion.div key={car.imageUrl}
                    onClick={() => { dispatch(setSelectedCar(car)) }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <div>
                        <motion.img
                            src={car.imageUrl}
                            className={styles.image}
                            animate={{ opacity: 1 }}></motion.img>
                        {showEdit &&
                            <div
                                className={styles.edit_btns}
                                onClick={e => e.stopPropagation()}
                            >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FontAwesomeIcon icon={faXmark} className={styles.delete} onClick={deleteCar} />
                                    <FontAwesomeIcon icon={faPen} className={styles.edit} onClick={editCar} />
                                </motion.div>
                            </div>
                        }
                        {showInfo &&
                            <div className={styles.info}>
                                <motion.div className={styles.info_text}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span>Anul: <span className={styles.year}>{car.year}</span></span>
                                    <span> Pretul: <span className={styles.cash}>$ {price(car.price)}</span></span>
                                </motion.div>
                            </div>
                        }
                    </div>
                    <p>{car.brand} <span className={styles.model}>{car.model}</span></p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default React.memo(Car)