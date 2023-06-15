import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#131514] text-white pt-11 pb-3 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-4 gap-10 pb-16">
          <div className="col-span-2">
            <h2 className="text-[26px] italic">Never miss a thing.</h2>
            <div className="form-control max-w-lg rounded-full overflow-hidden border border-white mt-4 mb-5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full text-xl py-1 px-11 text-[#939393] italic"
                />
                <button className="bg-[#E0E0E0] py-1 px-4 italic font-jost text-xl capitalize text-[#4B4B4B] absolute top-0 right-0 rounded-full">
                  Subscribe
                </button>
              </div>
            </div>
            <h2 className="text-2xl italic">Be in touch</h2>
            <div className="text-2xl flex items-center gap-1">
              <FaFacebook />
              <FaWhatsapp />
              <FaLinkedin />
              <FaYoutube />
              <FaInstagram />
            </div>
          </div>

          <div>
            <h2 className="text-[26px] mb-2">Never miss a thing.</h2>

            <div className="grid grid-cols-2">
              <ul>
                <li>Services</li>
                <li>Blog</li>
                <li>Portfolio</li>
              </ul>
              <ul>
                <li>Tutorial</li>
                <li>Careers</li>
                <li>Film</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-[26px] mb-2">Never miss a thing.</h2>
            <ul>
              <li>Contact us</li>
              <li>Feedback</li>
              <li>FAQ</li>
              <li>Terms and conditions</li>
              <li>Privacy Policy</li>
              <li>Data Deletion Protocol</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-center text-white text-sm font-light max-w-xs mx-auto">
            2019-2021, FliqaIndia Pvt Ltd. -ALL RIGHT RESERVED POWERED BY
            FLIQAINDIA PVT. LTD. VERSION 5.1.5
          </p>
        </div>
      </div>
      <div className="w-96 h-96 rounded-full bg-[#E0E0E0] absolute -top-[60%] -right-28 -z-[1px]"></div>
      <div className="w-40 h-40 rounded-full bg-[#E0E0E0] absolute -bottom-16 -left-12 -z-[1px]"></div>
    </footer>
  );
};

export default Footer;
