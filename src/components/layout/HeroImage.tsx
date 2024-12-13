import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HeroImage = () => (
  <div className="relative">
    <div className="absolute -right-4 -top-4 w-72 h-72 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
      <img 
        src="/students-celebrating.png" 
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-blue-600/90 rounded-lg backdrop-blur-sm">
            <ArrowRight className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Start Your Journey</h3>
            <p className="text-sm text-gray-200">Personalized strategy for your dream college</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);