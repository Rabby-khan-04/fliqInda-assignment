import React from "react";
import bannerBg from "../../../assets/Images/Home/Idea/IdeaBg.png";

const Idea = () => {
  return (
    <section
      className="pt-12 pb-6 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url("${bannerBg}")` }}
    >
      <div className="container"></div>
    </section>
  );
};

export default Idea;
