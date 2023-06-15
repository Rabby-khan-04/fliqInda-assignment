import React from "react";
import courseBg from "../../../assets/Images/Home/Course/course-bg.png";
import courseImg from "../../../assets/Images/Home/Course/courseImg.png";
import "./Course.css";

const Course = () => {
  return (
    <section className="py-7">
      <div className="container">
        <div
          className=" pt-28 pb-24 pr-40 rounded-xl course-container"
          style={{
            background: `url("${courseBg}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-[1120px] ml-auto grid grid-cols-2 gap-10">
            <div>
              <h3 className="text-[40px] font-[400] text-white mb-10">
                ULTIMATE
                <br />
                COURSE IN
              </h3>
              <h2 className="font-babas text-white font-[400] text-9xl">
                PHOTOGRAPHY
              </h2>
            </div>
            <div>
              <img src={courseImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
