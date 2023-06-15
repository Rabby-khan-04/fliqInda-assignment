import React from "react";
import Banner from "../../Components/Home/Banner/Banner";
import About from "../../Components/Home/About/About";
import Team from "../../Components/Home/Team/Team";
import Services from "../../Components/Home/Services/Services";
import Idea from "../../Components/Home/Idea/Idea";
import Blogs from "../../Components/Home/Blogs/Blogs";
import Wedding from "../../Components/Home/Wedding/Wedding";

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
    </>
  );
};

export default Home;
