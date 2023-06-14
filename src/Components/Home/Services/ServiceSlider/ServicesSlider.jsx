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
        slidesPerView={4}
        spaceBetween={60}
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="mySwiper"
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
