import React from 'react'
import ReactPaginate from 'react-paginate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

function Pagination({ onChangePage }) {
    return (
        <ReactPaginate
            className={`${styles.root} pagination`}
            previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
            nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
            breakLabel={'...'}
            pageRangeDisplayed={12}
            pageCount={8}
            onPageChange={(e) => {onChangePage(e.selected + 1); window.scrollTo(0, 0)}}
        />
    )
}

export default Pagination