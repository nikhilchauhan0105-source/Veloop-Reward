import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ArrowRight, Check } from 'lucide-react';
import { toast } from 'react-hot-toast';
import AuthLayout from '../components/AuthLayout';
import HeroContent from '../components/HeroContent';
import PasswordInput from '../components/PasswordInput';
import PasswordChecklist from '../components/PasswordChecklist';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [timer, setTimer] = useState(45);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your registered email');
      return;
    }
    toast.success('OTP sent successfully!');
    setStep(2);
    setTimer(45);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto focus next
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length < 6) {
      toast.error('Please enter full OTP');
      return;
    }
    if (otpValue !== '123456') {
      toast.error('Invalid OTP. Use 123456');
      return;
    }
    toast.success('OTP Verified!');
    setStep(3);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    if (password.length < 8) {
      toast.error('Password does not meet requirements');
      return;
    }
    toast.success('Password reset successfully!');
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  const inputClass = "w-full pl-[45px] py-2 pr-[45px]  rounded-[12px] bg-[#f8f9fa] border-2 border-[#e9ecef] transition-all duration-300 outline-none focus:bg-white focus:border-[var(--primary-light)] focus:shadow-[0_0_0_0.25rem_rgba(156,39,176,0.1)]";
  const submitBtnClass = "w-full py-2 rounded-[20px] bg-[var(--primary-color)] text-white font-semibold text-[1rem] mt-[10px] mb-[20px] flex items-center justify-center gap-2 transition-transform duration-200 active:scale-[0.98] group";

  return (
  <AuthLayout heroContent={<HeroContent title="Forgot Password?" showStats={false} description={"No worries Reset your password in few simple steps."} />}>
      <div className="w-full max-w-[450px] mx-auto">
        <div className="mb-[30px] text-center">
          <h2 className="text-[1.8rem] font-bold text-[#333] mb-[10px]">Password Reset</h2>
          <p className="text-[#666] text-[0.95rem]">No worries! Reset your password in a few simple steps.</p>
        </div>

        <div className="flex justify-between mb-[30px] relative before:content-[''] before:absolute before:top-[15px] before:left-[30px] before:right-[30px] before:h-[2px] before:bg-[#eee] before:z-0">
          
          <div className="flex flex-col items-center relative z-10 bg-[var(--card-bg)] px-[10px]">
            <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center font-bold mb-[5px] transition-all duration-300 ${step > 1 ? 'bg-[var(--success-color)] text-white' : step === 1 ? 'bg-[var(--primary-color)] text-white shadow-[0_0_10px_rgba(106,27,154,0.3)]' : 'bg-[#eee] text-[#666]'}`}>
              {step > 1 ? <Check size={16} /> : '1'}
            </div>
            <div className={`text-[0.75rem] font-semibold ${step >= 1 ? 'text-[var(--primary-color)]' : 'text-[#888]'}`}>Enter Email</div>
          </div>

          <div className="flex flex-col items-center relative z-10 bg-[var(--card-bg)] px-[10px]">
            <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center font-bold mb-[5px] transition-all duration-300 ${step > 2 ? 'bg-[var(--success-color)] text-white' : step === 2 ? 'bg-[var(--primary-color)] text-white shadow-[0_0_10px_rgba(106,27,154,0.3)]' : 'bg-[#eee] text-[#666]'}`}>
              {step > 2 ? <Check size={16} /> : '2'}
            </div>
            <div className={`text-[0.75rem] font-semibold ${step >= 2 ? 'text-[var(--primary-color)]' : 'text-[#888]'}`}>Verify OTP</div>
          </div>

          <div className="flex flex-col items-center relative z-10 bg-[var(--card-bg)] px-[10px]">
            <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center font-bold mb-[5px] transition-all duration-300 ${step >= 3 ? 'bg-[var(--primary-color)] text-white shadow-[0_0_10px_rgba(106,27,154,0.3)]' : 'bg-[#eee] text-[#666]'}`}>
              3
            </div>
            <div className={`text-[0.75rem] font-semibold ${step >= 3 ? 'text-[var(--primary-color)]' : 'text-[#888]'}`}>Reset Password</div>
          </div>

        </div>

        {step === 1 && (
          <form onSubmit={handleSendOTP}>
            <p className="text-center text-muted mb-4 text-sm">
              Enter your registered email and we will send you a reset OTP.
            </p>
            <div className="relative mb-5 flex items-center">
              <Mail className="absolute left-[15px] text-[#888] z-10" size={20} />
              <input 
                type="email" 
                className={inputClass}
                placeholder="Enter your registered email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={submitBtnClass}>
              Send Reset OTP <ArrowRight className="group-hover:translate-x-1 transition-all duration-200" size={18} />
            </button>
            <div className="text-center mt-4">
              <Link to="/login" className="text-muted text-decoration-none">
                or <span style={{color: 'var(--primary-color)', fontWeight: 600}}>Back to Login</span>
              </Link>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOTP}>
            <p className="text-center text-muted mb-4 text-sm">
              Enter the 6-digit OTP sent to {email || 'your email'}.
            </p>
            <div className="flex justify-between gap-[10px] mb-[20px]">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  id={`otp-${idx}`}
                  type="text"
                  className="w-[50px] h-[60px] text-center text-[1.5rem] font-bold border border-[#ddd] rounded-[10px] bg-[#f8f9fa] focus:border-[var(--primary-color)] focus:shadow-[0_0_0_0.2rem_rgba(106,27,154,0.25)] focus:outline-none"
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  maxLength={1}
                />
              ))}
            </div>
            <div className="text-center mb-4">
              <span className="text-muted" style={{fontSize: '0.85rem'}}>
                Didn't receive OTP? {timer > 0 ? (
                  <span>Resend in 00:{timer < 10 ? `0${timer}` : timer}</span>
                ) : (
                  <button type="button" className="btn btn-link p-0 text-decoration-none" style={{color: 'var(--primary-color)'}} onClick={() => setTimer(45)}>Resend Now</button>
                )}
              </span>
            </div>
            <button type="submit" className={submitBtnClass}>
              Verify OTP <ArrowRight className="group-hover:translate-x-1 transition-all duration-200" size={18} />
            </button>
          </form>
        )}

        {step === 3 && (
          <form className='space-y-3' onSubmit={handleResetPassword}>
            <p className="text-center text-muted mb-4 text-sm">
              Create a new strong password for your account.
            </p>
            
          
              <PasswordInput
                name="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
              {password.length > 0 && (
                <PasswordChecklist password={password} />
              )}
              <PasswordInput
                name="confirmPassword"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            

            <button type="submit" className={submitBtnClass}>
              Reset Password <ArrowRight className="group-hover:translate-x-1 transition-all duration-200" size={18} />
            </button>
          </form>
        )}
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
