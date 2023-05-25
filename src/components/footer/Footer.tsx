import { FC } from "react";
import "./footer.css";

const Footer: FC = (): JSX.Element => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Danny</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">
                            Contact Me!
                        </a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a
                        href="https://instagram.com/rdani2005"
                        className="footer__social-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a
                        href="https://twitter.com/rdani2005/"
                        className="footer__social-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rdani2005/"
                        className="footer__social-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    © Danny Sequeira. All rights reserved
                </span>
            </div>
        </footer>
    );
};

export default Footer;
