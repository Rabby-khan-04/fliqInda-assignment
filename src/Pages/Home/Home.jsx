import React from "react";
import Banner from "../../Components/Home/Banner/Banner";
import About from "../../Components/Home/About/About";
import Team from "../../Components/Home/Team/Team";
import Services from "../../Components/Home/Services/Services";
import Idea from "../../Components/Home/Idea/Idea";
import Blogs from "../../Components/Home/Blogs/Blogs";
import Wedding from "../../Components/Home/Wedding/Wedding";
import Offers from "../../Components/Home/Offers/Offers";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Awards from "../../Components/Home/Awards/Awards";
import Success from "../../Components/Home/Success/Success";
import Course from "../../Components/Home/Course/Course";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Team />
      <Services />
      <Idea />
      <Blogs />
      <Wedding />
      <Offers />
      <Testimonials />
      <Awards />
      <Success />
      <Course />
    </>
  );
};

export default Home;
