import React, { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';

const PasswordInput = ({ value, onChange, placeholder = "Enter your password", name = "password" }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative flex items-center">
      <Lock className="absolute left-[15px] text-[#888] z-10" size={20} />
      <input
        type={show ? "text" : "password"}
        className="w-full pl-[45px] py-2 pr-[45px] rounded-[12px] bg-[#f8f9fa] border-2 border-[#e9ecef] transition-all duration-300 outline-none focus:bg-white focus:border-[var(--primary-light)] focus:shadow-[0_0_0_0.25rem_rgba(156,39,176,0.1)]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required
      />
      <button 
        type="button" 
        className="absolute right-[15px] bg-transparent border-none text-[#888] cursor-pointer z-10 flex items-center justify-center p-0 hover:text-[var(--primary-color)]"
        onClick={() => setShow(!show)}
      >
        {show ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
};

export default PasswordInput;
