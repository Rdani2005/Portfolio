import './member.css'

import React from 'react'

const Member = () => {
    return (
        <div id='members' className="container members-container">
            <h1 className="member-txt">
                Members
            </h1>
            <div className="member member-1">
                <div className="member-img"></div>
                <div className="member-info">
                    <h1 className="name">Danny</h1>
                    <h3 className="position">FullStack Web Developer</h3>
                    <h4 className="about">
                        FullStack web developer, wich loves learning new tecnologies, and believe everything is awesome. I have got great knoledge on new technologies, just like React, Python, DJango, Java, Angular and much more
                    </h4>
                    <a href="#contact" className="contact-member">
                        <span>contact</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Member