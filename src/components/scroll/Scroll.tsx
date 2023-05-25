import { FunctionComponent } from "react";
import "./scroll.css";

const Scroll: FunctionComponent = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = this.document.querySelector(".scrollup");
        if (this.scrollY >= 560) {
            scrollUp?.classList.add("show-scroll");
        } else {
            scrollUp?.classList.remove("show-scroll");
        }
    });
    return (
        <a href="#home" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    );
};

export default Scroll;
