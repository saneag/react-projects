import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { handleImageUpload } from '../../utils/compress_images'

import { isAuthenticated } from '../../redux/slices/userAuthSlice'

import styles from './styles.module.scss'

function AddCar() {
    const isAuth = useSelector(isAuthenticated)

    // const inputs = ['brand', 'model', 'year', 'fuel type',
    //     'engine capacity', 'engine power', 'traction type', 'gearbox type',
    //     'price', 'image url']

    if (!isAuth) {
        return <Navigate to="/" />
    }

    //onChange={(e) => handleImageUpload(e)} 
    return (
        <main className={styles.root}>
            <div className={styles.add_car_form}>
                <p className={styles.caption}>Add Car</p>

            </div>
        </main>
    )
}

export default AddCar