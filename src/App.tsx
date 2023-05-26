import { FC } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Qualification from "./components/qualification/Qualification";
import Scroll from "./components/scroll/Scroll";
import Works from "./components/works/Works";

const App: FC = (): JSX.Element => {
    return (
        <>
            <Header></Header>
            <main className="main">
                <Home />
                <About />
                <Skills />
                <Services />
                <Qualification />
                <Works />
                <Contact />
            </main>
            <Footer />
            <Scroll />
        </>
    );
};

export default App;
