import React from "react";
import icon1 from "../../../assets/Images/Home/About/Verified-Reviews.svg";
import icon2 from "../../../assets/Images/Home/About/TopArticles.svg";
import icon3 from "../../../assets/Images/Home/About/Write-Share-Win-Contest.svg";
import icon4 from "../../../assets/Images/Home/About/MouthShut-for-Brands.svg";
import AboutBox from "./AboutBox";

const About = () => {
  const aboutDetails = [
    {
      img: icon1,
      title: "Verified Reviews",
      sub: "For verified reviewers",
    },
    {
      img: icon2,
      title: "Top Articles",
      sub: "Helps you decide",
    },
    {
      img: icon3,
      title: "Write Share Win Contest",
      sub: "Earn cash for reviews",
    },
    {
      img: icon4,
      title: "MouthShut for Brands",
      sub: "Request a Demo",
    },
  ];

  return (
    <section className="pt-6 pb-28">
      <div className="container">
        <div className="intro text-center">
          <h2 className="font-jura text-black text-[64px]">
            India’s Leading Creative Platform
          </h2>
          <p className="text-[32px] font-josefin text-[#4C696D] font-light">
            Experience hassle free bookings. Trusted by 2500+ Customers
          </p>
          <div className="form-control max-w-[991px] mx-auto rounded-full overflow-hidden border border-black mt-11 mb-9">
            <div className="relative">
              <input
                type="text"
                placeholder="Search service, blog and many more…"
                className="input w-full pr-16"
              />
              <button className="btn btn-neutral font-jost text-2xl font-light capitalize text-white px-[104px] absolute top-0 right-0 rounded-full">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10 pb-10">
          {aboutDetails.map((item, index) => (
            <AboutBox item={item} key={index} />
          ))}
        </div>
        <div className="h-px bg-black max-w-[1460px] mx-auto"></div>
      </div>
    </section>
  );
};

export default About;
