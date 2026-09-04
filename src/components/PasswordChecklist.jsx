import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const PasswordChecklist = ({ password }) => {
  const requirements = [
    { label: "Minimum 8 characters", test: (p) => p.length >= 8 },
    { label: "At least one uppercase letter (A-Z)", test: (p) => /[A-Z]/.test(p) },
    { label: "At least one lowercase letter (a-z)", test: (p) => /[a-z]/.test(p) },
    { label: "At least one digit (0-9)", test: (p) => /[0-9]/.test(p) },
    { label: "At least one special character", test: (p) => /[^A-Za-z0-9]/.test(p) },
  ];

  return (
    <div className="bg-[#f8f6fb] p-2 md:p-4 md:rounded-[12px] mb-4 text-[0.85rem]">
      <p className="mb-1 md:mb-3 font-semibold text-[#333]">Password must contain:</p>
      <ul className="flex flex-col gap-0 md:gap-2 m-0 p-0 list-none">
        {requirements.map((req, idx) => {
          const isMet = req.test(password);
          return (
            <li key={idx} className={`flex text-[12px] md:text-[0.85rem] items-center gap-2 ${isMet ? 'text-[var(--primary-color)]' : 'text-[#666]'}`}>
              {isMet ? (
                <CheckCircle2 size={16} className="text-[#28a745]" />
              ) : (
                <Circle size={16} className="text-[#ccc]" />
              )}
              {req.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PasswordChecklist;
