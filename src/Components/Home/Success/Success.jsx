import React from "react";
import "./Success.css";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import logo1 from "../../../assets/Images/Home/Success/logo1.png";
import logo2 from "../../../assets/Images/Home/Success/logo2.png";
import logo3 from "../../../assets/Images/Home/Success/logo3.png";
import logo4 from "../../../assets/Images/Home/Success/logo4.png";
import logo5 from "../../../assets/Images/Home/Success/logo5.png";
import SuccessCard from "./SuccessCard";

const Success = () => {
  const successes = [
    {
      img: logo1,
      description:
        "Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.",
    },
    {
      img: logo2,
      description:
        "Appreciation from Startup Bengal for our creative startup community",
    },
    {
      img: logo3,
      description: "FliqaIndia got featured on Yourstory. Click here",
    },
    {
      img: logo4,
      description:
        "Received awards from ImagesBazaar on leading creative industry",
    },
    {
      img: logo5,
      description: "Top ten in Intuit Circle Codeathon, 2020",
    },
  ];

  return (
    <section className="pt-7">
      <div className="container">
        <div className="bg-[#ACCBC7] pt-6 pb-20 rounded-xl">
          <div className="text-center mb-7">
            <SectionTitle title="Our Success" sub="Journey of our success" />
          </div>
          <div className="grid grid-cols-5 gap-10 max-w-[1250px] mx-auto">
            {successes.map((success, index) => (
              <SuccessCard success={success} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
