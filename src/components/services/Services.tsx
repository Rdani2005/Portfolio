import { FC, useState } from "react";
import "./services.css";

const Services: FC = (): JSX.Element => {
    let [toggleState, setToggleState] = useState<Number>(0);

    const toggleTab = (index: Number) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-table services__icon"></i>
                        <h3 className="services__title">
                            Web <br /> Designer
                        </h3>
                    </div>
                    <span
                        className="services__button"
                        onClick={() => toggleTab(1)}
                    >
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div
                        className={`services__modal ${
                            toggleState == 1 && "active-modal"
                        }`}
                    >
                        <div className="services__modal-content">
                            <i
                                className="uil uil-times services__modal-close"
                                onClick={() => toggleTab(0)}
                            ></i>
                            <h3 className="services__modal-title">
                                Web <br /> Designer
                            </h3>
                            <p className="services__modal-description">
                                Providing quality designs to clients and
                                companies.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop the UI
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I design the entire web page
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Great UX Experience
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Awesome Designs
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-server-connection services__icon"></i>
                        <h3 className="services__title">
                            Backend <br /> Development
                        </h3>
                    </div>
                    <span
                        className="services__button"
                        onClick={() => toggleTab(2)}
                    >
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div
                        className={`services__modal ${
                            toggleState == 2 && "active-modal"
                        }`}
                    >
                        <div className="services__modal-content">
                            <i
                                className="uil uil-times services__modal-close"
                                onClick={() => toggleTab(0)}
                            ></i>
                            <h3 className="services__modal-title">
                                Backend <br /> Development
                            </h3>
                            <p className="services__modal-description">
                                Providing quality to clients and companies.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I design the way you are going to host
                                        data
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Use the more trending tecnologies on the
                                        market
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Security
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Server Optimization
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-database services__icon"></i>
                        <h3 className="services__title">
                            Database <br /> Design
                        </h3>
                    </div>
                    <span
                        className="services__button"
                        onClick={() => toggleTab(3)}
                    >
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div
                        className={`services__modal ${
                            toggleState == 3 && "active-modal"
                        }`}
                    >
                        <div className="services__modal-content">
                            <i
                                className="uil uil-times services__modal-close"
                                onClick={() => toggleTab(0)}
                            ></i>
                            <h3 className="services__modal-title">
                                Database <br /> Design
                            </h3>
                            <p className="services__modal-description">
                                Providing quality designs to clients and
                                companies.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Host the data
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I design the entire way your going to
                                        host data
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        The best databases on the world.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Security at all.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
