import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Section_7() {
    return (
        <section className='text_block section_7'>
            <p>Receive transmissions</p>
            <p>Unsubscribe at any time <Link to='/'>Privacy policy <FontAwesomeIcon icon={faExternalLink} /></Link></p>
            <div className='email_input'>
                <input type='text' placeholder='Email Address' />
                <button><FontAwesomeIcon icon={faArrowRight} /></button>
                <div className='input_bg'></div>
            </div>
        </section>
    )
}

export default Section_7