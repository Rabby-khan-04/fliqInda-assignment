import React from "react";
import "./SuccessCard.css";

const SuccessCard = ({ success }) => {
  const { img, description } = success;
  return (
    <div>
      <div className="bg-white w-52 h-52 rounded-full mx-auto flex justify-center items-center success-img mb-3">
        <img src={img} alt="" />
      </div>
      <p className="text-center text-black text-sm">{description}</p>
    </div>
  );
};

export default SuccessCard;
