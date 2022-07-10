import React from 'react'
import { useSelector } from 'react-redux'

import Cars from '../components/Cars'
import Search from '../components/Search'
import Sort from '../components/Sort'
import Modal from '../components/Modal'
import Pagination from '../components/Pagination'
import Skeleton from '../components/Skeleton'

function Home() {
    console.log('updated')
    const sortBy = useSelector(state => state.sort.sortBy)
    const sortOrder = useSelector(state => state.sort.sortOrder)
    const search = useSelector(state => state.search.search)
    const selectedImg = useSelector(state => state.showModalCar.selectedImg)

    const [cars, setCars] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [page, setPage] = React.useState(1)
    const [carsLimit, setCarsLimit] = React.useState(12)
    const [showReadMore, setShowReadMore] = React.useState(true)

    React.useEffect(() => {
        setLoading(true)
        fetch(`https://62a36f1d21232ff9b21fe3d5.mockapi.io/cars?sortBy=${sortBy}&order=${sortOrder ? 'desc' : 'asc'}&&page=${page}&limit=${carsLimit}&search=${search}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setCars(data)
                if (page !== 1) {
                    setCarsLimit(12)
                }
                setShowReadMore(carsLimit > data.length ? false : true)
            })
    }, [page, carsLimit, search, sortBy, sortOrder])

    const showMoreCars = () => {
        if (carsLimit <= cars.length) {
            setCarsLimit(carsLimit + 12)
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
                        cars.map(car => <Cars key={car.marca + car.model + car.pret} {...car} />)
                }
            </div>
            {
                selectedImg && (
                    <Modal cars={cars} />
                )
            }
            <Pagination onChangePage={number => setPage(number)} />
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