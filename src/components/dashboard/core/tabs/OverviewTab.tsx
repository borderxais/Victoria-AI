import React from 'react';
import { StudentProfile } from './overview/StudentProfile';
import { CurrentCourses } from './overview/CurrentCourses';
import { DreamSchoolsPreview } from './overview/DreamSchoolsPreview';
import type { StudentData } from '../types';

interface OverviewTabProps {
  student: StudentData;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ student }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <StudentProfile student={student} />
      <CurrentCourses courses={student.academicProgress.currentCourses} />
      <DreamSchoolsPreview dreamSchools={student.dreamSchools} />
    </div>
  );
};