import React from 'react'
import { ShowModalCar } from '../App'

import Cars from '../components/Cars'
import Modal from '../components/Modal'
import Pagination from '../components/Pagination'
import Skeleton from '../components/Skeleton'

function Home() {

    const [cars, setCars] = React.useState([])
    const { selectedImg, setSelectedImg } = React.useContext(ShowModalCar)
    const [showModal, setShowModal] = React.useState(false)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        fetch('https://62a36f1d21232ff9b21fe3d5.mockapi.io/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data)
                setLoading(false)
            })
    }, [])

    return (
        <main>
            <div className="cars_gallery">
                {
                    loading ? [...Array(21)].map((_, index) => <Skeleton key={index} />) :
                        cars.map(car => <Cars key={car.marca + car.model + car.pret} {...car} />)
                }
            </div>
            {
                selectedImg && (
                    <Modal cars={cars} showModal={showModal} setShowModal={setShowModal} />
                )
            }
            <Pagination />
        </main>
    )
}

export default Home