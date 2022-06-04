import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="first_col footer_col">
                    <p className="footer_caption">HackProtect</p>
                    <Link to="/about">About</Link>
                    <Link to="/">What we do</Link>
                    <Link to="/">News</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="second_col footer_col">
                    <p className="footer_caption">Services</p>
                    <Link to="/">Tier 1 Plans</Link>
                    <Link to="/">Tier 2 Plans</Link>
                    <Link to="/">Tier 3 Plans</Link>
                </div>
                <div className="third_col footer_col">
                    <p className="footer_caption">Get in touch</p>
                    <p className="email_footer">Email: HackProtect@gmail.com</p>
                    <p>Phone: 1111 111 1111</p>
                </div>
                <div className="fourth_col footer_col">
                    <p className="footer_caption">Follow us</p>
                    <div>
                        <Link to="/" className="footer_media_links"><FontAwesomeIcon icon={faInstagram} /></Link>
                        <Link to="/" className="footer_media_links"><FontAwesomeIcon icon={faFacebook} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer