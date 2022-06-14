import React from 'react'

import Cards from '../Cards'

import trade_desk from '../../assets/img/cards/trade_desk.png'
import coinFlip_ATMs from '../../assets/img/cards/coinflip_atms.png'
import CoinFlip_Wallet from '../../assets/img/cards/coinflip_wallet.png'

function Section_2() {

    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        fetch('https://62a36f1d21232ff9b21fe3d5.mockapi.io/cards')
            .then(res => res.json())
            .then(cards => {
                setCards(cards)
            })
    }, [])

    const images = [trade_desk, coinFlip_ATMs, CoinFlip_Wallet]

    return (
        <section id='cards_block'>
            <div className='cards_container'>
                {
                    cards.map((card, index) => <Cards key={card.title} image={images[index]} {...card} />)
                }
            </div>
        </section>
    )
}

export default Section_2