import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Actions from "./Actions";

const Navbar = () => {
  return (
    <header className="bg-black py-7">
      <div className="container">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-14">
            <Logo />
            <Menu />
          </div>
          <Actions />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
