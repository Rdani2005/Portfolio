import Jobs from "./Jobs";
import "./works.css";

import { FunctionComponent } from "react";

const Works: FunctionComponent = () => {
    return (
        <section className="work section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Some of my jobs</span>
            <Jobs />
        </section>
    );
};

export default Works;
