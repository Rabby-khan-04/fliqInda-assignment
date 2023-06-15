import React from "react";

const ReviewCard = ({ review }) => {
  const { img, name, quote } = review;
  return (
    <div className="px-4 pb-14 bg-[#416F75] rounded-2xl text-white">
      <div className="flex justify-end mb-5">
        <img src={img} className="w-32 -mt-6 -mr-10" alt="" />
      </div>
      <div className="text-center">
        <p>{quote}</p>
        <h2 className="font-bold text-xl">~{name}</h2>
      </div>
    </div>
  );
};

export default ReviewCard;
