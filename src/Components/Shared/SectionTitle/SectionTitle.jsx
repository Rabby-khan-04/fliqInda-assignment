import React from "react";

const SectionTitle = ({ title, sub }) => {
  return (
    <div>
      <h2 className="text-[#4C696D] text-[36px] font-bold">{title}</h2>
      <p className="text-[#0C0C0C] text-xl">{sub}</p>
    </div>
  );
};

export default SectionTitle;
