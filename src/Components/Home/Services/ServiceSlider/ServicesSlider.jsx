import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { servicesInfo } from "../../../../utilities/Services.js";
import ServiceCard from "./ServiceCard.jsx";
import "./ServicesSlider.css";

const ServicesSlider = () => {
  return (
    <div className="slider-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {servicesInfo.map((service, index) => (
          <SwiperSlide key={index}>
            <ServiceCard service={service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSlider;
