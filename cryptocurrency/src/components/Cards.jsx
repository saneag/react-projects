import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Cards({ image, title, text, button }) {
    return (
        <div className='card'>
            <img src={image} width='80px' />
            <p className='cards_title'>{title}</p>
            <p className='cards_text'>{text}</p>
            <Link to="/" className='cards_button'>{button} <FontAwesomeIcon icon={faArrowRight} /> </Link>
        </div>
    )
}

export default Cards