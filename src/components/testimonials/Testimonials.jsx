import React from "react";
import "./testimonials.css";
import { useSelector } from "react-redux";

import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Testimonials = () => {
  const testimonials = useSelector((state) => state.detail?.testimonials || []);
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((testi, i) => (
          <SwiperSlide className="testimonial" key={i}>
            <div className="client__avatar">
              <img
                src={process.env.PUBLIC_URL + "/assets" + testi.image}
                alt="avtr1"
              />
            </div>
            <h5>{testi.name}</h5>
            <small>{testi.desc}</small>
          </SwiperSlide>
        ))}
      </Swiper>

      <a
        href="https://www.linkedin.com/in/eishtamittal-react-developer/details/recommendations"
        className="portfolio__show-more"
        target="_blank"
      >
        See on Linkedin...
      </a>
    </section>
  );
};

export default Testimonials;
