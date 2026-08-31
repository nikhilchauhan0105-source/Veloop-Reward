import React from 'react';
import Logo from '../icons/Logo';

const AuthLayout = ({ children, heroContent }) => {
  return (
    <div className="px-3 justify-center max-w-[1550px] w-full relative   mx-auto rounded-[20px] shadow-[0_15px_35px_rgba(0,0,0,0.08)]   border border-[rgba(255,255,255,0.8)] ">
      <div className="flex lg:px-10 pt-2 lg:pt-4 m-auto justify-between items-center">
        <div className="">
          <Logo />
        </div>
        <div className='px-3 py-2 rounded-2xl bg-white/20 backdrop-blur-sm font-bold flex flex-col items-center justify-center'> <p>English</p></div>
      </div>

      <div className=" flex-col lg:flex-row flex w-full md:p-3  z-10 ">
        <div className=" bg-[url('/images/veloopbg.png')] bg-contain bg-position-[bottom_right_-4.2rem] max-lg:pb-14   bg-no-repeat min-[992px]:flex flex-1 lg:px-10 flex-col justify-between">
          {heroContent}
        </div>
        <div className="flex flex-1 py-5 p-3 rounded-2xl md:p-10 bg-white flex-col lg:max-w-[550px] min-[992px]:rounded-[20px] min-[992px]:m-2.5 min-[992px]:shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          {children}
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-12 pb-6 pt-2 text-[0.85rem] text-[#666] font-medium z-10 relative">
        <div className="mb-3 md:mb-0">
          © 2025 VELOOP Rewards. All rights reserved.
        </div>
        <div className="flex gap-6 md:gap-8">
          <a
            href="#"
            className="hover:text-[var(--primary-color)] transition-colors text-[#666] no-underline"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-[var(--primary-color)] transition-colors text-[#666] no-underline"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-[var(--primary-color)] transition-colors text-[#666] no-underline"
          >
            Help Center
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
