import React from 'react'

import Cards from './Cards'
import cards from '../assets/cards.json'

import trade_desk from '../assets/img/trade_desk.png'
import coinFlip_ATMs from '../assets/img/coinflip_atms.png'
import CoinFlip_Wallet from '../assets/img/coinflip_wallet.png'

function Section_2() {
    return (
        <section id='cards_block'>
            <div className='cards_container'>
                <Cards image={trade_desk} title={cards.trade_desk.title} text={cards.trade_desk.text} button={cards.trade_desk.button} />
                <Cards image={coinFlip_ATMs} title={cards.coinFlip_ATMs.title} text={cards.coinFlip_ATMs.text} button={cards.coinFlip_ATMs.button} />
                <Cards image={CoinFlip_Wallet} title={cards.CoinFlip_Wallet.title} text={cards.CoinFlip_Wallet.text} button={cards.CoinFlip_Wallet.button} />
            </div>
        </section>
    )
}

export default Section_2