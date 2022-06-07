import React from 'react'

import Cards from '../components/Cards'

import trade_desk from '../assets/img/trade_desk.png'
import coinFlip_ATMs from '../assets/img/coinflip_atms.png'
import CoinFlip_Wallet from '../assets/img/coinflip_wallet.png'

function Home() {
    return (
        <div className='container'>

            <section id='first_section'>
                <p>We make crypto clear and simple</p>
                <p>Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level.</p>
                <button className='get_started_btn'>Get Started</button>
            </section>

            <section id='second_section'>
                <div className='cards_container'>
                    <Cards image={trade_desk} title='Trade Desk' text='Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform' button='Get Started' />
                    <Cards image={coinFlip_ATMs} title='CoinFlip ATMs' text='We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto' button='Find an ATM' />
                    <Cards image={CoinFlip_Wallet} title='CoinFlip Wallet' text='Store your growing investments in our
                non-custodial wallet that gives you access to a full suite of DeFi services in one place' button='Download the App' />
                </div>
            </section>

        </div>
    )
}

export default Home