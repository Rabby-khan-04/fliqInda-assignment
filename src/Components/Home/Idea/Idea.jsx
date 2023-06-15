import React from "react";
import bannerBg from "../../../assets/Images/Home/Idea/IdeaBg.png";
import "./Idea.css";
import searchIcon from "../../../assets/Images/Home/Idea/searchIcon.png";
import idea1 from "../../../assets/Images/Home/Idea/idea1.png";
import idea2 from "../../../assets/Images/Home/Idea/idea2.png";
import idea3 from "../../../assets/Images/Home/Idea/idea3.png";
import idea4 from "../../../assets/Images/Home/Idea/idea4.png";

const Idea = () => {
  return (
    <>
      <section
        className="bg-cover bg-no-repeat bg-center overflow-hidden"
        style={{ backgroundImage: `url("${bannerBg}")` }}
      >
        <div className="max-w-[2520px] mx-auto xl:pl-14 md:pl-10 sm:pl-2 pl-4">
          <div className="grid xl:grid-cols-3 gap-20">
            <div className="pt-6 lg:pt-10 xl:pt-[70px] pb-6 order-last xl:order-first text-center xl:text-left">
              <h2 className="md:text-[64px] text-5xl font-josefin uppercase leading-none font-light text-white">
                Discover
              </h2>
              <h2 className="md:text-[64px] text-5xl font-babas font-extralight text-white leading-none mb-4">
                Graphic Desing Ideas <br />
                And Services
              </h2>
              <p className="md:text-3xl text-2xl text-white font-josefin uppercase font-light tracking-tighter">
                From Branding to marketing
              </p>
              <div className="form-control search-container max-w-[991px] mx-auto rounded-full overflow-hidden border border-black mt-9">
                <div className="relative flex items-center bg-white pl-4">
                  <label htmlFor="search">
                    <img src={searchIcon} alt="" />
                  </label>
                  <input
                    type="text"
                    id="search"
                    placeholder="what kind of design you are looking for?"
                    className="input w-full"
                  />
                  <button className="btn btn-neutral font-jost text-2xl font-light capitalize text-white px-12 absolute top-0 right-0 rounded-full">
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-16">
              <div className="relative mt-[104px]">
                <img
                  src={idea1}
                  className="border-[10px] border-[#211A13] w-full"
                  alt=""
                />
                <div className="h-6 w-[70px] bg-[#DEE0EA] absolute top-[10px] left-0 right-0 mx-auto"></div>
                <div className="w-px bg-[#DBDDE7] h-40 absolute -top-36 left-0 right-0 mx-auto"></div>
              </div>
              <div className="relative  mt-10">
                <img
                  src={idea2}
                  className="border-[10px] border-[#211A13] w-full"
                  alt=""
                />
                <div className="h-6 w-[70px] bg-[#DEE0EA] absolute top-[10px] left-0 right-0 mx-auto"></div>
                <div className="w-px bg-[#DBDDE7] h-40 absolute -top-36 left-0 right-0 mx-auto"></div>
              </div>
              <div className="relative mt-20 lg:mt-[104px]">
                <img
                  src={idea3}
                  className="border-[10px] border-[#211A13] w-full"
                  alt=""
                />
                <div className="h-6 w-[70px] bg-[#DEE0EA] absolute top-[10px] left-0 right-0 mx-auto"></div>
                <div className="w-px bg-[#DBDDE7] h-40 absolute -top-36 left-0 right-0 mx-auto"></div>
              </div>
              <div className="relative mt-0 lg:mt-20">
                <img
                  src={idea4}
                  className="border-[10px] border-[#211A13] w-full"
                  alt=""
                />
                <div className="h-6 w-[70px] bg-[#DEE0EA] absolute top-[10px] left-0 right-0 mx-auto"></div>
                <div className="w-px bg-[#DBDDE7] h-40 absolute -top-36 left-0 right-0 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-11 pb-16">
        <div className="container">
          <div className=" border-b border-[#ADA3A3]">
            <div className="max-w-[1220px] mx-auto font-bold text-3xl lg:text-left text-center text-[#4C696D] lg:flex items-center justify-between pb-9">
              <p className=" font-jura text-black">Popular:</p>
              <p className=" font-jura">Website Design</p>
              <p className=" font-jura">Logo Design</p>
              <p className=" font-jura">Brochure</p>
              <p className=" font-jura">Label Design</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Idea;
