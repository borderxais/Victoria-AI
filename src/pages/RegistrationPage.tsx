import React from 'react';
import { RegistrationProvider } from '@/contexts/RegistrationContext';
import { RegistrationForm } from '@/components/registration/RegistrationForm';

export const RegistrationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto px-4">
        <RegistrationProvider>
          <RegistrationForm />
        </RegistrationProvider>
      </div>
    </div>
  );
};