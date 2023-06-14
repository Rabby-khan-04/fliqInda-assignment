import React from "react";
import "./Team.css";
import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import img1 from "../../../assets/Images/Home/Team/img-1.png";
import img2 from "../../../assets/Images/Home/Team/img-2.png";
import img3 from "../../../assets/Images/Home/Team/img-3.png";
import img4 from "../../../assets/Images/Home/Team/img-4.png";
import img5 from "../../../assets/Images/Home/Team/img-5.png";
import TeamCard from "./TeamCard";

const Team = () => {
  const teamInfo = [
    {
      img: img1,
      name: "",
      location: "",
      verified: true,
      rating: "5.0",
    },
    {
      img: img2,
      name: "",
      location: "",
      verified: true,
      rating: "5.0",
    },
    {
      img: img3,
      name: "",
      location: "",
      verified: false,
      rating: "5.0",
    },
    {
      img: img4,
      name: "",
      location: "",
      verified: true,
      rating: "5.0",
    },
    {
      img: img5,
      name: "",
      location: "",
      verified: false,
      rating: "5.0",
    },
  ];

  return (
    <section className="team pt-10 pb-9 bg-[#ddf8f3]">
      <div className="container">
        <div className="intro flex items-center justify-between mb-10">
          <SectionTitle
            title="Find Trusted Associate"
            sub="Find the best fliqa Associate for you special day."
          />
          <Link to="/" className="text-2xl text-accent">
            See More {">>"}
          </Link>
        </div>

        <div className="grid grid-cols-5 gap-7">
          {teamInfo.map((member, index) => (
            <TeamCard member={member} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
