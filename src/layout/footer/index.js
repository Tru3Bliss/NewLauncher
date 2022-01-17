import React from "react";
import Logo from '../../assets/icons/logo.svg';
import whiteLogo from '../../assets/icons/logo_white.svg';
import Accordion from "../../components/accordion";
const Footer = () => {
  return (
    <footer className="divide-y bg-white md:bg-app-primary-100 divide-app-gray-100 text-app-black-100 md:text-white justify-start flex flex-col w-full text-sm">
      <div className="flex flex-col md:hidden divide-y divide-app-gray-10">
        <Accordion summary={<div className="h-12.6 items-center flex font-semibold text-base">About</div>} className="bg-app-primary-100" mode="white">
          <div className="flex flex-col gap-4 pb-4">
            <a href='#'>Our Company</a>
            <a href='#'>Meet the Team</a>
            <a href='#'>Careers</a>
            <a href='#'>HQ Address</a>
          </div>
        </Accordion>
        <Accordion summary={<div className="h-12.6 items-center flex font-semibold text-base">Help</div>} className="bg-app-primary-100" mode="white">
          <div className="flex flex-col gap-4 pb-4">
            <a href='#'>Frequently Asked Question</a>
            <a href='#'>Call Center</a>
            <a href='#'>Disclaimer</a>
          </div>
        </Accordion>
        <Accordion summary={<div className="h-12.6 items-center flex font-semibold text-base">Popular</div>} className="bg-app-primary-100" mode="white">
          <div className="flex flex-col gap-4 pb-4">
            <a href='#'>Apartment in OCR</a>
            <a href='#'>Apartment in RCR</a>
            <a href='#'>Apartment in CCR</a>
          </div>
        </Accordion>
        <Accordion summary={<div className="h-12.6 items-center flex font-semibold text-base">Blog</div>} className="bg-app-primary-100" mode="white">
          <div className="flex flex-col gap-4 pb-4">
            <a href='#'>Most Viewed</a>
            <a href='#'>Rent an Proper Apartment</a>
            <a href='#'>Tips & Trick</a>
          </div>
        </Accordion>
        <Accordion summary={<div className="h-12.6 items-center flex font-semibold text-base">Resources</div>} className="bg-app-primary-100" mode="white">
          <div className="flex flex-col gap-4 pb-4">
            <a href='#'>Styleguide</a>
            <a href='#'>Call Center</a>
            <a href='#'>Disclaimer</a>
          </div>
        </Accordion>
        <Accordion summary={<div className="h-12.6 items-center flex font-semibold text-base">Follow Us</div>} className="bg-app-primary-100" mode="white">
          <div className="flex flex-col gap-4 pb-4">
            <a href='#'>Instagram</a>
            <a href='#'>Twitter</a>
            <a href='#'>Youtube</a>
          </div>
        </Accordion>
      </div>
      <div className='w-full px-4 pt-10 pb-6 md:pb-10 sm:p-10 md:p-20 grid grid-cols-1 md:grid-cols-2'>
        <div className='flex justify-between'>
          <div className='w-full md:w-1/2 flex flex-col leading-5'>
            <img src={whiteLogo} alt="logo" className="max-w-5 md:block hidden" />
            <img src={Logo} alt="logo" className="max-w-5 md:hidden" />
            <p className="mt-6">New Launcher is Singapore’s fastest growing property portal. With us, you’ll feel right at home when searching for houses, condominiums, apartments and HDBs for sales & rent in Singapore.</p>
            <p className="mt-5">Check out our handy guide to find the best location for your lifestyle and the unending adventures each neighbourhood in Singapore.</p>
            <p className="mt-5">This will help us quickly identify you and get you the right kind of help on contact@newlauncher.com</p>
            <p className="mt-12">Ⓒ2021 NEWLAUNCHER.com.sg. All Rights Reserved.</p>
          </div>
          <div className='flex-col w-1/3 gap-10 hidden md:flex'>
            <div className='flex flex-col gap-3'>
              <p className='pb-2 font-semibold'>Link</p>
              <a href='#'>Link 1</a>
              <a href='#'>Link 2</a>
              <a href='#'>Link 3</a>
              <a href='#'>Link 4</a>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='pb-2 font-semibold'>Link</p>
              <a href='#'>Link 1</a>
              <a href='#'>Link 2</a>
              <a href='#'>Link 3</a>
            </div>
          </div>
        </div>
        <div className='flex-col gap-10 md:flex hidden'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10'>
            <div className='w-full flex flex-col gap-3'>
              <p className='pb-2 font-semibold'>About</p>
              <a href='#'>Our Company</a>
              <a href='#'>Meet the Team</a>
              <a href='#'>Careers</a>
              <a href='#'>HQ Address</a>
            </div>
            <div className='w-full flex flex-col gap-3'>
              <p className='pb-2 font-semibold'>Help</p>
              <a href='#'>Frequently Asked Question</a>
              <a href='#'>Call Center</a>
              <a href='#'>Disclaimer</a>
            </div>
            <div className='w-full flex flex-col gap-3'>
              <p className='pb-2 font-semibold'>Popular</p>
              <a href='#'>Apartment in OCR</a>
              <a href='#'>Apartment in RCR</a>
              <a href='#'>Apartment in CCR</a>
            </div>
            <div className='w-full flex flex-col gap-3'>
              <p className='pb-2 font-semibold'>Blog</p>
              <a href='#'>Most Viewed</a>
              <a href='#'>Rent an Proper Apartment</a>
              <a href='#'>Tips & Trick</a>
            </div>
            <div className='w-full flex flex-col gap-3'>
              <p className='pb-2 font-semibold'>Resources</p>
              <a href='#'>Styleguide</a>
              <a href='#'>Call Center</a>
              <a href='#'>Disclaimer</a>
            </div>
            <div className='w-full flex flex-col gap-3'>
              <p className='pb-2 font-semibold'>Follow Us</p>
              <a href='#'>Instagram</a>
              <a href='#'>Twitter</a>
              <a href='#'>Youtube</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
