import React from 'react'
import './contact.css'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai'

const Contact = () => {
    return (
        <div id='contact' className="container contact-container">
            <h1>Contact Me</h1>

            <div className="contact-links">

                <a href="https://www.linkedin.com/in/rdani2005/" className="contact linkedin">
                    <AiOutlineLinkedin className='icon' />
                    <h2>Linkedin <span>Rdani2005</span></h2>
                </a>

                <a href="https://facebook.com/danny.sequeira.961/" className="contact facebook">
                    <AiOutlineFacebook className='icon' />
                    <h2>Facebook <span>Danny Sequeira</span></h2>
                </a>

                <a href="https://instagram.com/rdani2005/" className="contact instagram">
                    <AiOutlineInstagram className='icon' />
                    <h2>Instagram <span>Rdani2005</span></h2>
                </a>

            </div>
        </div>
    )
}

// Setting the Navbar icons colors
let Icons = document.querySelectorAll('.navigation .icon')
Icons.forEach(icon => {
    icon.addEventListener('click', () => {
        changeActive()
        icon.classList.add('active-nav')
    })
})
// Deleting classes
function changeActive() {
    Icons.forEach(icon => icon.classList.remove('active-nav'))
}

export default Contact