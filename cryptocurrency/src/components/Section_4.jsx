import React from 'react'

import shield_img from '../assets/img/shield_img.png'

function Section_4() {
    return (
        <section className='text_block section_4'>
            <img src={shield_img} />
            <div>
                <p>24/7 access to full service customer support</p>
                <p>We invest more resources than any other platform in making sure great support from real people is a click away, whenever you need it.</p>
                <button className='get_started_btn'>Get Started</button>
            </div>
        </section>
    )
}

export default Section_4