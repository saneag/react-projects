import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setShowModal, setSelectedImg } from '../../redux/slices/showModalCarSlice'

import { motion } from 'framer-motion'

import convertPrice from '../../utils/convertPrice'

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
    const car = React.useMemo(() => cars.find(car => car.imageUrl === selectedImg), [cars, selectedImg])

    const price = (value) => convertPrice(value)

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
        if (deviceType !== 'Mobile') {
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
                                index !== 0 && index !== 10 && index !== 11 ? <p key={key}><span>{key.replace(/_/, ' ')} :</span></p> : '')
                        }
                    </div>
                    <div>
                        {
                            Object.values(car).map((value, index) =>
                                index !== 0 && index !== 10 && index !== 11 ? <p key={value}>
                                    {index === 9 ? `$ ${price(car.price)}` : value}
                                    {index === 5 ? ' ml' : index === 6 ? ' hp' : ''}
                                </p> : '')
                        }
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default React.memo(Modal)