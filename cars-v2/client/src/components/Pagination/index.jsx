import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from './styles.module.scss'

function Pagination() {
    return (
        <ReactPaginate
            className={styles.root}
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageRangeDisplayed={21}
            pageCount={5}
        />
    )
}

export default Pagination