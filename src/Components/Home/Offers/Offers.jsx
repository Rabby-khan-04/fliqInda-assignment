import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import img1 from "../../../assets/Images/Home/Offers/img1.png";
import img2 from "../../../assets/Images/Home/Offers/img2.png";
import img3 from "../../../assets/Images/Home/Offers/img3.png";
import discount from "../../../assets/Images/Home/Offers/discount.png";
import OffersCard from "./OffersCard";
import "./Offers.css";

const Offers = () => {
  const offers = [
    {
      img: img1,
      title: "Wedding Packages",
      discount: discount,
    },
    {
      img: img2,
      title: "Website Design",
      discount: discount,
    },
    {
      img: img3,
      title: "Beach Photography",
      discount: discount,
    },
    {
      img: img1,
      title: "Wedding Packages",
      discount: discount,
    },
  ];

  return (
    <section className="bg-[#BADCDC] offer-section">
      <div className="container pt-3 pb-[50px] border-b border-[#ADA3A3]">
        <div className="text-center">
          <SectionTitle
            title="Best Offers"
            sub="Discover the best offers  on our services"
          />
        </div>
        <div className="mt-6 grid grid-cols-4 divide-x divide-[#8F8787]">
          {offers.map((offer, index) => (
            <OffersCard offer={offer} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
