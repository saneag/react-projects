import React from 'react'
import { Link } from 'react-router-dom'
import Testimonials from '../components/Testimonials'
import MessageForm from '../components/MessageForm'

const Home = () => {
    return (
        <main>
            <div className="container">
                <section id="first_section">
                    <div className="left_first_section">
                        <div>
                            <p className="section_caption">We provide</p>
                            <p>anti-hacking services.</p>
                            <p>HackProtect is an organiaztion of cybersecurity experts who fight against <span className="">cyber attacks.</span></p>
                        </div>
                        <div>
                            <button className="our_work_btn">Our Work</button>
                            <Link to="/about" className="about_us_btn">About Us</Link>
                        </div>
                    </div>
                    <div className="rigth_first_section">
                        <img src="/assets/hacker.png" />
                    </div>
                </section>

                <section id="second_section">
                    <div className="left_second_section">
                        <div>
                            <p className="section_caption">Penetration Testing</p>
                            <p>We try to hack your website in order to discover the weaknesses it contains. Then, we point them out to the organization that hired us. This enables them to address their weaknesses and prevent getting hacked by an intruder.</p>
                            <p>See our full process <Link to="/">here.</Link></p>
                        </div>
                    </div>
                    <div className="rigth_second_section">
                        <img src="/assets/guy_codding.png" />
                    </div>
                </section>

                <section id="third_section">
                    <p className="section_caption">What others say</p>
                    <div className="testimonials">
                        <Testimonials text="“HackProtect saved our company many times. We wouldn’t be where we currently are without them.”" name="Patrick Stanford" />
                        <Testimonials text="“This organization has been helping us discover huge gaps in our security and we are simply fascinated! These people know their stuff.”" name="Christne Bell" />
                        <Testimonials text="“After only a few weeks of collaborating with this company, i was left speechless. Definitely recommended!”" name="Joe Bradley" />
                        <Testimonials text="“HackProtect is a trustworthy cybersecurity organization that always provides for our company. 10/10.”" name="Rick Johnson" />
                    </div>
                </section>

                <section id="fourth_section">
                    <p className="section_caption">Have a proposal for us?</p>
                    <p className="section_caption">Send it here!</p>
                    <div>
                        <MessageForm />
                    </div>
                </section>

            </div>
        </main>
    )
}

export default Home