import React from 'react'

function Table(coin) {
    return (
        <>
            <div className='table_cell'>
                <span>{coin.name}</span>
                <span>{coin.symbol}</span>
                <span>{coin.price}</span>
                <span>{coin.price_change_24h}</span>
                <span>{coin.graph}</span>
            </div>
        </>
    )
}

export default Table