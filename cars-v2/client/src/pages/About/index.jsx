import React from 'react'
import { motion } from 'framer-motion'

import sanea from '../../assets/alex.jpg'
import danu from '../../assets/danu.png'
import ion from '../../assets/photo_2021-12-19_21-09-30.jpg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'

import find_age from '../../help/find_age.js'

import styles from './styles.module.scss'

function About() {
    const colabs = {
        alex: {
            name: 'alex',
            image: sanea,
            description: `Eu-s Alex. Am ${find_age('2002/06/27')} ani, traiesc in Moldova. Doresc sa devin un fullstack
            developer bun in viitor. Asa cum traiesc in Moldova stiu 3 limbi: Romana, Rusa, Engleza. Fac
            site-uri din 2018.`,
            links_social: {
                facebook: 'https://www.facebook.com/garsteaa/',
                instagram: 'https://www.instagram.com/garstea_a/'
            }
        },
        ion: {
            name: 'ion',
            image: ion,
            description: `Sunt Ionel, am ${find_age('2000/12/26')} ani, imi plac calculatoarele si sunt pasionat de masini. Imi
        place sa programez si hobby-urile mele sunt: serialele, muzica, jocuri video si jocuri de masa.`,
            links_social: {
                facebook: 'https://www.facebook.com/iontuc',
                instagram: 'https://www.instagram.com/ioneltuc/'
            }
        },
        danu: {
            name: 'danu',
            image: danu,
            description: `Eu sunt Dănuț, am ${find_age('2001/06/19')} ani, pasionat de calculatoare, în special de jocuri video.
        Mă hrănesc cu nervii oamenilor iar o zi fără un om enervat, pentru mine e o zi pierdută. Din păcate,
        imi place să vorbesc mult, ceea ce uneori este un minus o.O`,
            links_social: {
                facebook: 'https://www.facebook.com/raileanu.daniel19/',
                instagram: 'https://www.instagram.com/raileanu.d19/'
            }
        }
    }

    return (
        <main>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className={styles.gallery}>
                    <People {...colabs.alex} />
                    <People {...colabs.ion} />
                    <People {...colabs.danu} />
                </div>
            </motion.div>
        </main>
    )
}

function People({ name, image, description, links_social }) {
    return (
        <div id={name}>
            <img src={image} alt={name} />
            <div className={styles.links_social}>
                <a href={links_social.facebook}><img src={facebook} alt="facebook" /></a>
                <a href={links_social.instagram}><img src={instagram} alt="instagram" /></a>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default About