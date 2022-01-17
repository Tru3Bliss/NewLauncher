import React from "react";
import Logo from '../../assets/icons/logo.svg';
import Hamburger from '../../assets/icons/hamburger.svg';
import { StandardButton } from "../../components/button";

const Navbar = (props) => {
  const { setOpenSlide, openLang } = props
  return (
    <div className="px-4 h-16 flex justify-between w-full items-center border-b border-app-gray-20 fixed top-0 bg-white z-10">
      <a href='/' className="flex items-center text-app-yellow h-full fill-current">
        <img src={Logo} alt="logo" />
      </a>
      <div className="flex">
        <StandardButton className="text-sm w-16.5 h-6.5">Browse</StandardButton>
        <div className="w-6 h-6 ml-4 my-auto flex cursor-pointer" id="menu-btn" onClick={setOpenSlide}>
          <img src={Hamburger} alt="Hamburger"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
