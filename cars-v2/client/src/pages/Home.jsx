import React from 'react'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'
import { useSelector, useDispatch } from 'react-redux'
import { Cars, Modal, Pagination, Search, Sort, Skeleton } from '../components/index.js'
import { setCarsLimit, setPage, setFilter } from '../redux/slices/sortSlice'

import axios from '../utils/axios'

function Home() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isURLSet = React.useRef(false)
    const isMounted = React.useRef(false)
    const { sortBy, sortOrder, page, carsLimit, search } = useSelector(state => state.sort)
    const selectedCar = useSelector(state => state.showModalCar.selectedCar)

    const [cars, setCars] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [showReadMore, setShowReadMore] = React.useState(false)
    const [showLess, setShowLess] = React.useState(false)

    const getCars = () => {
        setLoading(true)
        axios.get(`/cars?page=${page}&limit=${carsLimit}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}`)
            .then(res => {
                setLoading(false)
                setCars(res.data)
                setShowReadMore(carsLimit > res.data.length ? false : true)
                setShowLess(carsLimit > 12 ? true : false)
            })
    }

    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            dispatch(setFilter({
                ...params
            }))
            isURLSet.current = true
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                page, carsLimit, sortBy, sortOrder
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, carsLimit, sortBy, sortOrder])

    React.useEffect(() => {
        if (!isURLSet.current) {
            getCars()
        }
        isURLSet.current = false
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, carsLimit, search, sortBy, sortOrder, dispatch])

    React.useEffect(() => {
        dispatch(setPage(1))
        dispatch(setCarsLimit(12))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    const showMoreCars = () => {
        if (carsLimit <= cars.length) {
            dispatch(setCarsLimit(carsLimit + 12))
        }
    }

    const showLessCars = () => {
        if (carsLimit > 12) {
            dispatch(setCarsLimit(carsLimit - 12))
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
            <Pagination />
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