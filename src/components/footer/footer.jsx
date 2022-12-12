import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { BsMouse, BsInstagram } from 'react-icons/bs'
import { TiSocialDribbble, TiSocialLinkedin, TiSocialGithub } from 'react-icons/ti'

const Footer = () => {
    return (
        <div id="footer" className="container footer-container">
            <h1>That's All
                <a href="#home">
                    <h2><BsMouse />- scroll up-</h2>
                </a>
            </h1>
            <div className="social-links">

                <a href="https://instagram.com/rdani2005" className='social'>
                    <BsInstagram />
                </a>

                <a href="https://facebook.com/danny.sequeira.961/" className='social'>
                    <FaFacebookF />
                </a>

                <a href="https://dribbble.com/Rdani2005" className='social'>
                    <TiSocialDribbble />
                </a>

                <a href="https://www.linkedin.com/in/rdani2005/" className='social'>
                    <TiSocialLinkedin />
                </a>


                <a href="https://www.github.com/rdani2005/" className='social'>
                    <TiSocialGithub />
                </a>

            </div>
        </div>
    )
}

export default Footer