import React from "react";
import bannerBg from "../../../assets/Images/Home/Slider.png";

const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url("${bannerBg}")` }}
      className="bg-cover bg-no-repeat bg-center"
    >
      <div className="container h-96 lg:h-[550px]"></div>
    </section>
  );
};

export default Banner;
