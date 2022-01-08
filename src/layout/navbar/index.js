import React from "react";
import Logo from '../../assets/icons/logo.svg';
import Hamburger from '../../assets/icons/hamburger.svg';
import { StandardButton } from "../../components/button";

const Navbar = (props) => {
  const { setOpenSlide, openLang } = props
  return (
    <div className="px-4 h-16 flex justify-between w-full items-center border-b-2 border-app-gray-100">
      <a href='/' className="mx-2 flex items-center text-app-yellow h-full fill-current">
        <img src={Logo} alt="logo" />
      </a>
      <div className="flex">
        <StandardButton className="text-sm">Browse</StandardButton>
        <div className="w-6 h-6 ml-5 my-auto flex cursor-pointer" id="menu-btn" onClick={setOpenSlide}>
          <img src={Hamburger} alt="Hamburger"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
