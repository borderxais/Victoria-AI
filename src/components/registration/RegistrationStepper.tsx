import React from 'react';
import { Check } from 'lucide-react';
import { useRegistration } from '@/contexts/RegistrationContext';

const STEPS = ['Account', 'Profile', 'Children'];

export const RegistrationStepper = () => {
  const { step } = useRegistration();

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        {STEPS.map((label, idx) => (
          <div key={idx} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step > idx + 1 ? 'bg-green-500 text-white' :
              step === idx + 1 ? 'bg-blue-500 text-white' :
              'bg-gray-200 text-gray-600'
            }`}>
              {step > idx + 1 ? <Check className="w-5 h-5" /> : idx + 1}
            </div>
          </div>
        ))}
      </div>
      <div className="relative w-full h-2 bg-gray-200 rounded-full">
        <div 
          className="absolute h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        />
      </div>
    </div>
  );
};