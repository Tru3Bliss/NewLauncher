import React from "react";
import Logo from '../../assets/icons/logo.svg';

const Footer = () => {
  return (
    <footer className="px-4 divide-y divide-app-gray-100 text-app-black-100 justify-start flex flex-col w-full text-sm">
      <div className="flex flex-col gap-5 pb-6 pt-10 w-full">
        <img src={Logo} alt="logo" className="max-w-5"/>
        <p>New Launcher is Singapore’s fastest growing property portal. With us, you’ll feel right at home when searching for houses, condominiums, apartments and HDBs for sales & rent in Singapore.</p>
        <p>Check out our handy guide to find the best location for your lifestyle and the unending adventures each neighbourhood in Singapore.</p>
        <p>This will help us quickly identify you and get you the right kind of help on contact@newlauncher.com</p>
      </div>
      <div className="py-6 w-full">
        <p className="sm:text-center">Ⓒ2021 NEWLAUNCHER.com.sg. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
