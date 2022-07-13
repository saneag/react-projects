import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Cars, Modal, Pagination, Search, Sort, Skeleton } from '../components/index.js'
import { setCars, setCarsLimit, setShowReadMore, setLoading } from '../redux/slices/carSlice'

import axios from '../utils/axios'

function Home() {
    const dispatch = useDispatch()
    const { sortBy, sortOrder, page } = useSelector(state => state.sort)
    const search = useSelector(state => state.search.search)
    const selectedImg = useSelector(state => state.showModalCar.selectedImg)
    const { cars, carsLimit, showReadMore, loading } = useSelector(state => state.carSlice)

    React.useEffect(() => {
        dispatch(setLoading(true))
        axios.get(`/cars?page=${page}&limit=${carsLimit}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}`)
            .then(res => {
                dispatch(setLoading(false))
                dispatch(setCars(res.data))
                // if (page !== 1) dispatch(setCarsLimit(carsLimit + 12))
                dispatch(setShowReadMore(carsLimit > res.data.length ? false : true))
            })
    }, [page, carsLimit, search, sortBy, sortOrder, dispatch])

    const showMoreCars = () => {
        if (carsLimit <= cars.length) {
            dispatch(setCarsLimit(carsLimit + 12))
        }
    }

    return (
        <main>
            <div className='top_options'>
                <Search />
                <Sort />
            </div>
            <div className="cars_gallery">
                {
                    loading ? [...Array(carsLimit)].map((_, index) => <Skeleton key={index} />) :
                        cars.map(car => <Cars key={car.brand + car.model + car.price} {...car} />)
                }
            </div>
            {
                selectedImg && (
                    <Modal cars={cars} />
                )
            }
            <Pagination />
            <div className='showMore'>
                {
                    showReadMore && page === 1 &&
                    <button className='showMoreBtn' onClick={showMoreCars}>Show more</button>
                }
            </div>
        </main>
    )
}

export default Home