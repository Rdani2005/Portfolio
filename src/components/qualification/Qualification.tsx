import { FunctionComponent, useState } from "react";
import "./qualification.css";

const Qualification: FunctionComponent = () => {
    const [activeQualification, setActiveCualification] = useState<number>(1);

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__container  container">
                <div className="qualification__tabs">
                    <div
                        className={`qualification__button button--flex ${
                            activeQualification == 1 && "qualification__active"
                        }`}
                        onClick={() => setActiveCualification(1)}
                    >
                        {" "}
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div
                        className={`qualification__button button--flex ${
                            activeQualification == 2 && "qualification__active"
                        }`}
                        onClick={() => setActiveCualification(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div
                        className={`qualification__content ${
                            activeQualification == 1 &&
                            "qualification__content-active"
                        }`}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Software Developer
                                </h3>
                                <span className="qualification__subtitle">
                                    CTP Calle Blancos - Costa Rica
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021
                                    - Present
                                </div>
                            </div>
                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Web Developer
                                </h3>
                                <span className="qualification__subtitle">
                                    Platzi
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2018
                                    - Present
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Video Games Developer
                                </h3>
                                <span className="qualification__subtitle">
                                    Platzi
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021
                                    - Present
                                </div>
                            </div>
                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`qualification__content ${
                            activeQualification == 2 &&
                            "qualification__content-active"
                        }`}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Freelance Web Developer
                                </h3>
                                <span className="qualification__subtitle">
                                    Freelancer - Costa Rica
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2023
                                    - Present
                                </div>
                            </div>
                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Web Developer
                                </h3>
                                <span className="qualification__subtitle">
                                    Orbitas Software Development - Costa Rica
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2022
                                    - Present
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
