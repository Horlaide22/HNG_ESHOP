import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart_icon.png";
import nav_line from "../../assets/nav_line.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import person_icon from "../../assets/person_icon.png";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const letToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      {/* desktop nav */}
      {/* <nav className="px-9 py-6 bg-[#FF7F50] font-semibold text-lg text-white ">
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <Link to="/">
              <img src={logo} alt="logo " />
            </Link>
          </div>
          <div className="flex gap-36 items-center">
            <div className="flex gap-7">
              <p className="font-bold transition duration-700 border-b-4 border-transparent hover:text-black hover:border-black  cursor-pointer">
                Home
              </p>

              <p className="font-bold transition duration-700 border-b-4 border-transparent hover:text-black hover:border-black  cursor-pointer">
                Shop
              </p>
              <p className="font-bold transition duration-700 border-b-4 border-transparent hover:text-black hover:border-black  cursor-pointer">
                Blog
              </p>
              <p className="font-bold transition duration-700 border-b-4 border-transparent hover:text-black hover:border-black  cursor-pointer">
                Favourite
              </p>
              <p className="font-bold transition duration-700 border-b-4 border-transparent hover:text-black hover:border-black  cursor-pointer">
                Contact
              </p>
            </div>
            <div className="flex items-center">
              <img src={cart} alt="" />
              <p>cart</p>
            </div>
            <div>
              <img src={nav_line} alt="" />
            </div>
            <div>
              <img src={person_icon} alt="" />
            </div>
          </div>
        </div>
      </nav> */}

      {/* mobile nav */}
      <nav className="px-9 py-6 bg-[#FF7F50] font-semibold text-lg text-white ">
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <Link to="/">
              <img src={logo} alt="logo " />
            </Link>
          </div>

          <div className="flex gap-8 ">
            <Link to="/cart" className="flex items-center relative">
              <img src={cart} alt="" />
              <div className=" w-6 h-6 rounded-full bg-white absolute  bottom-6 left-6 text-black text-center">
                1
              </div>
            </Link>
            <div>
              <img src={nav_line} alt="" />
            </div>
          </div>

          <div onClick={letToggle}>
            {toggle ? <FaTimes size={35} /> : <GiHamburgerMenu size={35} />}
          </div>
          <Link
            to="/"
            className="font-bold transition duration-700 border-b-4 border-transparent hover:text-black hover:border-black  cursor-pointer"
          >
            Shop
          </Link>
          <Link
            to="/"
            className="font-bold transition duration-700 border-b-4 border-transparent hover:text-black hover:border-black  cursor-pointer"
          >
            Shop
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
