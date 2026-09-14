import React from 'react';
import Logo from '../icons/Logo';
import { Globe, ChevronDown, ShieldCheck, Gift, Shield } from 'lucide-react';

const AuthLayout = ({ children, heroContent }) => {
  return (
    <div className=" justify-center max-w-[1550px] w-full relative   mx-auto rounded-[20px] shadow-[0_15px_35px_rgba(0,0,0,0.08)]   border border-[rgba(255,255,255,0.8)]  ">
      <div className="flex px-2 lg:px-10 pt-2 lg:pt-4 m-auto justify-between items-center">
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

      <div className=" flex-col lg:flex-row flex w-full md:p-6  z-10 ">
        <div className="relative lg:mt-20 md:bg-[url('/images/veloopbg.png')] bg-contain bg-bottom-right max-sm:bg-position-[bottom_right_-4.2rem] max-lg:pb-14 max-lg:pt-5   bg-no-repeat min-[992px]:flex flex-1 xl:px-10 flex-col justify-between">
          <div className="  absolute top-0 right-0 md:hidden w-full h-[100%] bg-position-[bottom_right_-2rem] bg-no-repeat bg-[url('/images/veloopbg.png')] bg-contain "></div>
          {heroContent}
        </div>
        <div className="max-md:mx-3">
          <div className=" flex flex-1 py-4 p-3 rounded-2xl md:p-10 bg-white flex-col lg:max-w-137.5 min-[992px]:rounded-[20px] lg:mx-2 xl:mx-2.5 shadow-md ">
            {children}
          </div>
          <div className="flex lg:hidden  w-full mt-4  mx-auto ">
            <div className="w-full grid grid-cols-3 shadow-md   gap-0 py-4 px-2  bg-white backdrop-blur-sm rounded-[12px]">
              <div className="flex flex-col sm:flex-row items-center gap-1">
                <div className=" w-6 h-6 sm:w-8 sm:h-8  rounded-full bg-white shadow-md flex items-center justify-center ">
                  <ShieldCheck className="text-[var(--primary-color)] sm:size-6 size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-base font-[700] text-[#111] leading-tight">
                    Secure & Safe
                  </span>
                  <span className="text-[10px] sm:text-sm text-[#444] font-medium mt-[2px]">
                    Your data is protected
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-1">
                <div className="  sm:w-8 sm:h-8 w-6 h-6  rounded-full bg-white flex items-center justify-center shadow-md">
                  <Gift className="text-[var(--primary-color)] sm:size-6 size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-base font-[700] text-[#111] leading-tight">
                    Instant Rewards
                  </span>
                  <span className="text-[10px] sm:text-sm text-[#444] font-medium mt-[2px]">
                    Earn as you engage
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-1">
                <div className="  sm:w-8 sm:h-8 w-6 h-6  rounded-full bg-white flex items-center justify-center shadow-md">
                  <Shield className="text-[var(--primary-color)] sm:size-6 size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-base font-[700] text-[#111] leading-tight">
                    Trusted Platform
                  </span>
                  <span className="text-[10px] sm:text-sm text-[#444] font-medium mt-[2px]">
                    Millions of happy users
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
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
