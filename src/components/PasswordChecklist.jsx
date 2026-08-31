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
    <div className="bg-light p-3 rounded mb-4" style={{ fontSize: '0.85rem' }}>
      <p className="mb-2 fw-bold text-muted">Password must contain:</p>
      <ul className="list-unstyled mb-0">
        {requirements.map((req, idx) => {
          const isMet = req.test(password);
          return (
            <li key={idx} className={`d-flex align-items-center mb-1 ${isMet ? 'text-success' : 'text-muted'}`}>
              {isMet ? (
                <CheckCircle2 size={14} className="me-2" />
              ) : (
                <Circle size={14} className="me-2" />
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
