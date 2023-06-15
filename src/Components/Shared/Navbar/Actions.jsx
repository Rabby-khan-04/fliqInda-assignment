import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Actions = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="hidden lg:flex items-center gap-8">
        <Link to="/" className="my-btn">
          Sign Up
        </Link>
        <Link to="/" className="my-btn__alt">
          Sign In
        </Link>
      </div>

      <div className="relative inline-block lg:hidden text-left">
        <div
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`inline-flex items-center justify-center w-full px-2 py-1 gap-2 rounded-full cursor-pointer`}
          id="menu-button"
          aria-expanded={isOpen ? "true" : "false"}
          aria-haspopup="true"
        >
          <HiOutlineMenuAlt1 className="text-white text-3xl" />
        </div>

        <Transition
          show={isOpen}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="dropdown__container"
        >
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <ul className="dropdown__menu p-4">
                <li>
                  <Link
                    className="hover:text-primary transition-all duration-300 inline-block py-2"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary transition-all duration-300 inline-block py-2"
                    to="/"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary transition-all duration-300 inline-block py-2"
                    to="/"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary transition-all duration-300 inline-block py-2"
                    to="/"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary transition-all duration-300 inline-block py-2"
                    to="/"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default Actions;
