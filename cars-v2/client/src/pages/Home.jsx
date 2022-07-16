import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Cars, Modal, Pagination, Search, Sort, Skeleton } from '../components/index.js'

import axios from '../utils/axios'

function Home() {
    const dispatch = useDispatch()
    const { sortBy, sortOrder } = useSelector(state => state.sort)
    const search = useSelector(state => state.search.search)
    const selectedCar = useSelector(state => state.showModalCar.selectedCar)

    const [cars, setCars] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [carsLimit, setCarsLimit] = React.useState(12)
    const [showReadMore, setShowReadMore] = React.useState(false)
    const [showLess, setShowLess] = React.useState(false)
    const [page, setPage] = React.useState(1)

    React.useEffect(() => {
        setLoading(true)
        axios.get(`/cars?page=${page}&limit=${carsLimit}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}`)
            .then(res => {
                setLoading(false)
                setCars(res.data)
                setShowReadMore(carsLimit > res.data.length ? false : true)
                setShowLess(carsLimit > 12 ? true : false)
            })
    }, [page, carsLimit, search, sortBy, sortOrder, dispatch])

    React.useEffect(() => {
        setPage(1)
    }, [search])

    const showMoreCars = () => {
        if (carsLimit <= cars.length) {
            setCarsLimit(carsLimit + 12)
        }
    }

    const showLessCars = () => {
        if (carsLimit > 12) {
            setCarsLimit(carsLimit - 12)
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
            {selectedCar && <Modal />}
            <Pagination page={page} setPage={setPage} />
            <div className='show_btns'>
                <div>
                    {
                        showReadMore && page === 1 &&
                        <button className='showMoreBtn' onClick={showMoreCars}>Show more</button>
                    }
                </div>
                <div>
                    {
                        showLess && page === 1 &&
                        <button className='showLessBtn' onClick={showLessCars}>Show Less</button>
                    }
                </div>
            </div>
        </main>
    )
}

export default Home