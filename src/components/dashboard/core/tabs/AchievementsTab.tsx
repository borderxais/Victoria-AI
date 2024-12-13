import React from 'react';
import { ResearchPublications } from './achievements/ResearchPublications';
import { AcademicExcellence } from './achievements/AcademicExcellence';
import { CompetitionsAwards } from './achievements/CompetitionsAwards';
import type { StudentData } from '../types';

interface AchievementsTabProps {
  student: StudentData;
}

export const AchievementsTab: React.FC<AchievementsTabProps> = ({ student }) => {
  return (
    <div className="space-y-6">
      <ResearchPublications />
      <AcademicExcellence courses={student.academicProgress.currentCourses} />
      <CompetitionsAwards achievements={student.extracurricularProgress.majorAchievements[0].achievements} />
    </div>
  );
};