import React from 'react'

import case_img from '../../assets/img/case_img.png'

function Section_6() {
    return (
        <section className='text_block section_6'>
            <div>
                <p>Take your first step into safe, secure crypto investing</p>
                <p>Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean Separated they live in Bookmarks right at the coast.</p>
                <button className='get_started_btn'>Get Started</button>
            </div>
            <div className='case'>
                <img src={case_img} />
                <div className="case_grad_circle"></div>
                <div className="case_grad_rect"></div>
            </div>
        </section>
    )
}

export default Section_6