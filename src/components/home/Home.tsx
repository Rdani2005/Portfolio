import { FC } from "react"
import Social from "./Social"
import "./home.css"
import Data from "./Data"
import ScrollDown from "./ScrollDown"
const Home : FC = () : JSX.Element => {
    return (
        <section id="home" className="home section">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social></Social>
                    <div className="home__img"></div>
                    <Data></Data>
                </div>
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home