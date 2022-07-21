import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useNavigate, Navigate, useParams } from 'react-router-dom'
import imageCompression from 'browser-image-compression'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus, faXmark } from '@fortawesome/free-solid-svg-icons'

import axios from '../../utils/axios'

import ShowInputs from '../../components/ShowInputs'

import { isAuthenticated } from '../../redux/slices/userAuthSlice'

import styles from './styles.module.scss'

function AddCar() {
    const { id } = useParams()
    const navigate = useNavigate()
    const isAuth = useSelector(isAuthenticated)

    const [brand, setBrand] = React.useState('')
    const [model, setModel] = React.useState('')
    const [year, setYear] = React.useState('')
    const [fuel_type, setFuelType] = React.useState('')
    const [engine_capacity, setEngineCapacity] = React.useState('')
    const [engine_power, setEnginePower] = React.useState('')
    const [traction_type, setTractionType] = React.useState('')
    const [gearbox_type, setGearboxType] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [imageUrl, setImageUrl] = React.useState('')

    // React.useEffect(() => {
    //     setBrand('Hyundai')
    //     setModel('Sola')
    //     setYear(2014)
    //     setFuelType('Benzina')
    //     setEngineCapacity(1600)
    //     setEnginePower(123)
    //     setTractionType('Fata')
    //     setGearboxType('Automata')
    //     setPrice(9868)
    //     setImageUrl('./uploads/hyundai-solaris-i-sedan-facelift-2014.jpg')
    // }, [])

    const statesNameArray = ['brand', 'model', 'year', 'fuel_type',
        'engine_capacity', 'engine_power', 'traction_type', 'gearbox_type', 'price']

    const leftStatesArray = [brand, model, year, fuel_type, engine_capacity]
    const rightStatesArray = [engine_power, traction_type, gearbox_type, price]

    const leftOptionsArray = [setBrand, setModel, setYear, setFuelType, setEngineCapacity]
    const rightOptionsArray = [setEnginePower, setTractionType, setGearboxType, setPrice]

    const handleChangeFile = async (e) => {
        try {
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true
            }
            const formData = new FormData()
            try {
                const compressedFile = await imageCompression(e.target.files[0], options)
                const file = new File([compressedFile], e.target.files[0].name, { type: e.target.files[0].type })
                formData.append('image', file)
            }
            catch (err) {
                console.log('something went wrong')
            }
            const { data } = await axios.post('/upload', formData)
            setImageUrl(data.url)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = async (e) => {
        try {
            const fields = {
                brand, model, year, fuel_type,
                engine_capacity, engine_power,
                traction_type, gearbox_type,
                price, imageUrl
            }
            const { data } = await axios.post('/cars', fields)
            navigate('/')
        }
        catch (err) {
            console.log(err)
        }
    }

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
                        {leftStatesArray.map((value, index) => {
                            return <ShowInputs
                                key={statesNameArray[index]}
                                value={statesNameArray[index]}
                                states={leftStatesArray[index]}
                                options={leftOptionsArray[index]} />
                        })}
                    </div>
                    <div>
                        {rightStatesArray.map((value, index) => {
                            return <ShowInputs
                                key={statesNameArray[index + 5]}
                                value={statesNameArray[index + 5]}
                                states={rightStatesArray[index]}
                                options={rightOptionsArray[index]} />
                        })}
                        {/*
                            TODO: 
                            Create drag and drop 
                        */}
                        {!imageUrl &&
                            <div className={styles.input_field}>
                                <input
                                    id='file_upload'
                                    type="file"
                                    accept='image/*'
                                    onChange={handleChangeFile} />
                                <label htmlFor='file_upload' className={styles.file_upload}>
                                    <p>Image URL</p>
                                    <FontAwesomeIcon icon={faFileCirclePlus} />
                                </label>
                            </div>
                        }
                        {imageUrl &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className={styles.input_field}>
                                <button
                                    type='button'
                                    onClick={handleSubmit}
                                    className={styles.submit_btn}
                                >Submit</button>
                            </motion.div>
                        }
                    </div>
                </form>
                {
                    imageUrl &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={styles.uploaded_image}
                    >

                        <motion.img
                            src={`http://localhost:5000/${imageUrl}`}
                            alt='car'
                            className={styles.car_image}
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setImageUrl('')}
                        >
                            <FontAwesomeIcon icon={faXmark} className={styles.delete} />
                        </motion.div>
                    </motion.div>
                }
            </div>
        </main>
    )
}

export default React.memo(AddCar)