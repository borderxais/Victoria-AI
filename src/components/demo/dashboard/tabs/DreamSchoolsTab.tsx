import React from 'react';
import { SchoolRequirements } from './dreamschools/SchoolRequirements';
import { FitAnalysis } from './dreamschools/FitAnalysis';

export const DreamSchoolsTab = () => {
  return (
    <div className="space-y-6">
      <SchoolRequirements />
      <FitAnalysis />
    </div>
  );
};