import React from 'react';
import { FamilyEducationDashboard } from '@/components/demo/FamilyEducationDashboard';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const DemoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <FamilyEducationDashboard />
        </div>
      </div>
    </div>
  );
};