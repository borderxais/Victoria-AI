import React from 'react';
import { ResearchPublications } from './achievements/ResearchPublications';
import { AcademicExcellence } from './achievements/AcademicExcellence';
import { CompetitionsAwards } from './achievements/CompetitionsAwards';
import { SocialImpact } from './achievements/SocialImpact';

export const AchievementsTab = () => {
  return (
    <div className="space-y-6">
      <ResearchPublications />
      <AcademicExcellence />
      <CompetitionsAwards />
      <SocialImpact />
    </div>
  );
};