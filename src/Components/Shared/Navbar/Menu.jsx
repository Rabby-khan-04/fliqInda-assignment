import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuItem = (
    <>
      <li>
        <Link className="hover:text-primary transition-all duration-300" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:text-primary transition-all duration-300" to="/">
          Service
        </Link>
      </li>
      <li>
        <Link className="hover:text-primary transition-all duration-300" to="/">
          Portfolio
        </Link>
      </li>
      <li>
        <Link className="hover:text-primary transition-all duration-300" to="/">
          Community
        </Link>
      </li>
      <li>
        <Link className="hover:text-primary transition-all duration-300" to="/">
          Blog
        </Link>
      </li>
    </>
  );
  return (
    <ul className="flex items-center gap-11 text-white text-xl">{menuItem}</ul>
  );
};

export default Menu;
