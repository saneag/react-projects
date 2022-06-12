import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Table from '../components/Table'

import bitcoin_graph from '../assets/img/graphs/bitcoin_graph.png'
import ethereum_graph from '../assets/img/graphs/ethereum_graph.png'
import cardano_graph from '../assets/img/graphs/cardano_graph.png'
import wax_graph from '../assets/img/graphs/wax_graph.png'
import polkadot_graph from '../assets/img/graphs/polkadot_graph.png'

function Section_5() {
    const [coins, setCoins] = React.useState([])

    React.useEffect(() => {
        fetch('https://62a36f1d21232ff9b21fe3d5.mockapi.io/crypto')
            .then(res => res.json())
            .then(coins => {
                setCoins(coins)
            })
    }, [])

    const graphs = [bitcoin_graph, ethereum_graph, cardano_graph, wax_graph, polkadot_graph]

    return (
        <section className="text_block section_5">
            <p className='crypto_caption'>Buy and sell with the lowest fees in the industry</p>
            <p>Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.</p>
            <Link to="/" className='button_link'>Learn More <FontAwesomeIcon icon={faArrowRight} /></Link>
            <table>
                <tbody>
                    {
                        coins.map((coin, index) => <Table key={coin.name} {...coin} graph={graphs[index]} />)
                    }
                </tbody>
            </table>
        </section>
    )
}

export default Section_5