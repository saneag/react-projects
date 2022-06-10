import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Table from '../components/Table'


function Section_5() {
    const [coins, setCoins] = React.useState([])

    React.useEffect(() => {
        fetch('https://62a36f1d21232ff9b21fe3d5.mockapi.io/crypto')
            .then(res => res.json())
            .then(coins => {
                setCoins(coins)
            })
    }, [])

    return (
        <section className="text_block">
            <p className='crypto_caption'>Buy and sell with the lowest fees in the industry</p>
            <p>Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.</p>
            <Link to="/" className='button_link'>Learn More <FontAwesomeIcon icon={faArrowRight} /></Link>
            <div className="table">
                {
                    coins.map(coin => <Table key={coin.name} {...coin} />)
                }
            </div>
        </section>
    )
}

export default Section_5