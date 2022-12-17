import React, { useState } from 'react'

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'

import { TiGroupOutline } from 'react-icons/ti'

import { BiMessageRoundedDots } from 'react-icons/bi'
import { BsArrowDownCircle } from 'react-icons/bs'

import './nav.css'

const Nav = () => {

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

    let [icon, setIcon] = useState(1)

    return (
        <div className="navigation">
            <a href="#home">
                <AiOutlineHome className={`icon  ${icon === 1 ? 'active-nav' : ''}`} onClick={() => {setIcon(1)}}/>
            </a>

            <a href="#about">
                <AiOutlineUser className={`icon  ${icon === 2 ? 'active-nav' : ''}`} onClick={() => {setIcon(2)}} />
            </a>

            <a href="#members">
                <TiGroupOutline className={`icon  ${icon === 3 ? 'active-nav' : ''}`} onClick={() => {setIcon(3)}} />
            </a>

            <a href="#contact">
                <BiMessageRoundedDots className={`icon  ${icon === 4 ? 'active-nav' : ''}`} onClick={() => {setIcon(4)}} />
            </a>

            <a href="#footer">
                <BsArrowDownCircle className={`icon  ${icon === 5 ? 'active-nav' : ''}`} onClick={() => {setIcon(5)}} />
            </a>
        </div>
    )
}




export default Nav