import React from "react";
import "./TeamCard.css";
import { IoStar } from "react-icons/io5";
import verifyImg from "../../../assets/Images/Home/Team/verified.png";

const TeamCard = ({ member }) => {
  const { img, name, location, verified, rating } = member;
  return (
    <div className="bg-[#2C2C2C] rounded-[30px] overflow-hidden team-card">
      <div>
        <img src={img} className="w-full" alt="" />
      </div>
      <div className="py-3 px-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl text-white">Name Title: </h2>
          <p className="text-white">Location: </p>
        </div>
        <div>
          {verified ? (
            <img src={verifyImg} alt="" />
          ) : (
            <div className="text-white flex items-center font-josefin">
              <p>{rating}</p> <IoStar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
