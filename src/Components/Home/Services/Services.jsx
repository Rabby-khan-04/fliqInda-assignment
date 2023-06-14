import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ServicesSlider from "./ServiceSlider/ServicesSlider";

const Services = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="intro mb-10">
          <SectionTitle
            title="Our Featured Services"
            sub="Discover the range of services provided by FliqaIndia"
          />
        </div>
        <div>
          <ServicesSlider />
        </div>
      </div>
    </section>
  );
};

export default Services;
