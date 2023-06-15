import React from "react";
import catBg from "../../../assets/Images/Home/CAT/catBg.png";

const CAT = () => {
  return (
    <section
      className="lg:py-32 py-16"
      style={{
        background: `url("${catBg}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white mb-4">
              Grow your freelancing
              <br /> career with Fliqa Associate
            </h2>
            <p className="pl-6 text-xl text-white">
              Register yourself <br />
              Verification & Quality Check
              <br />
              Verified Associate at FliqaIndia
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            <button className="text-2xl text-[#00485E] bg-white px-12 rounded-xl py-1">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CAT;
