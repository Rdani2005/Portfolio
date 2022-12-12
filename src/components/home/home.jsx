import React from 'react'
import img from '../props/me.jpg'
import { BsMouse } from 'react-icons/bs'
import Buttons from '../button/button'
import './home.css'
function Home() {
    return (
        <div id='home' className="container home-container">
            <div className="logo">
                <div className="main-img">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>

                <img src={img} alt="" />
            </div>

            <a href="#footer" className="scroll-down">
                <hr />
                <h5>Scroll Down</h5>
                <BsMouse className='scroll' />
                <hr />
            </a>
            <h2>
                <span>About Me</span><br />
                <p>
                    FullStack web developer, wich loves learning new tecnologies, and believe everything is awesome. I have got great knoledge on new technologies, just like React, Python, DJango, Java, Angular and much more
                </p>
            </h2>

            <Buttons />
        </div>
    )
}



export default Home