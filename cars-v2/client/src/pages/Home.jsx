import React from 'react'

import Cars from '../components/Cars'
import Search from '../components/Search'
import Sort from '../components/Sort'
import Modal from '../components/Modal'
import Pagination from '../components/Pagination'
import Skeleton from '../components/Skeleton'

export const ShowModalCar = React.createContext(null)
export const SearchContext = React.createContext(null)
export const SortContext = React.createContext(null)

function Home() {
    const [cars, setCars] = React.useState([])
    const [selectedImg, setSelectedImg] = React.useState(null)
    const [showModal, setShowModal] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [page, setPage] = React.useState(1)
    const [carsLimit, setCarsLimit] = React.useState(12)
    const [showReadMore, setShowReadMore] = React.useState(true)
    const [search, setSearch] = React.useState('')
    const [sort, setSort] = React.useState('A-Z')

    React.useEffect(() => {
        setLoading(true)
        fetch(`https://62a36f1d21232ff9b21fe3d5.mockapi.io/cars?page=${page}&limit=${carsLimit}&search=${search}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setCars(data)
                if (page !== 1) {
                    setCarsLimit(12)
                }
                setShowReadMore(carsLimit > data.length ? false : true)
            })
    }, [page, carsLimit, search])

    const showMoreCars = () => {
        if (carsLimit <= cars.length) {
            setCarsLimit(carsLimit + 12)
        }
    }

    return (
        <ShowModalCar.Provider value={{ selectedImg, setSelectedImg }}>
            <main>
                <div className='top_options'>
                    <SearchContext.Provider value={{ search, setSearch }}>
                        <Search />
                    </SearchContext.Provider>
                    <SortContext.Provider value={{ sort, setSort }}>
                        <Sort />
                    </SortContext.Provider>
                </div>
                <div className="cars_gallery">
                    {
                        loading ? [...Array(carsLimit)].map((_, index) => <Skeleton key={index} />) :
                            cars.map(car => <Cars key={car.marca + car.model + car.pret} {...car} />)
                    }
                </div>
                {
                    selectedImg && (
                        <Modal cars={cars} showModal={showModal} setShowModal={setShowModal} />
                    )
                }
                <Pagination onChangePage={number => setPage(number)} />
                <div className='showMore'>
                    {
                        showReadMore && page === 1 && <button className='showMoreBtn' onClick={showMoreCars}>Show more</button>
                    }
                </div>
            </main>
        </ShowModalCar.Provider>
    )
}

export default Home