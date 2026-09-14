import React from 'react';
import { Target, Users, Award, Briefcase, Gem, ShieldCheck, Gift, Shield } from 'lucide-react';
// import Bgsvg from '../icons/bgsvg';

const HeroContent = ({ title = "Welcome Back!", showStats = true , description }) => {
  return (
    <div className="flex max-md:pl-4 flex-col justify-between relative h-full">
      <div className="md:mt-2 xl:mt-20">
        <h1 className="text-2xl md:text-3xl font-bold mt-2.5 leading-[120%] text-[#160c49]">
          {title}
        </h1>
        <p className="hidden lg:block font-[650]  sm:text-[1.4rem] mb-4 text-[var(--primary-color)]">
          Earn More. Engage More. Get Rewarded.
          <br />
        </p>
        <p className="max-sm:max-w-[180px] mt-1 text-xs sm:text-sm md:text-base font-semibold text-black/70 mt-0 max-w-[380px]">
          {description}
        </p>
      </div>

      {showStats && (
        <div className="hidden sm:flex  gap-3  xl:mb-10 max-w-107.5 mt-[20px]">
          <div className="bg-[rgba(255,255,255,0.132)] py-2 px-1 lg:p-3  lg:py-4 rounded-[12px] text-center flex-1 backdrop-blur-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-[rgba(255,255,255,0.8)]">
            <Users
              className="mb-2 mx-auto"
              size={24}
              color="var(--primary-color)"
            />
            <div className="text-md lg:text-2xl font-semibold lg:mb-2 text-black">2M+</div>
            <div className="text-[0.8rem] text-black font-semibold">
              Happy Users
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,0.132)] p-2 lg:p-3  lg:py-4 rounded-[12px] text-center flex-1 backdrop-blur-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-[rgba(255,255,255,0.8)]">
            <Award
              className="mb-2 mx-auto"
              size={24}
              color="var(--primary-color)"
            />
            <div className="text-md lg:text-2xl font-semibold lgmb-2 text-black">15M+</div>
            <div className="text-[0.8rem] text-black font-semibold">
              Rewards Earned
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,0.132)] p-2 lg:p-3  lg:py-4 rounded-[12px] text-center flex-1 backdrop-blur-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-[rgba(255,255,255,0.8)]">
            <Gem className="mb-2 mx-auto" size={24} color="rgb(76, 0, 255)" />
            <div className="text-md lg:text-2xl font-semibold lg:mb-2 text-black">500+</div>
            <div className="text-[0.8rem] text-black font-semibold">
              Brands & Partners
            </div>
          </div>
        </div>
      )}

      <div className="hidden lg:flex flex-col w-full mt-auto">
        <div className="w-full grid grid-cols-3 xl:gap-3  xl:grid-cols-3 gap-1 py-4 px-1 xl:py-7 xl:px-4 bg-white backdrop-blur-sm rounded-[16px]">
          <div className="flex flex-col xl:flex-row text-center  items-center gap-3">
            <div className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center shadow-sm">
              <ShieldCheck className="text-[var(--primary-color)]" size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-[0.95rem] font-[700] text-[#111] leading-tight">
                Secure & Safe
              </span>
              <span className="text-[0.8rem] text-[#444] font-medium mt-[2px]">
                Your data is protected
              </span>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row text-center items-center gap-3">
            <div className="w-10.5 h-10.5 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Gift className="text-(--primary-color)" size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-[0.95rem] font-bold text-[#111] leading-tight">
                Instant Rewards
              </span>
              <span className="text-[0.8rem] text-[#444] font-medium mt-0.5">
                Earn as you engage
              </span>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row text-center items-center gap-3">
            <div className="w-10.5 h-10.5 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Shield className="text-(--primary-color)" size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-[0.95rem] font-bold text-[#111] leading-tight">
                Trusted Platform
              </span>
              <span className="text-[0.8rem] text-[#444] font-medium mt-0.5">
                Millions of happy users
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
