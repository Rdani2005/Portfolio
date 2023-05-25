import { FC } from "react";

const Social: FC = (): JSX.Element => {
    return (
        <div className="home__social">
            <a
                href="https://www.instagram.com/rdani2005"
                className="home__social-icon"
                target="_blank"
                rel="noreferrer"
            >
                <i className="uil uil-instagram"></i>
            </a>
            <a
                href="https://github.com/rdani2005"
                className="home__social-icon"
                target="_blank"
                rel="noreferrer"
            >
                <i className="uil uil-github"></i>
            </a>
            <a
                href="https://www.linkedin.com/in/rdani2005/"
                className="home__social-icon"
                target="_blank"
                rel="noreferrer"
            >
                <i className="uil uil-linkedin"></i>
            </a>
        </div>
    );
};

export default Social;
