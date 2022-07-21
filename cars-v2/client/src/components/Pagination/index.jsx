import React from 'react'
import ReactPagination from 'react-responsive-pagination'
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from '../../redux/slices/sortSlice'

import styles from './styles.module.scss'

function Pagination() {
    const dispatch = useDispatch()
    const page = useSelector(state => state.sort.page)
    return (
        <ReactPagination
            className={`${styles.root} pagination`}
            current={page}
            total={8}
            onPageChange={(currentPage) => { dispatch(setPage(currentPage)); window.scrollTo(0, 0) }}
            previousLabel={'←'}
            nextLabel={'→'}
        />
    )
}

export default React.memo(Pagination)