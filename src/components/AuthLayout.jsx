import React from 'react';
import Logo from '../icons/Logo';
import { Globe, ChevronDown } from 'lucide-react';

const AuthLayout = ({ children, heroContent }) => {
  return (
    <div className=" justify-center max-w-[1550px] w-full relative   mx-auto rounded-[20px] shadow-[0_15px_35px_rgba(0,0,0,0.08)]   border border-[rgba(255,255,255,0.8)]  ">
      <div className="flex px-3 lg:px-10 pt-3 lg:pt-4 m-auto justify-between items-center">
        <div className="">
          <Logo />
        </div>
        <div
          className="hidden md:flex items-center gap-[6px] px-3 py-1.5 rounded-lg
         bg-white text-[#333] font-medium shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-[#f0f0f0] cursor-pointer hover:bg-gray-50 transition-all"
        >
          <Globe size={18} className="text-[#333]" />
          <span className="text-[0.95rem] font-semibold">English</span>
          <ChevronDown size={18} className="text-[#333]" />
        </div>
      </div>

      <div className=" flex-col lg:flex-row flex w-full md:p-4  z-10 ">
        <div className="relative lg:mt-20 md:bg-[url('/images/veloopbg.png')] bg-contain bg-bottom-right max-sm:bg-position-[bottom_right_-4.2rem] max-lg:pb-14 max-lg:pt-5   bg-no-repeat min-[992px]:flex flex-1 lg:px-10 flex-col justify-between">
          <div className="  absolute top-0 right-0 md:hidden w-full h-[100%] bg-position-[bottom_right_-2rem] bg-no-repeat bg-[url('/images/veloopbg.png')] bg-contain "></div>
          {heroContent}
        </div>
        <div className="max-md:mx-3 flex flex-1 py-4 p-3 rounded-2xl md:p-10 bg-white flex-col lg:max-w-[550px] min-[992px]:rounded-[20px] lg:m-2.5 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] ">
          {children}
        </div>
      </div>
      <div className="w-full max-sm:text-center max-sm:gap-2 flex flex-col md:flex-row justify-between items-center px-4 pb-6 pt-4 sm:pt-2 text-[0.85rem] text-[#666] font-medium z-10 relative">
        <div className=" ">© 2025 VELOOP Rewards. All rights reserved.</div>
        <div className="text-black  no-underline flex text-[0.75rem] md:text-[0.85rem] justify-center gap-6 md:gap-8">
          <a href="#" className="">
            Terms of Service
          </a>
          <a href="#" className="">
            Privacy Policy
          </a>
          <a href="#" className="">
            Help Center
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
