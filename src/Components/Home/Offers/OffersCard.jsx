import React from "react";
import "./OffersCard.css";

const OffersCard = ({ offer }) => {
  const { img, title, discount } = offer;
  return (
    <div className="2xl:px-20 xl:px-12 lg:px-10 px-6">
      <div className="wedding-card overflow-hidden rounded-xl">
        <div className="offer-img relative overflow-hidden rounded-xl">
          <img src={img} className="rounded-xl w-full" alt="" />
          <div className="absolute top-0 left-0 right-0 inset-0 bg-black bg-opacity-40 py-10 flex flex-col justify-between">
            <div className="px-4">
              <h2 className="text-2xl text-center font-josefin text-white max-w-[160px] mx-auto">
                {title}
              </h2>
              <div className="h-px bg-white"></div>
            </div>
            <div>
              <p className="text-xl text-white">Discount</p>
              <img src={discount} className="lg:h-14" alt="" />
            </div>
          </div>
        </div>
        <div>
          <button className="text-black font-josefin font-medium btn-block py-4">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OffersCard;
