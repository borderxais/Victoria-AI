import React from 'react';
import { SchoolRequirements } from './dreamschools/SchoolRequirements';
import { FitAnalysis } from './dreamschools/FitAnalysis';
import type { StudentData } from '../types';

interface DreamSchoolsTabProps {
  student: StudentData;
}

export const DreamSchoolsTab: React.FC<DreamSchoolsTabProps> = ({ student }) => {
  return (
    <div className="space-y-6">
      <SchoolRequirements />
      <FitAnalysis dreamSchools={student.dreamSchools} />
    </div>
  );
};