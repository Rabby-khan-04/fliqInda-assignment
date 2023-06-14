import React from "react";

const AboutBox = ({ item }) => {
  const { img, title, sub } = item;
  return (
    <div className="flex items-center gap-6">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="text-left">
        <h2 className="text-2xl font-semibold text-black">{title}</h2>
        <p className="text-black">{sub}</p>
      </div>
    </div>
  );
};

export default AboutBox;
