import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Service</Link>
      </li>
      <li>
        <Link to="/">Portfolio</Link>
      </li>
      <li>
        <Link to="/">Community</Link>
      </li>
      <li>
        <Link to="/">Blog</Link>
      </li>
    </>
  );
  return <div></div>;
};

export default Menu;
