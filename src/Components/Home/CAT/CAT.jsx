import React from "react";
import catBg from "../../../assets/Images/Home/CAT/catBg.png";

const CAT = () => {
  return (
    <section
      className="py-32"
      style={{
        background: `url("${catBg}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="flex justify-between">
          <div>
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
          <div>
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
