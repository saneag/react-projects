import React from 'react'
import ReactPagination from 'react-responsive-pagination'

import styles from './styles.module.scss'

function Pagination({ page, setPage }) {
    return (
        <ReactPagination
            className={`${styles.root} pagination`}
            current={page}
            total={8}
            onPageChange={(currentPage) => { setPage(currentPage); window.scrollTo(0, 0) }}
            previousLabel={'←'}
            nextLabel={'→'}
        />
    )
}

export default React.memo(Pagination)