import React from 'react';
import { RegistrationProvider } from '@/contexts/RegistrationContext';
import { RegistrationStepper } from './RegistrationStepper';
import { RegistrationForm } from './RegistrationForm';

export const ParentRegistration = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto px-4">
        <RegistrationProvider>
          <RegistrationStepper />
          <RegistrationForm />
        </RegistrationProvider>
      </div>
    </div>
  );
};