import React from 'react';
import { RegistrationProvider } from '@/contexts/RegistrationContext';
import { RegistrationForm } from '@/components/registration/RegistrationForm';
import { HeroImage } from '../components/layout/HeroImage';

export const RegistrationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                Join Victoria AI
              </h1>
              <p className="text-xl text-gray-600">
                Start your journey to elite education today
                <span className="block mt-2">
                  开启您的精英教育之旅
                </span>
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <RegistrationProvider>
                <RegistrationForm />
              </RegistrationProvider>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};