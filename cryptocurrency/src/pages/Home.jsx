import React from 'react'

import Section_1 from '../components/Sections/Section_1'
import Section_2 from '../components/Sections/Section_2'
import Section_3 from '../components/Sections/Section_3'
import Section_4 from '../components/Sections/Section_4'
import Section_5 from '../components/Sections/Section_5'
import Section_6 from '../components/Sections/Section_6'
import Section_7 from '../components/Sections/Section_7'

import bg_img from '../assets/img/bg-img.png'

function Home() {
    return (
        <main>
            <img src={bg_img} className="bg_image" />
            <div className='container'>
                <Section_1 />
                <Section_2 />
                <Section_3 />
                <Section_4 />
                <Section_5 />
                <Section_6 />
                <Section_7 />
            </div>
        </main>
    )
}

export default Home