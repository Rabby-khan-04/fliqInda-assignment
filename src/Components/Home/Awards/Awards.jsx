import React from "react";
import "./Awards.css";
import award1 from "../../../assets/Images/Home/Awards/award1.png";
import award2 from "../../../assets/Images/Home/Awards/award2.png";
import logo1 from "../../../assets/Images/Home/Awards/logo1.png";
import logo2 from "../../../assets/Images/Home/Awards/logo2.png";
import logo3 from "../../../assets/Images/Home/Awards/logo3.png";
import logo4 from "../../../assets/Images/Home/Awards/logo4.png";
import logo5 from "../../../assets/Images/Home/Awards/logo5.png";
import logo6 from "../../../assets/Images/Home/Awards/logo6.png";

const Awards = () => {
  const ratings = [
    {
      img: logo1,
      point: "4.9",
    },
    {
      img: logo2,
      point: "4.9",
    },
    {
      img: logo3,
      point: "5.0",
    },
    {
      img: logo4,
      point: "4.9",
    },
    {
      img: logo5,
      point: "4.8",
    },
    {
      img: logo6,
      point: "5.0",
    },
  ];

  return (
    <section className="pt-14">
      <div className="container">
        <div className="p-16 grid  xl:grid-cols-2 gap-14 bg-[#DDF8F3] awards-container rounded-xl">
          <div className="bg-[#4E99A4] py-10 px-9 grid md:grid-cols-2 gap-7 rounded-xl award-img">
            <img
              src={award1}
              className="w-full self-center image-full"
              alt=""
            />
            <img
              src={award2}
              className="w-full self-center image-full"
              alt=""
            />
          </div>
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
            {ratings.map((rating, index) => (
              <div
                key={index}
                className="bg-white rating-box flex justify-between items-center rounded-xl p-4"
              >
                <img src={rating.img} alt="" />
                <p className="text-2xl text-black">{rating.point}/5</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
