import React from 'react'

import Section_1 from '../components/Section_1'
import Section_2 from '../components/Section_2'
import Section_3 from '../components/Section_3'
import Section_4 from '../components/Section_4'

import section_1 from '../assets/img/block_1.png'

function Home() {
    return (
        <main>
            <img src={section_1} className="bg_image" />
            <div className='container'>
                <Section_1 />
                <Section_2 />
                <Section_3 />
                <Section_4 />
            </div>
        </main>
    )
}

export default Home