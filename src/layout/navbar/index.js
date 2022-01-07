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
        <div className="w-6 h-6 ml-5 my-auto flex md:hidden cursor-pointer" id="menu-btn" onClick={setOpenSlide}>
          <img src={Hamburger} alt="Hamburger"/>
        </div>
      </div>

      <div className="items-center h-full md:flex hidden gap-2 divide-x-2 px-2">
        <span className="text-gray-600  cursor-pointer select-lan text-sm" onClick={() => openLang(true)}>English</span>
        <button className="pl-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            className="css-1gkzy2q w-4 text-gray-600 ">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.9677 12.7676C19.84 13.5449 18.4732 13.9999 17 13.9999C13.134 13.9999 10 10.8659 10 6.99994C10 5.52678 10.4551 4.15991 11.2323 3.03223C6.62108 3.42175 3 7.28797 3 11.9999C3 16.9705 7.02944 20.9999 12 20.9999C16.712 20.9999 20.5782 17.3789 20.9677 12.7676Z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
