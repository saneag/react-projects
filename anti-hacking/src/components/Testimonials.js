import React from 'react'

const Testimonials = (props) => {
    return (
        <div className="testimonial_card">
            <p>{props.text}</p>
            <p>{props.name}</p>
        </div>
    )
}

export default Testimonials