import React from 'react';
import { ShortTermGoals } from './roadmap/ShortTermGoals';
import { LongTermMilestones } from './roadmap/LongTermMilestones';
import type { StudentData } from '../types';

interface RoadmapTabProps {
  student: StudentData;
}

export const RoadmapTab: React.FC<RoadmapTabProps> = ({ student }) => {
  return (
    <div className="space-y-6">
      <ShortTermGoals 
        academicGoals={student.roadmap.shortTerm.academicGoals}
        extracurricularGoals={student.roadmap.shortTerm.extracurricularGoals}
      />
      <LongTermMilestones 
        milestones={student.roadmap.longTerm.academicMilestones}
      />
    </div>
  );
};