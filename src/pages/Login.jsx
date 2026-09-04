import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Smartphone, ArrowRight, ShieldCheck, Lock, CheckCircle, Award } from 'lucide-react';
import { toast } from 'react-hot-toast';
import AuthLayout from '../components/AuthLayout';
import HeroContent from '../components/HeroContent';
import PasswordInput from '../components/PasswordInput';

const Login = () => {
  const [activeTab, setActiveTab] = useState('email'); // email, otp, google
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please enter email and password');
      return;
    }
    if (email === 'invalid@test.com') {
      toast.error('Invalid Email or Password');
      return;
    }
    toast.success('Login Successful!');
    // Dummy redirect or state update
  };

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    toast.success('OTP sent to your email!');
    setOtpSent(true);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (otp !== '123456') {
      toast.error('Incorrect OTP. Try 123456');
      return;
    }
    toast.success('Login Successful!');
  };

  const handleGoogleLogin = () => {
    toast.success('Redirecting to Google Sign-In...');
  };

  const tabBaseClass = "flex-1 text-center py-[15px] px-[5px] bg-transparent border-none text-[#667085] font-semibold text-[0.85rem] cursor-pointer transition-all duration-200 flex flex-col items-center gap-2 relative hover:text-[var(--primary-color)] [&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:top-[25%] [&:not(:last-child)]:after:h-[50%] [&:not(:last-child)]:after:w-[1px] [&:not(:last-child)]:after:bg-[#eaeaea]";
  const tabActiveClass = "text-[var(--primary-color)] before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[50px] before:h-[3px] before:bg-[var(--primary-color)] before:rounded-t-[3px]";

  const inputClass = "w-full pl-[45px] py-2 pr-[45px]  rounded-[12px] bg-[#f8f9fa] border-2 border-[#e9ecef] transition-all duration-300 outline-none focus:bg-white focus:border-[var(--primary-light)] focus:shadow-[0_0_0_0.25rem_rgba(156,39,176,0.1)]";

  return (
    <AuthLayout heroContent={<HeroContent title="Welcome Back!"  description="Sign in to continue earning rewards and unlock more"/>}>
      <div className="w-full mx-auto">
        <div className="">
          <h2 className="text-[1.4rem] font-bold text-[#111111] mb-[5px] text-center">Login to Your Account</h2>
          <p className="text-[0.95rem] text-black text-center mt-[10px]">Sign in to continue earning rewards and unlock more.</p>
        </div>

        {activeTab === 'email' && (
          <form className='space-y-[20px]' onSubmit={handleEmailLogin}>
            <div className="mb-2">
              <label className="block font-medium text-[#111] ">Email Address</label>
              <div className="relative mt-2 flex items-center">
                <Mail className="absolute left-[15px] text-[#888] z-10" size={20} />
                <input 
                  type="email" 
                  className={inputClass}
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="">
              <label className="block font-medium text-[#111] mb-2">Password</label>
              <PasswordInput 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 m-0 p-0 pl-1">
                <input className="cursor-pointer rounded-[4px] w-[18px] h-[18px] mt-0 checked:bg-[var(--primary-color)] checked:border-[var(--primary-color)] m-0" type="checkbox" id="rememberMe" />
                <label className="text-muted m-0 text-[0.85rem]" htmlFor="rememberMe">
                  Remember Me
                </label>
              </div>
              <Link to="/forgot-password" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem' }}>
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="w-full py-2 rounded-[10px]! bg-[var(--primary-color)] text-white font-semibold text-[1rem] mt-[10px] mb-[20px] flex items-center justify-center gap-2 transition-transform duration-200 active:scale-[0.98] group">
              Login<ArrowRight className="group-hover:translate-x-1 transition-all duration-200" size={18} />
            </button>
          </form>
        )}


        
          <div className="text-center  py-1 ">
            <Link to="" className="w-full py-2 text-sm sm:text-base flex items-center justify-center gap-[10px] font-semibold text-[#333] cursor-pointer transition-colors duration-200 hover:bg-[#f8f9fa]" onClick={handleGoogleLogin}>
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="20" height="20" />
              Continue with Google
            </Link>
          </div>
      

        <div className="text-xs sm:text-base text-center  pt-2">
          <span className="text-muted">Don't have an account? </span>
          <Link to="/register" className="text-[var(--primary-color)] text-decoration-none font-semibold">
            Create Account
          </Link>
        </div>

        <div className="hidden lg:flex mt-[45px] relative border border-[#eaeaea] rounded-[12px] py-[16px] px-[20px] flex justify-between items-center">
          <div className="flex items-center gap-[12px]">
            <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center border-[1.5px] bg-[#f2fcf5] border-[#d1f4db] text-[#12b76a]">
              <ShieldCheck size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-[0.8rem] font-bold text-[#111] mb-[2px]">256-bit SSL Encrypted</span>
              <span className="text-[0.75rem] text-[#666]">Your security is our priority</span>
            </div>
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-[#f4f0ff] rounded-full flex items-center justify-center">
            <div className="w-[42px] h-[42px] bg-gradient-to-br from-[#a855f7] to-[#7e22ce] [clip-path:polygon(50%_0%,_100%_15%,_100%_75%,_50%_100%,_0%_75%,_0%_15%)] flex items-center justify-center text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
              <Lock size={20} />
            </div>
          </div>

          <div className="flex items-center gap-[12px]">
            <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center border-[1.5px] bg-[#fffaf0] border-[#fef0c7] text-[#f79009]">
              <Award size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-[0.8rem] font-bold text-[#111] mb-[2px]">Your data is 100% safe</span>
              <span className="text-[0.75rem] text-[#666]">We never share your data</span>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
