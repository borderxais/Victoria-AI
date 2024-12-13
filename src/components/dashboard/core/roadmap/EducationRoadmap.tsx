import React from 'react';
import { ShortTermGoals } from './ShortTermGoals';
import { LongTermMilestones } from './LongTermMilestones';
import { RoadmapData } from './types';

interface EducationRoadmapProps {
  roadmapData: RoadmapData;
}

export const EducationRoadmap: React.FC<EducationRoadmapProps> = ({ roadmapData }) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <ShortTermGoals
        academicGoals={roadmapData.shortTerm.academicGoals}
        extracurricularGoals={roadmapData.shortTerm.extracurricularGoals}
      />
      <LongTermMilestones
        milestones={roadmapData.longTerm.academicMilestones}
      />
    </div>
  );
};