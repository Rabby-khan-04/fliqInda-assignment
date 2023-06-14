import React from "react";
import { Link } from "react-router-dom";

const Actions = () => {
  return (
    <div className="flex items-center gap-8">
      <Link to="/" className="my-btn">
        Sign Up
      </Link>
      <Link to="/" className="my-btn__alt">
        Sign In
      </Link>
    </div>
  );
};

export default Actions;
