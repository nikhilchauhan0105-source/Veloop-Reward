import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Smartphone, ArrowRight, ShieldCheck, Gift, User, Phone } from 'lucide-react';
import { toast } from 'react-hot-toast';
import AuthLayout from '../components/AuthLayout';
import HeroContent from '../components/HeroContent';
import PasswordInput from '../components/PasswordInput';
import PasswordChecklist from '../components/PasswordChecklist';

const Register = () => {
  const [activeTab, setActiveTab] = useState('email');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    referralCode: ''
  });
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!agreed) {
      toast.error('You must agree to the Terms of Service');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    if (formData.password.length < 8) {
      toast.error('Password too short');
      return;
    }
    
    toast.success('Account created successfully!');
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  const handleGoogleSignUp = () => {
    toast.success('Redirecting to Google...');
  };

  const tabBaseClass = "flex-1 text-center py-[15px] px-[5px] bg-transparent border-none text-[#667085] font-semibold text-[0.85rem] cursor-pointer transition-all duration-200 flex flex-col items-center gap-2 relative hover:text-[var(--primary-color)] [&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:top-[25%] [&:not(:last-child)]:after:h-[50%] [&:not(:last-child)]:after:w-[1px] [&:not(:last-child)]:after:bg-[#eaeaea]";
  const tabActiveClass = "text-[var(--primary-color)] before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[50px] before:h-[3px] before:bg-[var(--primary-color)] before:rounded-t-[3px]";

  const inputGroupClass = "relative mb-3 lg: flex items-center";
  const inputIconClass = "absolute left-[15px] text-[#888] z-10";
  const inputClass = "w-full mt-[10px] pl-[45px] py-2 pr-[45px]  rounded-[12px] bg-[#f8f9fa] border-2 border-[#e9ecef] transition-all duration-300 outline-none focus:bg-white focus:border-[var(--primary-light)] focus:shadow-[0_0_0_0.25rem_rgba(156,39,176,0.1)]";
  const submitBtnClass = "w-full py-2 rounded-[20px] bg-[var(--primary-color)] text-white font-semibold text-[1rem] mt-[10px] mb-[20px] flex items-center justify-center gap-2 transition-transform duration-200 active:scale-[0.98] group";

  return (
    <AuthLayout heroContent={<HeroContent title="Create Your Account" description={"Join Veloop Reward and start earning exited rewards"} />}>
      <div className="w-full max-w-[600px] mx-auto">
        <div className="mb-3 text-center">
          <h2 className="text-[1.8rem] font-bold text-[#333] mb-[5px]">Join VELOOP Rewards</h2>
          <p className="text-[#666] text-[0.95rem]">Start earning exciting rewards today.</p>
        </div>

        <div className="flex border-b border-[#eee] mb-[25px]">
          <button 
            className={`${tabBaseClass} ${activeTab === 'email' ? tabActiveClass : ''}`}
            onClick={() => setActiveTab('email')}
          >
            <Mail size={20} /> Email Register
          </button>
          <button 
            className={`${tabBaseClass} ${activeTab === 'otp' ? tabActiveClass : ''}`}
            onClick={() => setActiveTab('otp')}
          >
            <Smartphone size={20} /> OTP Register
          </button>
        </div>

        {activeTab === 'email' && (
          <form onSubmit={handleRegister}>
            <div className={inputGroupClass}>
              <User className={inputIconClass} size={20} />
              <input 
                type="text" 
                className={inputClass}
                placeholder="Full Name" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={inputGroupClass}>
              <Mail className={inputIconClass} size={20} />
              <input 
                type="email" 
                className={inputClass}
                placeholder="Email Address" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-3 grid grid-cols-1 min-[576px]:grid-cols-2 gap-3 min-[576px]:gap-[15px]">
              <PasswordInput 
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
              />
              <PasswordInput 
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            {formData.password.length > 0 && (
              <PasswordChecklist password={formData.password} />
            )}

            <div className={inputGroupClass}>
              <Gift className={inputIconClass} size={20} />
              <input 
                type="text" 
                className={inputClass}
                placeholder="Referral Code (Optional)" 
                name="referralCode"
                value={formData.referralCode}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center gap-2 mb-4 mt-3 pl-1">
              <input 
                className="cursor-pointer rounded-[4px] w-[18px] h-[18px] mt-0 checked:bg-[var(--primary-color)] checked:border-[var(--primary-color)] m-0" 
                type="checkbox" 
                id="termsCheck" 
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label className="text-muted m-0 text-[0.85rem]" htmlFor="termsCheck">
                I agree to the <a href="#" style={{color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 600}}>Terms of Service</a> and <a href="#" style={{color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 600}}>Privacy Policy</a>
              </label>
            </div>

            <button type="submit" className={submitBtnClass}>
              Create Account <ArrowRight className="group-hover:translate-x-1 transition-all duration-200" size={18} />
            </button>
          </form>
        )}

        {activeTab === 'otp' && (
          <div className="text-center py-5">
            <Phone size={48} className="text-muted mx-auto mb-3" />
            <h5>Phone OTP Registration</h5>
            <p className="text-muted">Enter your phone number to receive a verification code.</p>
            {/* Dummy state for OTP reg */}
            <button className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-[20px] font-semibold mt-3 transition-transform duration-200 active:scale-[0.98]" onClick={() => toast('OTP Feature Coming Soon!')}>
              Send Verification Code
            </button>
          </div>
        )}

        <div className="flex items-center text-center text-[#aaa] my-[15px] text-[0.85rem] before:content-[''] before:flex-1 before:border-b before:border-[#eee] before:mr-[15px] after:content-[''] after:flex-1 after:border-b after:border-[#eee] after:ml-[15px]">OR</div>

        <button type="button" className="w-full py-2 bg-white border border-[#ddd] rounded-[20px] flex items-center justify-center gap-[10px] font-semibold text-[#333] cursor-pointer transition-colors duration-200 hover:bg-[#f8f9fa]" onClick={handleGoogleSignUp}>
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="20" height="20" />
          Google Sign Up
        </button>

        <div className="text-center mt-4">
          <span className="text-muted">Already have an account? </span>
          <Link to="/login" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 600 }}>
            Login
          </Link>
        </div>

        <div className="flex justify-between mt-[20px] pt-[15px] border-t border-dashed border-[#eee]">
          <div className="flex items-center gap-[8px] text-[0.75rem] text-[#555]">
            <ShieldCheck className="text-[var(--primary-color)]" size={18} />
            <div>
              <strong>Secure Sign Up</strong><br/>
            </div>
          </div>
          <div className="flex items-center gap-[8px] text-[0.75rem] text-[#555]">
            <Gift className="text-[var(--primary-color)]" size={18} />
            <div>
              <strong>Earn Rewards</strong><br/>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
