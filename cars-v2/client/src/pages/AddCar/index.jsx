import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { handleImageUpload } from '../../utils/compress_images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus, faXmark } from '@fortawesome/free-solid-svg-icons'

import { isAuthenticated } from '../../redux/slices/userAuthSlice'

import styles from './styles.module.scss'

function AddCar() {
    const isAuth = useSelector(isAuthenticated)

    const initialState = {
        brand: '',
        model: '',
        year: '',
        fuel_type: '',
        engine_capacity: '',
        engine_power: '',
        traction_type: '',
        gearbox_type: '',
        price: '',
    }

    const [stateOptions, setStateOptions] = React.useState(initialState)

    if (!(window.localStorage.getItem('token') || window.sessionStorage.getItem('token')) && !isAuth) {
        return <Navigate to="/" />
    }

    //onChange={(e) => handleImageUpload(e)} 
    return (
        <main className={styles.root}>
            <div className={styles.add_car_form}>
                <p className={styles.caption}>Add Car</p>
                <form>
                    <div>
                        {Object.keys(stateOptions).slice(0, 5).map(key => {
                            return <ShowInputs
                                value={key}
                                stateOptions={stateOptions}
                                setStateOptions={setStateOptions} />
                        })}
                    </div>
                    <div>
                        {Object.keys(stateOptions).slice(5, 9).map(key => {
                            return <ShowInputs
                                value={key}
                                stateOptions={stateOptions}
                                setStateOptions={setStateOptions} />
                        })}
                        {/*
                            TODO: 
                            Create drag and drop 
                        */}
                        <div className={styles.input_field}>
                            <input id='file_upload' type="file" accept='image/*' onChange={(e) => handleImageUpload(e)} />
                            <label htmlFor='file_upload' className={styles.file_upload}>
                                <p>Image URL</p>
                                <FontAwesomeIcon icon={faFileCirclePlus} />
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}
// TODO:
//Move it to components and fix unique key issue
function ShowInputs({ value, stateOptions, setStateOptions }) {
    return (
        <div key={value} className={styles.input_field}>
            <label htmlFor={value}>{value.replace(/_/, ' ')}</label>
            <input
                value={stateOptions[value]}
                type={typeof stateOptions[value]}
                id={value}
                onChange={e => setStateOptions({ ...stateOptions, [value]: e.target.value })}
            />
            {stateOptions[value] &&
                <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => setStateOptions({ ...stateOptions, [value]: '' })}
                    className={styles.delete_icon}
                />
            }
        </div>
    )
}

export default React.memo(AddCar)