import { FunctionComponent } from "react";
import "./testimonials.css";
import { TestimonialData } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Testimonials: FunctionComponent = () => {
    return (
        <section className="testimonial container section">
            <h2 className="section__title">My Clients Say</h2>
            <span className="section__subtitle">Testimonial</span>

            <Swiper
                loop={true}
                spaceBetween={24}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
                className="testimonial__container"
            >
                {TestimonialData.map((testimonial, i) => (
                    <SwiperSlide className="testimonial__card" key={i}>
                        <img
                            className="testimonial__img"
                            src={testimonial.image}
                            alt=""
                        />
                        <h3 className="testimonial__name">
                            {testimonial.name}
                        </h3>
                        <p className="testimonial__description">
                            {testimonial.description}
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
