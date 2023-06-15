import React from "react";
import courseBg from "../../../assets/Images/Home/Course/course-bg.png";
import courseImg from "../../../assets/Images/Home/Course/courseImg.png";
import "./Course.css";

const Course = () => {
  return (
    <section className="py-7">
      <div className="container">
        <div
          className="pt-28 pb-24 lg:pr-40 pl-6 2xl:pl-0 rounded-xl course-container"
          style={{
            background: `url("${courseBg}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-[1120px] ml-auto grid lg:grid-cols-2 gap-10">
            <div className="text-center lg:text-left">
              <h3 className="xl:text-[40px] text-4xl font-[400] text-white 2xl:mb-10 mb-6">
                ULTIMATE
                <br />
                COURSE IN
              </h3>
              <h2 className="font-babas text-white font-[400] 2xl:text-9xl text-7xl">
                PHOTOGRAPHY
              </h2>
            </div>
            <div className="flex lg:justify-normal justify-center">
              <img src={courseImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
