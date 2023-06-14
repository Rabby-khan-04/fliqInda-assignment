import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="bg-black py-7">
      <div className="container">
        <nav>
          <Logo />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
