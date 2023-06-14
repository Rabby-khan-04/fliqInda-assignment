import React from "react";
import siteLogo from "../../../assets/Logo/FliqaIndia-Logo 1.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src={siteLogo} className="w-[196px]" alt="" />
    </Link>
  );
};

export default Logo;
