import { FC, useState } from "react";
import "./header.css";

const Header: FC = (): JSX.Element => {
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header");
        if (this.scrollY >= 80) {
            header?.classList.add("scroll-header");
        } else {
            header?.classList.remove("scroll-header");
        }
    });

    const [open, showMenu] = useState<Boolean>(false);
    const [activeNav, setActiveNav] = useState<number>(1);
    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className="nav__logo">
                    Danny Sequeira
                </a>

                <div className={`nav__menu ${open && "show-menu"}`}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a
                                href="#home"
                                className={`nav__link ${
                                    activeNav == 1 && "active_link"
                                }`}
                                onClick={() => setActiveNav(1)}
                            >
                                <i className="uil uil-estate nav__icon"></i>{" "}
                                Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a
                                href="#about"
                                className={`nav__link ${
                                    activeNav == 2 && "active_link"
                                }`}
                                onClick={() => setActiveNav(2)}
                            >
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a
                                href="#skills"
                                className={`nav__link ${
                                    activeNav == 3 && "active_link"
                                }`}
                                onClick={() => setActiveNav(3)}
                            >
                                <i className="uil uil-file-alt nav__icon"></i>{" "}
                                Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a
                                href="#services"
                                className={`nav__link ${
                                    activeNav == 4 && "active_link"
                                }`}
                                onClick={() => setActiveNav(4)}
                            >
                                <i className="uil uil-briefcase-alt nav__icon"></i>{" "}
                                Services
                            </a>
                        </li>

                        <li className="nav__item">
                            <a
                                href="#portfolio"
                                className={`nav__link ${
                                    activeNav == 5 && "active_link"
                                }`}
                                onClick={() => setActiveNav(5)}
                            >
                                <i className="uil uil-scenery nav__icon"></i>{" "}
                                Portfolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a
                                href="#contact"
                                className={`nav__link ${
                                    activeNav == 6 && "active_link"
                                }`}
                                onClick={() => setActiveNav(6)}
                            >
                                <i className="uil uil-message nav__icon"></i>{" "}
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i
                        className="uil uil-times nav__close"
                        onClick={() => showMenu(false)}
                    ></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(true)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
