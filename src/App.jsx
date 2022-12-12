import React from 'react'

import './App.css'

import Header from './components/header/header'

import Nav from './components/nav/nav'

import Home from './components/home/home'

import About from './components/about/about'

import Member from './components/member/member'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
    return (
        <>
            <div className="bg-circle1"></div>
            <div className="bg-circle2"></div>
            <Header />
            <Nav />
            <Home />
            <About />
            <Member />
            <Contact />
            <Footer />
        </>
    )
}
// const toggle = document.querySelector('.main-img')
// toggle.addEventListener('click', () => {
//   console.log("Clicked on toggle")
//   toggle.classList.toggle('active')
// })

export default App