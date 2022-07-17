import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { handleImageUpload } from '../../utils/compress_images'

import { isAuthenticated } from '../../redux/slices/userAuthSlice'

import styles from './styles.module.scss'

function AddCar() {
    const isAuth = useSelector(isAuthenticated)

    if (!isAuth) {
        return <Navigate to="/" />
    }

    //onChange={(e) => handleImageUpload(e)} 
    return (
        <main className={styles.root}>
            <div className={styles.add_car_form}>
                <h1>Add Car</h1>
            </div>
        </main>
    )
}

export default AddCar