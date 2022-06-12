import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Table(coin, graph) {
    return (
        <tr>
            <td className='coin_name'>{coin.name}</td>
            <td className='coin_symbol'>{coin.symbol}</td>
            <td className='coin_price'>{coin.price}</td>
            <td className={`coin_price_change_24h ${coin.price_change_24h.includes('-') ? 'coin_price_red' : 'coin_price_green'}`}>{coin.price_change_24h}</td>
            <td className='coin_graph'><img src={coin.graph} /></td>
            <td className='coin_button'><Link to="/">Trade Now <FontAwesomeIcon icon={faArrowRight} /></Link></td>
        </tr>
    )
}

export default Table