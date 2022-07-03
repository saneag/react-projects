import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import sanea from '../assets/alex.jpg'
import danu from '../assets/danu.png'
import ion from '../assets/photo_2021-12-19_21-09-30.jpg'

function About() {
    const find_age = (birthday) => {
        let today = new Date()
        let birth = new Date(birthday)
        let age = today.getFullYear() - birth.getFullYear()
        let m = today.getMonth() - birth.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
            age--
        }
        return age
    }

    const facebook = ['https://www.facebook.com/garsteaa/', 'https://www.facebook.com/iontuc', 'https://www.facebook.com/raileanu.daniel19/']
    const instagram = ['https://www.instagram.com/garsteaa/', 'https://www.instagram.com/ioneltuc/', 'https://www.instagram.com/raileanu.d19/']

    const colabs = {

    }

    return (
        <div className='gallery'>
            <People name={'alex'} image={sanea} description={`Eu-s Alex. Am ${find_age('2002/06/27')} ani, traiesc in Moldova. Doresc sa devin un fullstack
                    developer bun in viitor. Asa cum traiesc in Moldova stiu 3 limbi: Romana, Rusa, Engleza. Fac
                    site-uri din 2018.`} links_social={{ facebook: facebook[0], instagram: instagram[0] }} />
            <People name={'ion'} image={ion} description={`Sunt Ionel, am ${find_age('2000/12/26')} ani, imi plac calculatoarele si sunt pasionat de masini. Imi
                    place sa programez si hobby-urile mele sunt: serialele, muzica, jocuri video si jocuri de masa.` } links_social={{ facebook: facebook[1], instagram: instagram[1] }} />
            <People name={'danu'} image={danu} description={`Eu sunt Dănuț, am ${find_age('2001/06/19')} ani, pasionat de calculatoare, în special de jocuri video.
                    Mă hrănesc cu nervii oamenilor iar o zi fără un om enervat, pentru mine e o zi pierdută. Din păcate,
                    imi place să vorbesc mult, ceea ce uneori este un minus o.O` } links_social={{ facebook: facebook[2], instagram: instagram[2] }} />
        </div>
    )
}

function People({ name, image, description, links_social }) {
    return (
        <div id={name}>
            <img src={image} alt={name} />
            <div className='links_social'>
                <Link to={links_social.facebook}><FontAwesomeIcon icon={faFacebook} /></Link>
                <Link to={links_social.instagram}><FontAwesomeIcon icon={faInstagram} /></Link>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default About